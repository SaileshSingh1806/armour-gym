import "server-only";
import { createHash, randomUUID } from "node:crypto";
import { unstable_cache } from "next/cache";
import { mediaSlots, slotIds, type MediaSlot, type SiteImages, fallbackImages } from "./media-slots";

const ROOT = "armour-media";
const LIVE = ROOT + "/live/";
const DRAFT = ROOT + "/drafts/";
const HISTORY = ROOT + "/history/";

export type CloudImage = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  bytes: number;
  created_at: string;
  context?: { custom?: Record<string, string> };
};

type CloudList = {
  resources?: CloudImage[];
  next_cursor?: string;
};

function cloudConfig() {
  const cloud = process.env.CLOUDINARY_CLOUD_NAME;
  const key = process.env.CLOUDINARY_API_KEY;
  const secret = process.env.CLOUDINARY_API_SECRET;
  if (!cloud || !key || !secret) return null;
  if (!/^[a-zA-Z0-9_-]+$/.test(cloud)) throw new Error("Invalid Cloudinary cloud name");
  return { cloud, key, secret };
}

export function isCloudConfigured(): boolean {
  return Boolean(cloudConfig());
}

function endpoint(path: string): string {
  const c = cloudConfig();
  if (!c) throw new Error("Cloudinary credentials missing");
  return "https://api.cloudinary.com/v1_1/" + c.cloud + "/" + path;
}

function cloudAuth(): string {
  const c = cloudConfig();
  if (!c) throw new Error("Cloudinary credentials missing");
  return "Basic " + Buffer.from(c.key + ":" + c.secret).toString("base64");
}

async function adminGet<T>(path: string): Promise<T | null> {
  const res = await fetch(endpoint(path), {
    headers: { Authorization: cloudAuth() },
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Cloudinary Admin API error " + res.status);
  return await res.json() as T;
}

function signedParams(params: Record<string, string>) {
  const c = cloudConfig();
  if (!c) throw new Error("Cloudinary credentials missing");
  const sorted = Object.entries(params).sort(([a], [b]) => a.localeCompare(b));
  const data = sorted.map(([key, value]) => key + "=" + value).join("&") + c.secret;
  return createHash("sha1").update(data).digest("hex");
}

async function signedPost<T>(path: string, params: Record<string, string>, file?: File): Promise<T> {
  const c = cloudConfig();
  if (!c) throw new Error("Cloudinary credentials missing");
  const values = { ...params, timestamp: String(Math.floor(Date.now() / 1000)) };
  const form = new FormData();
  Object.entries(values).forEach(([key, value]) => form.append(key, value));
  form.append("api_key", c.key);
  form.append("signature", signedParams(values));
  if (file) form.append("file", file, file.name);
  const res = await fetch(endpoint(path), { method: "POST", body: form, cache: "no-store" });
  if (!res.ok) throw new Error("Cloudinary Upload API returned " + res.status);
  return await res.json() as T;
}

const resourcePath = (id: string) =>
  "resources/image/upload/" + id.split("/").map(encodeURIComponent).join("/");

export async function getCloudImage(id: string): Promise<CloudImage | null> {
  return adminGet<CloudImage>(resourcePath(id) + "?context=true");
}

async function listPrefix(prefix: string, limit = 100): Promise<CloudImage[]> {
  const query = new URLSearchParams({
    prefix, max_results: String(limit), context: "true",
  });
  const result = await adminGet<CloudList>("resources/image/upload?" + query.toString());
  return result?.resources ?? [];
}

async function loadPublishedImages(): Promise<SiteImages> {
  const images = fallbackImages();
  if (!cloudConfig()) return images;
  try {
    const resources = await listPrefix(LIVE);
    for (const asset of resources) {
      const id = asset.public_id.slice(LIVE.length);
      if (Object.prototype.hasOwnProperty.call(mediaSlots, id)) {
        const slot = id as MediaSlot;
        images[slot] = {
          src: asset.secure_url,
          position: parseFocus(asset.context?.custom?.focus),
        };
      }
    }
  } catch (error) {
    console.error("Media fallback:", error instanceof Error ? error.message : "Cloudinary unavailable");
  }
  return images;
}

/**
 * Avoid consuming the Cloudinary Admin API quota on every public page visit.
 * Publish invalidates this cache explicitly; fallback revalidation is 5 minutes.
 */
export const getPublishedImages = unstable_cache(
  loadPublishedImages,
  ["armour-media-published-v2"],
  { revalidate: 300, tags: ["armour-media-live"] },
);

export function parseFocus(value: unknown): string {
  if (typeof value !== "string" || !/^\d{1,3}% \d{1,3}%$/.test(value)) return "50% 50%";
  const [x, y] = value.split(" ").map(v => Number(v.slice(0, -1)));
  return x >= 0 && x <= 100 && y >= 0 && y <= 100 ? value : "50% 50%";
}

export async function getMediaInventory() {
  if (!cloudConfig()) throw new Error("Cloudinary is not configured");
  const [published, drafts, archive] = await Promise.all([
    listPrefix(LIVE),
    listPrefix(DRAFT),
    listPrefix(HISTORY),
  ]);
  return { published, drafts, archive };
}

/**
 * A short-lived signature scoped to one unique draft public ID. The browser
 * uploads directly to Cloudinary, avoiding Vercel's request body size limit.
 */
export function signDraftUpload(slot: MediaSlot) {
  const c = cloudConfig();
  if (!c) throw new Error("Cloudinary credentials missing");
  const params = {
    public_id: DRAFT + slot + "-" + randomUUID().replace(/-/g, ""),
    overwrite: "false",
    unique_filename: "false",
    allowed_formats: "jpg,png,webp",
    timestamp: String(Math.floor(Date.now() / 1000)),
  };
  return {
    url: endpoint("image/upload"),
    fields: { ...params, api_key: c.key, signature: signedParams(params) },
  };
}

const ownSlotAsset = (slot: MediaSlot, id: string) =>
  id.startsWith(DRAFT + slot + "-") || id.startsWith(HISTORY + slot + "/");

async function rename(from: string, to: string): Promise<CloudImage> {
  return signedPost<CloudImage>("image/rename", {
    from_public_id: from,
    to_public_id: to,
    overwrite: "false",
    invalidate: "true",
  });
}

export async function publishImage(slot: MediaSlot, sourceId: string, position: string): Promise<CloudImage> {
  if (!ownSlotAsset(slot, sourceId)) throw new Error("Image does not belong to this image slot");
  if (parseFocus(position) !== position) throw new Error("Invalid crop position");
  const source = await getCloudImage(sourceId);
  if (!source) throw new Error("Selected draft image not found");

  // Metadata survives a Cloudinary rename; do this before changing the live image.
  await signedPost("image/explicit", {
    public_id: sourceId,
    type: "upload",
    context: "focus=" + position,
  });

  const liveId = LIVE + slot;
  const current = await getCloudImage(liveId);
  let archivedId: string | null = null;

  if (current) {
    archivedId = HISTORY + slot + "/" + randomUUID().replace(/-/g, "");
    await rename(liveId, archivedId);
  }

  try {
    return await rename(sourceId, liveId);
  } catch (error) {
    if (archivedId) {
      try {
        await rename(archivedId, liveId);
      } catch (restoreError) {
        console.error("Previous live image restoration failed:", restoreError);
      }
    }
    throw error;
  }
}

/**
 * Revert to the original bundled site image. The Cloudinary photo is archived
 * and can be republished later from history.
 */
export async function resetImageSlot(slot: MediaSlot): Promise<boolean> {
  const liveId = LIVE + slot;
  const current = await getCloudImage(liveId);
  if (!current) return false;
  await rename(liveId, HISTORY + slot + "/" + randomUUID().replace(/-/g, ""));
  return true;
}

export const mediaSlotList = slotIds;

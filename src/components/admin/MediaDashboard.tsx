"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, CheckCircle2, CloudUpload, History, ImagePlus, LogOut, RefreshCw, ShieldCheck } from "lucide-react";
import { mediaSlots, slotIds, type MediaSlot } from "@/lib/media-slots";
import type { CloudImage } from "@/lib/cloudinary-media";

type Inventory = {
  published: CloudImage[];
  drafts: CloudImage[];
  archive: CloudImage[];
};

const areas = ["Home", "Story", "Programs", "Studios", "Gallery", "About", "Contact"] as const;
const liveId = (slot: MediaSlot) => "armour-media/live/" + slot;
const draftPrefix = (slot: MediaSlot) => "armour-media/drafts/" + slot + "-";
const archivePrefix = (slot: MediaSlot) => "armour-media/history/" + slot + "/";

const getFocus = (asset: CloudImage | undefined) => {
  const focus = asset?.context?.custom?.focus ?? "";
  return /^\d{1,3}% \d{1,3}%$/.test(focus) ? focus : "50% 50%";
};

export default function MediaDashboard({ configured }: { configured: boolean }) {
  const router = useRouter();
  const fileInput = useRef<HTMLInputElement>(null);
  const [area, setArea] = useState<(typeof areas)[number]>("Home");
  const [slot, setSlot] = useState<MediaSlot>("hero");
  const [inventory, setInventory] = useState<Inventory>({ published: [], drafts: [], archive: [] });
  const [selection, setSelection] = useState<string | null>(null);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(configured);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const refresh = useCallback(async () => {
    if (!configured) return;
    try {
      const res = await fetch("/api/admin/media", { cache: "no-store" });
      if (res.status === 401) { router.replace("/admin/login"); return; }
      const body = await res.json() as Inventory & { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Unable to load media.");
      setInventory(body);
      setError("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Could not load media");
    } finally {
      setLoading(false);
    }
  }, [configured, router]);

  useEffect(() => {
    if (!configured) return;
    const controller = new AbortController();
    // Fetch asynchronously; React state updates happen in the network callback,
    // not synchronously in the effect body.
    fetch("/api/admin/media", { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        if (response.status === 401) {
          router.replace("/admin/login");
          return;
        }
        const data = await response.json() as Inventory & { error?: string };
        if (!response.ok) throw new Error(data.error ?? "Unable to load media.");
        setInventory(data);
      })
      .catch((err: unknown) => {
        if (!controller.signal.aborted) {
          setError(err instanceof Error ? err.message : "Could not load media");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [configured, router]);

  const visibleSlots = useMemo(() => slotIds.filter((id) => mediaSlots[id].area === area), [area]);
  const published = inventory.published.find((image) => image.public_id === liveId(slot));
  const drafts = inventory.drafts.filter((image) => image.public_id.startsWith(draftPrefix(slot)));
  const archive = inventory.archive.filter((image) => image.public_id.startsWith(archivePrefix(slot)));
  const picked = [...drafts, ...archive].find((image) => image.public_id === selection);
  const preview = picked ?? published;
  const previewSrc = preview?.secure_url ?? mediaSlots[slot].fallback;
  const focusX = picked ? x : Number(getFocus(published).split(" ")[0].slice(0, -1));
  const focusY = picked ? y : Number(getFocus(published).split(" ")[1].slice(0, -1));

  function chooseSlot(next: MediaSlot) {
    setSlot(next);
    setSelection(null);
    setX(50);
    setY(50);
    setMessage("");
  }

  function chooseImage(image: CloudImage) {
    setSelection(image.public_id);
    const coordinates = getFocus(image).split(" ");
    setX(Number(coordinates[0].slice(0, -1)));
    setY(Number(coordinates[1].slice(0, -1)));
    setMessage("");
  }

  async function upload(file: File | undefined) {
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Choose JPG, PNG or WebP."); return;
    }
    if (file.size > 10 * 1024 * 1024) { setError("Maximum upload size is 10 MB."); return; }
    setBusy(true);
    setError("");
    setMessage("");
    try {
      // Request a single-use-style signed destination, then upload file bytes
      // directly to Cloudinary (Vercel never handles the large image body).
      const signatureResponse = await fetch("/api/admin/media/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot }),
      });
      const signed = await signatureResponse.json() as {
        url?: string;
        fields?: Record<string, string>;
        error?: string;
      };
      if (!signatureResponse.ok || !signed.url || !signed.fields) {
        throw new Error(signed.error ?? "Could not authorize upload");
      }
      const uploadForm = new FormData();
      Object.entries(signed.fields).forEach(([key, value]) => uploadForm.append(key, value));
      uploadForm.append("file", file, file.name);
      const response = await fetch(signed.url, { method: "POST", body: uploadForm });
      if (!response.ok) throw new Error("Cloudinary rejected the image. Check file type and account limits.");
      const result = await response.json() as CloudImage;
      if (!result.public_id || !result.secure_url) throw new Error("Cloudinary did not return a valid image.");
      chooseImage(result);
      setMessage("Draft uploaded. Adjust image focus, then publish when ready.");
      await refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Image upload failed");
    } finally {
      setBusy(false);
      if (fileInput.current) fileInput.current.value = "";
    }
  }

  async function publish() {
    if (!selection) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch("/api/admin/media/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot, sourceId: selection, position: x + "% " + y + "%" }),
      });
      const result = await response.json() as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error ?? "Publish failed");
      setSelection(null);
      setMessage("Published! Refresh the public website to see the new image.");
      await refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unable to publish image");
    } finally {
      setBusy(false);
    }
  }

  async function restoreOriginal() {
    if (!published || busy) return;
    if (!window.confirm("Restore the original website photo? The current Cloudinary photo will remain in Version History.")) return;
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const response = await fetch("/api/admin/media/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot }),
      });
      const result = await response.json() as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error ?? "Reset failed");
      setSelection(null);
      setMessage("Original website image restored. Your previous photo is saved in history.");
      await refresh();
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Unable to restore original image");
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/media/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  const isRestore = Boolean(selection?.startsWith(archivePrefix(slot)));

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-5 border-b border-white/15 pb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#FF858A]">ARMOUR 24-7 / ADMIN</p>
          <h1 className="mt-3 font-oswald text-4xl font-bold uppercase text-white sm:text-6xl">Media Manager</h1>
          <p className="mt-3 max-w-xl text-sm text-white/60">Upload, preview and publish website photography without editing GitHub code.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => void refresh()} className="inline-flex min-h-11 items-center gap-2 border border-white/20 px-4 text-sm text-white hover:bg-white/10">
            <RefreshCw aria-hidden="true" className="size-4" /> Refresh
          </button>
          <button type="button" onClick={() => void logout()} className="inline-flex min-h-11 items-center gap-2 border border-white/20 px-4 text-sm text-white hover:bg-white/10">
            <LogOut aria-hidden="true" className="size-4" /> Log out
          </button>
        </div>
      </header>

      {!configured && (
        <p role="alert" className="border border-amber-400/40 bg-amber-400/10 p-5 text-sm text-amber-100">
          Cloudinary credentials are not available on this deployment. Configure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET in Vercel.
        </p>
      )}
      {loading && <p className="text-sm text-white/60">Loading your image library…</p>}
      {error && <p role="alert" className="border border-[#C8010A]/60 bg-[#C8010A]/10 p-4 text-sm text-[#FFB0B5]">{error}</p>}
      {message && (
        <p role="status" className="flex items-center gap-2 border border-emerald-600/40 bg-emerald-900/15 p-4 text-sm text-emerald-200">
          <CheckCircle2 className="size-5" aria-hidden="true" /> {message}
        </p>
      )}

      <div className="flex flex-wrap gap-2" aria-label="Select website page area">
        {areas.map((item) => (
          <button
            type="button" key={item}
            onClick={() => { setArea(item); chooseSlot(slotIds.find(id => mediaSlots[id].area === item) ?? "hero"); }}
            className={`min-h-11 border px-4 font-oswald text-xs font-bold uppercase tracking-wider transition-colors ${area === item
              ? "border-[#C8010A] bg-[#C8010A] text-white"
              : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-7 lg:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.5fr)] xl:grid-cols-[minmax(230px,0.6fr)_minmax(0,1.5fr)]">
        <aside className="space-y-2" aria-label="Website image slots">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.17em] text-white/45">Editable sections</p>
          {visibleSlots.map((id) => {
            const live = inventory.published.find((item) => item.public_id === liveId(id));
            return (
              <button
                key={id}
                type="button"
                onClick={() => chooseSlot(id)}
                className={`flex w-full items-center justify-between gap-3 border px-4 py-4 text-left transition-colors ${slot === id
                  ? "border-[#C8010A] bg-[#C8010A]/15 text-white"
                  : "border-white/10 bg-[#121316] text-white/70 hover:border-white/40"}`}
              >
                <span className="text-sm font-medium">{mediaSlots[id].title}</span>
                <span className={`size-2 shrink-0 rounded-full ${live ? "bg-emerald-400" : "bg-white/25"}`} title={live ? "Cloudinary image published" : "Using original image"} />
              </button>
            );
          })}
          <div className="mt-5 flex items-start gap-3 border border-white/10 p-4 text-xs leading-relaxed text-white/50">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#FF858A]" />
            The official ARMOUR logo is protected and cannot be replaced here.
          </div>
        </aside>

        <section aria-labelledby="media-preview-title" className="min-w-0 space-y-7">
          <div className="border border-white/15 bg-[#111316] p-5 sm:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.19em] text-[#FF858A]">
                  {picked ? (isRestore ? "HISTORICAL VERSION PREVIEW" : "DRAFT PREVIEW") : "CURRENTLY PUBLISHED"}
                </p>
                <h2 id="media-preview-title" className="mt-2 font-oswald text-2xl font-semibold text-white sm:text-3xl">{mediaSlots[slot].title}</h2>
              </div>
              <span className="border border-white/15 px-3 py-2 text-xs text-white/65">{mediaSlots[slot].recommended}</span>
            </div>

            <div className={`relative overflow-hidden border border-white/10 bg-black ${mediaSlots[slot].aspect === "wide" ? "aspect-[16/9]" :
              mediaSlots[slot].aspect === "portrait" ? "aspect-[4/5] max-h-[500px]" : "aspect-[4/3] max-h-[500px]"}`}>
              <Image
                src={previewSrc} alt={"Preview of " + mediaSlots[slot].title}
                fill unoptimized sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
                style={{ objectPosition: focusX + "% " + focusY + "%" }}
              />
              {slot === "hero" && (
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-black/80 via-black/40 to-transparent p-5 sm:p-10">
                  <p className="font-oswald text-4xl font-bold uppercase leading-[0.86] text-white sm:text-6xl">
                    BUILT TO BE<br/><span className="text-[#C8010A]">STRONGER.</span>
                  </p>
                </div>
              )}
              {(slot.startsWith("program-") || slot.startsWith("special-")) && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <p className="font-oswald text-3xl font-bold uppercase text-white">
                    {slot.replace("program-", "").replace("special-", "")}
                  </p>
                </div>
              )}
            </div>

            {picked ? (
              <div className="mt-6 space-y-4">
                <p className="text-sm font-medium text-white">Image crop / focal position</p>
                <p className="text-xs text-white/60">
                  Photo resolution: {picked.width} × {picked.height} px
                  {(mediaSlots[slot].aspect === "wide" && (picked.width < 1800 || picked.height < 900)) ||
                  (mediaSlots[slot].aspect === "portrait" && (picked.width < 1000 || picked.height < 1200)) ||
                  (mediaSlots[slot].aspect === "landscape" && (picked.width < 1200 || picked.height < 750))
                    ? " — Low resolution for this section; a sharper original photo is recommended."
                    : " — Resolution is suitable for this section."}
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-xs text-white/70">
                    Horizontal focus: {x}%
                    <input type="range" min={0} max={100} value={x} onChange={(event) => setX(Number(event.target.value))}
                      className="mt-3 w-full accent-[#C8010A]" />
                  </label>
                  <label className="text-xs text-white/70">
                    Vertical focus: {y}%
                    <input type="range" min={0} max={100} value={y} onChange={(event) => setY(Number(event.target.value))}
                      className="mt-3 w-full accent-[#C8010A]" />
                  </label>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={"/admin/media/preview?" + new URLSearchParams({
                      slot,
                      asset: selection ?? "",
                      x: String(x),
                      y: String(y),
                    }).toString()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 px-5 py-3 font-oswald text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Preview on website <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                  <button
                    type="button" onClick={() => void publish()} disabled={busy}
                    className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#C8010A] px-6 py-3 font-oswald text-sm font-bold uppercase tracking-wider text-white disabled:opacity-40"
                  >
                    <CheckCircle2 className="size-5" aria-hidden="true" />
                    {busy ? "Processing…" : isRestore ? "Restore and publish this version" : "Publish this image"}
                  </button>
                </div>
                <p className="text-xs leading-relaxed text-white/50">The old published image is preserved in version history when you publish a replacement.</p>
              </div>
            ) : (
              <div className="mt-5 flex items-center justify-between gap-4 text-xs text-white/50">
                <span>{published ? `Cloudinary • ${published.width} × ${published.height} px` : "Original site image • Not yet replaced"}</span>
                <div className="flex flex-wrap items-center gap-3">
                  {published && (
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void restoreOriginal()}
                      className="border-b border-white/30 pb-1 text-xs text-white/70 transition-colors hover:border-[#FF858A] hover:text-white disabled:opacity-40"
                    >
                      Use original photo
                    </button>
                  )}
                  <a href="/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#FF969B] hover:text-white">
                    Open website <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="border border-white/15 bg-[#111316] p-5 sm:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="font-oswald text-2xl font-semibold text-white">Upload new image</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/55">Original high-resolution JPG, PNG or WebP • Max 10 MB</p>
              </div>
              <ImagePlus className="size-7 text-[#FF858A]" aria-hidden="true" />
            </div>
            <input
              ref={fileInput} type="file" accept="image/jpeg,image/png,image/webp"
              aria-label={"Upload replacement image for " + mediaSlots[slot].title}
              disabled={busy || !configured}
              onChange={(event) => void upload(event.target.files?.[0])}
              className="mt-6 block w-full cursor-pointer border border-dashed border-white/25 p-5 text-xs text-white/70 file:mr-4 file:cursor-pointer file:border-0 file:bg-[#C8010A] file:px-4 file:py-3 file:font-semibold file:text-white"
            />
            <p className="mt-3 flex items-center gap-2 text-xs text-white/50">
              <CloudUpload className="size-4" /> Uploaded images remain drafts until you click Publish.
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {([
              { title: "Draft uploads", items: drafts, empty: "No drafts for this image yet." },
              { title: "Version history", items: archive, empty: "Previous images will appear here." },
            ]).map((group) => (
              <div key={group.title} className="border border-white/15 bg-[#111316] p-5">
                <h3 className="flex items-center gap-2 font-oswald text-xl font-semibold text-white">
                  <History aria-hidden="true" className="size-5 text-[#FF858A]" /> {group.title}
                </h3>
                {group.items.length ? (
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {group.items.slice(0, 12).map((image) => (
                      <button
                        type="button" key={image.public_id}
                        onClick={() => chooseImage(image)}
                        className={`overflow-hidden border text-left ${selection === image.public_id ? "border-[#FF858A]" : "border-white/15 hover:border-white/40"}`}
                      >
                        <div className="relative aspect-[4/3] bg-black">
                          <Image src={image.secure_url} alt="Version thumbnail" fill unoptimized sizes="150px" className="object-cover" />
                        </div>
                        <div className="p-2 text-[10px] text-white/60">
                          {image.width} × {image.height}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : <p className="mt-5 text-xs text-white/45">{group.empty}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

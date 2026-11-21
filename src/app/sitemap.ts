import type { MetadataRoute } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://armour-gym-pi.vercel.app";
const paths = [
  { path: "/", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/terms-conditions", priority: 0.3, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" as const },
  { path: "/refund-policy", priority: 0.3, changeFrequency: "monthly" as const },
  { path: "/shipping-policy", priority: 0.3, changeFrequency: "monthly" as const },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map((item) => ({
    url: new URL(item.path, site).toString(),
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}

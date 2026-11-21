import type { MetadataRoute } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://armour-gym-pi.vercel.app";
const paths = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.7 },
  { path: "/pricing", priority: 0.9 },
  { path: "/contact", priority: 0.9 },
  { path: "/terms-conditions", priority: 0.2 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/refund-policy", priority: 0.2 },
  { path: "/shipping-policy", priority: 0.2 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((item) => ({
    url: new URL(item.path, site).toString(),
    changeFrequency: "monthly",
    priority: item.priority,
  }));
}

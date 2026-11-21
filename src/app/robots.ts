import type { MetadataRoute } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://armour-gym-pi.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/payment/"] },
    ],
    sitemap: new URL("/sitemap.xml", site).toString(),
  };
}

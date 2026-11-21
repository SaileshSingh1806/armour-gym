import { redirect } from "next/navigation";
import MediaDashboard from "@/components/admin/MediaDashboard";
import { isMediaAdmin } from "@/lib/media-auth";
import { isCloudConfigured } from "@/lib/cloudinary-media";

export const metadata = { title: "Media Manager | ARMOUR 24-7 GYM", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function MediaManagerPage() {
  if (!(await isMediaAdmin())) redirect("/admin/login");
  return (
    <main className="min-h-screen bg-[#08090B] pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MediaDashboard configured={isCloudConfigured()} />
      </div>
    </main>
  );
}

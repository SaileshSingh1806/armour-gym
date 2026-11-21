import { redirect } from "next/navigation";
import { isMediaAdmin, adminConfigured } from "@/lib/media-auth";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export const metadata = { title: "Admin Login | ARMOUR Media Manager", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await isMediaAdmin()) redirect("/admin/media");
  const configured = adminConfigured();
  return (
    <main className="flex min-h-[90vh] items-center justify-center bg-[#090A0C] px-4 pb-20 pt-32 text-white">
      <div className="w-full max-w-md border border-white/15 bg-[#151619] p-7 shadow-2xl sm:p-10">
        <span className="font-oswald text-xs font-bold uppercase tracking-[0.25em] text-[#FF858A]">ARMOUR 24-7 GYM</span>
        <h1 className="mt-4 font-oswald text-4xl font-bold uppercase text-white">Media Manager</h1>
        <p className="mt-3 text-sm text-white/60">Authorized staff only. Sign in to manage website photos.</p>
        <AdminLoginForm isConfigured={configured} />
      </div>
    </main>
  );
}

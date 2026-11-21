import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Payment Status | ARMOUR 24-7 Gym",
  robots: { index: false, follow: false },
};

type PaymentResult = {
  state: "paid" | "pending" | "unverified" | "sandbox";
  message: string;
  orderId?: string;
};

async function readPaymentStatus(orderId: string | undefined): Promise<PaymentResult> {
  if (!orderId || !/^[A-Za-z0-9_-]{8,80}$/.test(orderId)) {
    return { state: "unverified", message: "No valid payment reference was provided." };
  }

  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;
  if (!appId || !secretKey || appId === "YOUR_CASHFREE_APP_ID") {
    return { state: "unverified", message: "Payment verification is temporarily unavailable.", orderId };
  }

  const production = process.env.CASHFREE_ENV === "PRODUCTION";
  const baseUrl = production
    ? "https://api.cashfree.com/pg/orders/"
    : "https://sandbox.cashfree.com/pg/orders/";

  try {
    const response = await fetch(baseUrl + encodeURIComponent(orderId), {
      cache: "no-store",
      headers: {
        "x-client-id": appId,
        "x-client-secret": secretKey,
        "x-api-version": "2023-08-01",
      },
    });
    if (!response.ok) {
      return { state: "unverified", message: "We could not verify this reference with the payment provider.", orderId };
    }
    const body: unknown = await response.json();
    const status = body && typeof body === "object" && "order_status" in body
      ? (body as { order_status?: unknown }).order_status
      : undefined;
    if (typeof status !== "string") {
      return { state: "unverified", message: "The payment provider returned an unexpected response.", orderId };
    }
    if (!production) {
      return { state: "sandbox", message: "This is a sandbox test order, not a live membership payment.", orderId };
    }
    if (status === "PAID") {
      return { state: "paid", message: "Your payment was verified with the payment provider.", orderId };
    }
    return {
      state: "pending",
      message: status === "ACTIVE"
        ? "Your order is active but payment has not been confirmed."
        : "Payment has not been confirmed. Please contact the gym if money was deducted.",
      orderId,
    };
  } catch (error: unknown) {
    console.error("Payment status lookup failed:", error instanceof Error ? error.message : "Unknown error");
    return { state: "unverified", message: "Payment verification is currently unavailable.", orderId };
  }
}

export default async function PaymentStatusPage({
  searchParams,
}: {
  searchParams: Promise<{ order_id?: string | string[] }>;
}) {
  const params = await searchParams;
  const orderId = typeof params.order_id === "string" ? params.order_id : undefined;
  const payment = await readPaymentStatus(orderId);
  const isPaid = payment.state === "paid";
  const isPending = payment.state === "pending";

  const title = isPaid ? "Payment confirmed" : isPending ? "Payment pending" :
    payment.state === "sandbox" ? "Test payment only" : "Payment not verified";
  const Icon = isPaid ? CheckCircle2 : isPending ? Clock3 : AlertCircle;
  const iconColor = isPaid ? "text-emerald-400" : isPending ? "text-amber-400" : "text-[#FF858A]";

  return (
    <div className="min-h-screen bg-[#0a0a0a] px-4 pb-20 pt-32 text-white sm:px-6 md:pt-36">
      <div className="mx-auto max-w-2xl border border-white/15 bg-[#141414] p-7 sm:p-10">
        <div className={`mb-6 flex size-16 items-center justify-center border border-white/10 bg-black/20 ${iconColor}`}>
          <Icon aria-hidden="true" className="size-9" />
        </div>
        <p className="font-oswald text-xs font-bold uppercase tracking-[0.2em] text-[#FF858A]">
          ARMOUR 24-7 • PAYMENT STATUS
        </p>
        <h1 className="mt-4 font-oswald text-4xl font-semibold uppercase text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/70">
          {payment.message}
        </p>

        {payment.orderId && (
          <div className="mt-8 border-y border-white/10 py-5">
            <p className="text-xs uppercase tracking-widest text-white/45">Order reference</p>
            <p className="mt-2 break-all font-mono text-sm text-white">{payment.orderId}</p>
          </div>
        )}

        <div className="mt-8 flex items-start gap-3 bg-white/[0.04] p-4 text-sm leading-relaxed text-white/70">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#FF858A]" aria-hidden="true" />
          <span>
            {isPaid
              ? "Please contact our team to complete membership activation and entry registration."
              : "Do not repeat payment solely because this page could not confirm it. Check your bank statement and speak with our team first."}
          </span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center gap-2 bg-[#C8010A] px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            Contact ARMOUR team <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <Link href="/" className="inline-flex min-h-12 items-center border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

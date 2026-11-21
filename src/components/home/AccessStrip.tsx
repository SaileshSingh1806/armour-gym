/**
 * Published access schedule, not a live operational-status feed.
 * Outages, closures and special events cannot be inferred from the clock.
 */
const TICKS = [
  { hour: 0, label: "12 am" },
  { hour: 6, label: "6 am" },
  { hour: 12, label: "12 pm" },
  { hour: 18, label: "6 pm" },
  { hour: 24, label: "12 am" },
] as const;

export default function AccessStrip() {
  return (
    <div className="border border-white/20 bg-black/55 p-5 backdrop-blur-md md:p-6">
      <p className="font-body text-sm leading-relaxed text-white/90 md:text-base">
        24/7 member access. Front desk hours: 6:00 am – 10:00 pm.
      </p>

      <div className="mt-5 grid gap-x-5 gap-y-2 md:grid-cols-[8.5rem_1fr]">
        <div className="hidden flex-col justify-between py-[3px] font-body text-xs font-semibold text-gray-200 md:flex">
          <span>Member access</span>
          <span className="mt-2">Front desk</span>
        </div>
        <div>
          <div className="space-y-2" aria-hidden="true">
            <div className="h-2.5 bg-[#C8010A]" />
            <div className="relative h-2.5 bg-white/15">
              <div className="absolute inset-y-0 left-1/4 w-2/3 bg-white/85" />
            </div>
          </div>
          <div className="relative mt-4 h-4" aria-hidden="true">
            {TICKS.map((tick) => (
              <span
                key={tick.hour}
                className={`absolute whitespace-nowrap font-body text-[0.7rem] text-gray-300 ${tick.hour === 0 ? "" : tick.hour === 24 ? "-translate-x-full" : "-translate-x-1/2"}`}
                style={{ left: `${(tick.hour / 24) * 100}%` }}
              >
                {tick.label}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-5 font-body text-xs text-gray-200 md:hidden">
            <span className="inline-flex items-center gap-1.5"><span className="size-2 bg-[#C8010A]" /> Member access</span>
            <span className="inline-flex items-center gap-1.5"><span className="size-2 bg-white/85" /> Front desk</span>
          </div>
        </div>
      </div>
      <p className="mt-4 font-body text-xs leading-relaxed text-gray-300">
        Published schedule only. Special closures, sanitization and management policies may affect access.
      </p>
    </div>
  );
}

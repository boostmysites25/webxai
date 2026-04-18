const METRICS = [
  { value: "40K+", label: "Active Users" },
  { value: "-38%", label: "Task Time Reduction" },
  { value: "+45%", label: "Engagement Increase" },
  { value: "99.9%", label: "System Uptime" },
];

export default function Metrics() {
  return (
    <section className="w-full py-[120px] bg-[#0B0B0B]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col items-center text-center">
              <span className="text-[56px] md:text-[64px] font-bold text-white tracking-tighter leading-[1.0] mb-3">
                {m.value}
              </span>
              <span className="text-[12px] font-mono uppercase tracking-[0.1em] text-[#A1A1AA]">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

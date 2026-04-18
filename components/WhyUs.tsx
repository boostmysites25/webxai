const REASONS = [
  {
    title: "Deterministic Systems",
    desc: "Built for reliability, not randomness. Every pipeline is stateless, auditable, and predictable under load.",
  },
  {
    title: "Revenue-Focused Engineering",
    desc: "Every system maps to a business output. We don't ship features — we ship measurable operational impact.",
  },
  {
    title: "No Agency Bloat",
    desc: "Direct execution, no layers. You work with the engineers building the architecture, not account managers.",
  },
];

export default function WhyUs() {
  return (
    <section className="w-full py-[120px] lg:py-[160px] bg-[#0B0B0B]">
      <div className="w-full max-w-[1200px] mx-auto px-6">

        <div className="mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white leading-[1.1]" data-reveal>
            Why WebX AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#1F1F1F] border border-[#1F1F1F]">
          {REASONS.map((r, idx) => (
            <div key={idx} className="bg-[#0B0B0B] p-10 flex flex-col hover:bg-[#0F0F0F] transition-colors" data-reveal data-reveal-delay={100 + idx * 100}>
              <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-[0.1em] mb-4">
                0{idx + 1}
              </span>
              <h3 className="text-[18px] font-semibold text-white mb-3 tracking-tight">
                {r.title}
              </h3>
              <p className="text-[14px] text-[#A1A1AA] leading-[1.6]">
                {r.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

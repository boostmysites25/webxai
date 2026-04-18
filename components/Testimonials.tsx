const TESTIMONIALS = [
  {
    quote: "Reduced our operational workload drastically. The system handles what used to take our team a full day in minutes.",
    author: "Founder",
    company: "SaaS Startup",
  },
  {
    quote: "The system scaled faster than expected. We went from prototype to production infrastructure in under 3 weeks.",
    author: "CTO",
    company: "Fintech",
  },
  {
    quote: "Execution was direct and efficient. No bloat, no hand-holding — just working architecture delivered on time.",
    author: "Product Lead",
    company: "AI Platform",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-[120px] lg:py-[160px] bg-[#0B0B0B]">
      <div className="w-full max-w-[1200px] mx-auto px-6">

        <div className="mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white leading-[1.1]">
            From the Field
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#1F1F1F] border border-[#1F1F1F]">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-[#0B0B0B] p-10 flex flex-col hover:bg-[#0F0F0F] transition-colors group">

              {/* Opening quote mark */}
              <div className="text-[32px] leading-none text-[#2A2A2A] font-serif mb-6 select-none">&ldquo;</div>

              <p className="text-[15px] text-[#A1A1AA] leading-[1.7] mb-8 flex-1 group-hover:text-white transition-colors">
                {t.quote}
              </p>

              <div className="pt-6 border-t border-[#1F1F1F]">
                <span className="text-[13px] font-medium text-white block">{t.author}</span>
                <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-[0.1em]">{t.company}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

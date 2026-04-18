export default function WhyWebXAI() {
  return (
    <section className="relative w-full pt-[120px] pb-[160px] px-6 overflow-hidden bg-dark border-t border-[#222]">

      {/* ---- CLEAN SHARP PATTERN ---- */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <div className="text-center mb-24" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-white">
            Why{" "}
            <span className="text-[#888]">
              WebX AI
            </span>
          </h2>
          <p className="text-[#888] text-lg max-w-2xl mx-auto leading-relaxed">
            Precision engineering meets AI-native thinking for brands aiming higher.
          </p>
        </div>

        {/* LIST */}
        <div className="relative mx-auto border-l border-[#222] pl-8 md:pl-16 ml-4 md:ml-20">
          
          <div className="flex flex-col gap-16">

            <WhyItem
              title="Engineering-Driven Architecture"
              desc="We build systems that scale cleanly, remain maintainable for years, and avoid technical debt."
            />

            <WhyItem
              title="AI-Native Execution"
              desc="Automation, intelligence & predictive capabilities built from day one—never added as an afterthought."
            />

            <WhyItem
              title="Predictable & Transparent Process"
              desc="Weekly progress, structured updates, clear milestones, and complete visibility throughout the project."
            />

            <WhyItem
              title="Future-Proof Technology Choices"
              desc="Only proven, stable, scalable stacks designed for long-term reliability—not trends that die in months."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItem({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="relative w-full group" data-aos="fade-up">
      {/* Node bullet */}
      <div className="absolute -left-[45px] md:-left-[77px] top-2 w-3 h-3 rounded-full bg-[#333] border border-black shadow-[0_0_0_4px_#0A0A0A] group-hover:bg-white transition-colors duration-300"></div>
      
      <div
        className="
          w-full p-8 md:p-10 rounded-xl
          bg-[#0A0A0A] border border-[#222]
          group-hover:border-[#444]
          transition-all duration-300
        "
      >
        <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 tracking-tight">{title}</h3>
        <p className="text-[#888] leading-relaxed text-base">{desc}</p>
      </div>
    </div>
  );
}

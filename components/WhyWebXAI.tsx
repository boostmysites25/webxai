export default function WhyWebXAI() {
  return (
    <section className="relative w-full pt-[160px] pb-[200px] px-6 overflow-hidden bg-[#05050A]">

      {/* FUTURISTIC GRID */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* NEON VERTICAL LINES */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute left-[22%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/30 to-transparent blur-sm"></div>
      </div>

      {/* DIAGONAL COLOR GLOW (same hero energy) */}
      <div className="absolute -top-72 -left-40 w-[1500px] h-[350px] rotate-[-20deg] bg-gradient-to-r from-blue-600/40 to-purple-500/30 blur-[130px] opacity-70"></div>
      <div className="absolute bottom-[-280px] right-[-200px] w-[1500px] h-[350px] rotate-[18deg] bg-gradient-to-r from-purple-600/35 to-blue-400/30 blur-[130px] opacity-70"></div>

      {/* CENTER FADE for smooth blend */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[90%] h-[180px] bg-white/5 blur-[90px] opacity-20"></div>
      </div>

      {/* LIGHT STREAKS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[42%] left-[-10%] w-[40%] h-[6px] bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-[18deg] blur-md opacity-40 animate-sweep"></div>
        <div className="absolute top-[70%] right-[-10%] w-[45%] h-[6px] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[-18deg] blur-md opacity-30 animate-sweep-slow"></div>
      </div>

      {/* MICRO PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[38%] left-[34%] w-[3px] h-[3px] bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-[46%] left-[62%] w-[2px] h-[2px] bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-[58%] left-[49%] w-[2px] h-[2px] bg-white/60 rounded-full animate-ping"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1250px] mx-auto">

        {/* SECTION TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Why{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
              WebX AI
            </span>
          </h2>
          <p className="text-[#C1C3D2] text-[18px] max-w-2xl mx-auto leading-relaxed">
            Precision engineering meets AI-native thinking for brands aiming higher.
          </p>
        </div>

        {/* SPINE LINE */}
        <div className="relative max-w-[900px] mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px]
            bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500
            blur-[1.5px] opacity-80"
          />

          {/* ITEMS */}
          <div className="flex flex-col gap-20">

            <WhyItem
              side="left"
              title="Engineering-Driven Architecture"
              desc="We build systems that scale cleanly, remain maintainable for years, and avoid technical debt."
            />

            <WhyItem
              side="right"
              title="AI-Native Execution"
              desc="Automation, intelligence & predictive capabilities built from day one—never added as an afterthought."
            />

            <WhyItem
              side="left"
              title="Predictable & Transparent Process"
              desc="Weekly progress, structured updates, clear milestones, and complete visibility throughout the project."
            />

            <WhyItem
              side="right"
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
  side,
  title,
  desc,
}: {
  side: "left" | "right";
  title: string;
  desc: string;
}) {
  const isLeft = side === "left";

  return (
    <div className={`relative flex ${isLeft ? "justify-start" : "justify-end"} w-full`}>
      <div
        className="
          w-[92%] md:w-[46%] p-10 rounded-2xl
          bg-gradient-to-br from-[#0E0F15]/80 to-[#0A0B12]/80
          backdrop-blur-xl
          border border-white/10
          shadow-[0_0_40px_rgba(0,0,0,0.6)]
          hover:shadow-[0_0_40px_rgba(110,70,255,0.45)]
          hover:border-white/20
          transition-all duration-300
        "
      >
        <h3 className="text-white text-2xl font-semibold mb-4 tracking-tight">{title}</h3>
        <p className="text-[#C5C7D4] leading-relaxed text-[15px] opacity-95">{desc}</p>
      </div>
    </div>
  );
}

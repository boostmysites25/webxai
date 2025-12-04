export default function Timeline() {
  return (
    <section className="relative w-full py-[180px] px-6 overflow-hidden">

      {/* GLOBAL BACKGROUND MATCHING HERO + SERVICES */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* LARGE COLOR GLOWS */}
      <div className="absolute -top-40 left-0 w-[1200px] h-[300px] bg-purple-500/25 blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[1200px] h-[300px] bg-blue-500/25 blur-[150px]"></div>

      {/* SECTION HEADER */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-32">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
          How We Work
        </h2>
        <p className="text-soft text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          A clean, predictable workflow built for modern AI-powered systems.
        </p>
      </div>

      {/* CINEMATIC ENERGY LINE */}
      <div className="relative max-w-[1350px] mx-auto mb-24">
        <div className="
          w-full h-[6px] 
          bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500
          rounded-full opacity-60 blur-[1px]
          shadow-[0_0_60px_rgba(120,80,255,0.4)]
        "></div>
      </div>

      {/* FLOATING STEPS */}
      <div className="relative z-10 max-w-[1350px] mx-auto flex flex-col md:flex-row justify-between gap-24 md:gap-0">

        <TimelineStep
          step="01"
          title="Discovery"
          desc="We understand goals, bottlenecks, workflows and business needs."
        />

        <TimelineStep
          step="02"
          title="Blueprint"
          desc="Architecture, datasets, modules and AI flow diagrams."
        />

        <TimelineStep
          step="03"
          title="Development"
          desc="Frontend, backend, AI and integrations built cleanly."
        />

        <TimelineStep
          step="04"
          title="Testing"
          desc="Real-world QA, optimization, fixes and performance checks."
        />

        <TimelineStep
          step="05"
          title="Launch"
          desc="Secure deployment, scaling, monitoring and iteration."
        />

      </div>

    </section>
  );
}

function TimelineStep({
  step,
  title,
  desc
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative flex flex-col items-center text-center group">

      {/* FLOATING NODE */}
      <div className="
        w-10 h-10 rounded-full
        bg-gradient-to-br from-blue-400 to-purple-500
        shadow-[0_0_40px_rgba(120,80,255,0.8)]
        group-hover:scale-110 transition-transform duration-300
      " />

      {/* CONNECTOR LINE (only on desktop) */}
      <div className="hidden md:block absolute top-5 left-[50%] w-[1px] h-[130px] bg-white/10"></div>

      {/* INFO */}
      <div className="mt-10">
        <p className="text-blue-300 font-mono text-sm mb-2">{step}</p>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-soft text-[15px] max-w-[200px] leading-relaxed opacity-90">
          {desc}
        </p>
      </div>
    </div>
  );
}

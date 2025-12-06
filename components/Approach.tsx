export default function Approach() {
  return (
    <section className="relative w-full py-[200px] px-6 overflow-hidden bg-[#05050A]">

      {/* TOP + BOTTOM FADE */}
      <div className="absolute top-0 left-0 w-full h-48 bg-linear-to-b from-[#05050A] to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#05050A] to-transparent z-20"></div>

      {/* DEEP GRID */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* NEON VERTICAL LINES */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute left-[15%] w-[3px] h-full bg-linear-to-b from-blue-500/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 w-[3px] h-full bg-linear-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[80%] w-[3px] h-full bg-linear-to-b from-blue-300/35 to-transparent blur-sm"></div>
      </div>

      {/* DIAGONAL GLOWS */}
      <div className="absolute -top-52 -left-40 w-[1400px] h-[350px] bg-linear-to-r from-blue-600/25 to-purple-500/15 blur-[160px]"></div>
      <div className="absolute bottom-[-200px] -right-40 w-[1400px] h-[350px] bg-linear-to-r from-purple-600/25 to-blue-400/15 blur-[160px]"></div>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.45]">
        <div className="absolute top-[32%] left-[28%] w-[3px] h-[3px] bg-blue-300 rounded-full animate-ping" />
        <div className="absolute top-[48%] left-[59%] w-[2px] h-[2px] bg-purple-300 rounded-full animate-pulse" />
        <div className="absolute top-[66%] left-[49%] w-[2px] h-[2px] bg-white/70 rounded-full animate-ping" />
      </div>

      {/* HEADER */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-24" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Our{" "}
          <span className="bg-linear-to-r from-blue-400 via-purple-400 to-blue-500 text-transparent bg-clip-text">
            Approach
          </span>
        </h2>

        <p className="text-soft text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          A modern engineering-first mindset grounded in clarity, precision, and impact.
        </p>
      </div>

      {/* TILES */}
      <div className="relative z-10 max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <Tile
          title="Clarity Before Code"
          desc="We map the system deeply before writing a single line — architecture over guesswork."
        />

        <Tile
          title="AI-Native Thinking"
          desc="Automation, intelligence and workflows that move beyond traditional development."
        />

        <Tile
          title="Scalable Engineering"
          desc="Clean code, modular structure, long-term stability — built to scale, not break."
        />

        <Tile
          title="Precision Delivery"
          desc="Weekly updates, measurable progress and predictable releases without chaos."
        />

      </div>

    </section>
  );
}

function Tile({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        relative p-8 rounded-2xl
        bg-white/5 backdrop-blur-xl 
        border border-white/10
        shadow-[0_0_40px_rgba(0,0,0,0.45)]
        transition-all duration-500
        hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_55px_rgba(120,80,255,0.4)]
        group
      "
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div
        className="
          absolute inset-0 rounded-2xl opacity-0 
          bg-linear-to-r from-blue-400/20 to-purple-500/20 
          blur-xl transition-all duration-500
          group-hover:opacity-30
        "
      />

      <h3 className="text-white text-2xl font-semibold mb-3 relative z-10">
        {title}
      </h3>

      <p className="text-soft text-[15px] leading-relaxed relative z-10">
        {desc}
      </p>
    </div>
  );
}

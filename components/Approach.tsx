export default function Approach() {
  return (
    <section className="relative w-full py-[160px] px-6 overflow-hidden">

      {/* CONTINUOUS BACKGROUND (same as hero & services) */}
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

      {/* SOFT COLORED GLOWS */}
      <div className="absolute -top-40 left-0 w-[1200px] h-[260px] bg-blue-500/20 blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[1200px] h-[260px] bg-purple-500/20 blur-[150px]"></div>

      {/* SECTION HEADER */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 text-transparent bg-clip-text">Approach</span>
        </h2>
        <p className="text-soft text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          A modern engineering-first mindset grounded in clarity, precision, and impact.
        </p>
      </div>

      {/* FLOATING TILES */}
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
    >
      {/* Glow hover ring */}
      <div className="
        absolute inset-0 rounded-2xl opacity-0 
        bg-gradient-to-r from-blue-400/20 to-purple-500/20 
        blur-xl transition-all duration-500
        group-hover:opacity-30
      "></div>

      {/* Content */}
      <h3 className="text-white text-2xl font-semibold mb-3 relative z-10">
        {title}
      </h3>
      <p className="text-soft text-[15px] leading-relaxed relative z-10">
        {desc}
      </p>
    </div>
  );
}

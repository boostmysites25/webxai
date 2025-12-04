export default function Services() {
  return (
    <section className="relative w-full pt-[160px] pb-[160px] px-6 overflow-hidden">

      {/* TOP FADE FROM HERO */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#05050A] to-transparent pointer-events-none"></div>

      {/* GRID BACKGROUND (same as hero) */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      {/* SOFT VERTICAL NEON LINES */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute left-[25%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/30 to-transparent blur-sm"></div>
      </div>

      {/* DIAGONAL GLOW BARS */}
      <div className="absolute -top-40 -left-40 w-[1200px] h-[260px] rotate-[-22deg] bg-gradient-to-r from-blue-600/40 to-purple-500/30 blur-[100px]" />
      <div className="absolute bottom-[-150px] right-[-180px] w-[1200px] h-[260px] rotate-[18deg] bg-gradient-to-r from-purple-600/30 to-blue-400/30 blur-[100px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1250px] mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Transforming Businesses with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Intelligent Solutions
          </span>
        </h2>

        <p className="text-center text-[#C9C9C9] max-w-2xl mx-auto text-lg md:text-xl mb-20 leading-relaxed">
          We build modern, scalable and intelligent digital systems that accelerate business growth.
        </p>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-14">

          <ServiceCard
            icon="/icons/mobile.svg"
            title="Mobile App Development"
            desc="High-performance iOS & Android apps with modern UI, fast performance and scalable backend."
          />

          <ServiceCard
            icon="/icons/web.svg"
            title="Website & Web App Development"
            desc="Fast, responsive and premium-grade web experiences powered by Next.js and modern frameworks."
          />

          <ServiceCard
            icon="/icons/ai.svg"
            title="AI Development"
            desc="Custom AI models, automation pipelines, RAG systems and intelligent tools built for real impact."
          />

          <ServiceCard
            icon="/icons/data.svg"
            title="Data Analytics"
            desc="Insight dashboards, analytics pipelines and data engineering systems that drive decisions."
          />

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }: any) {
  return (
    <div
      className="
        relative group p-8 md:p-10 rounded-2xl
        bg-gradient-to-br from-[#0D0F17]/80 to-[#0A0B12]/80
        backdrop-blur-xl border border-white/5
        shadow-[0_0_40px_rgba(0,0,0,0.4)]
        hover:shadow-[0_0_50px_rgba(100,100,255,0.35)]
        transition-all duration-300
      "
    >

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl"></div>

      <img src={icon} alt="" className="w-12 h-12 mb-6 opacity-90" />

      <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 tracking-tight">
        {title}
      </h3>

      <p className="text-[#C9C9C9] text-[15px] md:text-[16px] leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

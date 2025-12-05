export default function Services() {
  return (
    <section className="relative w-full pt-[160px] pb-[160px] px-6 overflow-hidden bg-[#05050A]">

      {/* ---- TOP FADE ---- */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#05050A] to-transparent pointer-events-none z-20"></div>

      {/* ---- BOTTOM FADE ---- */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#05050A] to-transparent pointer-events-none z-20"></div>

      {/* ---- PREMIUM SOFT GLOWS (NO GRID / NO LINES) ---- */}
      <div className="absolute -top-52 left-[10%] w-[1400px] h-[350px] 
        bg-gradient-to-r from-blue-600/25 via-purple-500/20 to-blue-400/20 
        blur-[150px] opacity-60"></div>

      <div className="absolute bottom-[-250px] right-[10%] w-[1500px] h-[350px] 
        bg-gradient-to-l from-purple-600/25 via-blue-500/20 to-purple-400/20 
        blur-[150px] opacity-60"></div>

      {/* ---- CONTENT ---- */}
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

        {/* SERVICES GRID */}
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
        bg-gradient-to-br from-[#0D0F17]/85 to-[#0A0B12]/85
        backdrop-blur-xl border border-white/5
        shadow-[0_0_40px_rgba(0,0,0,0.45)]
        hover:shadow-[0_0_55px_rgba(120,80,255,0.35)]
        transition-all duration-300
      "
    >

      {/* Hover Glow */}
      <div className="
        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20
        bg-gradient-to-r from-blue-500/20 to-purple-500/20
        blur-xl transition-all duration-500
      "></div>

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

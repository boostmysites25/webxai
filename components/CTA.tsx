import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full py-[200px] px-6 overflow-hidden bg-[#05050A]">

      {/* -------------------- TOP + BOTTOM FADE OVERLAYS -------------------- */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-40 bg-linear-to-b from-[#05050A] to-transparent z-20"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#05050A] to-transparent z-20"></div>

      {/* -------------------- THICKER GRID LINES -------------------- */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 2px, transparent 2px)
            `,
            backgroundSize: "220px 220px, 110px 110px, 110px 110px",
          }}
        />
      </div>

      {/* -------------------- VERTICAL THICK NEON LINES -------------------- */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute left-[25%] top-0 w-[3px] h-full bg-linear-to-b from-purple-400/50 to-transparent blur-[2px]" />
        <div className="absolute left-1/2 top-0 w-[3px] h-full bg-linear-to-b from-blue-400/50 to-transparent blur-[2px]" />
        <div className="absolute left-[75%] top-0 w-[3px] h-full bg-linear-to-b from-purple-400/40 to-transparent blur-[2px]" />
      </div>

      {/* -------------------- STRONGER BG GLOWS -------------------- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-linear-to-b from-blue-600/35 to-transparent blur-[180px]" />
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-linear-to-t from-purple-500/35 to-transparent blur-[160px]" />
      </div>

      {/* -------------------- HOLOGRAPHIC RINGS -------------------- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.18]">
        <div className="w-[650px] h-[650px] border border-white/10 rounded-full"></div>
        <div className="absolute w-[900px] h-[900px] border border-white/5 rounded-full"></div>
        <div className="absolute w-[1250px] h-[1250px] border border-white/5 rounded-full"></div>
      </div>

      {/* -------------------- PARTICLES -------------------- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.45]">
        <div className="absolute top-[38%] left-[27%] w-1 h-1 bg-blue-300/70 rounded-full animate-pulse"></div>
        <div className="absolute top-[50%] left-[63%] w-[3px] h-[3px] bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute top-[66%] left-[48%] w-1 h-1 bg-white/70 rounded-full animate-pulse"></div>
      </div>

      {/* -------------------- MAIN CONTENT -------------------- */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center">

        <h2 className="text-white font-extrabold leading-[1.1] tracking-tight mb-6" data-aos="fade-up">
          <span className="block text-5xl md:text-6xl">
            Let's Create Something
          </span>
          <span className="block text-6xl md:text-7xl bg-clip-text text-transparent
            bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
            Truly Intelligent
          </span>
        </h2>

        <p className="text-soft text-lg md:text-xl max-w-2xl mx-auto mb-16 opacity-90" data-aos="fade-up" data-aos-delay="100">
          Partner with us to design AI-powered digital systems that move your business forward.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-8" data-aos="fade-up" data-aos-delay="200">

          <Link
            href="/contact"
            className="px-14 py-4 rounded-xl text-white text-lg font-medium 
            bg-gradient-to-r from-blue-600/40 to-purple-600/40 
            border border-white/20 backdrop-blur-xl 
            hover:from-blue-600/50 hover:to-purple-600/50 transition 
            shadow-[0_0_25px_rgba(0,0,0,0.4)] text-center"
          >
            Start Your Project
          </Link>

          <Link
            href="/contact"
            className="px-14 py-4 rounded-xl text-white text-lg font-medium 
            bg-white/5 backdrop-blur-xl border border-white/15 
            hover:bg-white/10 hover:border-white/25 transition text-center"
          >
            Contact Team
          </Link>

        </div>
      </div>
    </section>
  );
}

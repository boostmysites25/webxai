export default function Hero() {
  return (
    <section className="
      relative min-h-screen w-full overflow-hidden bg-[#05050A]
      flex items-center justify-center
      pt-[160px] pb-[140px]
      md:pt-[220px] md:pb-[200px]
    ">

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />
      </div>

      {/* MOBILE-FRIENDLY GLOW BARS */}
      <div className="absolute inset-0 pointer-events-none md:hidden">
        <div className="absolute top-[10%] left-[-20%] w-[350px] h-[180px] rotate-[-18deg] bg-gradient-to-r from-blue-600/25 to-purple-500/20 blur-[60px]" />
        <div className="absolute bottom-[8%] right-[-15%] w-[330px] h-[170px] rotate-[16deg] bg-gradient-to-r from-purple-600/25 to-blue-400/20 blur-[60px]" />
      </div>

      {/* DESKTOP GLOW BARS */}
      <div className="hidden md:block absolute -top-72 -left-40 w-[1500px] h-[340px] rotate-[-22deg] bg-gradient-to-r from-blue-600/50 to-purple-500/40 blur-[110px]" />
      <div className="hidden md:block absolute bottom-[-240px] right-[-200px] w-[1500px] h-[340px] rotate-[18deg] bg-gradient-to-r from-purple-600/40 to-blue-400/40 blur-[110px]" />

      {/* NEON LINES */}
      <div className="absolute inset-0 opacity-[0.04] md:opacity-[0.05]">
        <div className="absolute left-1/2 top-0 w-[1px] md:w-[2px] h-full bg-gradient-to-b from-blue-400/50 to-transparent blur-sm" />
      </div>

      {/* PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[35%] w-[2px] h-[2px] bg-white/70 rounded-full animate-pulse"></div>
        <div className="absolute top-[45%] left-[70%] w-[2px] h-[2px] bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute top-[60%] left-[50%] w-[3px] h-[3px] bg-purple-300 rounded-full animate-ping"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 text-center px-5 md:px-6 max-w-[1050px]">

        {/* Heading */}
        <h1 className="text-white font-extrabold leading-[1.12] md:leading-[1.05] tracking-tight mb-10 md:mb-12">
          <span className="block text-[38px] sm:text-[55px] md:text-[82px]">
            We Build Intelligent
          </span>
          <span className="
            block 
            text-[44px] sm:text-[62px] md:text-[102px]
            bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500
          ">
            Digital Experiences
          </span>
        </h1>

        {/* Subline */}
        <p className="
          text-soft 
          text-[16px] sm:text-[18px] md:text-[26px]
          leading-relaxed mx-auto max-w-[90%] md:max-w-3xl
          mb-12 md:mb-20 opacity-90
        ">
          AI, Apps, Web & Data engineering crafted for ambitious modern brands.
        </p>

        {/* BUTTONS FIXED FOR MOBILE */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-20">

          {/* PRIMARY BUTTON */}
          <button className="
            w-full sm:w-auto
            px-8 py-3 sm:px-14 sm:py-4
            rounded-xl text-white text-[15px] sm:text-lg font-medium
            bg-gradient-to-r from-blue-600/30 to-purple-600/30
            border border-white/20 backdrop-blur-xl
            hover:from-blue-600/40 hover:to-purple-600/40 
            transition shadow-[0_0_20px_rgba(0,0,0,0.35)]
            max-w-[260px] mx-auto
          ">
            Start Project
          </button>

          {/* SECONDARY BUTTON */}
          <button className="
            w-full sm:w-auto
            px-8 py-3 sm:px-14 sm:py-4
            rounded-xl text-white text-[15px] sm:text-lg font-medium
            bg-white/5 backdrop-blur-xl border border-white/15
            hover:bg-white/10 hover:border-white/25 transition
            max-w-[260px] mx-auto
          ">
            View Work
          </button>

        </div>

        {/* Metrics */}
        <div className="
          flex flex-col sm:flex-row justify-center 
          gap-8 sm:gap-20 text-white/90
        ">
          <div className="text-center">
            <p className="text-4xl sm:text-6xl font-bold text-white">40+</p>
            <p className="text-soft text-base sm:text-lg mt-2">Projects</p>
          </div>

          <div className="text-center">
            <p className="text-4xl sm:text-6xl font-bold text-white">15+</p>
            <p className="text-soft text-base sm:text-lg mt-2">AI Systems</p>
          </div>

          <div className="text-center">
            <p className="text-4xl sm:text-6xl font-bold text-white">99%</p>
            <p className="text-soft text-base sm:text-lg mt-2">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

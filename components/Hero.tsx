export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05050A] flex items-center justify-center pt-[180px] md:pt-[220px] pb-[160px] md:pb-[200px]">

      {/* --- FUTURISTIC GRID (responsive) --- */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* --- NEON LINES --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="hidden md:block absolute left-1/4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/50 to-transparent blur-sm" />
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400/50 to-transparent blur-sm" />
        <div className="hidden md:block absolute left-[70%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/40 to-transparent blur-sm" />
      </div>

      {/* --- DIAGONAL GLOW BARS (scaled for mobile) --- */}
      <div className="absolute -top-40 md:-top-72 -left-20 md:-left-40 w-[800px] md:w-[1500px] h-[200px] md:h-[340px] rotate-[-20deg] bg-gradient-to-r from-blue-600/40 to-purple-500/30 blur-[100px]" />
      <div className="absolute bottom-[-160px] md:bottom-[-240px] right-[-100px] md:-right-40 w-[800px] md:w-[1500px] h-[200px] md:h-[340px] rotate-[18deg] bg-gradient-to-r from-purple-600/35 to-blue-400/30 blur-[100px]" />

      {/* --- LIGHT STREAKS (disabled on small screens) --- */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-[25%] left-[-10%] w-[40%] h-[6px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-[20deg] blur-md opacity-40 animate-sweep" />
        <div className="absolute top-[60%] right-[-10%] w-[45%] h-[6px] bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-[-18deg] blur-md opacity-30 animate-sweep-slow" />
      </div>

      {/* --- PARTICLES --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[28%] w-1 h-1 bg-white/70 rounded-full animate-pulse" />
        <div className="absolute top-[40%] left-[68%] w-1 h-1 bg-blue-300 rounded-full animate-ping" />
        <div className="absolute top-[57%] left-[45%] w-[3px] h-[3px] bg-purple-300 rounded-full animate-ping" />
        <div className="absolute top-[67%] left-[50%] w-1 h-1 bg-white/40 rounded-full animate-pulse" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[1000px]">

        {/* MAIN HEADING */}
        <h1 className="text-white font-extrabold leading-[1.1] tracking-tight mb-8">
          <span className="block text-[42px] sm:text-[52px] md:text-[72px] lg:text-[92px]">
            We Build Intelligent
          </span>
          <span className="block text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500
            text-[48px] sm:text-[58px] md:text-[82px] lg:text-[102px]">
            Digital Experiences
          </span>
        </h1>

        {/* SUBLINE */}
        <p className="text-soft text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16 opacity-95">
          AI, Apps, Web & Data engineering crafted for ambitious modern brands.
        </p>

        {/* BUTTONS (responsive layout) */}
       <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-20">

  {/* Start Project */}
  <button
    className="
      w-auto 
      max-w-[180px]           /* mobile limit */
      sm:max-w-none           /* desktop unlimited */
      px-7 py-2.5
      sm:px-12 sm:py-4
      rounded-lg sm:rounded-xl
      bg-gradient-to-r from-blue-600/30 to-purple-600/30
      border border-white/20
      text-white text-sm sm:text-lg font-medium
      backdrop-blur-xl
      transition
      hover:from-blue-600/40 hover:to-purple-600/40
    "
  >
    Start Project
  </button>

  {/* View Work */}
  <button
    className="
      w-auto 
      max-w-[180px]           /* mobile limit */
      sm:max-w-none           /* desktop unlimited */
      px-7 py-2.5
      sm:px-12 sm:py-4
      rounded-lg sm:rounded-xl
      bg-white/5 border border-white/15
      text-white text-sm sm:text-lg
      hover:bg-white/10 hover:border-white/25
      transition backdrop-blur-xl
    "
  >
    View Work
  </button>

</div>



        {/* METRICS */}
        <div className="flex justify-center gap-10 md:gap-20 text-white/90 flex-wrap">

          <div className="text-center mb-6">
            <p className="text-4xl sm:text-5xl font-bold text-white">40+</p>
            <p className="text-soft text-sm sm:text-base mt-1">Projects</p>
          </div>

          <div className="text-center mb-6">
            <p className="text-4xl sm:text-5xl font-bold text-white">15+</p>
            <p className="text-soft text-sm sm:text-base mt-1">AI Systems</p>
          </div>

          <div className="text-center mb-6">
            <p className="text-4xl sm:text-5xl font-bold text-white">99%</p>
            <p className="text-soft text-sm sm:text-base mt-1">Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0B]">
      
      <div className="w-full max-w-[1200px] mx-auto px-6 pt-[124px] pb-[64px] md:pt-[180px] md:pb-[120px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* LEFT: Copy */}
        <div className="flex flex-col items-start z-10 relative">
          
          <div className="mb-8 inline-flex items-center gap-2 text-[12px] font-mono text-[#A1A1AA] uppercase tracking-[0.1em]" data-reveal data-reveal-delay="100">
             <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
             Enterprise Infrastructure
          </div>

          <h1 className="text-[52px] md:text-[68px] font-bold leading-[1.05] text-white mb-6 tracking-tight" data-reveal data-reveal-delay="300">
            Engineering AI Systems That Drive Revenue.
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-[#A1A1AA] leading-[1.6] max-w-[480px] mb-10" data-reveal data-reveal-delay="500">
            We architect deterministic AI pipelines, scalable data environments, and high-performance SaaS platforms designed for absolute operational scale.
          </p>
          
          <div className="flex gap-4" data-reveal data-reveal-delay="700">
            <Link
              href="?contact=true"
              className="h-[44px] px-8 rounded-[6px] bg-white text-black font-medium text-[14px] flex items-center justify-center transition-all hover:bg-[#e2e8f0]"
            >
              Start Project
            </Link>
          </div>
        </div>

        {/* RIGHT: Vercel/Linear Abstract Lattice */}
        <div className="hidden md:flex relative w-full h-[500px] items-center justify-end select-none pointer-events-none">
          
          <div className="absolute right-0 w-full max-w-[500px] h-full relative">
            
            {/* The Grid Structural Matrix */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 border-l border-t border-[#1F1F1F]/50">
               {Array.from({ length: 36 }).map((_, i) => (
                 <div key={i} className="border-r border-b border-[#1F1F1F]/50 relative transition-colors duration-1000">
                    {/* Active highlighted nodes mimicking sparse data flow */}
                    {(i === 14 || i === 22 || i === 8) && (
                      <div className="absolute inset-0 bg-[#7C3AED]/10 opacity-50 animate-pulse" />
                    )}
                 </div>
               ))}
               
               {/* Connecting Vector Line (SVG) */}
               <svg className="absolute inset-0 w-full h-full" overflow="visible">
                 <path d="M 0 100 L 150 100 L 250 300 L 500 300" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" vectorEffect="non-scaling-stroke" />
                 <defs>
                   <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#1F1F1F" />
                     <stop offset="50%" stopColor="#7C3AED" />
                     <stop offset="100%" stopColor="#FFFFFF" />
                   </linearGradient>
                 </defs>
               </svg>

            </div>

            {/* Fading Edge Masks */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0B0B0B] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0B0B0B] to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
}

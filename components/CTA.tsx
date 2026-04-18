import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative w-full py-[160px] lg:py-[200px] bg-[#0B0B0B] overflow-hidden">
      <div className="w-full max-w-[800px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 bg-transparent border border-[#1F1F1F] text-[11px] font-mono text-[#A1A1AA] tracking-[0.1em] uppercase" data-reveal>
          <span className="w-1.5 h-1.5 bg-[#7C3AED]" />
          Initialize System
        </div>

        <h2 className="text-[48px] md:text-[64px] font-bold text-white leading-[1.05] tracking-tight mb-6" data-reveal data-reveal-delay="100">
           Deploy Scalable Architecture <span className="text-[#A1A1AA] block mt-2">In Days, Not Quarters.</span>
        </h2>

        <p className="text-[16px] md:text-[18px] text-[#A1A1AA] leading-[1.6] mb-12 max-w-[560px]" data-reveal data-reveal-delay="200">
           Bypass the agency bloat. Work directly with a syndicate of elite engineers building deterministic infrastructure for rapid revenue generation.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4" data-reveal data-reveal-delay="300">
           <Link href="?contact=true" className="h-[44px] px-8 rounded-[6px] bg-white text-black font-medium text-[14px] flex items-center justify-center transition-all hover:bg-[#e2e8f0]">
             Start Architecture Build
           </Link>
           <Link href="/work" className="h-[44px] px-8 rounded-[6px] bg-transparent border border-[#1F1F1F] text-white font-medium text-[14px] flex items-center justify-center hover:bg-[#121212] transition-colors">
             View System Ledger
           </Link>
        </div>

      </div>
    </section>
  );
}

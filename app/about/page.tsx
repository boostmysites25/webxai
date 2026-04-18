import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – Engineering Studio Philosophy",
  description: "WebX AI is an autonomous syndicate of engineers building scalable AI systems and infrastructure. Learn how we think, build, and engineer revenue-directed technology.",
  keywords: ["WebX AI about", "webxai engineering studio", "AI engineering company India", "webx ai team", "about webxai"],
  alternates: { canonical: "https://webxaitech.com/about" },
  openGraph: {
    title: "About WebX AI – Engineering Studio",
    description: "We don't build websites. We build systems that generate output. Learn about our engineering-first philosophy.",
    url: "https://webxaitech.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#0B0B0B] text-white">

      {/* ─── 1. HERO ─── */}
      <section className="w-full pt-[180px] pb-[100px] border-b border-[#1F1F1F]">
        <div className="w-full max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-[56px] md:text-[80px] font-bold text-white tracking-tighter leading-[1.0] mb-8">
            Engineering Studio.
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#A1A1AA] leading-[1.6]">
            We are an autonomous syndicate of engineers, architects, and deployment specialists building scalable AI infrastructure.
          </p>
        </div>
      </section>

      {/* ─── 2. CORE STATEMENT ─── */}
      <section className="w-full py-[140px] px-6 border-b border-[#1F1F1F]">
        <div className="w-full max-w-[1000px] mx-auto text-center">
          <h2 className="text-[36px] md:text-[56px] font-bold tracking-tight text-white leading-[1.2]">
            We don't build websites.<br />
            <span className="text-[#A1A1AA]">We build systems that generate output.</span>
          </h2>
        </div>
      </section>

      {/* ─── 3. PHILOSOPHY PRINCIPLES ─── */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-[140px]">
         <div className="flex flex-col gap-24">
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
               <span className="text-[48px] font-bold text-[#333333] leading-none font-mono">01</span>
               <div className="flex flex-col pt-2">
                 <h3 className="text-[24px] font-semibold text-white mb-4 tracking-tight">Functional Over Flashy</h3>
                 <p className="text-[16px] text-[#A1A1AA] leading-[1.7]">
                   We build systems that handle real workloads, not surface-level design. Performance, stability, and speed dictate architecture.
                 </p>
               </div>
            </div>

            <div className="w-full h-[1px] bg-[#1F1F1F]" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
               <span className="text-[48px] font-bold text-[#333333] leading-none font-mono">02</span>
               <div className="flex flex-col pt-2">
                 <h3 className="text-[24px] font-semibold text-white mb-4 tracking-tight">Architecture First</h3>
                 <p className="text-[16px] text-[#A1A1AA] leading-[1.7]">
                   Every system is mapped before execution to ensure scalability and stability. We eliminate technical debt before a single line of code is written.
                 </p>
               </div>
            </div>

            <div className="w-full h-[1px] bg-[#1F1F1F]" />

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
               <span className="text-[48px] font-bold text-[#333333] leading-none font-mono">03</span>
               <div className="flex flex-col pt-2">
                 <h3 className="text-[24px] font-semibold text-white mb-4 tracking-tight">Revenue Directed</h3>
                 <p className="text-[16px] text-[#A1A1AA] leading-[1.7]">
                   Every build must tie back to measurable business output. We engineer infrastructure specifically designed to reduce overhead and multiply throughput.
                 </p>
               </div>
            </div>

         </div>
      </section>

      {/* ─── 4. HOW WE WORK (FLOW) ─── */}
      <section className="w-full border-t border-b border-[#1F1F1F] bg-[#0A0A0A]">
         <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#1F1F1F]">
            
            <div className="p-10 lg:p-14 flex flex-col items-center text-center">
              <span className="text-[11px] font-mono tracking-widest text-[#7C3AED] uppercase mb-4">Phase 1</span>
              <h4 className="text-[20px] font-semibold text-white tracking-tight">Audit</h4>
            </div>

            <div className="p-10 lg:p-14 flex flex-col items-center text-center">
              <span className="text-[11px] font-mono tracking-widest text-[#7C3AED] uppercase mb-4">Phase 2</span>
              <h4 className="text-[20px] font-semibold text-white tracking-tight">Build</h4>
            </div>

            <div className="p-10 lg:p-14 flex flex-col items-center text-center">
              <span className="text-[11px] font-mono tracking-widest text-[#7C3AED] uppercase mb-4">Phase 3</span>
              <h4 className="text-[20px] font-semibold text-white tracking-tight">Integrate</h4>
            </div>

            <div className="p-10 lg:p-14 flex flex-col items-center text-center">
              <span className="text-[11px] font-mono tracking-widest text-[#7C3AED] uppercase mb-4">Phase 4</span>
              <h4 className="text-[20px] font-semibold text-white tracking-tight">Scale</h4>
            </div>

         </div>
      </section>

      {/* ─── 5. TEAM POSITIONING ─── */}
      <section className="w-full max-w-[800px] mx-auto px-6 py-[140px]">
        <div className="flex flex-col border-l border-[#1F1F1F] pl-8">
           <span className="text-[12px] font-mono tracking-widest text-[#A1A1AA] uppercase mb-8 block">Execution Protocol</span>
           <p className="text-[24px] text-white leading-[1.5] tracking-tight mb-12">
             A distributed team of engineers specializing in:
           </p>
           <ul className="flex flex-col gap-6">
             <li className="flex items-center gap-4">
               <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
               <span className="text-[18px] text-[#A1A1AA]">AI Systems & Fine-tuning</span>
             </li>
             <li className="flex items-center gap-4">
               <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
               <span className="text-[18px] text-[#A1A1AA]">Backend Infrastructure Mapping</span>
             </li>
             <li className="flex items-center gap-4">
               <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
               <span className="text-[18px] text-[#A1A1AA]">High-performance Frontend Edges</span>
             </li>
           </ul>
        </div>
      </section>

      {/* ─── 6. DIFFERENTIATION STRIP ─── */}
      <section className="w-full border-t border-b border-[#1F1F1F] bg-[#121212]">
         <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1F1F1F]">
            
            {/* Agency */}
            <div className="p-12 lg:p-20 flex flex-col">
               <h3 className="text-[14px] font-mono tracking-widest text-[#A1A1AA] uppercase mb-10 pb-4 border-b border-[#1F1F1F]">
                 Traditional Agency
               </h3>
               <ul className="flex flex-col gap-6 text-[16px] text-[#A1A1AA]">
                 <li className="flex items-center gap-3">
                   <span className="opacity-50">✕</span> Layers of Management
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="opacity-50">✕</span> Severe Communication Delays
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="opacity-50">✕</span> Generic WordPress Output
                 </li>
               </ul>
            </div>

            {/* WebX AI */}
            <div className="p-12 lg:p-20 flex flex-col bg-[#0B0B0B]">
               <h3 className="text-[14px] font-mono tracking-widest text-white uppercase mb-10 pb-4 border-b border-[#1F1F1F]">
                 WebX AI Studio
               </h3>
               <ul className="flex flex-col gap-6 text-[16px] text-white">
                 <li className="flex items-center gap-3">
                   <span className="text-[#7C3AED]">✓</span> Direct Execution Mapping
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="text-[#7C3AED]">✓</span> Fast Iteration & Shipping
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="text-[#7C3AED]">✓</span> Custom Deterministic Systems
                 </li>
               </ul>
            </div>

         </div>
      </section>

      {/* ─── 7. CTA ─── */}
      <section className="w-full py-[160px] bg-[#0B0B0B]">
        <div className="w-full max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-[40px] md:text-[64px] font-bold text-white tracking-tighter leading-[1.0] mb-10">
            Work With Engineers,<br />Not Layers.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="?contact=true" className="w-full sm:w-auto h-[48px] px-8 bg-white text-black font-medium text-[14px] flex items-center justify-center hover:bg-gray-200 transition-colors">
              Start Project
            </Link>
            <Link href="/work" className="w-full sm:w-auto h-[48px] px-8 bg-transparent border border-[#1F1F1F] text-white font-medium text-[14px] flex items-center justify-center hover:bg-[#121212] transition-colors">
              View Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default function Approach() {
  const STEPS = [
    { num: "01", title: "Architecture Audit", desc: "Evaluate existing environments and map a blueprint." },
    { num: "02", title: "Sprint Engineering", desc: "Build isolated pipeline modules for immediate impact." },
    { num: "03", title: "System Integration", desc: "Connect standalone logic smoothly into the internal stack." },
    { num: "04", title: "Autonomous Scale", desc: "Monitor telemetry, tune parameters, and scale output." }
  ];

  return (
    <section className="relative w-full py-[120px] lg:py-[160px] bg-[#0B0B0B]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        <div className="mb-20 text-left">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white" data-reveal>
            Deployment Protocol
          </h2>
        </div>

        <div className="relative">
           {/* Horizontal minimal axis */}
           <div className="hidden md:block absolute top-[12px] left-[0%] right-[0%] h-[1px] bg-[#1F1F1F] z-0" data-reveal />
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-start relative group" data-reveal="scale" data-reveal-delay={200 + idx * 150}>
                   
                   {/* Clean timeline dot connecting to horizontal axis */}
                   <div className="w-[24px] h-[24px] rounded-full bg-[#0B0B0B] border-[4px] border-[#1F1F1F] group-hover:border-[#7C3AED] transition-colors mb-6 z-10" />

                   <h3 className="text-[14px] font-mono uppercase tracking-[0.1em] text-[#A1A1AA] mb-4">
                     {step.num} — {step.title}
                   </h3>
                   <p className="text-[14px] text-[#A1A1AA] leading-[1.6] max-w-[240px]">
                     {step.desc}
                   </p>

                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}

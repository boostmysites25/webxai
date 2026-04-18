import Link from "next/link";

const FEATURED = {
  id: "projectsy",
  client: "Projectsy.ai",
  problem: "Traditional task management platforms lacked deterministic routing. Teams spent massive overhead manually categorizing and assigning tickets across disjointed organizational structures.",
  system: "Architected an intelligent task routing application utilizing generative agents to automatically categorize and dispatch tickets to appropriate engineering nodes.",
  result: "-38%",
  resultLabel: "Average Task Resolution Time",
  stack: ["Next.js", "React", "LangChain", "OpenAI"],
};

const SECONDARY = [
  {
    id: "spekasify",
    client: "Spekasify",
    desc: "A high-fidelity communication array processing structural semantic data in real-time.",
    result: "12ms",
    resultLabel: "Inference Latency",
    stack: ["WebSockets", "Node.js", "Redis"],
    comingSoon: false,
  },
  {
    id: "virtuteams",
    client: "VirtuTeams",
    desc: "Distributed management cluster automating cross-region engineering synchronization and resource allocation.",
    result: "100%",
    resultLabel: "Operational Uptime",
    stack: ["PostgreSQL", "React", "AWS"],
    comingSoon: false,
  },
  {
    id: "trading-algo",
    client: "Trading Algo Platform",
    desc: "Proprietary high-frequency execution environment designed for volatile predictive modeling and instant state updates.",
    result: "—",
    resultLabel: "Deploying Q4",
    stack: ["Go", "Kafka", "TimescaleDB"],
    comingSoon: true,
  }
];

export default function WorkShowcase() {
  return (
    <section className="relative w-full py-[120px] lg:py-[160px] bg-[#0B0B0B]">
      
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col mb-16 text-left">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white mb-4" data-reveal>
            Systems Executed.
          </h2>
          <p className="text-[16px] text-[#A1A1AA] leading-[1.6] max-w-[560px]" data-reveal data-reveal-delay="100">
             We measure success in reduced latency, lower operational cost, and direct revenue enablement.
          </p>
        </div>

        {/* Mapped Grid Layout */}
        <div className="flex flex-col gap-12 lg:gap-16">
          
          {/* FEATURED BOUNDARY */}
          <Link href={`/work/${FEATURED.id}`} className="block group" data-reveal data-reveal-delay="150">
            <div className="w-full linear-surface p-10 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 relative overflow-hidden bg-[#0A0A0A]">
                  
                {/* Left side: Typography */}
                <div className="lg:col-span-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    <span className="text-[11px] font-mono tracking-[0.1em] text-[#A1A1AA] uppercase">Primary Architecture Case</span>
                  </div>
                  
                  <h3 className="text-[32px] md:text-[48px] font-bold text-white tracking-tight leading-[1.1] mb-12 group-hover:text-[#A1A1AA] transition-colors">
                    {FEATURED.client}
                  </h3>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#A1A1AA] mb-2">
                        The Bottleneck
                      </h4>
                      <p className="text-[15px] text-[#A1A1AA] leading-[1.6]">{FEATURED.problem}</p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#A1A1AA] mb-2">
                        System Engineered
                      </h4>
                      <p className="text-[15px] text-[#A1A1AA] leading-[1.6]">{FEATURED.system}</p>
                    </div>
                  </div>
                </div>

                {/* Right side: Strict Metrics */}
                <div className="lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1F1F1F] pt-8 lg:pt-0 pl-0 lg:pl-10 xl:pl-12 mt-4 lg:mt-0">
                  
                  <div className="mb-12">
                     <h4 className="text-[11px] font-mono tracking-[0.1em] text-[#A1A1AA] uppercase mb-4">Measured Impact</h4>
                     <div className="text-[64px] font-medium text-white leading-[1.0] mb-2 tracking-tighter">
                       {FEATURED.result}
                     </div>
                     <p className="text-[13px] text-[#A1A1AA] pr-2 break-words leading-snug">{FEATURED.resultLabel}</p>
                  </div>
                  
                  <div>
                     <h4 className="text-[11px] font-mono tracking-[0.1em] text-[#A1A1AA] uppercase mb-4">Execution Stack</h4>
                     <div className="flex flex-wrap gap-2">
                       {FEATURED.stack.map(s => (
                         <span key={s} className="tech-pill">{s}</span>
                       ))}
                     </div>
                  </div>

                </div>

            </div>
          </Link>

          {/* SECONDARY PROJECTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#1F1F1F] border border-[#1F1F1F]">
            {SECONDARY.map((proj, idx) => {
              const ContentBlock = (
                <div className="bg-[#0A0A0A] p-10 md:p-12 transition-colors hover:bg-[#121212] flex flex-col h-full group" data-reveal data-reveal-delay={200 + idx * 100}>
                   
                   <div className="mb-10 flex flex-col gap-2">
                      <div className="text-[40px] font-medium text-white tracking-tighter leading-[1.0]">
                        {proj.result}
                      </div>
                      <div className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-[0.1em]">{proj.resultLabel}</div>
                   </div>

                   <h4 className="text-[20px] font-semibold text-white mb-3 group-hover:text-white transition-colors flex items-center gap-2">
                     {proj.client}
                     {proj.comingSoon && (
                       <span className="text-[9px] font-mono text-white bg-[#7C3AED] px-1.5 py-0.5 rounded-sm">BETA</span>
                     )}
                   </h4>
                   
                   <p className="text-[14px] text-[#A1A1AA] leading-[1.6] mb-8 flex-1">{proj.desc}</p>
                   
                   <div className="flex flex-wrap gap-2 pt-6 border-t border-[#1F1F1F]">
                      {proj.stack.map(s => (
                        <span key={s} className="tech-pill">
                          {s}
                        </span>
                      ))}
                   </div>
                </div>
              );

              return proj.comingSoon ? (
                <div key={proj.id} className="block relative">
                  {ContentBlock}
                  <div className="absolute inset-0 bg-[#0B0B0B]/80 backdrop-blur-[2px] flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
                      <span className="text-[12px] font-mono tracking-widest text-white uppercase border border-[#1F1F1F] px-4 py-2 bg-black">Compiling Architecture</span>
                  </div>
                </div>
              ) : (
                <Link key={proj.id} href={`/work/${proj.id}`} className="block">
                  {ContentBlock}
                </Link>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

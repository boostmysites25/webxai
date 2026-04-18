export default function About() {
  return (
    <section className="relative w-full py-[120px] lg:py-[160px] bg-[#0B0B0B]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
           
           {/* Left text block */}
           <div className="flex flex-col">
             <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-6 tracking-tight leading-[1.1]">
               We Architect Logic.
             </h2>
             <p className="text-[16px] text-[#A1A1AA] leading-[1.6] max-w-[480px]">
               We replace manual operational friction with deterministic code. Our engineering syndicate constructs automated pipelines, integrates LLMs securely into internal data, and scales infrastructure perfectly aligned to revenue goals.
             </p>
           </div>

           {/* Right minimal diagram (Input -> Transformation -> Output) */}
           <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 justify-center md:justify-between w-full p-8 linear-surface border border-[#1F1F1F] rounded-xl relative overflow-hidden">
             
             {/* Component 1: Input */}
             <div className="flex flex-col items-center justify-center text-center p-6 border border-[#2A2A2A] bg-[#0F0F0F] rounded-lg min-w-[140px] z-10">
               <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#A1A1AA] mb-2 block">Input Vector</span>
               <span className="text-[13px] font-medium text-white">Event Stream<br />(Kafka)</span>
             </div>

             {/* Arrow line */}
             <div className="hidden md:flex flex-1 items-center justify-center relative">
               <div className="w-full h-[1px] bg-[#2A2A2A]" />
               <svg className="w-4 h-4 text-[#A1A1AA] absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
             </div>
             {/* Mobile Arrow */}
             <div className="md:hidden h-8 flex items-center justify-center text-[#A1A1AA]">↓</div>

             {/* Component 2: Core Transformation */}
             <div className="flex flex-col items-center justify-center text-center p-6 border border-[#7C3AED]/30 bg-[#7C3AED]/5 rounded-lg min-w-[140px] z-10">
               <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#7C3AED] mb-2 block">Transformation</span>
               <span className="text-[13px] font-medium text-white">LLM Routing<br />Matrix</span>
             </div>

             {/* Arrow line */}
             <div className="hidden md:flex flex-1 items-center justify-center relative">
               <div className="w-full h-[1px] bg-[#2A2A2A]" />
               <svg className="w-4 h-4 text-[#A1A1AA] absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
             </div>
             {/* Mobile Arrow */}
             <div className="md:hidden h-8 flex items-center justify-center text-[#A1A1AA]">↓</div>

             {/* Component 3: Output State */}
             <div className="flex flex-col items-center justify-center text-center p-6 border border-[#2A2A2A] bg-[#0F0F0F] rounded-lg min-w-[140px] z-10">
               <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#A1A1AA] mb-2 block">State Commit</span>
               <span className="text-[13px] font-medium text-white">PostgreSQL<br />Cloud</span>
             </div>
             
           </div>

        </div>

      </div>
    </section>
  );
}

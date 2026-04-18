const NODES = [
  {
    label: "Input Layer",
    sublabel: "APIs / Events",
    glow: false,
  },
  {
    label: "Processing Layer",
    sublabel: "LLM Routing / Pipelines",
    glow: true,
  },
  {
    label: "Output Layer",
    sublabel: "Database / Dashboards",
    glow: false,
  },
];

export default function ArchitectureFlow() {
  return (
    <section className="w-full py-[120px] lg:py-[160px] bg-[#0B0B0B]">
      <div className="w-full max-w-[1200px] mx-auto px-6">

        <div className="mb-20 text-left">
          <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#A1A1AA] mb-4 block">
            System Diagram
          </span>
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white leading-[1.1]">
            Infrastructure Architecture
          </h2>
        </div>

        {/* Diagram */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-0">

          {NODES.map((node, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center w-full md:w-auto">

              {/* Node Box */}
              <div className={`relative flex flex-col items-center justify-center text-center w-full md:w-[200px] py-8 px-6 border transition-all duration-300 group
                ${node.glow
                  ? "border-[#7C3AED]/40 bg-[#7C3AED]/5 hover:border-[#7C3AED]/70 hover:bg-[#7C3AED]/10"
                  : "border-[#1F1F1F] bg-[#0A0A0A] hover:border-[#2A2A2A]"
                }`}
              >
                {node.glow && (
                  <div className="absolute inset-0 bg-[#7C3AED]/5 blur-[30px] pointer-events-none" />
                )}
                <span className={`text-[14px] font-semibold tracking-tight z-10 relative mb-1 ${node.glow ? "text-white" : "text-[#A1A1AA]"}`}>
                  {node.label}
                </span>
                <span className="text-[11px] font-mono text-[#A1A1AA]/70 uppercase tracking-[0.08em] z-10 relative">
                  {node.sublabel}
                </span>
              </div>

              {/* Connector Arrow (between nodes) */}
              {idx < NODES.length - 1 && (
                <>
                  {/* Desktop horizontal line */}
                  <div className="hidden md:flex items-center w-[80px] flex-shrink-0">
                    <div className="flex-1 h-[1px] bg-[#2A2A2A]" />
                    <svg className="w-3 h-3 text-[#A1A1AA] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  {/* Mobile vertical arrow */}
                  <div className="md:hidden flex justify-center items-center h-10 text-[#A1A1AA] text-[18px]">↓</div>
                </>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

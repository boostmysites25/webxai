const CAPABILITIES = [
  {
    title: "AI Development",
    desc: "Custom generative models and fine-tuned RAG pipelines integrated securely into your latency-critical workloads.",
    tags: ["OpenAI", "LangChain", "Vector DB"],
  },
  {
    title: "Web App Infrastructure",
    desc: "End-to-end multi-tenant platform architecture, engineered with advanced RBAC, load balancing, and autonomous scaling.",
    tags: ["Next.js", "PostgreSQL", "React"],
  },
  {
    title: "Mobile App Development",
    desc: "High-performance native and cross-platform mobile architectures optimized for frame rate and offline caching.",
    tags: ["React Native", "Swift", "Kotlin"],
  },
  {
    title: "E-Commerce Logistics",
    desc: "Highly-scalable checkout routing, payment gateways, and real-time inventory management dashboards.",
    tags: ["Shopify Plus", "Stripe", "Redis"],
  },
  {
    title: "Web3 & Blockchain Dev",
    desc: "Deterministic smart contract deployment, decentralized ledgers, and secure on-chain wallet integrations.",
    tags: ["Solidity", "Hardhat", "Web3.js"],
  },
  {
    title: "Game Logic Engineering",
    desc: "Plugging real-time multiplayer networking, physics engines, and disparate rendering APIs to eliminate latency.",
    tags: ["Unity", "Unreal Engine", "WebGL"],
  },
];

export default function Services() {
  return (
    <section className="relative w-full py-[120px] lg:py-[160px] bg-[#0B0B0B]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16 md:mb-20">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Core Capabilities
          </h2>
          <p className="text-[16px] text-[#A1A1AA] leading-[1.6] max-w-[560px]">
            Enterprise-grade engineering competencies focused strictly on reliable execution and product scale.
          </p>
        </div>

        {/* 3-Column Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1F1F1F] border border-[#1F1F1F]">
          {CAPABILITIES.map((srv, idx) => (
            <div key={idx} className="bg-[#0B0B0B] p-8 md:p-10 flex flex-col group transition-colors duration-300 hover:bg-[#121212]">
              
              <h3 className="text-[18px] font-semibold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                {srv.title}
              </h3>
              <p className="text-[14px] text-[#A1A1AA] leading-[1.6] mb-8 flex-1">
                {srv.desc}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-[#1F1F1F]">
                {srv.tags.map(t => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

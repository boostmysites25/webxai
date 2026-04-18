"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { id: "ai-dev", label: "AI Development" },
  { id: "web-app", label: "Web App Infrastructure" },
  { id: "mobile", label: "Mobile App Development" },
  { id: "ecommerce", label: "E-Commerce Logistics" },
  { id: "web3", label: "Web3 & Blockchain" },
  { id: "game", label: "Game Logic Engineering" },
];

const SERVICES = [
  {
    id: "ai-dev",
    num: "01",
    title: "AI Development",
    desc: "Custom generative models and fine-tuned RAG pipelines integrated securely into your latency-critical enterprise workloads.",
    tags: ["OpenAI", "LangChain", "Vector DB"],
    features: [
      "Autonomous Multi-Agent Systems",
      "Semantic Search & Routing",
      "Fine-tuned Context Engines",
    ],
  },
  {
    id: "web-app",
    num: "02",
    title: "Web App Infrastructure",
    desc: "End-to-end multi-tenant platform architecture, engineered with advanced RBAC, load balancing, and autonomous scaling from day one.",
    tags: ["Next.js", "PostgreSQL", "React"],
    features: [
      "Multi-tenant Database Design",
      "Edge Rendering",
      "React Suspense Architecture",
    ],
  },
  {
    id: "mobile",
    num: "03",
    title: "Mobile App Development",
    desc: "High-performance native and cross-platform mobile architectures optimized for peak frame rate and reliable offline caching.",
    tags: ["React Native", "Swift", "Kotlin"],
    features: [
      "Native UI Rendering",
      "Offline-first Sync",
      "Hardware Accelerated Performance",
    ],
  },
  {
    id: "ecommerce",
    num: "04",
    title: "E-Commerce Logistics",
    desc: "Highly-scalable checkout routing, payment gateways, and real-time inventory management built for high-volume concurrent operations.",
    tags: ["Shopify Plus", "Stripe", "Redis"],
    features: [
      "Real-time Inventory Sync",
      "Sub-second Checkout Flow",
      "Headless CMS Integration",
    ],
  },
  {
    id: "web3",
    num: "05",
    title: "Web3 & Blockchain",
    desc: "Deterministic smart contract deployment, decentralized ledgers, zero-knowledge proofs, and secure on-chain wallet integrations.",
    tags: ["Solidity", "Hardhat", "Web3.js"],
    features: [
      "Secure Smart Contracts",
      "Layer 2 Scaling",
      "Cross-chain Bridges",
    ],
  },
  {
    id: "game",
    num: "06",
    title: "Game Logic Engineering",
    desc: "Real-time multiplayer networking, precision physics engines, and rendering pipelines architected for minimum state latency.",
    tags: ["Unity", "Unreal Engine", "WebGL"],
    features: [
      "Real-time Networking",
      "Custom Physics Pipelines",
      "WebGL Rendering",
    ],
  },
];

const PROCESS = [
  { num: "01", label: "Audit" },
  { num: "02", label: "Build" },
  { num: "03", label: "Integrate" },
  { num: "04", label: "Scale" },
];

const TECH = ["Next.js", "PostgreSQL", "OpenAI", "LangChain", "AWS", "Redis"];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("ai-dev");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = sectionRefs.current[id];
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top };
      });

      const current = offsets
        .filter((o) => o.top <= 160)
        .sort((a, b) => b.top - a.top)[0];

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <main className="w-full min-h-screen bg-[#0B0B0B] text-white">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="w-full pt-[160px] pb-[100px] bg-[#0B0B0B]">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#A1A1AA] mb-6 block">
            Core Capabilities Array
          </span>
          <h1 className="text-[56px] md:text-[80px] font-bold tracking-tight leading-[1.0] text-white mb-8">
            Engineering Capabilities.
          </h1>
          <p className="text-[17px] md:text-[20px] text-[#A1A1AA] leading-[1.6] max-w-[600px]">
            We deploy exact, deterministic systems designed to scale infrastructure and generate measurable revenue.
          </p>
        </div>
      </section>

      {/* ── STICKY NAV STRIP ──────────────────────────────── */}
      <div className="w-full border-t border-b border-[#1F1F1F] bg-[#0B0B0B] sticky top-[64px] z-40">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <nav className="flex overflow-x-auto scrollbar-hide gap-0">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex-shrink-0 py-4 px-4 text-[12px] font-medium transition-all border-b-[2px] ${
                  activeSection === item.id
                    ? "text-white border-white"
                    : "text-[#A1A1AA] border-transparent hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── SERVICE SECTIONS ──────────────────────────────── */}
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {SERVICES.map((srv, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <section
              key={srv.id}
              id={srv.id}
              ref={(el) => { sectionRefs.current[srv.id] = el; }}
              className="py-[100px] border-b border-[#1F1F1F] last:border-b-0"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start ${isReversed ? "lg:flex lg:flex-row-reverse" : ""}`}>

                {/* LEFT / RIGHT (alternating): Info */}
                <div className="flex flex-col">
                  <div className="flex items-start gap-5 mb-10">
                    <span className="text-[11px] font-mono text-[#A1A1AA] mt-1 flex-shrink-0">{srv.num}</span>
                    <div>
                      <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-white leading-[1.1] mb-6">
                        {srv.title}
                      </h2>
                      <p className="text-[16px] text-[#A1A1AA] leading-[1.7] max-w-[440px]">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 ml-9">
                    {srv.tags.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-[0.08em] border border-[#1F1F1F] px-2.5 py-1 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT / LEFT (alternating): Features */}
                <div className="flex flex-col justify-center border-l border-[#1F1F1F] pl-12 lg:pl-16 gap-0">
                  {srv.features.map((feat, fidx) => (
                    <div
                      key={fidx}
                      className={`py-7 flex items-start gap-5 group ${fidx !== srv.features.length - 1 ? "border-b border-[#1F1F1F]" : ""}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                      <span className="text-[18px] font-medium text-[#A1A1AA] group-hover:text-white transition-colors leading-tight">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* ── PROCESS STRIP ─────────────────────────────────── */}
      <section className="w-full py-[100px] bg-[#0B0B0B]">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#A1A1AA] mb-16 text-center">
            Deployment Protocol
          </h3>
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0">
            {/* Horizontal Line */}
            <div className="hidden md:block absolute top-[12px] left-[5%] right-[5%] h-[1px] bg-[#1F1F1F]" />
            {PROCESS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-10 flex-1">
                <div className="w-6 h-6 rounded-full bg-[#0B0B0B] border border-[#333] flex items-center justify-center mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                </div>
                <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-[0.1em] mb-1">{step.num}</span>
                <span className="text-[18px] font-semibold text-white">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STRIP ────────────────────────────────────── */}
      <section className="w-full py-10 border-t border-[#1F1F1F] bg-[#0B0B0B]">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center items-center">
            {TECH.map((item, idx) => (
              <span key={item} className="flex items-center gap-8">
                <span className="text-[14px] font-semibold text-white hover:text-[#A1A1AA] transition-colors cursor-default tracking-tight">
                  {item}
                </span>
                {idx < TECH.length - 1 && (
                  <span className="text-[#2A2A2A] text-[18px] font-light select-none">/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="w-full py-[140px] bg-[#0B0B0B]">
        <div className="w-full max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-[44px] md:text-[64px] font-bold text-white leading-[1.05] tracking-tight mb-6">
            Build Systems That<br />
            <span className="text-[#A1A1AA]">Actually Scale.</span>
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#A1A1AA] leading-[1.6] mb-12 max-w-[520px]">
            Work directly with engineers building production-grade infrastructure. No project managers. No templates.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="?contact=true"
              className="h-[44px] px-8 rounded-[6px] bg-white text-black font-medium text-[14px] flex items-center justify-center hover:bg-[#e2e8f0] transition-colors"
            >
              Start Project
            </Link>
            <Link
              href="?contact=true"
              className="h-[44px] px-8 rounded-[6px] border border-[#1F1F1F] text-white font-medium text-[14px] flex items-center justify-center hover:bg-[#121212] transition-colors"
            >
              Discuss Architecture
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

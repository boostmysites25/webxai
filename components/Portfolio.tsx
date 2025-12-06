"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  webPortfolio,
  ecommercePortfolio,
  appPortfolio,
  aiPortfolio,
  blockchainPortfolio,
  chatbotPortfolio,
  gamePortfolio,
  recentPortfolio
} from "@/data/portfolioContent";

/* --------------------------------------------- */
/* SCROLL UTILS                                  */
/* --------------------------------------------- */
function setupAutoScroll(ref: any, speed = 0.5) {
  if (!ref.current) return;
  let pos = 0;
  let interval: any = null;

  const start = () => {
    interval = setInterval(() => {
      if (!ref.current) return;
      pos += speed;
      if (pos >= ref.current.scrollWidth - ref.current.clientWidth) pos = 0;
      ref.current.scrollTo({ left: pos, behavior: "auto" });
    }, 20);
  };

  const stop = () => clearInterval(interval);
  start();

  ref.current.addEventListener("mouseenter", stop);
  ref.current.addEventListener("mouseleave", start);

  return () => {
    stop();
    ref.current?.removeEventListener("mouseenter", stop);
    ref.current?.removeEventListener("mouseleave", start);
  };
}

/* --------------------------------------------- */
/* COMPONENT                                     */
/* --------------------------------------------- */
export default function Portfolio() {
  return (
    <section className="relative py-[160px] px-6 w-full overflow-hidden bg-[#05050A]">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-48 bg-linear-to-b from-[#05050A] to-transparent z-20" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#05050A] to-transparent z-20" />
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <h2 className="text-center text-5xl font-extrabold text-white mb-5" data-aos="fade-up">
          Our Portfolio
        </h2>
        <p
          className="text-center text-soft text-lg max-w-2xl mx-auto mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Selected digital products built for scale, performance, and impact.
        </p>

        {/* RECENT PROJECTS (TOP FEATURE) */}
        <PortfolioGroup title="Recent & Featured" items={recentPortfolio} />

        <PortfolioGroup title="Web Development" items={webPortfolio} />
        <PortfolioGroup title="E-Commerce" items={ecommercePortfolio} />
        <PortfolioGroup title="App Development" items={appPortfolio} />
        <PortfolioGroup title="AI Solutions" items={aiPortfolio} />
        <PortfolioGroup title="Blockchain" items={blockchainPortfolio} />
        <PortfolioGroup title="Chatbots" items={chatbotPortfolio} />
        <PortfolioGroup title="Game Development" items={gamePortfolio} />
      </div>
    </section>
  );
}

function PortfolioGroup({ title, items }: any) {
  const scrollRef = useRef<any>(null);

  useEffect(() => setupAutoScroll(scrollRef, 0.8), []);

  return (
    <div className="mb-24 relative" data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-white text-3xl font-semibold mb-8 px-4 border-l-4 border-blue-500 ml-4">
        {title}
      </h3>

      <div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-hidden py-8 px-4 cursor-pointer no-scrollbar"
      >
        {items.map((item: any) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function PortfolioCard({ item }: any) {
  // Use the internal case study link
  const linkUrl = `/portfolio/${item.id}`;

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block min-w-[360px] max-w-[360px] rounded-2xl bg-[#0A0A0C]/80 backdrop-blur-xl 
      border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]
      hover:border-white/25 hover:shadow-[0_0_40px_rgba(100,200,255,0.15)]
      transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
    >
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized // To handle external/local paths flexibly
        />
      </div>

      <div className="p-6">
        <h3 className="text-white text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-soft text-sm leading-relaxed opacity-80 h-[60px] overflow-hidden">
          {item.description}
        </p>

        <div className="mt-4 flex items-center text-blue-400 text-sm font-medium">
          View Case Study <span className="ml-2">→</span>
        </div>
      </div>
    </a>
  );
}

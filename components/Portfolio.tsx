"use client";
import { useEffect, useRef } from "react";

/* --------------------------------------------- */
/* AUTO SCROLL + PAUSE ON HOVER                  */
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

      ref.current.scrollTo({
        left: pos,
        behavior: "smooth", // smoother scroll
      });
    }, 40);
  };

  const stop = () => clearInterval(interval);

  start();

  // Pause on hover
  ref.current.addEventListener("mouseenter", stop);
  ref.current.addEventListener("mouseleave", start);

  return () => {
    stop();
    ref.current?.removeEventListener("mouseenter", stop);
    ref.current?.removeEventListener("mouseleave", start);
  };
}

/* --------------------------------------------- */
/* CONTENT                                       */
/* --------------------------------------------- */
const DEMO_IMAGES = [
  "https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg",
  "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg",
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
  "https://images.pexels.com/photos/3861965/pexels-photo-3861965.jpeg",
  "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg",
  "https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg",
  "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg",
  "https://images.pexels.com/photos/3862613/pexels-photo-3862613.jpeg",
];

const categories = {
  web: [
    "Booking Management System",
    "SaaS Dashboard Platform",
    "E-Commerce Storefront",
    "Portfolio CMS",
    "Real Estate Listing Portal",
    "Learning Management System",
    "Inventory Management UI",
    "Food Ordering Web App",
    "Marketing Landing System",
    "Corporate Website Redesign",
  ],
  app: [
    "Fitness Tracking App",
    "Medical Appointment App",
    "Food Delivery Mobile App",
    "Personal Finance Manager",
    "Cryptocurrency Portfolio App",
    "Real-Time Chat App",
    "Travel Planner App",
    "Learning App",
    "Marketplace Mobile App",
    "Wellness Coaching App",
  ],
  ai: [
    "AI Chatbot Assistant",
    "Document Summarizer AI",
    "AI Content Generator",
    "Customer Support Automation",
    "Fraud Detection Model",
    "Product Recommendation Engine",
    "Predictive Analytics AI",
    "Voice-to-Text System",
    "AI Resume Analyzer",
    "Smart Workflow Engine",
  ],
  data: [
    "Business Analytics Dashboard",
    "Sales Forecasting System",
    "KPI Visualization Suite",
    "Log Monitoring Dashboard",
    "Financial Reporting System",
    "Healthcare Analytics",
    "Marketing Insights Board",
    "Operational Metrics Panel",
    "Performance Data Studio",
    "Data Warehouse Explorer",
  ],
};

/* --------------------------------------------- */
/* PORTFOLIO SECTION                              */
/* --------------------------------------------- */
export default function Portfolio() {
  return (
    <section className="relative py-[200px] px-6 w-full overflow-hidden bg-[#05050A]">

      {/* TOP + BOTTOM FADES */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#05050A] to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#05050A] to-transparent z-20"></div>

      {/* MULTI-LAYER GRID */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* NEON VERTICAL LINES */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute left-[18%] w-[3px] h-full bg-gradient-to-b from-blue-400/40 to-transparent blur-sm" />
        <div className="absolute left-1/2 w-[3px] h-full bg-gradient-to-b from-purple-400/40 to-transparent blur-sm" />
        <div className="absolute left-[80%] w-[3px] h-full bg-gradient-to-b from-blue-300/30 to-transparent blur-sm" />
      </div>

      {/* DIAGONAL AURAS */}
      <div className="absolute -top-52 left-0 w-[1200px] h-[350px] bg-gradient-to-r from-blue-600/25 to-purple-500/15 blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[1200px] h-[350px] bg-gradient-to-r from-purple-600/25 to-blue-500/15 blur-[160px]" />

      {/* MICRO PARTICLES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.5]">
        <div className="absolute top-[38%] left-[30%] w-[3px] h-[3px] bg-blue-300 rounded-full animate-ping" />
        <div className="absolute top-[55%] left-[62%] w-[2px] h-[2px] bg-purple-300 rounded-full animate-pulse" />
        <div className="absolute top-[70%] left-[48%] w-[2px] h-[2px] bg-white/70 rounded-full animate-ping" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1300px] mx-auto">
        <h2 className="text-center text-5xl font-extrabold text-white mb-5">Our Portfolio</h2>

        <p className="text-center text-soft text-lg max-w-2xl mx-auto mb-20">
          Explore our selected digital products across Web, App, AI and Data engineering.
        </p>

        {/* GROUPS */}
        <PortfolioGroup title="Web Development" items={categories.web} />
        <PortfolioGroup title="App Development" items={categories.app} />
        <PortfolioGroup title="AI Development" items={categories.ai} />
        <PortfolioGroup title="Data Analytics" items={categories.data} />
      </div>
    </section>
  );
}

/* --------------------------------------------- */
/* GROUP                                         */
/* --------------------------------------------- */
function PortfolioGroup({ title, items }: any) {
  const scrollRef = useRef<any>(null);

  useEffect(() => setupAutoScroll(scrollRef, 0.4), []);

  return (
    <div className="mb-28 relative">

      {/* FADES */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#05050A] to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#05050A] to-transparent pointer-events-none z-20" />

      <h3 className="text-center text-white text-3xl font-semibold mb-10">{title}</h3>

      <div ref={scrollRef} className="flex space-x-6 overflow-hidden py-6 cursor-pointer">
        {items.map((name: string, i: number) => (
          <PortfolioCard
            key={i}
            title={name}
            category={title}
            desc="A high-quality digital solution crafted for modern businesses."
            img={DEMO_IMAGES[i % DEMO_IMAGES.length]}
          />
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------- */
/* CARD                                          */
/* --------------------------------------------- */
function PortfolioCard({ title, desc, img, category }: any) {
  return (
    <div
      className="min-w-[320px] rounded-2xl bg-[#0A0A0C]/70 backdrop-blur-xl 
      border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.45)]
      hover:border-white/20 hover:shadow-[0_0_45px_rgba(120,80,255,0.45)]
      transition-all overflow-hidden"
    >
      <img src={img} className="w-full h-[200px] object-cover opacity-95" />
      <div className="p-5">
        <p className="text-[#9BA0B0] text-xs uppercase mb-1">{category}</p>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-soft text-sm mt-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

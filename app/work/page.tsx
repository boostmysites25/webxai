"use client";

import { useEffect, useRef } from "react";

/* ------------ AUTOSCROLL FUNCTION ------------ */
function autoScroll(ref: any, direction: "ltr" | "rtl") {
  if (!ref.current) return;

  let pos = direction === "ltr" ? 0 : ref.current.scrollWidth;
  const speed = 1.1;

  const id = setInterval(() => {
    if (!ref.current) return;

    pos = direction === "ltr" ? pos + speed : pos - speed;

    if (direction === "ltr") {
      if (pos >= ref.current.scrollWidth - ref.current.clientWidth) pos = 0;
    } else {
      if (pos <= 0) pos = ref.current.scrollWidth;
    }

    ref.current.scrollTo({ left: pos });
  }, 20);

  return () => clearInterval(id);
}

/* ------------ DEMO IMAGES (RELIABLE) ------------ */
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

/* ------------ PROJECT TITLES ------------ */
const categories = {
  web: [
    "Booking Management Platform",
    "SaaS Analytics Dashboard",
    "E-Commerce Storefront",
    "Real Estate Portal",
    "Corporate Website Revamp",
    "LMS Education Platform",
    "Marketing Landing System",
    "Finance Dashboard",
    "Event Ticketing Web App",
    "Portfolio CMS",
  ],
  app: [
    "Fitness Mobile App",
    "Wellness Habit Tracker",
    "Food Delivery App",
    "Crypto Portfolio App",
    "Appointment Scheduling App",
    "Travel Planner App",
    "Messenger Mobile App",
    "Hotel Booking App",
    "Productivity App",
    "Marketplace App",
  ],
  ai: [
    "AI Support Chatbot",
    "Document Summarizer AI",
    "Product Recommendation Engine",
    "Fraud Detection AI",
    "Predictive Insights Model",
    "AI Resume Analyzer",
    "Workflow Automation AI",
    "Voice-to-Text AI",
    "Sales Prediction AI",
    "Smart Content Generator",
  ],
  data: [
    "Sales Forecast Dashboard",
    "Executive Analytics Suite",
    "Real-Time KPI Dashboard",
    "Log Monitoring Analytics",
    "Healthcare Insights Panel",
    "Marketing Performance Studio",
    "Revenue Data Explorer",
    "Team Productivity Insights",
    "Operational Metrics Board",
    "Data Warehouse Visualizer",
  ],
};

/* ------------ WORKS PAGE ------------ */
export default function WorksPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden">

      {/* GLOBAL BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      {/* HERO GLOW */}
      <div className="absolute -top-40 left-0 w-[1200px] h-[300px] bg-gradient-to-r from-purple-600/40 to-blue-500/40 blur-[110px]" />
      <div className="absolute bottom-[-200px] right-0 w-[1200px] h-[300px] bg-gradient-to-r from-blue-600/40 to-purple-500/40 blur-[110px]" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 py-[160px]">

        {/* PAGE TITLE */}
        <div className="text-center mb-[120px]">
          <h1 className="text-[70px] md:text-[90px] font-extrabold mb-6 leading-[1.05]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Works</span>
          </h1>
          <p className="text-soft text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Explore our projects across Web, App, AI and Data Engineering — built for performance, scale and design precision.
          </p>
        </div>

        {/* CATEGORIES */}
        <PortfolioGroup title="Web Development" items={categories.web} direction="ltr" />
        <PortfolioGroup title="App Development" items={categories.app} direction="rtl" />
        <PortfolioGroup title="AI Development" items={categories.ai} direction="ltr" />
        <PortfolioGroup title="Data Analytics" items={categories.data} direction="rtl" />

      </div>
    </section>
  );
}

/* ------------ GROUP COMPONENT ------------ */
function PortfolioGroup({ title, items, direction }: any) {
  const ref = useRef<any>(null);

  useEffect(() => autoScroll(ref, direction), []);

  return (
    <div className="mb-[140px] relative">

      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#05050A] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#05050A] to-transparent z-20 pointer-events-none"></div>

      <h3 className="text-center text-4xl font-bold mb-10">
        {title}
      </h3>

      <div
        ref={ref}
        className="flex space-x-6 overflow-x-hidden py-6"
      >
        {items.map((name: string, i: number) => (
          <PortfolioCard
            key={i}
            title={name}
            category={title}
            desc="A high-quality digital product crafted with modern engineering."
            img={DEMO_IMAGES[i % DEMO_IMAGES.length]}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------ CARD COMPONENT ------------ */
function PortfolioCard({ title, desc, img, category }: any) {
  return (
    <div className="min-w-[320px] rounded-2xl bg-[#0A0A0C]/70 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all overflow-hidden">
      <img src={img} className="w-full h-[200px] object-cover opacity-95" />
      <div className="p-5">
        <p className="text-[#9BA0B0] text-xs uppercase mb-1">{category}</p>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-soft text-sm mt-2 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const contents = [
    {
      top: "We Build Intelligent",
      bottom: "Digital Experiences",
      desc: "AI, Apps, Web & Data engineering crafted for ambitious modern brands.",
      buttonPrimaryUrl: "/contact",
      buttonPrimaryText: "Start Project",
      buttonSecondaryUrl: "/work",
      buttonSecondaryText: "View Work"
    },
    {
      top: "Own Your Custom",
      bottom: "Real Estate CRM",
      desc: "Stop paying endlessly. Acquire the complete PropertyFlow CRM platform entirely for your company.",
      buttonPrimaryUrl: "https://propertyflow.webxaitech.com",
      buttonPrimaryText: "Explore Platform",
      buttonSecondaryUrl: "/contact", // Since /contact exists
      buttonSecondaryText: "Get a Quote"
    },
    {
      top: "Automate Workflows With",
      bottom: "AI Assistants",
      desc: "Intelligent conversational agents engineered to scale your customer support and enterprise workflows.",
      buttonPrimaryUrl: "/contact",
      buttonPrimaryText: "Build AI Models",
      buttonSecondaryUrl: "/work",
      buttonSecondaryText: "View Work"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // trigger fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % contents.length);
        setFade(true); // trigger fade in
      }, 400); // 400ms fade transition
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = contents[currentIndex];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#05050A] flex items-center justify-center pt-[180px] md:pt-[220px] pb-[160px] md:pb-[200px]">

      {/* ---- BOTTOM FADE ONLY ---- */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-[#05050A] to-transparent pointer-events-none z-20"></div>

      {/* --- FUTURISTIC GRID (responsive) --- */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* --- NEON LINES --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="hidden md:block absolute left-1/4 top-0 w-[2px] h-full bg-linear-to-b from-purple-400/50 to-transparent blur-sm" />
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-linear-to-b from-blue-400/50 to-transparent blur-sm" />
        <div className="hidden md:block absolute left-[70%] top-0 w-[2px] h-full bg-linear-to-b from-purple-400/40 to-transparent blur-sm" />
      </div>

      {/* --- DIAGONAL GLOW BARS --- */}
      <div className="absolute -top-40 md:-top-72 -left-20 md:-left-40 w-[800px] md:w-[1500px] h-[200px] md:h-[340px] rotate-[-20deg] bg-linear-to-r from-blue-600/40 to-purple-500/30 blur-[100px]" />
      <div className="absolute bottom-[-160px] md:bottom-[-240px] right-[-100px] md:-right-40 w-[800px] md:w-[1500px] h-[200px] md:h-[340px] rotate-[18deg] bg-linear-to-r from-purple-600/35 to-blue-400/30 blur-[100px]" />

      {/* --- LIGHT STREAKS --- */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-[25%] left-[-10%] w-[40%] h-[6px] bg-linear-to-r from-transparent via-white/20 to-transparent rotate-[20deg] blur-md opacity-40 animate-sweep" />
        <div className="absolute top-[60%] right-[-10%] w-[45%] h-[6px] bg-linear-to-r from-transparent via-white/15 to-transparent rotate-[-18deg] blur-md opacity-30 animate-sweep-slow" />
      </div>

      {/* --- PARTICLES --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[28%] w-1 h-1 bg-white/70 rounded-full animate-pulse" />
        <div className="absolute top-[40%] left-[68%] w-1 h-1 bg-blue-300 rounded-full animate-ping" />
        <div className="absolute top-[57%] left-[45%] w-[3px] h-[3px] bg-purple-300 rounded-full animate-ping" />
        <div className="absolute top-[67%] left-[50%] w-1 h-1 bg-white/40 rounded-full animate-pulse" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[1000px]">
        <style jsx>{`
          @keyframes customFade {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-custom-fade {
            animation: customFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>

        <div key={currentIndex} className="animate-custom-fade">
          <h1 className="text-white font-extrabold leading-[1.1] tracking-tight mb-8 min-h-[100px] sm:min-h-[140px] md:min-h-[180px] lg:min-h-[220px]">
            <span className="block text-[32px] sm:text-[42px] md:text-[62px] lg:text-[76px] xl:text-[92px]">
              {current.top}
            </span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-blue-500 text-[40px] sm:text-[50px] md:text-[70px] lg:text-[86px] xl:text-[102px]">
              {current.bottom}
            </span>
          </h1>

          <p className="text-soft text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed max-w-3xl mx-auto mb-10 md:mb-12 opacity-95 min-h-[50px]">
            {current.desc}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16">
            {/* Start Project */}
            <Link
              href={current.buttonPrimaryUrl}
              className={`w-full sm:w-auto min-w-[180px] px-7 py-3 sm:px-12 sm:py-4 rounded-lg sm:rounded-xl bg-linear-to-r from-blue-600/30 to-purple-600/30 border border-white/20 text-white text-sm sm:text-lg font-medium backdrop-blur-xl transition hover:from-blue-600/40 hover:to-purple-600/40 text-center`}
            >
              {current.buttonPrimaryText}
            </Link>

            {/* View Work */}
            <Link
              href={current.buttonSecondaryUrl}
              className={`w-full sm:w-auto min-w-[180px] px-7 py-3 sm:px-12 sm:py-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/15 text-white text-sm sm:text-lg hover:bg-white/10 hover:border-white/25 transition backdrop-blur-xl text-center`}
            >
              {current.buttonSecondaryText}
            </Link>
          </div>
        </div>

        {/* METRICS */}
        <div className="w-full border-t border-white/10 pt-10 flex flex-wrap justify-center items-center gap-10 md:gap-20" data-aos="fade-up" data-aos-delay="300">

          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">40+</p>
            <p className="text-soft text-sm uppercase tracking-widest">Projects</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-white/10"></div>

          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">15+</p>
            <p className="text-soft text-sm uppercase tracking-widest">AI Systems</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-white/10"></div>

          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl font-bold text-white mb-2">99%</p>
            <p className="text-soft text-sm uppercase tracking-widest">Satisfaction</p>
          </div>

        </div>

      </div>
    </section>
  );
}

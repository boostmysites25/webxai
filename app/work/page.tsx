"use client";
import React, { useRef } from "react";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  webPortfolio,
  ecommercePortfolio,
  appPortfolio,
  aiPortfolio,
  blockchainPortfolio,
  chatbotPortfolio,
  gamePortfolio,
  recentPortfolio,
} from "@/data/portfolioContent";

export default function WorkPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden">
      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      {/* NEON LINES */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-linear-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-linear-to-b from-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-linear-to-b from-purple-400/30 to-transparent blur-sm"></div>
      </div>

      {/* GLOWS */}
      <div className="absolute -top-40 left-0 w-[1200px] h-[300px] bg-linear-to-r from-blue-600/30 to-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-250px] right-[-150px] w-[1300px] h-[300px] bg-linear-to-r from-purple-600/30 to-blue-400/30 blur-[120px]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-[160px]">
        {/* HERO TITLE - Matches About/Contact Style */}
        <div className="text-center mb-[140px]" data-aos="fade-up">
          <h1 className="text-[70px] md:text-[95px] font-extrabold leading-[1.05] mb-6">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-blue-500">
              Work
            </span>
          </h1>

          <p
            className="text-soft text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Selected digital products built for scale, performance, and impact.
          </p>
        </div>

        {/* PORTFOLIO CONTENT - Groups */}
        <PortfolioGroup title="Recent & Featured" items={recentPortfolio} />
        <PortfolioGroup title="Web Development" items={webPortfolio} />
        <PortfolioGroup title="E-Commerce" items={ecommercePortfolio} />
        <PortfolioGroup title="App Development" items={appPortfolio} />
        <PortfolioGroup title="AI Solutions" items={aiPortfolio} />
        <PortfolioGroup title="Blockchain" items={blockchainPortfolio} />
        <PortfolioGroup title="Chatbots" items={chatbotPortfolio} />
        <PortfolioGroup title="Game Development" items={gamePortfolio} />

        {/* FAQ */}
        <div className="mt-[160px] mb-[160px]">
          <FAQ />
        </div>

        {/* CTA */}
        <div className="text-center py-[100px]" data-aos="fade-up">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Build Your Project?
          </h3>
          <button
            className="px-14 py-5 rounded-xl text-white text-lg font-medium 
            bg-linear-to-r from-blue-600/40 to-purple-600/40 
            border border-white/20 backdrop-blur-xl 
            hover:from-blue-600/50 hover:to-purple-600/50 transition"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------- */
/* SUB COMPONENTS (Duplicated from Portfolio.tsx)*/
/* --------------------------------------------- */

function PortfolioGroup({ title, items }: any) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const carouselSettings = {
    modules: [Autoplay, Navigation],
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    onBeforeInit: (swiper: any) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    },
  };

  return (
    <div className="mb-24 relative" data-aos="fade-up" data-aos-delay="200">
      <div className="flex justify-between items-center mb-8 px-4">
        <h3 className="text-white text-3xl font-semibold border-l-4 border-blue-500 ml-4 pl-4">
          {title}
        </h3>
        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500/20 flex items-center justify-center transition-all border border-white/20 hover:border-blue-500"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500/20 flex items-center justify-center transition-all border border-white/20 hover:border-blue-500"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-4">
        <Swiper {...carouselSettings} className="w-full">
          {items.map((item: any) => (
            <SwiperSlide key={item.id}>
              <PortfolioCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function PortfolioCard({ item }: any) {
  const linkUrl = `/portfolio/${item.id}`;

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl bg-[#0A0A0C]/80 backdrop-blur-xl 
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
          unoptimized
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

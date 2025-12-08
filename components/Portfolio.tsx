"use client";
import React, { useRef } from "react";
import Image from "next/image";
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
  // Use the internal case study link
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

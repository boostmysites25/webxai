"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How fast can we start?",
    a: "We can onboard and scope your architecture within 48 hours. Sprint execution typically begins within the first week.",
  },
  {
    q: "What industries do you support?",
    a: "SaaS, Fintech, E-Commerce, HealthTech, and AI-native platforms. If you have a scalable problem, we can engineer a solution.",
  },
  {
    q: "Do you handle scaling?",
    a: "Yes. Our systems are designed to scale horizontally from day one. We set up auto-scaling, monitoring, and redundancy by default.",
  },
  {
    q: "What is the pricing model?",
    a: "Project-based or retainer. Scoped after the initial architecture intake. No hourly billing, no surprises.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-[120px] lg:py-[160px] bg-[#0B0B0B]">
      <div className="w-full max-w-[1200px] mx-auto px-6">

        <div className="mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight text-white leading-[1.1]">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col border-t border-[#1F1F1F]">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border-b border-[#1F1F1F]">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-[16px] font-medium text-white group-hover:text-[#A1A1AA] transition-colors pr-8">
                  {faq.q}
                </span>
                <span className={`text-[#A1A1AA] text-[20px] font-light flex-shrink-0 transition-transform duration-200 ${open === idx ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === idx ? "max-h-[200px] pb-6" : "max-h-0"
                }`}
              >
                <p className="text-[14px] text-[#A1A1AA] leading-[1.7] max-w-[680px]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

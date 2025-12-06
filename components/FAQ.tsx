"use client";
import React, { useState } from "react";

const faqs = [
    {
        question: "How long does a project take?",
        answer: "Most projects take 3–8 weeks depending on complexity. We follow a strict timeline to ensure timely delivery without compromising quality."
    },
    {
        question: "Do you offer maintenance?",
        answer: "Yes, we provide comprehensive monthly or yearly maintenance packages including updates, security patches, and content changes."
    },
    {
        question: "Can you integrate AI into existing systems?",
        answer: "Absolutely. We specialize in retrofitting AI modules into legacy systems to enhance automation, data analysis, and user interaction."
    },
    {
        question: "Do you work with startups?",
        answer: "Yes, we work with ambitious startups, established enterprises, and agencies looking for a reliable technical partner."
    },
    {
        question: "What is your pricing model?",
        answer: "We offer both fixed-price project based models and dedicated team retainer models depending on the long-term needs of your business."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-14" data-aos="fade-up">
                Frequently Asked Questions
            </h2>
            <div data-aos="fade-up"
                className="space-y-4">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === i ? "bg-white/10 border-blue-500/30" : "bg-white/5 hover:bg-white/10"
                            }`}

                    >
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                        >
                            <span className="text-lg md:text-xl font-semibold text-white/90 pr-4">{faq.question}</span>
                            <span className={`text-2xl text-blue-400 transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-45" : "rotate-0"}`}>
                                +
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="p-6 pt-0 text-gray-400 leading-relaxed font-light">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

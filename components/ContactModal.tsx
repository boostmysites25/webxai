"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const OPTIONS = [
  "Build a New System",
  "Scale Existing Product",
  "Automate Internal Processes",
  "Just Exploring"
];

function ModalContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("contact") === "true";

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  if (!isOpen) return null;

  const close = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("contact");
    router.replace(`?${newParams.toString()}`, { scroll: false });
  };

  const selectOption = (option: string) => {
    document.body.style.overflow = "auto";
    const encoded = encodeURIComponent(option);
    router.push(`/contact?intent=${encoded}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0B0B]/90 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="w-full max-w-[500px] bg-[#0A0A0A] border border-[#1F1F1F] p-8 flex flex-col relative shadow-2xl">
        
        {/* Close Button */}
        <button onClick={close} className="absolute top-6 right-6 text-[#A1A1AA] hover:text-white transition-colors text-[20px] leading-none">
          ✕
        </button>

        {/* Modal Header */}
        <div className="mb-10 text-center">
          <h2 className="text-[28px] font-bold text-white tracking-tight leading-[1.2] mb-3">
            Start Your Architecture Build
          </h2>
          <p className="text-[14px] text-[#A1A1AA]">
            Select what you need help with:
          </p>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {OPTIONS.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => selectOption(opt)}
              className="w-full text-left px-6 py-4 bg-[#121212] border border-[#1F1F1F] text-white text-[15px] hover:bg-[#1A1A1A] hover:border-[#333] transition-colors flex items-center justify-between group"
            >
              <span>{opt}</span>
              <span className="text-[#A1A1AA] group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default function ContactModal() {
  return (
    <Suspense fallback={null}>
      <ModalContent />
    </Suspense>
  );
}

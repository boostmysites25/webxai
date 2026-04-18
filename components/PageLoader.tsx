"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const [phase, setPhase] = useState<"loading" | "exit" | "done">("loading");
  const pathname = usePathname();

  useEffect(() => {
    // Reset loader on route change
    setPhase("loading");
    
    // Start exit animation slightly earlier (0.75s) to match the faster SVG animation
    const exitTimer = setTimeout(() => setPhase("exit"), 750);
    // Fully unmount after fade out
    const doneTimer = setTimeout(() => setPhase("done"), 1000);

    return () => { clearTimeout(exitTimer); clearTimeout(doneTimer); };
  }, [pathname]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0B0B]"
      style={{
        transition: "opacity 0.3s ease",
        opacity: phase === "exit" ? 0 : 1,
        pointerEvents: phase === "exit" ? "none" : "auto",
      }}
    >
      <div 
        className="relative flex items-center justify-center w-[80px] h-[80px]"
        style={{ animation: "loaderScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) both" }}
      >
        {/* Animated Circle SVG */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          className="absolute inset-0 z-0"
        >
          <circle
            cx="40"
            cy="40"
            r="38"
            fill="none"
            stroke="#1F1F1F"
            strokeWidth="1.5"
          />
          <circle
            cx="40"
            cy="40"
            r="38"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-circle-fill"
            style={{
              strokeDasharray: 240,
              strokeDashoffset: 240,
              transformOrigin: "center",
              transform: "rotate(-90deg)"
            }}
          />
        </svg>

        {/* Logo */}
        <div className="w-10 h-10 rounded-[6px] overflow-hidden relative z-10">
          <img src="/logo.png" alt="WebX AI" className="w-full h-full object-contain" />
        </div>
        
      </div>
    </div>
  );
}

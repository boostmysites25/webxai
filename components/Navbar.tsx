"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Capabilities", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0B0B]/85 backdrop-blur-[12px] border-b border-[#1F1F1F] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">

        {/* ─── LOGO UNIT ─── */}
        <Link
          href="/"
          className="flex items-center gap-2 group shrink-0"
        >
          <div className="w-[26px] h-[26px] rounded-[5px] overflow-hidden flex items-center justify-center shrink-0 opacity-95 group-hover:opacity-100 transition-opacity">
            <img src="/logo.png" alt="WebX AI" className="w-full h-full object-contain" />
          </div>
          <span className="text-[15px] tracking-[-0.01em] leading-none select-none">
            <span className="font-semibold text-white">WebX</span>
            <span className="font-medium text-[#A1A1AA] ml-[2px]"> AI</span>
          </span>
        </Link>

        {/* ─── CENTRE NAV ─── */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-white bg-white/[0.06]"
                    : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* ─── CTA ─── */}
        <Link
          href="?contact=true"
          className="h-[33px] px-5 rounded-[6px] bg-white text-black font-semibold text-[13px] flex items-center justify-center transition-all hover:bg-[#F0F0F0] hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] shrink-0"
        >
          Start Project
        </Link>

      </nav>
    </header>
  );
}

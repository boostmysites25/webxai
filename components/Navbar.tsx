"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2 group shrink-0 relative z-[100]"
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

        {/* ─── CTA & MOBILE TOGGLE ─── */}
        <div className="flex items-center gap-4">
          <Link
            href="?contact=true"
            className="hidden md:flex h-[33px] px-5 rounded-[6px] bg-white text-black font-semibold text-[13px] items-center justify-center transition-all hover:bg-[#F0F0F0] hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] shrink-0"
          >
            Start Project
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-[100] relative"
            aria-label="Toggle Menu"
          >
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${mobileOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${mobileOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
          </button>
        </div>

      </nav>

      {/* ─── MOBILE MENU OVERLAY ─── */}
      <div 
        className={`fixed inset-0 w-full min-h-screen bg-[#0B0B0B] z-[90] flex flex-col pt-[100px] px-8 md:hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="flex flex-col gap-8 mt-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[28px] font-medium tracking-tight transition-colors ${
                  isActive ? "text-white" : "text-[#888888] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <div className="h-[1px] w-full bg-[#1F1F1F] my-2" />
          
          <Link
            href="?contact=true"
            onClick={() => setMobileOpen(false)}
            className="h-[52px] w-full rounded-[6px] bg-white text-black font-semibold text-[15px] flex items-center justify-center transition-all hover:bg-[#F0F0F0]"
          >
            Start Project
          </Link>
        </div>
      </div>
    </header>
  );
}

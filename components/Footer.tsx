import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#05050A] pt-20 pb-12 text-white relative">
      {/* TOP GRID */}
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* COLUMN 1 — Logo + Text */}
        <div data-aos="fade-up">
          <Link
              href="/" className="flex items-center gap-3 mb-5 w-fit">
            {/* Glossy Logo Container */}
            <div
              className="relative p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
            >
              {/* Gloss highlight */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-white/40/10 to-transparent opacity-20 pointer-events-none" />

              <Image
                src="/logo.png"
                width={48}
                height={48}
                className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
                alt="WebX AI Logo"
              />
            </div>

            <h1 className="text-2xl font-semibold tracking-tight">
              WebX{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                AI
              </span>
            </h1>
          </Link>

          <p className="text-soft text-[15px] leading-relaxed max-w-xs mb-6">
            Engineering intelligent digital systems with precision, speed and
            futuristic design thinking.
          </p>

          {/* SOCIAL ICONS — ONLY INSTAGRAM + LINKEDIN */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/webx.ai?igsh=cHQzOTh3M3V3cDM2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 opacity-80" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/webxai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 opacity-80" />
            </a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-soft text-[15px]">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition-colors"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-soft text-[15px]">
            <li>
              <Link href="/work" className="hover:text-white transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-white/10 mt-16 mb-8" />

      {/* BOTTOM AREA */}
      <div
        className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-soft text-sm gap-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p>© 2025 WebX AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

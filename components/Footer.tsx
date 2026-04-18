import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0B]">
      <div className="w-full max-w-[1200px] mx-auto px-6 pt-[80px] pb-10 border-t border-[#1F1F1F]">

        {/* ─── MAIN GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1F1F1F]">

          {/* Column 1: Brand — wider */}
          <div className="md:col-span-4 flex flex-col gap-5">

            {/* Logo Icon */}
            <Link href="/" className="group w-fit">
              <div className="w-8 h-8 rounded-[6px] overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity">
                <img src="/logo.png" alt="WebX AI" className="w-full h-full object-contain" />
              </div>
            </Link>

            {/* Brand Name */}
            <div>
              <p className="text-[16px] font-semibold text-white tracking-tight leading-none mb-3">
                WebX<span className="text-[#A1A1AA] font-medium"> AI</span>
              </p>
              <p className="text-[13px] leading-[1.65] text-[#555] max-w-[260px]">
                Deterministic AI systems and automated architectures built for enterprise scale.
              </p>
            </div>

          </div>

          {/* Column 2: Platform */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#555] mb-1">Platform</h4>
            <Link href="/" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">Home</Link>
            <Link href="/about" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">About</Link>
            <Link href="/services" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">Capabilities</Link>
            <Link href="/work" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">Work</Link>
          </div>

          {/* Column 3: Resources */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#555] mb-1">Resources</h4>
            <Link href="/blog" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">Engineering Blog</Link>
            <Link href="/about" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">Studio Philosophy</Link>
            <Link href="/contact" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">Start a Project</Link>
          </div>

          {/* Column 4: Legal & Social */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#555] mb-1">Legal & Social</h4>
            <Link href="/privacy" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">Privacy Policy</Link>
            <Link href="/terms" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">Terms of Service</Link>
            <a href="https://www.linkedin.com/company/webxai/" target="_blank" rel="noreferrer" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">LinkedIn ↗</a>
            <a href="https://www.instagram.com/webx.ai" target="_blank" rel="noreferrer" className="text-[13px] text-[#A1A1AA] hover:text-white transition-colors w-fit">Instagram ↗</a>
          </div>

        </div>

        {/* ─── BOTTOM ROW ─── */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-[#3F3F3F] font-mono">
            © {new Date().getFullYear()} WebX AI Systems. All rights reserved.
          </p>
          <div className="flex gap-2 items-center">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7C3AED]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#555]">All Systems Nominal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

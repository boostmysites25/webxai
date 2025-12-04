export default function Footer() {
  return (
    <footer className="w-full bg-[#05050A] pt-20 pb-12 text-white relative">

      {/* TOP GRID */}
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* COLUMN 1 — Logo + Text */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-xl bg-white">
              <img
                src="/logo.png"
                className="w-12 h-12 object-contain"
                alt="WebX AI Logo"
              />
            </div>

            <h1 className="text-3xl font-bold">
              WebX{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                AI
              </span>
            </h1>
          </div>

          <p className="text-soft text-[15px] leading-relaxed max-w-xs mb-6">
            Engineering intelligent digital systems with precision, speed and futuristic design thinking.
          </p>

          {/* SOCIAL ICONS — ONLY INSTAGRAM + LINKEDIN */}
          <div className="flex items-center gap-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/webx.ai?igsh=cHQzOTh3M3V3cDM2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm4.75-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/webxai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01 2.5 2.5 0 01.01-5.01zM3 9h4v12H3zM15.5 9c-2.33 0-3.5 1.17-4 2v-2H7v12h4v-6.5c0-1.5.5-3 2.5-3 2 0 2 1.67 2 3.25V21h4v-6.75C19.5 10.67 17.5 9 15.5 9z"/>
              </svg>
            </a>

          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-soft text-[15px]">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-soft text-[15px]">
            <li>Web Development</li>
            <li>App Development</li>
            <li>AI Development</li>
            <li>Data Analytics</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-soft text-[15px]">
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Process</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full h-px bg-white/10 mt-16 mb-8" />

      {/* BOTTOM AREA */}
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-soft text-sm gap-4">
        <p>© 2025 WebX AI. All rights reserved.</p>

        <div className="flex gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

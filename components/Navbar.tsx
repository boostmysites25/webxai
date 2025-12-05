"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Works", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#05050A]/70 backdrop-blur-xl border-b border-white/10">
        <nav className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

          {/* BRAND */}
<Link href="/" className="flex items-center gap-2">
  <div className="p-1.5 rounded-xl bg-white/5 border border-white/10">
    <img
      src="/logo.png"
      className="w-10 h-10 object-contain"   // slightly bigger than before
      alt="WebX AI"
    />
  </div>

  <h1 className="text-2xl font-bold tracking-tight">
    WebX{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
      AI
    </span>
  </h1>
</Link>


          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-[16px] transition ${
                    active ? "text-white font-semibold" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* CTA BUTTON → OPEN MODAL */}
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 rounded-xl text-white text-[15px] font-medium
              bg-gradient-to-r from-blue-600/40 to-purple-600/40
              border border-white/20 backdrop-blur-xl
              hover:from-blue-600/60 hover:to-purple-600/60 transition
              shadow-[0_0_18px_rgba(0,0,0,0.25)]"
            >
              Start Project
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
            {open ? "✖" : "☰"}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-[#05050A]/90 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-5">
            {navItems.map((item) => {
              const active = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block text-lg ${
                    active ? "text-white font-semibold" : "text-white/70"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}

            <button
              onClick={() => {
                setOpen(false);
                setModalOpen(true);
              }}
              className="block w-full text-center mt-4 px-6 py-3 rounded-xl text-white text-lg font-medium
              bg-gradient-to-r from-blue-600/40 to-purple-600/40 border border-white/20
              backdrop-blur-xl hover:from-blue-600/60 hover:to-purple-600/60 transition"
            >
              Start Project
            </button>
          </div>
        )}
      </header>

      {/* PROJECT FORM MODAL */}
      {modalOpen && <ProjectModal close={() => setModalOpen(false)} />}
    </>
  );
}

/* -------------------------------------------------- */
/* UPDATED PROJECT MODAL WITH COUNTRY CODE            */
/* -------------------------------------------------- */

function ProjectModal({ close }: any) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-xl flex items-center justify-center px-6">
      <div className="relative w-full max-w-2xl bg-white/5 border border-white/10 rounded-3xl backdrop-blur-2xl p-10 shadow-[0_0_35px_rgba(0,0,0,0.5)]">

        {/* CLOSE BTN */}
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={close}
        >
          ✖
        </button>

        <h2 className="text-4xl font-bold mb-6">Start Your Project</h2>

        <form className="space-y-6">

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Email" />
          </div>

          {/* COUNTRY CODE + PHONE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* COUNTRY CODE SELECT */}
            <select className="input">
              <option value="">Select Country Code</option>
              <option value="+91">🇮🇳 India (+91)</option>
              <option value="+1">🇺🇸 USA (+1)</option>
              <option value="+44">🇬🇧 UK (+44)</option>
              <option value="+61">🇦🇺 Australia (+61)</option>
              <option value="+971">🇦🇪 UAE (+971)</option>
              <option value="+81">🇯🇵 Japan (+81)</option>
              <option value="+49">🇩🇪 Germany (+49)</option>
              <option value="+33">🇫🇷 France (+33)</option>
              <option value="+34">🇪🇸 Spain (+34)</option>
              <option value="+39">🇮🇹 Italy (+39)</option>
              <option value="+65">🇸🇬 Singapore (+65)</option>
              <option value="+94">🇱🇰 Sri Lanka (+94)</option>
              <option value="+92">🇵🇰 Pakistan (+92)</option>
              <option value="+880">🇧🇩 Bangladesh (+880)</option>
              <option value="+973">🇧🇭 Bahrain (+973)</option>
              <option value="+974">🇶🇦 Qatar (+974)</option>
              <option value="+966">🇸🇦 Saudi (+966)</option>
              <option value="+60">🇲🇾 Malaysia (+60)</option>
              <option value="+62">🇮🇩 Indonesia (+62)</option>
              <option value="+82">🇰🇷 South Korea (+82)</option>
              <option value="+55">🇧🇷 Brazil (+55)</option>
              <option value="+52">🇲🇽 Mexico (+52)</option>
              <option value="+27">🇿🇦 South Africa (+27)</option>
              <option value="+31">🇳🇱 Netherlands (+31)</option>
              <option value="+46">🇸🇪 Sweden (+46)</option>
              <option value="+47">🇳🇴 Norway (+47)</option>
              <option value="+358">🇫🇮 Finland (+358)</option>
              {/* (Add more if needed) */}
            </select>

            {/* PHONE INPUT */}
            <input className="input" placeholder="Phone Number" />
          </div>

          {/* PROJECT TYPE */}
          <select className="input">
            <option>Project Type</option>
            <option>Website</option>
            <option>Web App</option>
            <option>AI Development</option>
            <option>Mobile App</option>
            <option>Automation / Tools</option>
            <option>Data Engineering</option>
          </select>

          {/* DETAILS */}
          <textarea className="input h-32" placeholder="Project Details"></textarea>

          {/* SUBMIT */}
          <button
            className="w-full py-4 rounded-xl text-lg font-medium
            bg-gradient-to-r from-blue-600/40 to-purple-600/40
            border border-white/20 backdrop-blur-xl
            hover:from-blue-600/60 hover:to-purple-600/60 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

import FAQ from "@/components/FAQ";

export default function AboutPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden">

      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      {/* NEON LINES */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-linear-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-linear-to-b from-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-linear-to-b from-purple-400/30 to-transparent blur-sm"></div>
      </div>

      {/* GLOWS */}
      <div className="absolute -top-40 left-0 w-[1200px] h-[300px] bg-linear-to-r from-blue-600/30 to-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-250px] right-[-150px] w-[1300px] h-[300px] bg-linear-to-r from-purple-600/30 to-blue-400/30 blur-[120px]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-6 py-[160px]">

        {/* HERO TITLE */}
        <div className="text-center mb-[140px]" data-aos="fade-up">
          <h1 className="text-[70px] md:text-[95px] font-extrabold leading-[1.05] mb-6">
            About{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-blue-500">
              WebX AI
            </span>
          </h1>

          <p className="text-soft text-xl md:text-2xl max-w-3xl mx-auto opacity-90" data-aos="fade-up" data-aos-delay="100">
            We engineer AI-driven digital systems with precision and a strong product mindset.
          </p>
        </div>

        {/* MISSION */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-[160px]">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-soft text-lg leading-relaxed opacity-90">
              To build intelligent digital systems that help businesses scale faster with clean architecture,
              future-proof engineering and clarity.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.4)]" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              alt="AI Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* VISION */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-[180px]">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Vision
              <span className="block bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-400">
                Building Intelligent Digital Futures
              </span>
            </h2>

            <p className="text-soft text-lg md:text-xl leading-relaxed mb-6 opacity-90">
              We’re shaping a world where AI, engineering and design merge into systems that think,
              scale and evolve automatically.
            </p>
            <p className="text-soft text-lg leading-relaxed opacity-90">
              Future-proofing businesses with automation and precision-built tech.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.4)]" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="AI Vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TRUST */}
        <div className="mb-[160px]" data-aos="fade-up">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-14">
            Trust & Credentials
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <Badge title="MSME Registered" desc="Government of India UDYAM" />
            <Badge title="Boostmysites Partner" desc="Official Development Partner" />
          </div>
        </div>

        {/* VALUES */}
        <div className="mb-[160px]" data-aos="fade-up">
          <h3 className="text-center text-3xl md:text-4xl font-bold mb-14">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <ValueCard title="Engineering First" desc="Clean code, scalable systems, long-term architecture." />
            <ValueCard title="AI-Native Mindset" desc="Automation baked into everything we build." />
            <ValueCard title="Transparent Delivery" desc="Predictable timelines, honest communication." />
          </div>
        </div>

        {/* PHILOSOPHY */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-[160px]">
          <div data-aos="fade-up">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Our Philosophy</h3>
            <p className="text-soft text-lg max-w-3xl opacity-90 leading-relaxed">
              Technology should remove complexity — not add it.
              We focus on clarity, thoughtful design and strong engineering logic.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.4)]" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
              alt="Philosophy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CTA */}

        {/* FAQ */}
        <div className="mb-[160px]">
          <FAQ />
        </div>

        {/* CTA */}
        <div className="text-center py-[120px]" data-aos="fade-up">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Build Your Future with WebX AI
          </h3>

          <button className="px-14 py-5 rounded-xl text-white text-lg font-medium 
            bg-linear-to-r from-blue-600/40 to-purple-600/40 
            border border-white/20 backdrop-blur-xl 
            hover:from-blue-600/50 hover:to-purple-600/50 transition">
            Start Your Project
          </button>
        </div>
      </div>
    </section >
  );
}

/* COMPONENTS */
function Badge({ title, desc }: any) {
  return (
    <div className="px-10 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center shadow-[0_0_25px_rgba(0,0,0,0.3)]">
      <p className="text-2xl font-semibold mb-2 text-white">{title}</p>
      <p className="text-soft opacity-80">{desc}</p>
    </div>
  );
}

function ValueCard({ title, desc }: any) {
  return (
    <div className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:bg-white/10 transition">
      <h4 className="text-2xl font-semibold mb-3">{title}</h4>
      <p className="text-soft opacity-90">{desc}</p>
    </div>
  );
}

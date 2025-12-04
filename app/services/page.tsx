export default function ServicesPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden">

      {/* GLOBAL CONTINUOUS BACKGROUND */}
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

      {/* VERTICAL LINES */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/30 to-transparent blur-sm"></div>
      </div>

      {/* HERO GLOWS */}
      <div className="absolute -top-40 left-0 w-[1300px] h-[300px] bg-gradient-to-r from-blue-600/40 to-purple-500/40 blur-[120px]" />
      <div className="absolute bottom-[-250px] right-[-150px] w-[1300px] h-[300px] bg-gradient-to-r from-purple-600/40 to-blue-400/40 blur-[120px]" />

      {/* MAIN WRAPPER */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-6 py-[160px]">

        {/* -------------------------------------------------------------- */}
        {/* HERO */}
        {/* -------------------------------------------------------------- */}
        <div className="text-center mb-[160px]">
          <h1 className="text-[60px] md:text-[90px] font-extrabold tracking-tight leading-[1.05]">
            Our Premium{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
              Services
            </span>
          </h1>
          <p className="text-soft text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mt-6">
            We build intelligent, scalable digital systems crafted for growth-driven brands.
          </p>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* SERVICE BLOCKS (ULTRA PREMIUM) */}
        {/* -------------------------------------------------------------- */}

        <ServiceBlock
          reverse={false}
          title="Mobile App Development"
          desc="High-performance iOS and Android apps engineered with stunning UI, smooth experiences and scalable backend architecture."
          img="/services/mobile.jpg"
        />

        <ServiceBlock
          reverse={true}
          title="Website & Web App Development"
          desc="Fast, conversion-focused websites and scalable web apps built using modern frameworks like Next.js, React and Node."
          img="/services/web.jpg"
        />

        <ServiceBlock
          reverse={false}
          title="AI Development"
          desc="Automation systems, AI assistants, ML models and next-gen tools integrated directly into your business workflow."
          img="/services/ai.jpg"
        />

        <ServiceBlock
          reverse={true}
          title="Data Analytics & Dashboards"
          desc="We transform raw data into live dashboards, forecasts and insights that power real business decisions."
          img="/services/data.jpg"
        />

        {/* -------------------------------------------------------------- */}
        {/* PROCESS / WORKFLOW SECTION */}
        {/* -------------------------------------------------------------- */}

        <div className="mt-[200px] mb-[150px]">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-14">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              ["1. Discovery", "Understanding your goals, audience & product vision."],
              ["2. Engineering", "Architecture, UI/UX, and core technical development."],
              ["3. AI Integration", "Enhancing systems with automation and intelligence."],
              ["4. Launch & Scale", "Testing, deployment, monitoring & continuous growth."]
            ].map(([title, desc]) => (
              <div
                key={title}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-soft">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* TECHNOLOGIES */}
        {/* -------------------------------------------------------------- */}

        <div className="mb-[180px]">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">
            Technologies We Use
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center opacity-90">
            {["Next.js", "React", "Flutter", "Python", "Node.js", "PostgreSQL", "TensorFlow", "AWS"].map(
              (t) => (
                <div
                  key={t}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
                >
                  <p className="text-lg">{t}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* PRICING OVERVIEW */}
        {/* -------------------------------------------------------------- */}

        <div className="mb-[200px]">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-14">
            Pricing Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Starter", "₹25,000+", "Ideal for small businesses"],
              ["Professional", "₹60,000+", "For scaling companies"],
              ["Enterprise", "₹1,50,000+", "Custom AI + advanced solutions"]
            ].map(([tier, price, note]) => (
              <div
                key={tier}
                className="p-10 text-center bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition"
              >
                <h3 className="text-3xl font-bold mb-2">{tier}</h3>
                <p className="text-4xl font-extrabold text-white mb-3">{price}</p>
                <p className="text-soft opacity-80">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* FAQ SECTION */}
        {/* -------------------------------------------------------------- */}

        <div className="mb-[200px]">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-14">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              ["How long does a project take?", "Most projects take 3–8 weeks depending on complexity."],
              ["Do you offer maintenance?", "Yes, we provide monthly or yearly maintenance packages."],
              ["Can you integrate AI into existing systems?", "Absolutely. We specialize in AI retrofitting."],
              ["Do you work with startups?", "Yes, we work with startups, enterprises and agencies."]
            ].map(([q, a]) => (
              <div key={q} className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl">
                <p className="text-xl font-semibold">{q}</p>
                <p className="text-soft mt-2">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <div className="text-center py-[100px]">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Build Something Powerful?
          </h3>
          <button className="px-14 py-5 rounded-xl text-white text-lg font-medium 
            bg-gradient-to-r from-blue-600/40 to-purple-600/40 
            border border-white/20 backdrop-blur-xl 
            hover:from-blue-600/50 hover:to-purple-600/50 transition">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICE BLOCK COMPONENT                                            */
/* ------------------------------------------------------------------ */

function ServiceBlock({ reverse, title, desc, img }: any) {
  return (
    <div className={`grid md:grid-cols-2 gap-20 mb-[180px] items-center ${reverse ? "md:flex-row-reverse" : ""}`}>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-soft text-lg leading-relaxed opacity-90">{desc}</p>
      </div>

      <div className="relative w-full h-[380px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10">
        <img src={img} alt={title} className="w-full h-full object-cover opacity-90" />
      </div>
    </div>
  );
}

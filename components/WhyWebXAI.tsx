export default function WhyWebXAI() {
  return (
    <section className="relative w-full pt-[160px] pb-[220px] px-6 overflow-hidden bg-[#05050A]">

      {/* ---- GALAXY-LIKE BACKGROUND ---- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft stars */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:3px_3px] opacity-[0.20]" />

        {/* Blue-Purple cosmic haze */}
        <div className="absolute -top-40 left-0 w-[1400px] h-[350px] bg-gradient-to-r from-blue-700/25 via-purple-600/20 to-blue-600/20 blur-[160px]" />
        <div className="absolute bottom-[-260px] right-[-200px] w-[1500px] h-[350px] bg-gradient-to-r from-purple-700/25 via-blue-500/20 to-purple-600/20 blur-[150px]" />
      </div>

      {/* ---- CLEAN SHARP GRID ---- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      {/* ---- TOP & BOTTOM FADES ---- */}
      <div className="absolute top-0 left-0 w-full h-[180px] bg-gradient-to-b from-[#05050A] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-[#05050A] to-transparent pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1250px] mx-auto">

        {/* SECTION TITLE */}
        <div className="text-center mb-24" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
            Why{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
              WebX AI
            </span>
          </h2>
          <p className="text-[#C1C3D2] text-[18px] max-w-2xl mx-auto leading-relaxed">
            Precision engineering meets AI-native thinking for brands aiming higher.
          </p>
        </div>

        {/* ---- SHARP LASER SPINE ---- */}
        <div className="relative max-w-[900px] mx-auto">
          <div
            className="
              absolute left-1/2 -translate-x-1/2 top-0 bottom-0 
              w-[3px]
              bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400
              opacity-100
            "
          ></div>

          {/* ITEMS */}
          <div className="flex flex-col gap-20">

            <WhyItem
              side="left"
              title="Engineering-Driven Architecture"
              desc="We build systems that scale cleanly, remain maintainable for years, and avoid technical debt."
            />

            <WhyItem
              side="right"
              title="AI-Native Execution"
              desc="Automation, intelligence & predictive capabilities built from day one—never added as an afterthought."
            />

            <WhyItem
              side="left"
              title="Predictable & Transparent Process"
              desc="Weekly progress, structured updates, clear milestones, and complete visibility throughout the project."
            />

            <WhyItem
              side="right"
              title="Future-Proof Technology Choices"
              desc="Only proven, stable, scalable stacks designed for long-term reliability—not trends that die in months."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItem({
  side,
  title,
  desc,
}: {
  side: "left" | "right";
  title: string;
  desc: string;
}) {
  const isLeft = side === "left";

  return (
    <div className={`relative flex ${isLeft ? "justify-start" : "justify-end"} w-full`} data-aos="fade-up" data-aos-delay="200">
      <div
        className="
          w-[92%] md:w-[46%] p-10 rounded-2xl
          bg-[#0C0C12]/80 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_25px_rgba(0,0,0,0.55)]
          hover:shadow-[0_0_40px_rgba(120,70,255,0.45)]
          hover:border-white/20
          transition-all duration-300
        "
      >
        <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-[#C5C7D4] leading-relaxed text-[15px]">{desc}</p>
      </div>
    </div>
  );
}

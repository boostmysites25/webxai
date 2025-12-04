"use client";

export default function BlogPage() {
  const posts = [
  {
    title: "How AI Is Transforming Modern Businesses",
    desc: "A deep dive into how AI systems improve efficiency, automate workflows, and create new opportunities.",
    img: "https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg",
    date: "Feb 2025",
  },
  {
    title: "Why WebX AI Builds With Next.js",
    desc: "A breakdown of our engineering approach and why we choose Next.js for scalable projects.",
    img: "https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg",
    date: "Jan 2025",
  },
  {
    title: "Future of Mobile Apps in the AI Era",
    desc: "What mobile experiences will look like when AI is integrated into every layer.",
    img: "https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg",
    date: "Dec 2024",
  },

  /* ---------- NEW ROW 1 ---------- */
  {
    title: "The Rise of Automation-Driven Products",
    desc: "Why automation will define the next decade of product engineering and digital transformation.",
    img: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg",
    date: "Dec 2024",
  },
  {
    title: "Data Engineering For Fast-Growing Startups",
    desc: "A guide to building stable, scalable data pipelines without over-engineering.",
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
    date: "Nov 2024",
  },
  {
    title: "Designing For High-Performance UX",
    desc: "How WebX AI creates clean, modern, conversion-focused interfaces.",
    img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
    date: "Oct 2024",
  },
];


  return (
    <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden">

      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      {/* Vertical neon grid lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-gradient-to-b from-purple-400/30 to-transparent blur-sm"></div>
      </div>

      {/* Soft glows */}
      <div className="absolute -top-52 left-0 w-[1200px] h-[300px] bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-[140px]" />
      <div className="absolute bottom-[-240px] right-[-200px] w-[1200px] h-[300px] bg-gradient-to-r from-purple-600/30 to-blue-500/30 blur-[140px]" />

      {/* MAIN */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 py-[160px]">

        {/* SECTION TITLE */}
        <div className="text-center mb-[120px]">
          <h1 className="text-[70px] md:text-[95px] font-extrabold leading-[1.05] mb-6">
            WebX AI{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
              Blog
            </span>
          </h1>

          <p className="text-soft text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Insights, engineering breakdowns, AI strategy, and deep technical analysis from the WebX AI team.
          </p>
        </div>

        {/* GRID OF POSTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:bg-white/10 transition p-0"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[240px] object-cover opacity-95"
              />

              <div className="p-6">
                <p className="text-xs uppercase text-soft mb-2">{post.date}</p>

                <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>

                <p className="text-soft leading-relaxed text-[15px]">{post.desc}</p>

                <button className="mt-5 text-blue-400 hover:text-blue-300 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

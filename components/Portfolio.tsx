"use client";

type Project = {
  category: string;
  title: string;
  desc: string;
  img: string;
};

const webProjects: Project[] = [
  {
    category: "Web Development",
    title: "Booking System",
    desc: "Smooth workflows powered by automation.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    category: "Web Development",
    title: "E-Commerce Store",
    desc: "Fast, modern and scalable online shopping experience.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  },
  {
    category: "Web Development",
    title: "Agency Website",
    desc: "High-end premium design crafted for conversions.",
    img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479",
  },
];

const appProjects: Project[] = [
  {
    category: "App Development",
    title: "Fitness Tracker",
    desc: "Personalized goals with real-time analytics.",
    img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648",
  },
  {
    category: "App Development",
    title: "Food Delivery App",
    desc: "Smooth ordering experience with live tracking.",
    img: "https://images.unsplash.com/photo-1556742040-6754565c3497",
  },
  {
    category: "App Development",
    title: "Expense Manager",
    desc: "Smart budgeting with AI-based predictions.",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818",
  },
];

const aiProjects: Project[] = [
  {
    category: "AI Development",
    title: "AI Chat Assistant",
    desc: "A conversational AI trained for business operations.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    category: "AI Development",
    title: "Document Analyzer",
    desc: "Extracts insights and summaries instantly.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    category: "AI Development",
    title: "Image Classifier",
    desc: "Identifies objects with high accuracy.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
];

const dataProjects: Project[] = [
  {
    category: "Data Analytics",
    title: "Sales Dashboard",
    desc: "Live business metrics with deep insights.",
    img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
  },
  {
    category: "Data Analytics",
    title: "Reporting Suite",
    desc: "Automated reports with visualization.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    category: "Data Analytics",
    title: "Customer Insights",
    desc: "Predictive analytics for decision making.",
    img: "https://images.unsplash.com/photo-1517142089942-ba376ce32a0a",
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-[160px] px-6 w-full overflow-hidden">

      {/* CONTINUOUS BACKGROUND FROM OTHER SECTIONS */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      {/* TOP NEON BLEND */}
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-purple-700/20 to-transparent blur-3xl"></div>

      <div className="relative z-10 max-w-[1300px] mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-center text-5xl font-extrabold text-white mb-4">
          Our Portfolio
        </h2>
        <p className="text-center text-soft text-lg mb-20 max-w-2xl mx-auto">
          A curated showcase of our digital engineering — across web, mobile, AI and analytics.
        </p>

        {/* EACH CATEGORY */}
        <PortfolioCategory title="Web Development" projects={webProjects} />
        <PortfolioCategory title="App Development" projects={appProjects} />
        <PortfolioCategory title="AI Development" projects={aiProjects} />
        <PortfolioCategory title="Data Analytics" projects={dataProjects} />

      </div>
    </section>
  );
}


/* CATEGORY BLOCK */
function PortfolioCategory({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  return (
    <div className="mb-28">
      <h3 className="text-3xl font-semibold text-white mb-8">{title}</h3>

      <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
        {projects.map((p, i) => (
          <PortfolioCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}


/* PREMIUM CARD */
function PortfolioCard({ title, desc, img, category }: Project) {
  return (
    <div className="min-w-[340px] max-w-[340px] rounded-2xl overflow-hidden 
      bg-[#0A0A0C]/70 backdrop-blur-xl border border-white/10 
      hover:border-white/20 transition-all shadow-[0_0_25px_rgba(0,0,0,0.45)]
      flex flex-col">

      {/* IMAGE */}
      <img 
        src={img}
        className="w-full h-[200px] object-cover rounded-t-2xl opacity-95"
      />

      {/* CONTENT */}
      <div className="p-5">
        <p className="text-[#8A8B9A] text-xs uppercase tracking-wide mb-1">
          {category}
        </p>

        <h3 className="text-white text-xl font-semibold mb-2 leading-tight">
          {title}
        </h3>

        <p className="text-soft text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

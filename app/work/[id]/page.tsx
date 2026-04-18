import Link from "next/link";
import { allProjects } from "@/data/portfolioContent";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const currentIndex = allProjects.findIndex((p) => p.id.toString() === id);
  const project = allProjects[currentIndex];

  if (!project) {
    return (
      <main className="w-full min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center">
        <h1 className="text-xl">Project not found</h1>
      </main>
    );
  }

  // Next/Prev navigation
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  // Dynamic placeholders for the structured schema specified
  const platformStr = project.category.includes("App") ? "Mobile Application" : 
                      project.category.includes("E-Commerce") ? "Commerce Platform" : 
                      project.category.includes("Blockchain") ? "Web3 dApp" : "Web Platform";
  
  const techPills = project.caseStudy.techStack || ["Next.js", "PostgreSQL", "Node.js"];

  return (
    <main className="w-full min-h-screen bg-[#0B0B0B] text-white pt-[140px]">
      
      {/* ── 1. HERO ── */}
      <section className="w-full max-w-[800px] mx-auto px-6 mb-16">
        <span className="text-[11px] font-mono tracking-[0.15em] text-[#A1A1AA] uppercase block mb-4">
          Case Study — {project.category}
        </span>
        <h1 className="text-[48px] md:text-[64px] font-bold text-white tracking-tight leading-[1.05] mb-6">
          {project.title}
        </h1>
        <p className="text-[18px] text-[#A1A1AA] leading-[1.6] mb-10 max-w-[700px]">
          {project.caseStudy.overview}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {project.link !== "#" && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              className="h-[44px] px-6 bg-white text-black text-[13px] font-medium flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              View Live Project ↗
            </a>
          )}
          <Link 
            href="/work"
            className="h-[44px] px-6 bg-transparent border border-[#1F1F1F] text-white text-[13px] font-medium flex items-center justify-center hover:bg-[#121212] transition-colors"
          >
            ← Back to Work
          </Link>
        </div>
      </section>

      {/* ── 2. PROJECT SNAPSHOT ── */}
      <section className="w-full max-w-[800px] mx-auto px-6 mb-24">
        <div className="w-full border-t border-b border-[#1F1F1F] py-8 flex flex-col md:flex-row md:items-center gap-8 justify-between">
          <div className="flex gap-12">
             <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-[0.1em] text-[#A1A1AA] uppercase mb-1">Industry</span>
                <span className="text-[14px] font-medium text-white">Technology</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-[0.1em] text-[#A1A1AA] uppercase mb-1">Platform</span>
                <span className="text-[14px] font-medium text-white">{platformStr}</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-[0.1em] text-[#A1A1AA] uppercase mb-1">Timeline</span>
                <span className="text-[14px] font-medium text-white">8—12 Weeks</span>
             </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {techPills.slice(0, 3).map(t => (
              <span key={t} className="px-3 py-1 bg-[#121212] border border-[#1F1F1F] text-[#A1A1AA] text-[11px] font-mono tracking-widest uppercase">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="w-full max-w-[1200px] mx-auto px-6 mb-24">
         <div className="w-full aspect-[21/9] bg-[#121212] border border-[#1F1F1F] overflow-hidden">
           <img 
             src={project.image} 
             alt={project.title}
             className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
           />
         </div>
      </section>

      {/* ── 3. THE PROBLEM ── */}
      <section className="w-full max-w-[800px] mx-auto px-6 mb-20">
         <h2 className="text-[14px] font-mono tracking-[0.1em] text-[#7C3AED] uppercase block mb-6">The Problem</h2>
         <p className="text-[16px] md:text-[18px] text-[#e4e4e7] leading-[1.8]">
           {project.caseStudy.challenge}
         </p>
      </section>

      {/* ── 4. SYSTEM ENGINEERED ── */}
      <section className="w-full max-w-[800px] mx-auto px-6 mb-20">
         <h2 className="text-[14px] font-mono tracking-[0.1em] text-[#7C3AED] uppercase block mb-6">System Engineered</h2>
         <p className="text-[16px] md:text-[18px] text-[#e4e4e7] leading-[1.8]">
           {project.caseStudy.solution}
         </p>
      </section>

      {/* ── 5. ARCHITECTURE / FLOW ── */}
      <section className="w-full max-w-[800px] mx-auto px-6 mb-24">
         <div className="w-full bg-[#0A0A0A] border border-[#1F1F1F] p-8 md:p-12">
            <h3 className="text-[12px] font-mono tracking-[0.1em] text-[#A1A1AA] uppercase mb-8">Architecture Protocol</h3>
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#7C3AED] uppercase mb-2 block">1. Input</span>
                <span className="text-[14px] text-white font-medium block">Data Ingestion</span>
                <span className="text-[13px] text-[#A1A1AA]">Client Payloads</span>
              </div>
              <div className="hidden md:block h-[1px] w-12 bg-[#1F1F1F]" />
              <div className="hidden md:block text-[#A1A1AA] text-[12px]">→</div>
              <div className="hidden md:block h-[1px] w-12 bg-[#1F1F1F]" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#7C3AED] uppercase mb-2 block">2. Processing</span>
                <span className="text-[14px] text-white font-medium block">Logic Layer</span>
                <span className="text-[13px] text-[#A1A1AA]">State Mutation</span>
              </div>
              <div className="hidden md:block h-[1px] w-12 bg-[#1F1F1F]" />
              <div className="hidden md:block text-[#A1A1AA] text-[12px]">→</div>
              <div className="hidden md:block h-[1px] w-12 bg-[#1F1F1F]" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-[#7C3AED] uppercase mb-2 block">3. Output</span>
                <span className="text-[14px] text-white font-medium block">Render Edge</span>
                <span className="text-[13px] text-[#A1A1AA]">Client UI</span>
              </div>
            </div>
         </div>
      </section>

      {/* ── 6. KEY FEATURES ── */}
      <section className="w-full max-w-[800px] mx-auto px-6 mb-24">
         <h2 className="text-[14px] font-mono tracking-[0.1em] text-[#7C3AED] uppercase block mb-8">Capabilities Shipped</h2>
         <div className="flex flex-col gap-4 border-l border-[#1F1F1F] pl-6 md:pl-8">
           {project.caseStudy.keyFeatures?.map((feature, idx) => (
             <div key={idx} className="flex items-start gap-4">
               <span className="text-[#A1A1AA] mt-1 text-[12px]">↗</span>
               <p className="text-[16px] text-white leading-relaxed">{feature}</p>
             </div>
           ))}
         </div>
      </section>

      {/* ── 7. OUTCOME ── */}
      <section className="w-full max-w-[800px] mx-auto px-6 mb-24 text-center">
         <div className="inline-flex flex-col items-center">
           <span className="text-[12px] font-mono tracking-[0.1em] text-[#A1A1AA] uppercase block mb-4 border border-[#1F1F1F] px-4 py-1.5 rounded-full">
             Measured Outcome
           </span>
           <div className="text-[56px] md:text-[80px] font-bold text-white tracking-tighter leading-[1.0] mb-2">
             {project.caseStudy.impact.split('.')[0]}.
           </div>
           {project.caseStudy.impact.split('.')[1] && (
             <p className="text-[15px] text-[#A1A1AA] max-w-[500px] mx-auto mt-4 leading-[1.6]">
               {project.caseStudy.impact.split('.').slice(1).join('.').trim()}
             </p>
           )}
         </div>
      </section>

      {/* ── 8. COMPLETE TECH STACK ── */}
      <section className="w-full max-w-[800px] mx-auto px-6 mb-32">
         <h2 className="text-[14px] font-mono tracking-[0.1em] text-white uppercase block mb-6 border-b border-[#1F1F1F] pb-4">
           Infrastructure Stack
         </h2>
         <div className="flex flex-wrap gap-2">
           {techPills.map((t) => (
             <span key={t} className="px-4 py-2 bg-transparent border border-[#1F1F1F] text-[#A1A1AA] text-[13px] font-medium hover:text-white hover:border-[#333] transition-colors">
               {t}
             </span>
           ))}
         </div>
      </section>

      {/* ── 10. NEXT PROJECT NAV ── */}
      <section className="w-full border-t border-b border-[#1F1F1F] bg-[#0A0A0A]">
         <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1F1F1F]">
           {/* Prev */}
           {prevProject ? (
             <Link href={`/work/${prevProject.id}`} className="group flex flex-col p-8 md:p-12 hover:bg-[#121212] transition-colors">
               <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-widest mb-3">← Previous System</span>
               <span className="text-[20px] font-semibold text-white tracking-tight group-hoverX:text-[#7C3AED] transition-colors">{prevProject.title}</span>
             </Link>
           ) : <div className="p-8 md:p-12"></div>}
           
           {/* Next */}
           {nextProject ? (
             <Link href={`/work/${nextProject.id}`} className="group flex flex-col p-8 md:p-12 items-end text-right hover:bg-[#121212] transition-colors">
               <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-widest mb-3">Next System →</span>
               <span className="text-[20px] font-semibold text-white tracking-tight group-hoverX:text-[#7C3AED] transition-colors">{nextProject.title}</span>
             </Link>
           ) : <div className="p-8 md:p-12"></div>}
         </div>
      </section>

      {/* ── 11. CTA ── */}
      <section className="w-full py-[140px] bg-[#0B0B0B]">
        <div className="w-full max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tighter leading-[1.0] mb-10">
            Want Similar Results?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link href="?contact=true" className="w-full sm:w-auto h-[48px] px-8 bg-white text-black font-medium text-[14px] flex items-center justify-center hover:bg-gray-200 transition-colors">
              Start Project
            </Link>
            <Link href="/contact" className="w-full sm:w-auto h-[48px] px-8 bg-transparent border border-[#1F1F1F] text-white font-medium text-[14px] flex items-center justify-center hover:bg-[#121212] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

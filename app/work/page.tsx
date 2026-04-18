"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { allProjects } from "@/data/portfolioContent";

const CATEGORIES = ["All", ...Array.from(new Set(allProjects.map((p) => p.category)))];

// Featured project layout rule:
const FEATURED_PROJECT = allProjects.find(p => p.id === 77) || allProjects[0];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9); // Pagination count

  // Filter core logic (disabled text search as per updated minimal spec, but kept filtering robust)
  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      // Exclude featured project if viewing "All"
      if (p.id === FEATURED_PROJECT.id && activeTab === "All") return false;
      return activeTab === "All" || p.category === activeTab;
    });
  }, [activeTab]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <main className="w-full min-h-screen bg-[#0B0B0B] text-white">
      
      {/* ── HERO ── */}
      <section className="w-full pt-[160px] pb-[80px]">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <h1 className="text-[56px] md:text-[80px] font-bold tracking-tight text-white leading-[1.0] mb-6">
            Systems Executed.
          </h1>
          <p className="text-[17px] md:text-[20px] text-[#A1A1AA] leading-[1.6] max-w-[600px]">
             A structured ledger of scalable systems engineered for performance and measurable output.
          </p>
        </div>
      </section>

      {/* ── FILTER TABS (STICKY) ── */}
      <div className="w-full border-t border-b border-[#1F1F1F] bg-[#0B0B0B]/90 backdrop-blur-md sticky top-[64px] z-30">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <nav className="flex overflow-x-auto scrollbar-hide gap-0 items-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveTab(cat); setVisibleCount(9); }}
                className={`flex-shrink-0 py-4 px-4 text-[13px] font-medium transition-all border-b-[2px] ${
                  activeTab === cat ? "text-white border-white" : "text-[#A1A1AA] border-transparent hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── GRID SYSTEM ── */}
      <section className="w-full max-w-[1200px] mx-auto px-6 py-[80px]">
         
         {/* FEATURED: Only show if tab is "All" */}
         {activeTab === "All" && (
           <div className="w-full mb-16">
              <div className="w-full flex-col block bg-[#0A0A0A] border border-[#1F1F1F] relative overflow-hidden group">
                 <div className="flex flex-col lg:flex-row relative z-10 p-0 md:p-4">
                    
                    {/* Image Box */}
                    <div className="w-full lg:w-[600px] aspect-[16/10] overflow-hidden bg-[#121212]">
                       <img src={FEATURED_PROJECT.image} alt={FEATURED_PROJECT.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-[1.02]" />
                    </div>

                    {/* Content Box */}
                    <div className="flex-1 p-8 lg:p-12 flex flex-col items-start justify-center">
                       <span className="text-[11px] font-mono tracking-[0.1em] text-[#7C3AED] uppercase mb-4">Primary Architecture Node</span>
                       <h2 className="text-[32px] md:text-[48px] font-bold text-white mb-6 leading-[1.1] tracking-tight">{FEATURED_PROJECT.title}</h2>
                       <p className="text-[15px] text-[#A1A1AA] leading-[1.6] mb-8 line-clamp-2 max-w-[500px]">{FEATURED_PROJECT.caseStudy.challenge}</p>
                       
                       {/* Outcome Metric extracted */}
                       <div className="flex flex-col border-l border-[#1F1F1F] pl-5 mb-12">
                         <span className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-widest mb-1">Measured Outcome</span>
                         <span className="text-[28px] font-medium text-white tracking-tight leading-none">{FEATURED_PROJECT.caseStudy.impact.split('.')[0]}.</span>
                       </div>

                       {/* Action Buttons */}
                       <div className="flex flex-wrap items-center gap-4 w-full">
                          {FEATURED_PROJECT.link !== "#" && (
                            <a 
                              href={FEATURED_PROJECT.link}
                              target="_blank"
                              rel="noreferrer" 
                              className="px-6 h-[40px] flex items-center justify-center bg-white text-black text-[13px] font-medium transition-colors hover:bg-gray-200"
                            >
                              View Live ↗
                            </a>
                          )}
                          <Link 
                            href={`/work/${FEATURED_PROJECT.id}`}
                            className="px-6 h-[40px] flex items-center justify-center bg-transparent border border-[#1F1F1F] text-white text-[13px] font-medium transition-colors hover:bg-[#121212]"
                          >
                            Read Case Study
                          </Link>
                       </div>
                    </div>

                 </div>
              </div>
           </div>
         )}

         {/* MAIN PAGINATED GRID */}
         {displayedProjects.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {displayedProjects.map((p) => (
               <div key={p.id} className="w-full bg-[#0B0B0B] group flex flex-col overflow-hidden border border-transparent hover:border-[#1F1F1F] transition-colors duration-300">
                 {/* Image Container */}
                 <div className="w-full aspect-[4/3] overflow-hidden bg-[#121212] mb-6">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover scale-[1.01] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                 </div>
                 
                 {/* Body */}
                 <div className="px-2 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3 border-b border-[#1F1F1F] pb-3">
                       <h3 className="text-[18px] font-semibold text-white tracking-tight">{p.title}</h3>
                       <span className="text-[10px] font-mono tracking-[0.1em] text-[#A1A1AA] uppercase">{p.category}</span>
                    </div>
                    <p className="text-[14px] text-[#A1A1AA] leading-[1.6] line-clamp-2 mb-8 flex-1">
                      {p.description}
                    </p>
                    
                    {/* Actions - Always Visible Minimal Style */}
                    <div className="flex items-center gap-3 pb-2">
                       {p.link !== "#" && (
                         <a 
                           href={p.link}
                           target="_blank"
                           rel="noreferrer" 
                           className="flex-1 h-[36px] flex items-center justify-center bg-[#121212] border border-[#1F1F1F] text-white text-[12px] font-medium transition-colors hover:bg-white hover:text-black hover:border-white"
                         >
                           Live Site ↗
                         </a>
                       )}
                       <Link 
                         href={`/work/${p.id}`}
                         className="flex-1 h-[36px] flex items-center justify-center bg-transparent border border-[#1F1F1F] text-[#A1A1AA] text-[12px] font-medium transition-colors hover:text-white hover:border-[#333]"
                       >
                         Case Study →
                       </Link>
                    </div>
                 </div>
               </div>
             ))}
           </div>
         ) : (
            <div className="w-full py-20 text-center text-[#A1A1AA] font-mono text-[13px] uppercase tracking-widest border border-[#1F1F1F]">
               No architecture mapped for these parameters.
            </div>
         )}

         {/* PAGINATION */}
         {hasMore && (
           <div className="w-full mt-24 flex justify-center">
             <button 
                onClick={() => setVisibleCount(v => v + 9)}
                className="h-[44px] px-8 bg-transparent border border-[#1F1F1F] text-white hover:bg-[#121212] transition-colors font-medium text-[13px]"
             >
               Load More Systems
             </button>
           </div>
         )}

      </section>

      {/* ── FOOTER CTA ── */}
      <section className="relative w-full py-[160px] lg:py-[200px] bg-[#0B0B0B] border-t border-[#1F1F1F] overflow-hidden">
        <div className="w-full max-w-[800px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 border border-[#1F1F1F] text-[11px] font-mono text-[#A1A1AA] tracking-[0.1em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
            Infrastructure Deployment
          </div>
          
          <h2 className="text-[48px] md:text-[72px] font-bold text-white tracking-tighter leading-[1.0] mb-8">
            Build the Next<br />
            System With Us.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full sm:w-auto">
            <Link href="?contact=true" className="w-full sm:w-auto h-[48px] px-8 rounded-sm bg-white text-black font-medium text-[14px] flex items-center justify-center hover:bg-gray-200 transition-colors">
              Start Project
            </Link>
            <Link href="/services" className="w-full sm:w-auto h-[48px] px-8 rounded-sm border border-[#1F1F1F] text-white font-medium text-[14px] flex items-center justify-center hover:bg-[#121212] transition-colors">
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { fetchPublishedBlogs, type Blog } from "@/lib/blogApi";

export default function BlogPage() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchPublishedBlogs();
        // Sort descending by date just in case API returns unsorted
        const sorted = data.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        setPosts(sorted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Featured post logic
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const gridPosts = posts.slice(featuredPost ? 1 : 0, visibleCount + (featuredPost ? 1 : 0));
  const hasMore = (gridPosts.length + (featuredPost ? 1 : 0)) < posts.length;

  return (
    <main className="w-full min-h-screen bg-[#0B0B0B] text-white">
      
      {/* ─── 1. HERO ─── */}
      <section className="w-full pt-[160px] pb-[80px]">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <span className="text-[11px] font-mono tracking-widest text-[#7C3AED] uppercase mb-4 block">
             Infrastructure Log
          </span>
          <h1 className="text-[56px] md:text-[80px] font-bold tracking-tight text-white leading-[1.0] mb-6">
            Engineering Insights.
          </h1>
          <p className="text-[17px] md:text-[20px] text-[#A1A1AA] leading-[1.6] max-w-[600px]">
             Technical breakdowns, architecture systems, and scalable engineering strategies.
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1200px] mx-auto px-6 py-[80px]">
         
         {loading ? (
             <div className="w-full py-20 text-center text-[#A1A1AA] font-mono text-[13px] uppercase tracking-widest border border-[#1F1F1F]">
                Fetching array...
             </div>
         ) : posts.length === 0 ? (
             <div className="w-full py-20 text-center text-[#A1A1AA] font-mono text-[13px] uppercase tracking-widest border border-[#1F1F1F]">
                No reports found matching parameters.
             </div>
         ) : (
            <>
               {/* ─── 4. FEATURED ARTICLE ─── */}
               {featuredPost && (
                  <div className="w-full mb-16 border-b border-[#1F1F1F] pb-16">
                     <Link href={`/blog/${featuredPost.slug}`} className="group flex flex-col items-start w-full cursor-pointer">
                        <span className="text-[12px] font-mono tracking-widest text-[#7C3AED] uppercase mb-4 block">Featured Architecture</span>
                        <h2 className="text-[32px] md:text-[56px] font-bold text-white leading-[1.1] mb-6 tracking-tight group-hover:text-gray-300 transition-colors">
                           {featuredPost.title}
                        </h2>
                        <p className="text-[16px] md:text-[18px] text-[#A1A1AA] leading-[1.6] max-w-[800px] mb-8">
                           {featuredPost.excerpt || "A comprehensive deep dive into system integrations, performance optimization, and architectural decision making."}
                        </p>
                        <span className="text-[12px] font-mono text-[#7C3AED] uppercase font-medium bg-[#121212] border border-[#1F1F1F] px-4 py-2">
                           Read Entry &rarr;
                        </span>
                     </Link>
                  </div>
               )}

               {/* ─── 3. BLOG GRID ─── */}
               {gridPosts.length > 0 && (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-[#0B0B0B] border border-[#1F1F1F]">
                   {gridPosts.map((post) => (
                      <Link key={post._id} href={`/blog/${post.slug}`} className="group block p-8 border-b border-r last:border-b-0 border-[#1F1F1F] bg-[#0A0A0A] hover:bg-[#121212] transition-colors relative">
                         <div className="flex flex-col h-full">
                            <span className="text-[10px] font-mono text-[#A1A1AA] tracking-[0.1em] uppercase mb-4">
                               {new Date(post.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                            </span>
                            <h3 className="text-[20px] font-semibold text-white/90 group-hover:text-white transition-colors tracking-tight leading-[1.3] mb-4">
                               {post.title}
                            </h3>
                            <p className="text-[14px] text-[#A1A1AA] leading-[1.6] line-clamp-2">
                               {post.excerpt || "Detailed technical analysis mapping logic, data flows, and state management rules."}
                            </p>
                         </div>
                      </Link>
                   ))}
                 </div>
               )}

               {/* ─── 6. PAGINATION ─── */}
               {hasMore && (
                 <div className="w-full mt-16 flex justify-center">
                   <button 
                      onClick={() => setVisibleCount(v => v + 9)}
                      className="h-[44px] px-8 bg-transparent border border-[#1F1F1F] text-white hover:bg-[#121212] transition-colors font-medium text-[13px]"
                   >
                     Load More Entries
                   </button>
                 </div>
               )}
            </>
         )}

      </section>

      {/* ─── 7. CTA ─── */}
      <section className="w-full py-[160px] bg-[#0B0B0B] border-t border-[#1F1F1F]">
        <div className="w-full max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tighter leading-[1.0] mb-10">
            Explore More <br /> Engineering Insights.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto h-[48px] px-8 bg-white text-black font-medium text-[14px] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              View All Articles
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogBySlug, fetchPublishedBlogs } from "@/lib/blogApi";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetailsPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const { data: blog, isLoading, isError } = useQuery({
        queryKey: ["blog", slug],
        queryFn: () => fetchBlogBySlug(slug),
        enabled: !!slug,
    });

    const { data: allBlogs } = useQuery({
        queryKey: ["allBlogs"],
        queryFn: () => fetchPublishedBlogs(),
    });

    const [headings, setHeadings] = useState<{ id: string, text: string }[]>([]);

    // Process HTML to add IDs to H2s for TOC and calculate read time
    useEffect(() => {
        if (!blog || !blog.content) return;
        const container = document.getElementById("article-content");
        if (!container) return;

        // Map Table of Contents
        const h2s = container.querySelectorAll("h2");
        const extractedHeadings: { id: string, text: string }[] = [];
        h2s.forEach((h2, index) => {
            const id = `heading-${index}`;
            h2.id = id;
            extractedHeadings.push({ id, text: h2.innerText });
        });
        setHeadings(extractedHeadings);

        // Inject Mid-Article CTA safely
        const paragraphs = container.querySelectorAll("p");
        if (paragraphs.length > 4) {
             const midPoint = Math.floor(paragraphs.length / 2);
             const targetP = paragraphs[midPoint];
             const ctaNode = document.getElementById("mid-article-cta-template");
             if (ctaNode && targetP.nextSibling && !document.getElementById("injected-cta")) {
                 const clone = ctaNode.cloneNode(true) as HTMLElement;
                 clone.id = "injected-cta";
                 clone.style.display = "block";
                 // Insert after the midpoint paragraph
                 targetP.parentNode?.insertBefore(clone, targetP.nextSibling);
             }
        }

    }, [blog]);

    if (isLoading) {
        return (
            <div className="w-full min-h-screen bg-[#0B0B0B] flex items-center justify-center text-[#A1A1AA] font-mono text-[13px] uppercase tracking-widest">
                Fetching Data Segment...
            </div>
        );
    }

    if (isError || !blog) {
        return (
            <div className="w-full min-h-screen bg-[#0B0B0B] flex flex-col items-center justify-center gap-6">
                <p className="text-[14px] font-mono text-red-500 uppercase tracking-widest">Failed to load log.</p>
                <Link href="/blog" className="px-6 py-2 border border-[#1F1F1F] text-white hover:bg-[#121212] transition-colors text-[13px] font-medium">
                    ← Return to Archive
                </Link>
            </div>
        );
    }

    const wordCount = blog.content ? blog.content.replace(/<[^>]*>?/gm, '').split(/\s+/).length : 0;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));

    const relatedArticles = allBlogs ? allBlogs.filter((b: any) => b.slug !== slug).slice(0, 2) : [];

    return (
        <main className="w-full min-h-screen bg-[#0B0B0B] text-white pt-[140px] pb-[100px]">
            
            {/* ─── HIDDEN TEMPLATES FOR INJECTION ─── */}
            <div id="mid-article-cta-template" className="hidden my-16 p-10 bg-[#0A0A0A] border border-[#1F1F1F] text-center">
                 <h3 className="text-[24px] font-semibold text-white tracking-tight mb-6">Building something similar?</h3>
                 <a href="?contact=true" className="inline-flex h-[40px] px-8 bg-white text-black font-medium text-[13px] items-center justify-center hover:bg-gray-200 transition-colors">
                     Start Project
                 </a>
            </div>

            <div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
                
                {/* ─── MAIN ARTICLE ─── */}
                <article className="lg:col-span-8 w-full max-w-[750px] mx-auto lg:mx-0">
                    
                    {/* 1. TOP BAR */}
                    <div className="flex items-center gap-4 text-[12px] font-mono tracking-widest text-[#A1A1AA] uppercase mb-10 pb-6 border-b border-[#1F1F1F]">
                        <Link href="/blog" className="hover:text-white transition-colors group flex items-center pr-4 border-r border-[#1F1F1F]">
                            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back
                        </Link>
                        <span>
                            {new Date(blog.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                        <span className="pl-4 border-l border-[#1F1F1F]">{readingTime} Min Read</span>
                    </div>

                    {/* 2. TITLE SECTION */}
                    <header className="mb-14">
                        <h1 className="text-[44px] md:text-[56px] font-bold tracking-tighter leading-[1.05] text-white mb-6">
                            {blog.title}
                        </h1>
                        {blog.excerpt && (
                            <p className="text-[20px] text-[#A1A1AA] leading-[1.6]">
                                {blog.excerpt}
                            </p>
                        )}
                    </header>

                    {/* 3. FEATURE IMAGE */}
                    {blog.imageUrl && (
                        <div className="w-full aspect-[16/9] mb-16 bg-[#121212] overflow-hidden rounded-[8px] border border-[#1F1F1F]">
                            <img
                                src={blog.imageUrl}
                                alt={blog.imageAlt || blog.title}
                                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
                            />
                        </div>
                    )}

                    {/* 4. CONTENT STRUCTURE */}
                    {/* Visual Breaks: Added spacing below headings; Highlight Blocks: Styled blockquotes rigorously */}
                    <div 
                        id="article-content"
                        className="prose prose-invert max-w-none 
                        prose-p:text-[#A1A1AA] prose-p:text-[18px] prose-p:leading-[1.9] prose-p:mb-8 
                        prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight 
                        prose-h2:text-[32px] prose-h2:mt-20 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-[#1F1F1F]
                        prose-h3:text-[24px] prose-h3:mt-12 prose-h3:mb-6 
                        prose-a:text-[#7C3AED] prose-a:no-underline hover:prose-a:underline 
                        prose-strong:text-white 
                        prose-blockquote:border-l-[3px] prose-blockquote:border-[#7C3AED] prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-12 prose-blockquote:text-white prose-blockquote:text-[22px] prose-blockquote:font-medium prose-blockquote:not-italic prose-blockquote:bg-[#0A0A0A] prose-blockquote:tracking-tight
                        prose-code:text-[#7C3AED] prose-code:bg-[#121212] prose-code:px-2 prose-code:py-1 prose-code:rounded-sm 
                        prose-pre:bg-[#0A0A0A] prose-pre:border prose-pre:border-[#1F1F1F] prose-pre:rounded-sm
                        prose-ul:text-[#A1A1AA] prose-li:leading-[1.8] prose-li:my-2"
                        dangerouslySetInnerHTML={{ __html: blog.content || "" }} 
                    />

                    {/* 7. TAGS SECTION */}
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="mt-16 mb-24 flex items-center gap-3">
                            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mr-2">Meta:</span>
                            {blog.tags.map((tag) => (
                                <span key={tag} className="text-[#A1A1AA] text-[13px] hover:text-white transition-colors cursor-default">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* 8. AUTHOR BLOCK */}
                    <div className="w-full border-t border-b border-[#1F1F1F] py-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between bg-[#0A0A0A] px-8">
                        <div>
                           <p className="text-[12px] font-mono text-[#7C3AED] uppercase tracking-widest mb-2">Written By</p>
                           <p className="text-[20px] font-semibold text-white tracking-tight mb-1">WebX AI Studio</p>
                           <p className="text-[14px] text-[#A1A1AA]">Engineering systems for scalable infrastructure.</p>
                        </div>
                        <Link href="/about" className="h-[36px] px-6 text-[12px] font-medium bg-[#121212] border border-[#1F1F1F] text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                            Studio Philosophy ↗
                        </Link>
                    </div>

                </article>

                {/* ─── 5. SIDEBAR ─── */}
                <aside className="hidden lg:block lg:col-span-4 relative">
                    <div className="sticky top-[140px] flex flex-col">
                        <div className="pl-8 border-l border-[#1F1F1F]">
                            <h4 className="text-[12px] font-mono uppercase tracking-widest text-white mb-8 pb-4 border-b border-[#1F1F1F]">
                                Execution Map
                            </h4>
                            
                            {headings.length > 0 ? (
                                <ul className="flex flex-col gap-5 text-[14px] text-[#A1A1AA]">
                                    {headings.map(h => (
                                        <li key={h.id}>
                                            <a 
                                                href={`#${h.id}`} 
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className="hover:text-[#7C3AED] transition-colors line-clamp-2"
                                            >
                                                {h.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul className="flex flex-col gap-6 text-[14px] text-[#A1A1AA]">
                                    <li className="flex gap-4 items-start hover:text-white transition-colors cursor-default">
                                        <span className="text-[#7C3AED] mt-1">→</span>
                                        <span>AI replaces tasks, not jobs.</span>
                                    </li>
                                    <li className="flex gap-4 items-start hover:text-white transition-colors cursor-default">
                                        <span className="text-[#7C3AED] mt-1">→</span>
                                        <span>Automation multiplies enterprise throughput.</span>
                                    </li>
                                    <li className="flex gap-4 items-start hover:text-white transition-colors cursor-default">
                                        <span className="text-[#7C3AED] mt-1">→</span>
                                        <span>Systems govern structural scalability.</span>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </aside>

            </div>

            {/* ─── 9. RELATED ARTICLES ─── */}
            {relatedArticles.length > 0 && (
                <section className="w-full max-w-[1200px] mx-auto px-6 mt-32">
                    <h3 className="text-[12px] font-mono tracking-widest text-[#A1A1AA] uppercase mb-8 border-b border-[#1F1F1F] pb-4">
                        Related Infrastructure Logs
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1F1F1F] border border-[#1F1F1F]">
                        {relatedArticles.map((article: any) => (
                            <Link key={article._id} href={`/blog/${article.slug}`} className="group bg-[#0A0A0A] p-10 hover:bg-[#121212] transition-colors">
                                <span className="text-[10px] font-mono tracking-widest text-[#7C3AED] uppercase mb-4 block">
                                    {new Date(article.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                </span>
                                <h4 className="text-[24px] font-semibold text-white tracking-tight leading-[1.2] mb-4 group-hover:text-gray-300 transition-colors">
                                    {article.title}
                                </h4>
                                <p className="text-[15px] text-[#A1A1AA] line-clamp-2">
                                    {article.excerpt}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* ─── 10. FINAL CTA ─── */}
            <section className="w-full max-w-[1200px] mx-auto px-6 mt-32">
                <div className="w-full py-24 bg-[#0A0A0A] border border-[#1F1F1F] text-center flex flex-col items-center px-6 relative overflow-hidden">
                    <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-[#7C3AED]/10 blur-[100px] pointer-events-none" />
                    <h2 className="text-[40px] md:text-[56px] font-bold text-white tracking-tighter leading-[1.0] mb-6 relative z-10">
                        Deploy Your Own System.
                    </h2>
                    <p className="text-[18px] text-[#A1A1AA] mb-10 relative z-10">
                        Work with engineers building real infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-10">
                        <Link href="?contact=true" className="w-full sm:w-auto h-[48px] px-8 bg-white text-black font-medium text-[14px] flex items-center justify-center hover:bg-gray-200 transition-colors">
                            Start Project
                        </Link>
                        <Link href="/work" className="w-full sm:w-auto h-[48px] px-8 bg-transparent border border-[#1F1F1F] text-white font-medium text-[14px] flex items-center justify-center hover:bg-[#121212] transition-colors">
                            View Work
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}

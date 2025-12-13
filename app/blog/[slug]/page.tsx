"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBlogBySlug } from "@/lib/blogApi";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function BlogDetailsPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const { data: blog, isLoading, isError } = useQuery({
        queryKey: ["blog", slug],
        queryFn: () => fetchBlogBySlug(slug),
        enabled: !!slug,
    });

    if (isLoading) {
        return (
            <div className="w-full min-h-screen bg-[#05050A] flex items-center justify-center text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (isError || !blog) {
        return (
            <div className="w-full min-h-screen bg-[#05050A] flex flex-col items-center justify-center text-white space-y-4">
                <p className="text-xl text-red-400">Failed to load blog post.</p>
                <Link href="/blog" className="text-blue-400 hover:text-blue-300">
                    ← Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden pb-20">
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

            {/* HERO GLOWS */}
            <div className="absolute top-0 left-0 w-[1300px] h-[300px] bg-linear-to-r from-blue-600/20 to-purple-500/20 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-[160px]">

                {/* BACK LINK */}
                <Link href="/blog" className="inline-flex items-center text-soft hover:text-white transition mb-10 group">
                    <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Blog
                </Link>

                {/* HEADER */}
                <div className="mb-10 text-center">
                    {blog.category && (
                        <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold tracking-wider text-blue-300 mb-4 uppercase">
                            {blog.category.name}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                        {blog.title}
                    </h1>
                    <div className="flex items-center justify-center space-x-4 text-soft text-sm md:text-base">
                        <span className="text-white font-medium">{blog.author?.name || "WebX AI"}</span>
                        <span>•</span>
                        <span>{new Date(blog.publishDate).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                </div>

                {/* FEATURED IMAGE */}
                <div className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12 border border-white/10 bg-white/5 relative shadow-2xl">
                    <img
                        src={blog.imageUrl}
                        alt={blog.imageAlt || blog.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* CONTENT */}
                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-[#C9C9C9] prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-code:text-purple-300 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10"

                >
                    <div className="reset-html" dangerouslySetInnerHTML={{ __html: blog.content || "" }} />
                </div>

                {/* TAGS */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="mt-16 pt-10 border-t border-white/10">
                        <p className="text-soft text-sm font-semibold mb-4 uppercase tracking-wider">Tags</p>
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition cursor-default">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

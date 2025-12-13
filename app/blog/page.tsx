"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPublishedBlogs, Blog } from "@/lib/blogApi";
import Link from "next/link";

export default function BlogPage() {
  const { data: blogs, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchPublishedBlogs,
  });

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-[#05050A] flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full min-h-screen bg-[#05050A] flex items-center justify-center text-white">
        <p className="text-xl text-red-400">Failed to load blogs. Please try again later.</p>
      </div>
    );
  }

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
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-linear-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-linear-to-b from-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-linear-to-b from-purple-400/30 to-transparent blur-sm"></div>
      </div>

      {/* Soft glows */}
      <div className="absolute -top-52 left-0 w-[1200px] h-[300px] bg-linear-to-r from-blue-600/30 to-purple-600/30 blur-[140px]" />
      <div className="absolute bottom-[-240px] right-[-200px] w-[1200px] h-[300px] bg-linear-to-r from-purple-600/30 to-blue-500/30 blur-[140px]" />

      {/* MAIN */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 py-[160px]">

        {/* SECTION TITLE */}
        <div className="text-center mb-[120px]" data-aos="fade-up">
          <h1 className="text-[70px] md:text-[95px] font-extrabold leading-[1.05] mb-6">
            WebX AI{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-blue-500">
              Blog
            </span>
          </h1>

          <p className="text-soft text-xl md:text-2xl max-w-3xl mx-auto opacity-90" data-aos="fade-up" data-aos-delay="100">
            Insights, engineering breakdowns, AI strategy, and deep technical analysis from the WebX AI team.
          </p>
        </div>

        {/* GRID OF POSTS */}
        {blogs && blogs.length === 0 ? (
          <div className="text-center text-gray-400 text-xl py-20">No blogs found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {blogs?.map((blog: Blog, i: number) => (
              <div
                key={blog._id}
                className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:bg-white/10 transition p-0 flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="h-[240px] w-full overflow-hidden bg-black/40">
                  <img
                    src={blog.imageUrl || "https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg"}
                    alt={blog.imageAlt || blog.title}
                    className="w-full h-full object-cover opacity-95 hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col grow">
                  <p className="text-xs uppercase text-soft mb-2">
                    {new Date(blog.publishDate).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}
                  </p>

                  <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
                    {blog.title}
                  </h3>

                  <p className="text-soft leading-relaxed text-[15px] grow mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <Link href={`/blog/${blog.slug}`} className="mt-auto inline-block text-blue-400 hover:text-blue-300 transition font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

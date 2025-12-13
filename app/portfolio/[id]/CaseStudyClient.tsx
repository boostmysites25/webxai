"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { allProjects, PortfolioItem } from "@/data/portfolioContent";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CaseStudyClient({ params }: { params: { id: string } }) {
    const [project, setProject] = useState<PortfolioItem | null>(null);
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });

        if (params?.id) {
            const found = allProjects.find((p) => p.id === parseInt(params.id));
            if (found) {
                setProject(found);
            } else {
                router.push("/work");
            }
        }
    }, [params, router]);

    if (!project) return <div className="h-screen bg-[#05050A] flex items-center justify-center text-white">Loading...</div>;

    return (
        <main className="bg-[#05050A] min-h-screen text-white overflow-x-hidden">

            {/* ----------------------------------------------------- */}
            {/* HERO SECTION */}
            {/* ----------------------------------------------------- */}
            <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">

                {/* Background Image with Blur */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-30 blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#05050A]/70 via-[#05050A]/80 to-[#05050A]" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" data-aos="fade-up">
                    <span className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 uppercase tracking-wider backdrop-blur-md">
                        {project.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </section>

            {/* ----------------------------------------------------- */}
            {/* CONTENT GRID */}
            {/* ----------------------------------------------------- */}
            <section className="max-w-[1250px] mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-3 gap-16">

                    {/* LEFT COLUMN (MAIN) */}
                    <div className="lg:col-span-2 space-y-20">

                        {/* OVERVIEW */}
                        <div data-aos="fade-up">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                                Project Overview
                            </h2>
                            <p className="text-lg text-white/80 leading-relaxed">
                                {project.caseStudy.overview}
                            </p>
                        </div>

                        {/* CHALLENGE vs SOLUTION */}
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="text-xl font-bold mb-4 text-red-400">The Challenge</h3>
                                <p className="text-white/70 leading-relaxed">
                                    {project.caseStudy.challenge}
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10" data-aos="fade-up" data-aos-delay="200">
                                <h3 className="text-xl font-bold mb-4 text-green-400">The Solution</h3>
                                <p className="text-white/70 leading-relaxed">
                                    {project.caseStudy.solution}
                                </p>
                            </div>
                        </div>

                        {/* KEY FEATURES */}
                        <div data-aos="fade-up">
                            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {project.caseStudy.keyFeatures.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#0A0A0C] border border-white/5 hover:border-blue-500/30 transition-colors group">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                            {idx + 1}
                                        </div>
                                        <p className="text-white/80">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PROJECT IMAGE Showcase (Visual break) */}
                        <div className="relative w-full h-auto max-h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#010101]" data-aos="fade-up">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain max-h-[400px] mx-auto"
                            />
                        </div>

                        {/* RESULT */}
                        <div data-aos="fade-up">
                            <h2 className="text-3xl font-bold mb-6">Impact & Results</h2>
                            <div className="p-8 rounded-2xl bg-linear-to-r from-blue-900/20 to-purple-900/20 border border-white/10">
                                <p className="text-xl font-light text-white/90 italic">
                                    "{project.caseStudy.impact}"
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN (SIDEBAR) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-10">

                            {/* INFO CARD */}
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl" data-aos="fade-left">
                                <h3 className="text-lg font-semibold text-white/50 uppercase tracking-widest mb-8">Tech Stack</h3>

                                <div className="flex flex-wrap gap-3">
                                    {project.caseStudy.techStack.map((tech, i) => (
                                        <span key={i} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition cursor-default border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="w-full h-px bg-white/10 my-8"></div>

                                <div className="flex flex-col gap-4">
                                    {project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-4 rounded-xl font-bold text-center bg-blue-600 hover:bg-blue-500 text-white transition shadow-lg shadow-blue-900/40"
                                        >
                                            Visit Live Site ↗
                                        </a>
                                    )}
                                    <Link
                                        href="/work"
                                        className="w-full py-4 rounded-xl font-bold text-center border border-white/20 hover:bg-white/5 text-white transition"
                                    >
                                        Back to Portfolio
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* NEXT PROJECT CTA (Simple) */}
            <section className="py-20 border-t border-white/5 bg-[#0A0A0C]">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold mb-8">Ready to start your project?</h2>
                    <Link href="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition">
                        Let's Talk
                    </Link>
                </div>
            </section>

        </main>
    );
}


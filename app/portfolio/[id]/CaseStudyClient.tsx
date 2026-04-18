"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { allProjects, PortfolioItem } from "@/data/portfolioContent";
import Link from "next/link";

export default function CaseStudyClient() {
    const [project, setProject] = useState<PortfolioItem | null>(null);
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;

    useEffect(() => {

        if (id) {
            const projectId = parseInt(id);
            const found = allProjects.find((p) => p.id === projectId);
            if (found) {
                setProject(found);
            } else {
                router.push("/work");
            }
        }
    }, [id, router]);

    if (!project) return <div className="h-screen bg-[#000000] flex items-center justify-center text-white">Loading...</div>;

    return (
        <main className="bg-[#000000] min-h-screen text-white overflow-x-hidden">

            {/* ----------------------------------------------------- */}
            {/* HERO SECTION */}
            {/* ----------------------------------------------------- */}
            <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden border-b border-[#222]">

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[#333] bg-[#0A0A0A] text-[#888] text-sm font-semibold mb-6 uppercase tracking-wider">
                        {project.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto leading-relaxed">
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
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 tracking-tight text-white">
                                Project Overview
                            </h2>
                            <p className="text-lg text-[#888] leading-relaxed">
                                {project.caseStudy.overview}
                            </p>
                        </div>

                        {/* CHALLENGE vs SOLUTION */}
                        <div className="grid md:grid-cols-2 gap-10">
                            <div className="p-8 rounded-xl bg-[#0A0A0A] border border-[#222]">
                                <h3 className="text-xl font-semibold mb-4 text-white">The Challenge</h3>
                                <p className="text-[#888] leading-relaxed">
                                    {project.caseStudy.challenge}
                                </p>
                            </div>
                            <div className="p-8 rounded-xl bg-[#0A0A0A] border border-[#222]">
                                <h3 className="text-xl font-semibold mb-4 text-white">The Solution</h3>
                                <p className="text-[#888] leading-relaxed">
                                    {project.caseStudy.solution}
                                </p>
                            </div>
                        </div>

                        {/* KEY FEATURES */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-8 tracking-tight text-white">Key Features</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {project.caseStudy.keyFeatures.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-[#0A0A0A] border border-[#222] hover:border-[#444] transition-colors group">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-[#222] text-[#888] flex items-center justify-center text-xs font-semibold group-hover:text-white transition-colors">
                                            {idx + 1}
                                        </div>
                                        <p className="text-[#888]">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PROJECT IMAGE Showcase (Visual break) */}
                        <div className="relative w-full h-auto max-h-[400px] rounded-2xl overflow-hidden border border-[#222] bg-[#0A0A0A]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover max-h-[400px] mx-auto grayscale mix-blend-luminosity opacity-80"
                            />
                        </div>

                        {/* RESULT */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-6 tracking-tight text-white">Impact & Results</h2>
                            <div className="p-8 rounded-xl bg-[#0A0A0A] border border-[#222]">
                                <p className="text-xl font-medium text-[#888] italic">
                                    "{project.caseStudy.impact}"
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN (SIDEBAR) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-10">

                            {/* INFO CARD */}
                            <div className="p-8 rounded-xl bg-[#0A0A0A] border border-[#222]">
                                <h3 className="text-sm font-semibold text-[#666] uppercase tracking-widest mb-8">Tech Stack</h3>

                                <div className="flex flex-wrap gap-2">
                                    {project.caseStudy.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-[#111] text-[#888] border border-[#333] text-sm font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="w-full h-px bg-[#222] my-8"></div>

                                <div className="flex flex-col gap-4">
                                    {project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-3.5 rounded-lg font-semibold text-center bg-white text-black hover:bg-[#F2F2F2] transition-colors"
                                        >
                                            Visit Live Site ↗
                                        </a>
                                    )}
                                    <Link
                                        href="/work"
                                        className="w-full py-3.5 rounded-lg font-medium text-center border border-[#333] text-white hover:bg-[#111] transition-colors"
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
            <section className="py-24 border-t border-[#222] bg-[#000000]">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">Ready to start your project?</h2>
                    <Link href="/contact" className="inline-block px-10 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-[#F2F2F2] transition-colors">
                        Let's Talk
                    </Link>
                </div>
            </section>

        </main>
    );
}


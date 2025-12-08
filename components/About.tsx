"use client";

import Image from "next/image";

export default function About() {
    return (
        <section className="relative w-full py-[160px] px-6 bg-[#05050A] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-[#05050A] to-transparent z-20" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#05050A] to-transparent z-20" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px]" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px]" />


            <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div data-aos="fade-right">
                    <div className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                        Est. 2022
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                        Bridging Vision & <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                            Digital Reality
                        </span>
                    </h2>
                    <p className="text-soft text-lg leading-relaxed mb-8">
                        Since our inception in 2022, WebX AI has been dedicated to one mission: transforming complex challenges into elegant digital solutions. What started as a small team of innovators has grown into a powerhouse of digital transformation, trusted by forward-thinking companies worldwide.
                    </p>
                    <p className="text-soft text-lg leading-relaxed mb-8">
                        We combine years of market experience with cutting-edge AI technologies to deliver products that don't just exist but perform.
                    </p>

                    <div className="flex gap-8 border-t border-white/10 pt-8">
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1">3+</h4>
                            <p className="text-soft text-sm">Years of Experience</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                            <p className="text-soft text-sm">Projects Delivered</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-1">98%</h4>
                            <p className="text-soft text-sm">Client Satisfaction</p>
                        </div>
                    </div>
                </div>

                {/* Right Image/Visual */}
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group" data-aos="fade-left">
                    <div className="absolute inset-0 bg-linear-to-t from-[#05050A] via-transparent to-transparent z-10" />

                    {/* Abstract tech visual representation */}
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="WebX AI Team"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                        unoptimized
                    />

                    <div className="absolute bottom-8 left-8 z-20">
                        <p className="text-white text-xl font-bold">Driving Innovation</p>
                        <p className="text-blue-400">Since 2022</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

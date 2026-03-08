import Link from "next/link";

export default function CRMShowcase() {
    return (
        <section className="relative w-full py-[160px] px-6 overflow-hidden bg-[#05050A]">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-linear-to-r from-blue-600/20 via-purple-500/10 to-blue-400/20 blur-[150px] opacity-50 pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-right">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 tracking-wide">
                        Enterprise CRM Solution
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                        Own Your <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">Real Estate CRM</span>
                    </h2>
                    <p className="text-[#C9C9C9] text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                        Stop paying endlessly for generic software. Acquire the complete PropertyFlow CRM platform for your real estate company. Custom-branded, self-hosted, and engineered to scale with your sales team.
                    </p>
                    <Link
                        href="https://propertyflow.webxaitech.com"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white text-lg font-medium 
            bg-gradient-to-r from-blue-600/80 to-purple-600/80 
            border border-white/20 backdrop-blur-xl 
            hover:from-blue-600 hover:to-purple-600 transition-all 
            shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(120,80,255,0.5)]"
                    >
                        Explore the Platform
                    </Link>
                </div>

                <div className="relative" data-aos="fade-left">
                    {/* Dashboard Image Container */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] aspect-[16/10] bg-[#0A0B12]">
                        {/* Fallback pattern until image is loaded */}
                        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

                        {/* Actual Image */}
                        <img
                            src="/crm/dashboard.png"
                            alt="PropertyFlow CRM Dashboard"
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />

                        {/* Glowing border effect */}
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                    </div>

                    {/* Decorative floating element */}
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/30 blur-[50px] rounded-full z-[-1]"></div>
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/30 blur-[50px] rounded-full z-[-1]"></div>
                </div>
            </div>
        </section>
    );
}

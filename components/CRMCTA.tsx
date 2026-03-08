import Link from 'next/link';

export default function CRMCTA() {
    return (
        <section className="relative w-full py-[180px] px-6 overflow-hidden bg-[#05050A]">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-blue-600/20 to-purple-500/20 blur-[180px]" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.1]">
                <div className="w-[800px] h-[800px] border border-white/20 rounded-full"></div>
                <div className="absolute w-[1100px] h-[1100px] border border-white/10 rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-[900px] mx-auto text-center">
                <h2 className="text-white font-extrabold leading-[1.1] tracking-tight mb-8" data-aos="fade-up">
                    <span className="block text-4xl md:text-5xl mb-2">Ready to Own Your Custom</span>
                    <span className="block text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
                        Real Estate CRM?
                    </span>
                </h2>

                <p className="text-[#C9C9C9] text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    Take full control of your sales data with a dedicated, custom-branded real estate CRM engineered specifically for your company's workflow.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6" data-aos="fade-up" data-aos-delay="200">
                    <Link
                        href="https://propertyflow.webxaitech.com"
                        className="w-full sm:w-auto px-10 py-4 rounded-xl text-white text-lg font-medium 
             bg-gradient-to-r from-blue-600 to-purple-600 
             border border-white/10 shadow-[0_0_30px_rgba(120,80,255,0.4)]
             hover:scale-105 hover:shadow-[0_0_45px_rgba(120,80,255,0.6)] transition-all duration-300 text-center"
                    >
                        Explore Live Demo
                    </Link>
                    <Link
                        href="https://propertyflow.webxaitech.com"
                        className={`w-full sm:w-auto px-10 py-4 rounded-xl text-white text-lg font-medium bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 text-center`}
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}

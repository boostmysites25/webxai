export default function ThankYouPage() {
    return (
        <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden flex items-center justify-center">

            {/* GLOBAL BACKGROUND */}
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

            {/* GLOWS */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-blue-600/20 to-purple-500/20 blur-[120px]" />

            <div className="relative z-10 text-center px-6" data-aos="fade-up">
                <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                    Thank <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">You!</span>
                </h1>

                <p className="text-xl text-soft max-w-2xl mx-auto mb-10 leading-relaxed">
                    We received your inquiry. Our team will analyze your requirements and get back to you shortly.
                </p>

                <a href="/" className="px-10 py-4 rounded-xl text-white text-lg font-medium 
          bg-white/5 border border-white/10 backdrop-blur-xl 
          hover:bg-white/10 transition">
                    Back to Home
                </a>
            </div>
        </section>
    );
}

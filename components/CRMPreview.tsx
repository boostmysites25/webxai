export default function CRMPreview() {
    const screenshots = [
        { id: 1, src: '/crm/dashboard.png', caption: 'Sales Dashboard' },
        { id: 2, src: '/crm/pipeline.png', caption: 'Lead Pipeline Management' },
        { id: 3, src: '/crm/projects.png', caption: 'Project Tracking' },
        { id: 4, src: '/crm/analytics.png', caption: 'Revenue Analytics' },
    ];

    return (
        <section className="relative w-full py-[160px] px-6 overflow-hidden bg-[#05050A]">
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#05050A] to-transparent pointer-events-none z-20"></div>

            <div className="relative z-10 max-w-[1250px] mx-auto">
                <h2 className="text-center text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight" data-aos="fade-up">
                    Inside <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">PropertyFlow</span>
                </h2>
                <p className="text-center text-[#C9C9C9] max-w-2xl mx-auto text-lg md:text-xl mb-20 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    A beautifully designed interface built for modern real estate professionals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {screenshots.map((item, index) => (
                        <div
                            key={item.id}
                            className="group relative rounded-2xl overflow-hidden bg-[#0D0F17] border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(120,80,255,0.2)]"
                            data-aos="fade-up"
                            data-aos-delay={100 + (index * 100)}
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-[#0A0B12] relative">
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm font-medium">Image Placeholder</div>
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    className="absolute inset-0 w-full h-full object-cover border-b border-white/5 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white tracking-wide">{item.caption}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

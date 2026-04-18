const STACK = [
  "Next.js", "React", "TypeScript", "PostgreSQL",
  "Supabase", "OpenAI", "LangChain", "AWS", "Redis", "Stripe"
];

export default function TechStrip() {
  return (
    <section className="w-full bg-[#0B0B0B] py-8 overflow-hidden border-t border-b border-[#1F1F1F]">
      <div className="w-full max-w-[2000px] mx-auto flex items-center relative">
        <div className="absolute left-0 w-24 h-full bg-gradient-to-r from-[#0B0B0B] to-transparent z-10" />
        <div className="absolute right-0 w-24 h-full bg-gradient-to-l from-[#0B0B0B] to-transparent z-10" />

        <div className="flex shrink-0 animate-marquee min-w-full">
          {[...STACK, ...STACK, ...STACK].map((item, idx) => (
            <span 
              key={`${item}-${idx}`} 
              className="flex items-center gap-12 text-[14px] md:text-[15px] font-semibold text-[#A1A1AA] hover:text-white transition-colors cursor-default tracking-tight shrink-0 px-6"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

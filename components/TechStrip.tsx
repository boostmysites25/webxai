const STACK = [
  "Next.js", "React", "TypeScript", "PostgreSQL",
  "Supabase", "OpenAI", "LangChain", "AWS", "Redis", "Stripe"
];

export default function TechStrip() {
  return (
    <section className="w-full bg-[#0B0B0B] py-10">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center items-center">
          {STACK.map((item, idx) => (
            <span key={item} className="flex items-center gap-8">
              <span className="text-[15px] font-semibold text-white hover:text-[#A1A1AA] transition-colors cursor-default tracking-tight">
                {item}
              </span>
              {idx < STACK.length - 1 && (
                <span className="text-[#2A2A2A] text-[18px] font-light select-none">/</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

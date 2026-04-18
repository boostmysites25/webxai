"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { sendEmail } from "@/utils/sendEmail";
import Link from 'next/link';

function ContactOnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") || "";

  const [step, setStep] = useState(1);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    businessModel: "",
    teamSize: "",
    goal: intent || "",
    bottleneck: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
  });

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const isStep1Valid = formData.companyName && formData.businessModel && formData.teamSize;
  const isStep2Valid = formData.goal && formData.bottleneck;
  const isStep3Valid = formData.timeline && formData.budget && formData.name && /^\S+@\S+\.\S+$/.test(formData.email);

  const handleSubmit = async () => {
    setIsDeploying(true);
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: "N/A",
      countryCode: "",
      company: `${formData.companyName} (${formData.teamSize} team)`,
      projectType: formData.businessModel,
      budget: formData.budget,
      timeline: formData.timeline,
      details: `Goal: ${formData.goal}\nBottleneck: ${formData.bottleneck}`,
    };
    
    const success = await sendEmail(payload);
    if (success) {
      setIsSuccess(true);
    } else {
      alert("System Error: Intake sequence failed. Please email us directly.");
      setIsDeploying(false);
    }
  };

  if (isSuccess) {
     return (
        <main className="w-full min-h-screen bg-[#0B0B0B] text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-[600px] text-center flex flex-col items-center">
                <span className="w-12 h-12 rounded-full border border-[#7C3AED] flex items-center justify-center mb-8">
                   <svg className="w-5 h-5 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                <h1 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight mb-6">Request received.</h1>
                <p className="text-[16px] text-[#A1A1AA] leading-[1.6] mb-12">
                   We will review your system parameters and get back to you within 24–48 hours.
                </p>
                
                <div className="w-full border-t border-[#1F1F1F] pt-12 flex flex-col items-center">
                    <p className="text-[13px] font-mono tracking-widest text-[#A1A1AA] uppercase mb-4">Fast-Track Optional</p>
                    <a href="https://calendly.com/webxdev-ai/30min" target="_blank" rel="noreferrer" className="h-[44px] px-8 bg-transparent border border-[#1F1F1F] text-white hover:bg-[#121212] transition-colors flex items-center justify-center text-[13px] font-medium">
                        Book an Intro Call ↗
                    </a>
                </div>
            </div>
        </main>
     );
  }

  return (
    <main className="w-full min-h-screen bg-[#0B0B0B] text-white pt-[140px] pb-24">
      <div className="w-full max-w-[700px] mx-auto px-6 flex flex-col relative">

        {/* ─── HEADER ─── */}
        <Link href="/" className="inline-flex items-center text-[12px] font-mono uppercase tracking-widest text-[#A1A1AA] hover:text-white transition-colors mb-12 group">
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Return Home
        </Link>
        <h1 className="text-[40px] md:text-[56px] font-bold tracking-tighter leading-[1.05] text-white mb-6">
           Architecture Intake.
        </h1>
        <p className="text-[18px] text-[#A1A1AA] leading-[1.6] mb-12">
           Define your system requirement. We'll evaluate and map execution.
        </p>

        {/* ─── QUALIFIER BANNER ─── */}
        <div className="w-full bg-[#121212] border-l-[3px] border-[#7C3AED] p-6 mb-16">
           <p className="text-[15px] text-[#A1A1AA] leading-[1.6]">
              "We work with teams building scalable systems. Not suitable for basic brochure websites."
           </p>
        </div>

        {/* ─── WHAT HAPPENS NEXT ─── */}
        <div className="w-full border-t border-b border-[#1F1F1F] py-8 mb-16 hidden sm:block">
           <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-[#555]">
               <div className="flex items-center gap-3">
                   <span className="text-[#A1A1AA]">01</span>
                   <span>Submit Request</span>
               </div>
               <span>→</span>
               <div className="flex items-center gap-3">
                   <span className="text-[#A1A1AA]">02</span>
                   <span>System Evaluation</span>
               </div>
               <span>→</span>
               <div className="flex items-center gap-3">
                   <span className="text-[#A1A1AA]">03</span>
                   <span>Architecture Proposal</span>
               </div>
               <span>→</span>
               <div className="flex items-center gap-3">
                   <span className="text-[#A1A1AA]">04</span>
                   <span>Execution Begins</span>
               </div>
           </div>
        </div>

        {/* ─── STEP INDICATOR ─── */}
        <div className="flex items-center gap-4 text-[12px] font-mono tracking-widest uppercase mb-10 pb-4 border-b border-[#1F1F1F]">
            <span className={step >= 1 ? "text-white" : "text-[#555]"}>Step 1</span>
            <span className="text-[#333]">/</span>
            <span className={step >= 2 ? "text-white" : "text-[#555]"}>Step 2</span>
            <span className="text-[#333]">/</span>
            <span className={step === 3 ? "text-white" : "text-[#555]"}>Step 3</span>
        </div>

        {/* ─── FORM FLOW ─── */}
        <div className="w-full flex-1 mb-16 relative overflow-hidden">
            
            {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col gap-8">
                   <div className="flex flex-col gap-3">
                       <label className="text-[13px] font-medium text-[#A1A1AA]">Company Name</label>
                       <input 
                           type="text" 
                           className="w-full bg-[#0A0A0A] border border-[#1F1F1F] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#7C3AED] transition-colors"
                           placeholder="Acme Corp"
                           value={formData.companyName}
                           onChange={e => setFormData({...formData, companyName: e.target.value})}
                       />
                   </div>
                   
                   <div className="flex flex-col gap-3">
                       <label className="text-[13px] font-medium text-[#A1A1AA]">Business Model</label>
                       <select 
                           className="w-full bg-[#0A0A0A] border border-[#1F1F1F] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#7C3AED] transition-colors appearance-none cursor-pointer"
                           value={formData.businessModel}
                           onChange={e => setFormData({...formData, businessModel: e.target.value})}
                       >
                           <option value="" disabled>Select model</option>
                           <option value="B2B SaaS">B2B SaaS</option>
                           <option value="E-Commerce">E-Commerce</option>
                           <option value="Internal Tools">Internal Tools</option>
                           <option value="Other">Other</option>
                       </select>
                   </div>

                   <div className="flex flex-col gap-3">
                       <label className="text-[13px] font-medium text-[#A1A1AA]">Team Size</label>
                       <select 
                           className="w-full bg-[#0A0A0A] border border-[#1F1F1F] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#7C3AED] transition-colors appearance-none cursor-pointer"
                           value={formData.teamSize}
                           onChange={e => setFormData({...formData, teamSize: e.target.value})}
                       >
                           <option value="" disabled>Select size</option>
                           <option value="1-5">1–5</option>
                           <option value="5-20">5–20</option>
                           <option value="20+">20+</option>
                       </select>
                   </div>
                </div>
            )}

            {step === 2 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col gap-8">
                   <div className="flex flex-col gap-3">
                       <label className="text-[13px] font-medium text-[#A1A1AA]">What's your primary goal?</label>
                       <select 
                           className="w-full bg-[#0A0A0A] border border-[#1F1F1F] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#7C3AED] transition-colors appearance-none cursor-pointer"
                           value={formData.goal}
                           onChange={e => setFormData({...formData, goal: e.target.value})}
                       >
                           <option value="" disabled>Select goal...</option>
                           <option value="Increase revenue">Increase revenue</option>
                           <option value="Reduce manual work">Reduce manual work</option>
                           <option value="Scale users">Scale users</option>
                           <option value="Build new product">Build new product</option>
                           {/* Add fallback for the modal intent pass if it wasn't strictly one of these */}
                           {intent && !["Increase revenue", "Reduce manual work", "Scale users", "Build new product"].includes(intent) && (
                              <option value={intent}>{intent}</option>
                           )}
                       </select>
                   </div>

                   <div className="flex flex-col gap-3">
                       <label className="text-[13px] font-medium text-[#A1A1AA]">Technical Bottleneck</label>
                       <textarea 
                           className="w-full bg-[#0A0A0A] border border-[#1F1F1F] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#7C3AED] transition-colors resize-none h-[180px]"
                           placeholder="Describe your current system problem..."
                           value={formData.bottleneck}
                           onChange={e => setFormData({...formData, bottleneck: e.target.value})}
                       />
                   </div>
                </div>
            )}

            {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col gap-10">
                   
                   <div className="flex flex-col gap-4 border-b border-[#1F1F1F] pb-8">
                       <label className="text-[13px] font-medium text-[#A1A1AA] uppercase tracking-wide font-mono">Timeline</label>
                       <div className="flex flex-col gap-3">
                           {["ASAP", "1-2 months", "Flexible"].map((time) => (
                               <label key={time} onClick={() => setFormData({...formData, timeline: time})} className="flex items-center gap-3 cursor-pointer group">
                                   <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${formData.timeline === time ? "border-[#7C3AED]" : "border-[#1F1F1F] group-hover:border-[#555]"}`}>
                                       {formData.timeline === time && <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />}
                                   </div>
                                   <span className="text-[15px] text-white">{time}</span>
                               </label>
                           ))}
                       </div>
                   </div>

                   <div className="flex flex-col gap-4 border-b border-[#1F1F1F] pb-8">
                       <label className="text-[13px] font-medium text-[#A1A1AA] uppercase tracking-wide font-mono">Budget</label>
                       <div className="flex flex-col gap-3">
                           {["$5k - $10k", "$10k+"].map((budg) => (
                               <label key={budg} onClick={() => setFormData({...formData, budget: budg})} className="flex items-center gap-3 cursor-pointer group">
                                   <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${formData.budget === budg ? "border-[#7C3AED]" : "border-[#1F1F1F] group-hover:border-[#555]"}`}>
                                       {formData.budget === budg && <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />}
                                   </div>
                                   <span className="text-[15px] text-white">{budg}</span>
                               </label>
                           ))}
                       </div>
                   </div>

                   <div className="flex flex-col gap-6">
                       <div className="flex flex-col gap-3">
                           <label className="text-[13px] font-medium text-[#A1A1AA]">Full Name</label>
                           <input 
                               type="text" 
                               className="w-full bg-[#0A0A0A] border border-[#1F1F1F] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#7C3AED] transition-colors"
                               value={formData.name}
                               onChange={e => setFormData({...formData, name: e.target.value})}
                           />
                       </div>
                       <div className="flex flex-col gap-3">
                           <label className="text-[13px] font-medium text-[#A1A1AA]">Work Email</label>
                           <input 
                               type="email" 
                               className="w-full bg-[#0A0A0A] border border-[#1F1F1F] px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#7C3AED] transition-colors"
                               value={formData.email}
                               onChange={e => setFormData({...formData, email: e.target.value})}
                           />
                       </div>
                   </div>

                </div>
            )}
            
        </div>

        {/* ─── NAVIGATION BUTTONS ─── */}
        <div className="w-full flex items-center justify-between border-t border-[#1F1F1F] pt-8">
            <button 
                onClick={handlePrev}
                disabled={step === 1}
                className={`text-[13px] font-mono tracking-widest uppercase transition-colors ${step === 1 ? "opacity-0 pointer-events-none" : "text-[#A1A1AA] hover:text-white"}`}
            >
                ← Back
            </button>

            <button 
                onClick={step === 3 ? handleSubmit : handleNext}
                disabled={isDeploying || (step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid) || (step === 3 && !isStep3Valid)}
                className="h-[44px] px-8 bg-white text-black font-medium text-[13px] flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isDeploying ? "Transmitting..." : step === 3 ? "Submit Overview" : "Next Step →"}
            </button>
        </div>

        {/* ─── FINAL TOUCH ─── */}
        <div className="mt-16 text-center text-[#555] text-[12px] font-mono tracking-widest uppercase">
            <p>Limited onboarding capacity each month.</p>
        </div>

      </div>
    </main>
  );
}

export default function ContactOnboarding() {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#0B0B0B]" />}>
       <ContactOnboardingContent />
    </Suspense>
  )
}

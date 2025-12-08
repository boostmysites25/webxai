"use client";

import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { sendEmail } from "@/utils/sendEmail";
import FAQ from "@/components/FAQ";
import CustomDropdown from "@/components/CustomDropdown";
import { countryCodes, projectTypes, budgetRanges, timelineOptions } from "@/data/formOptions";

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
}

export default function ContactPage() {
  const router = useRouter();
  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: {
      countryCode: "+91"
    }
  });

  const onSubmit = async (data: any) => {
    const success = await sendEmail(data);
    if (success) {
      router.push("/thank-you");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#05050A] text-white overflow-hidden">

      {/* GLOBAL BACKGROUND — SAME AS OTHER PAGES */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      {/* Vertical neon grid lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute left-1/4 top-0 w-[2px] h-full bg-linear-to-b from-purple-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-linear-to-b from-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute left-[70%] top-0 w-[2px] h-full bg-linear-to-b from-purple-400/30 to-transparent blur-sm"></div>
      </div>

      {/* Soft glows */}
      <div className="absolute -top-52 left-0 w-[1200px] h-[300px] bg-linear-to-r from-blue-600/30 to-purple-600/30 blur-[140px]" />
      <div className="absolute bottom-[-240px] right-[-200px] w-[1200px] h-[300px] bg-linear-to-r from-purple-600/30 to-blue-500/30 blur-[140px]" />

      {/* MAIN WRAPPER */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-6 py-[160px]">

        {/* TITLE */}
        <div className="text-center mb-[120px]" data-aos="fade-up">
          <h1 className="text-[70px] md:text-[95px] font-extrabold leading-[1.05] mb-6">
            Contact{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-blue-500">
              WebX AI
            </span>
          </h1>

          <p className="text-soft text-xl md:text-2xl max-w-3xl mx-auto opacity-90" data-aos="fade-up" data-aos-delay="100">
            Tell us about your project. We’ll turn it into an intelligent, scalable digital system.
          </p>
        </div>

        {/* --------------------- MAIN 2-COLUMN SECTION ---------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* LEFT — Contact Info + Trust + Explanation */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Let’s Build Something<br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-400">
                Intelligent Together
              </span>
            </h2>

            <p className="text-soft leading-relaxed text-lg mb-10 opacity-90">
              Whether it's AI development, modern apps, scalable systems, automations or data engineering —
              we work with brands that want engineering clarity and real business outcomes.
            </p>

            {/* CONTACT METHODS */}
            <div className="space-y-6 mb-16">

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                  📞
                </span>
                <p className="text-lg text-soft">+91 7093242788</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                  ✉️
                </span>
                <p className="text-lg text-soft">webxdev.ai@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                  📍
                </span>
                <p className="text-lg text-soft">India — Remote Worldwide</p>
              </div>
            </div>

            {/* TRUST BADGES */}
            <div className="flex flex-col gap-6">

              <div className="px-10 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center">
                <p className="text-2xl font-semibold mb-2">MSME Registered</p>
                <p className="text-soft opacity-80">Government of India UDYAM</p>
              </div>

              <div className="px-10 py-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center">
                <p className="text-2xl font-semibold mb-2">Boostmysites Partner</p>
                <p className="text-soft opacity-80">Official Development Partner</p>
              </div>

            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="relative" data-aos="fade-up" data-aos-delay="300">

            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-600/10 blur-2xl rounded-3xl" />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative p-10 rounded-3xl bg-white/5 border border-white/10 
              backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)] space-y-6"
            >
              <h3 className="text-3xl font-bold mb-4">Start Your Project</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input {...register("name", { required: true })} className="input" placeholder="Name *" />
                  {errors.name && <span className="text-red-400 text-sm">Name is required</span>}
                </div>
                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="input"
                    placeholder="Email *"
                  />
                  {errors.email && <span className="text-red-400 text-sm">{(errors.email.message as string) || "Email is required"}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <Controller
                    name="countryCode"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomDropdown
                        options={countryCodes}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="+ Code"
                        className="w-full"
                      />
                    )}
                  />
                  {errors.countryCode && <span className="text-red-400 text-sm">Required</span>}
                </div>

                {/* Phone Number */}
                <div className="md:col-span-2">
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Phone number must contain only digits"
                      }
                    })}
                    className="input w-full"
                    type="tel"
                    placeholder="Phone Number *"
                  />
                  {errors.phone && <span className="text-red-400 text-sm">{(errors.phone.message as string) || "Phone number is required"}</span>}
                </div>
              </div>
              {/* Company row */}
              <div className="mt-6">
                <input {...register("company")} className="input" placeholder="Company (optional)" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Controller
                    name="projectType"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomDropdown
                        options={projectTypes}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Project Type *"
                      />
                    )}
                  />
                  {errors.projectType && <span className="text-red-400 text-sm">Please select a project type</span>}
                </div>

                <div>
                  <Controller
                    name="budget"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <CustomDropdown
                        options={budgetRanges}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Budget Range *"
                      />
                    )}
                  />
                  {errors.budget && <span className="text-red-400 text-sm">Please select a budget range</span>}
                </div>
              </div>

              <div>
                <Controller
                  name="timeline"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <CustomDropdown
                      options={timelineOptions}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Timeline *"
                    />
                  )}
                />
                {errors.timeline && <span className="text-red-400 text-sm">Please select a timeline</span>}
              </div>

              <div>
                <textarea
                  {...register("details", { required: true })}
                  className="input h-32"
                  placeholder="Project Details *"
                ></textarea>
                {errors.details && <span className="text-red-400 text-sm">Please provide some details</span>}
              </div>

              <button
                disabled={isSubmitting}
                className="w-full rounded-xl py-4 text-lg font-medium
                bg-linear-to-r from-blue-600/40 to-purple-600/40
                border border-white/20 backdrop-blur-xl hover:from-blue-600/50 hover:to-purple-600/50 transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32">
          <FAQ />
        </div>
      </div>
    </section>
  );
}

/* GLOBAL INPUT STYLE */
const inputStyles = `
.input {
  @apply w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
  text-white placeholder-white/40 backdrop-blur-md focus:outline-none 
  focus:border-white/30 transition;
}
`;

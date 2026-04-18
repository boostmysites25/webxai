import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";

import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import Approach from "@/components/Approach";
import WorkShowcase from "@/components/WorkShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "WebX AI — AI Systems & Engineering Studio | Revenue-Driven Technology",
  description:
    "WebX AI engineers AI automation systems, SaaS products, and data pipelines for startups and enterprises. We build technology that generates revenue, not just looks good.",
  keywords: [
    "AI development company India",
    "AI automation systems",
    "LLM integration",
    "SaaS product development",
    "Next.js engineering",
    "AI engineering studio",
    "WebX AI",
    "revenue-driven AI",
    "data pipeline engineering",
    "Hyderabad AI company",
  ],
  openGraph: {
    title: "WebX AI — AI Systems & Engineering Studio",
    description: "We build AI-powered systems that automate operations and generate revenue.",
    url: siteUrl,
    images: [{ url: `${siteUrl}/logo.png`, width: 1200, height: 630, alt: "WebX AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebX AI — AI Systems & Engineering Studio",
    description: "We build AI-powered systems that automate operations and generate revenue.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: { canonical: siteUrl },
};

export default function Home() {
  return (
    <main className="w-full min-h-screen text-white relative bg-[#0B0B0B]">
      <Hero />
      <TechStrip />

      <Services />
      <WhyUs />
      <ArchitectureFlow />
      <Approach />
      <WorkShowcase />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}

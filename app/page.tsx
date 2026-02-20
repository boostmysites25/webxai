import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyWebXAI from "@/components/WhyWebXAI";
import Approach from "@/components/Approach";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Home",
  description: "WebX AI engineers intelligent digital systems with clarity and precision. We build AI-driven web applications, mobile apps, data analytics solutions, and scalable digital platforms. Transform your business with cutting-edge technology.",
  keywords: ["AI development company", "web development services", "mobile app development", "Next.js developers", "React development", "AI solutions", "digital transformation", "software engineering", "automation services", "data analytics", "India web development", "remote development team"],
  openGraph: {
    title: "WebX AI - AI-Driven Digital Systems & Web Development",
    description: "Engineering intelligent digital systems with clarity and precision. AI development, web apps, mobile apps, and scalable solutions.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "WebX AI - AI-Driven Digital Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebX AI - AI-Driven Digital Systems & Web Development",
    description: "Engineering intelligent digital systems with clarity and precision.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyWebXAI />
      <Approach />
      {/* <Timeline/> */}
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

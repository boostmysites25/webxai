import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CRMShowcase from "@/components/CRMShowcase";
import CRMPreview from "@/components/CRMPreview";
import CRMFeatures from "@/components/CRMFeatures";
import CRMCTA from "@/components/CRMCTA";
import WhyWebXAI from "@/components/WhyWebXAI";
import Approach from "@/components/Approach";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Script from "next/script";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Webxai – AI-Driven Web Development, App Development & Digital Solutions",
  description: "Webxai builds intelligent digital systems — AI development, web applications, mobile apps, ecommerce platforms, chatbots, and data analytics solutions. Trusted by startups and enterprises across India and globally.",
  keywords: [
    "Webxai",
    "Webxai software",
    "Webxai AI development",
    "Webxai company",
    "AI development company",
    "web development services",
    "mobile app development",
    "Next.js developers",
    "React development",
    "AI solutions",
    "digital transformation",
    "software engineering",
    "automation services",
    "data analytics",
    "ecommerce development",
    "chatbot development",
    "India web development",
    "remote development team",
    "custom software development India",
    "app development company Hyderabad",
  ],
  openGraph: {
    title: "Webxai – AI-Driven Digital Systems & Web Development Company",
    description: "Webxai engineers intelligent digital systems with clarity and precision. AI development, web apps, mobile apps, ecommerce, chatbots, and scalable solutions for ambitious brands.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Webxai – AI-Driven Digital Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webxai – AI-Driven Digital Systems & Web Development",
    description: "Webxai engineers intelligent digital systems with clarity and precision.",
    images: [`${siteUrl}/logo.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  const homepageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most projects take 3–8 weeks depending on complexity. We follow a strict timeline to ensure timely delivery without compromising quality.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide comprehensive monthly or yearly maintenance packages including updates, security patches, and content changes.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate AI into existing systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We specialize in retrofitting AI modules into legacy systems to enhance automation, data analysis, and user interaction.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we work with ambitious startups, established enterprises, and agencies looking for a reliable technical partner.",
        },
      },
      {
        "@type": "Question",
        name: "What is your pricing model?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer both fixed-price project based models and dedicated team retainer models depending on the long-term needs of your business.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageFaqSchema),
        }}
      />
      <Script
        id="homepage-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Hero />
      <About />
      <CRMShowcase />
      <CRMPreview />
      <CRMFeatures />
      <Services />
      <WhyWebXAI />
      <Approach />
      {/* <Timeline/> */}
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CRMCTA />
      <CTA />
    </>
  );
}

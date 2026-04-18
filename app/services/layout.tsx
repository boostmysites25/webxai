import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities – AI, Web & App Development Services",
  description: "WebX AI offers AI systems development, web infrastructure, mobile app development, e-commerce solutions, chatbot development, and blockchain engineering for startups and enterprises in India.",
  keywords: [
    "WebX AI services", "webxai capabilities", "AI development services India",
    "web development services India", "app development Hyderabad",
    "chatbot development India", "ecommerce development India",
    "blockchain development India", "SaaS development India",
    "aiweb services", "webex ai services"
  ],
  alternates: { canonical: "https://webxaitech.com/services" },
  openGraph: {
    title: "Capabilities – WebX AI Services",
    description: "AI systems, web infrastructure, mobile apps, chatbots, and automation — engineered for scale.",
    url: "https://webxaitech.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

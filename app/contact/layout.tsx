import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact WebX AI to start your project. Get in touch for AI development, web development, mobile app development, and data analytics services. Phone: +91 7093242788 | Email: webxdev.ai@gmail.com | India — Remote Worldwide",
  keywords: ["contact WebX AI", "web development quote", "mobile app development consultation", "AI development services", "software development company contact", "get project quote", "hire developers"],
  openGraph: {
    title: "Contact WebX AI - Start Your Project Today",
    description: "Get in touch for AI development, web development, mobile apps, and data analytics. Let's build something intelligent together.",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Contact WebX AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact WebX AI - Start Your Project",
    description: "Get in touch for AI development, web development, mobile apps, and data analytics.",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


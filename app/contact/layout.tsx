import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Contact Webxai – Get a Free Project Quote | AI & Web Development",
  description: "Contact Webxai to start your project. Get a free quote for AI development, web development, mobile app development, ecommerce, chatbot development, and data analytics services. Phone: +91 7093242788 | Email: webxdev.ai@gmail.com | Hyderabad, India — Remote Worldwide.",
  keywords: [
    "contact Webxai",
    "Webxai contact",
    "web development quote",
    "mobile app development consultation",
    "AI development services quote",
    "software development company contact",
    "get project quote",
    "hire developers India",
    "free web development quote",
    "app development cost India",
    "AI chatbot development quote",
  ],
  openGraph: {
    title: "Contact Webxai – Get a Free Project Quote Today",
    description: "Get in touch with Webxai for AI development, web development, mobile apps, ecommerce, chatbots, and data analytics. Let's build something intelligent together.",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Contact Webxai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Webxai – Start Your Project Today",
    description: "Get in touch for AI development, web development, mobile apps, ecommerce, and data analytics.",
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${siteUrl}/contact`,
      },
    ],
  };

  return (
    <>
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Our Work – Portfolio & Case Studies | Webxai",
  description: "Explore Webxai's portfolio of 40+ digital products built for scale, performance, and impact. Case studies spanning web development, mobile apps, AI solutions, ecommerce platforms, blockchain projects, chatbots, and game development.",
  keywords: [
    "Webxai portfolio",
    "web development projects",
    "mobile app portfolio",
    "AI solutions case studies",
    "ecommerce portfolio",
    "chatbot projects",
    "web development examples",
    "app development projects",
    "Next.js projects",
    "React projects",
    "blockchain development portfolio",
    "game development portfolio",
  ],
  openGraph: {
    title: "Our Work – Webxai Portfolio & Case Studies",
    description: "Explore 40+ digital products built for scale, performance, and impact by Webxai.",
    url: `${siteUrl}/work`,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Webxai Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work – Webxai Portfolio & Case Studies",
    description: "Explore 40+ digital products built for scale, performance, and impact.",
  },
  alternates: {
    canonical: `${siteUrl}/work`,
  },
};

export default function WorkLayout({
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
        name: "Our Work",
        item: `${siteUrl}/work`,
      },
    ],
  };

  return (
    <>
      <Script
        id="work-breadcrumb-schema"
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

import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Work – Systems & Case Studies | WebX AI",
  description: "Explore WebX AI's portfolio of scalable AI systems, web applications, e-commerce platforms, and automation projects. Real engineering for real business output.",
  keywords: [
    "WebX AI portfolio", "webxai work", "webxai projects", "AI systems portfolio India",
    "web development portfolio India", "case studies webxai", "webex ai projects",
    "aiweb portfolio", "webx projects", "webxai case studies",
    "web development case study India", "Webxai portfolio",
    "web development projects", "mobile app portfolio", "AI solutions case studies",
    "ecommerce portfolio", "chatbot projects", "blockchain development portfolio",
  ],
  openGraph: {
    title: "Work – WebX AI System Portfolio",
    description: "A ledger of scalable systems engineered for performance and measurable output.",
    url: `${siteUrl}/work`,
    images: [{ url: `${siteUrl}/logo.png`, width: 1200, height: 630, alt: "WebX AI Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work – WebX AI Portfolio & Case Studies",
    description: "Explore scalable digital products built for performance and measurable impact.",
  },
  alternates: { canonical: `${siteUrl}/work` },
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

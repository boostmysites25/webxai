import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Blog – AI, Web Development & Tech Insights | Webxai",
  description: "Read insights, engineering breakdowns, AI strategy, and deep technical analysis from the Webxai team. Articles on AI transformation, web development best practices, mobile apps, ecommerce, chatbots, and modern technology trends.",
  keywords: [
    "Webxai blog",
    "AI development blog",
    "web development articles",
    "Next.js tutorials",
    "React development blog",
    "AI transformation insights",
    "technology insights",
    "software engineering blog",
    "mobile app development articles",
    "ecommerce development tips",
    "chatbot development guides",
  ],
  openGraph: {
    title: "Webxai Blog – AI, Web Development & Technology Insights",
    description: "Read insights, engineering breakdowns, AI strategy, and deep technical analysis from the Webxai team.",
    url: `${siteUrl}/blog`,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Webxai Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webxai Blog – AI, Web Development & Technical Analysis",
    description: "Read insights, engineering breakdowns, AI strategy, and deep technical analysis.",
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogLayout({
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
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
    ],
  };

  return (
    <>
      <Script
        id="blog-breadcrumb-schema"
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

import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Blog – Engineering Insights & Technical Breakdowns | WebX AI",
  description: "Read WebX AI's engineering blog for technical breakdowns, AI architecture strategies, scalable system design, and infrastructure insights from our team.",
  keywords: [
    "WebX AI blog", "webxai engineering blog", "AI engineering insights",
    "web development blog India", "AI systems blog", "technical blog webxai",
    "webex ai blog", "aiweb engineering", "software architecture blog India",
    "Webxai blog", "AI development blog", "web development articles",
    "Next.js tutorials", "React development blog", "AI transformation insights",
    "software engineering blog", "mobile app development articles",
  ],
  openGraph: {
    title: "Engineering Insights – WebX AI Blog",
    description: "Technical breakdowns, architecture systems, and scalable engineering strategies from the WebX AI engineering studio.",
    url: `${siteUrl}/blog`,
    images: [{ url: `${siteUrl}/logo.png`, width: 1200, height: 630, alt: "WebX AI Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Insights – WebX AI Blog",
    description: "Technical breakdowns, architecture systems, and scalable engineering strategies.",
  },
  alternates: { canonical: `${siteUrl}/blog` },
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

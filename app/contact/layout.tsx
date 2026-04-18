import type { Metadata } from "next";
import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Contact – Start Your Architecture Build | WebX AI",
  description: "Start a project with WebX AI. Submit your system requirements and we'll evaluate and map a scalable architecture. Work with engineers, not layers. Phone: +91 7093242788 | Email: webxdev.ai@gmail.com",
  keywords: [
    "contact WebX AI", "webxai contact", "start project webxai",
    "hire AI developer India", "hire web developer Hyderabad",
    "webex ai contact", "aiweb contact", "webx ai start project",
    "AI development inquiry India", "web development consultation India",
    "contact Webxai", "Webxai contact", "web development quote",
    "hire developers India", "free web development quote",
  ],
  openGraph: {
    title: "Start Your Architecture Build – WebX AI",
    description: "Submit your system requirements. We'll evaluate and map a scalable execution plan.",
    url: `${siteUrl}/contact`,
    images: [{ url: `${siteUrl}/logo.png`, width: 1200, height: 630, alt: "WebX AI Contact" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Architecture Build – WebX AI",
    description: "Submit your system requirements. We'll evaluate and map a scalable execution plan.",
  },
  alternates: { canonical: `${siteUrl}/contact` },
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

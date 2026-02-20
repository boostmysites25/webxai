import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read insights, engineering breakdowns, AI strategy, and deep technical analysis from the WebX AI team. Articles on AI transformation, web development, mobile apps, and modern technology trends.",
  keywords: ["WebX AI blog", "AI development blog", "web development articles", "Next.js tutorials", "React development blog", "AI transformation", "technology insights", "software engineering blog", "mobile app development articles"],
  openGraph: {
    title: "WebX AI Blog - Insights & Technical Analysis",
    description: "Read insights, engineering breakdowns, AI strategy, and deep technical analysis from the WebX AI team.",
    url: `${siteUrl}/blog`,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "WebX AI Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebX AI Blog - Insights & Technical Analysis",
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
  return <>{children}</>;
}


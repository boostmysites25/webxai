import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore WebX AI's portfolio of digital products built for scale, performance, and impact. Case studies include web development, mobile apps, AI solutions, e-commerce platforms, blockchain projects, and game development.",
  keywords: ["WebX AI portfolio", "web development projects", "mobile app portfolio", "AI solutions portfolio", "case studies", "web development examples", "app development projects", "Next.js projects", "React projects"],
  openGraph: {
    title: "Our Work - WebX AI Portfolio & Case Studies",
    description: "Explore our portfolio of digital products built for scale, performance, and impact.",
    url: `${siteUrl}/work`,
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "WebX AI Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work - WebX AI Portfolio & Case Studies",
    description: "Explore our portfolio of digital products built for scale, performance, and impact.",
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
  return <>{children}</>;
}


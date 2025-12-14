import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { AOSInit } from "@/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://webxai.com";

/* Viewport (SEO + mobile correctness) */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05050A",
};

/* Global SEO Metadata */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "WebX AI - AI-Driven Digital Systems & Web Development",
    template: "%s | WebX AI",
  },

  description:
    "WebX AI engineers intelligent digital systems with clarity and precision. We build AI-driven web applications, mobile apps, dashboards, and scalable solutions for modern businesses.",

  keywords: [
    "AI development",
    "web development",
    "mobile app development",
    "Next.js agency",
    "AI solutions",
    "data analytics",
    "dashboards",
    "automation",
    "software company India",
  ],

  authors: [{ name: "WebX AI" }],
  creator: "WebX AI",
  publisher: "WebX AI",

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "WebX AI",
    title: "WebX AI - AI-Driven Digital Systems & Web Development",
    description:
      "Engineering intelligent digital systems with clarity and precision.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "WebX AI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WebX AI - AI-Driven Digital Systems & Web Development",
    description:
      "Engineering intelligent digital systems with clarity and precision.",
    images: [`${siteUrl}/logo.png`],
  },

  verification: {
    // google: "ADD_LATER",
    // bing: "ADD_LATER",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebX AI",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7093242788",
      contactType: "Customer Service",
      email: "webxdev.ai@gmail.com",
      areaServed: "IN",
      availableLanguage: "English",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WebX AI",
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: "WebX AI",
    },
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Providers>
          <AOSInit />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

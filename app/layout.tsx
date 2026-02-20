import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WebX AI - AI-Driven Digital Systems & Web Development",
    template: "%s | WebX AI"
  },
  description: "WebX AI engineers intelligent digital systems with clarity and precision. We build AI-driven web applications, mobile apps, and scalable solutions for businesses. Partner with us for cutting-edge technology.",
  keywords: ["AI development", "web development", "mobile app development", "Next.js", "React", "AI solutions", "digital transformation", "software engineering", "automation", "data analytics"],
  authors: [{ name: "WebX AI" }],
  creator: "WebX AI",
  publisher: "WebX AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "WebX AI",
    title: "WebX AI - AI-Driven Digital Systems & Web Development",
    description: "Engineering intelligent digital systems with clarity and precision. AI development, web apps, mobile apps, and scalable solutions.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "WebX AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebX AI - AI-Driven Digital Systems & Web Development",
    description: "Engineering intelligent digital systems with clarity and precision.",
    images: [`${siteUrl}/logo.png`],
    creator: "@webxai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

import { AOSInit } from "@/components/AOSInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebX AI",
    "description": "Engineering intelligent digital systems with clarity and precision. AI development, web apps, mobile apps, and scalable solutions.",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7093242788",
      "contactType": "Customer Service",
      "email": "webxdev.ai@gmail.com",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "sameAs": [
      // Add your social media URLs here when available
      // "https://twitter.com/webxai",
      // "https://linkedin.com/company/webxai",
      // "https://instagram.com/webxai"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WebX AI",
    "url": siteUrl,
    "description": "AI-Driven Digital Systems & Web Development",
    "publisher": {
      "@type": "Organization",
      "name": "WebX AI"
    }
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Providers>
          <AOSInit />
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

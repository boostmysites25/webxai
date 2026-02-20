import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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
  process.env.NEXT_PUBLIC_SITE_URL || "https://webxaitech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Web Development & AI Solutions Company in India | WebX AI",
    template: "%s | WebX AI",
  },

  description:
    "WebX AI is a leading web development and AI solutions company in India. We build scalable websites, web applications, SaaS platforms, mobile apps, and intelligent automation systems using Next.js, React, and modern technologies.",

  keywords: [
    "Web development company in India",
    "AI development company India",
    "Next.js development company",
    "React development services",
    "Full stack development company",
    "Mobile app development India",
    "SaaS development company",
    "Custom software development",
    "Ecommerce development services",
    "Digital transformation company India",
    "AI automation solutions",
    "Business web application development",
  ],

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
    locale: "en_IN",
    url: siteUrl,
    siteName: "WebX AI",
    title:
      "Web Development & AI Solutions Company in India | WebX AI",
    description:
      "Professional web development, AI solutions, SaaS platforms, and mobile app development services in India. WebX AI delivers scalable digital systems for startups and enterprises.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "WebX AI - Web Development & AI Solutions Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Development & AI Solutions Company in India | WebX AI",
    description:
      "Scalable web development and AI solutions for startups and enterprises in India.",
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

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
    description:
      "Web development and AI solutions company in India building scalable digital systems.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7093242788",
      contactType: "Customer Service",
      email: "webxdev.ai@gmail.com",
      areaServed: "IN",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Telangana",
      addressLocality: "Hyderabad",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WebX AI",
    url: siteUrl,
    description:
      "Web Development & AI Solutions Company in India",
    publisher: {
      "@type": "Organization",
      name: "WebX AI",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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

        <Analytics />
      </body>
    </html>
  );
}

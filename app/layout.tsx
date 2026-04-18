import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import ContactModal from "@/components/ContactModal";
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
      "WebX AI – AI Software Development & Web Solutions Company in India",
    template: "%s | WebX AI",
  },

  description:
    "WebX AI (Webxai) is a leading AI software development and engineering studio in India. We build scalable websites, web applications, SaaS platforms, mobile apps, ecommerce stores, AI chatbots, and intelligent automation systems using Next.js, React, and modern technologies.",

  keywords: [
    // Primary brand keywords
    "WebX AI",
    "webx ai",
    "WEBX AI",
    "Webxai",
    "webxai",
    "webxaitech",
    // Common misspellings / alternatives users search
    "webex ai",
    "webex",
    "web ai",
    "aiweb",
    "wixweb",
    "wiwebx",
    "web x ai",
    "webxai tech",
    "webxai company",
    // Service keywords
    "AI development company India",
    "AI automation systems",
    "LLM integration",
    "SaaS product development",
    "Next.js development company",
    "AI engineering studio",
    "revenue-driven AI",
    "data pipeline engineering",
    "web development company Hyderabad",
    "AI development company Hyderabad",
    "mobile app development India",
    "ecommerce development India",
    "chatbot development company India",
    "custom software development India",
    "React development company",
    "full stack development company",
    "digital transformation company India",
    "AI automation solutions",
    "AI chatbot development India",
    "business web application development",
    "app development company Hyderabad",
    "software development company India",
    "scalable AI systems",
    "startup software development India",
  ],

  authors: [{ name: "Webxai", url: siteUrl }],
  creator: "Webxai",
  publisher: "Webxai",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Webxai",
    title:
      "Webxai – AI Software Development & Web Solutions Company in India",
    description:
      "Webxai delivers professional web development, AI solutions, SaaS platforms, ecommerce, chatbot development, and mobile app development services. Scalable digital systems for startups and enterprises.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Webxai – AI Software Development & Web Solutions Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Webxai – AI Software Development & Web Solutions Company in India",
    description:
      "Webxai builds scalable web apps, AI solutions, mobile apps, and ecommerce platforms for startups and enterprises in India.",
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
    "@id": `${siteUrl}/#organization`,
    name: "Webxai",
    alternateName: ["WebX AI", "WebXAI", "Webxai Technologies"],
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/logo.png`,
    description:
      "Webxai is a leading AI software development and web solutions company in India, building scalable digital systems for startups and enterprises.",
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 20,
    },
    sameAs: [
      "https://www.instagram.com/webx.ai",
      "https://www.linkedin.com/company/webxai/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7093242788",
        contactType: "sales",
        email: "webxdev.ai@gmail.com",
        areaServed: ["IN", "US", "AE", "GB", "SG", "AU"],
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-7093242788",
        contactType: "customer support",
        email: "webxdev.ai@gmail.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Telangana",
      addressLocality: "Hyderabad",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "Australia" },
    ],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "AI Development",
      "Ecommerce Development",
      "Chatbot Development",
      "Data Analytics",
      "Blockchain Development",
      "Game Development",
      "SaaS Development",
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "Flutter",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Webxai",
    alternateName: "WebX AI",
    url: siteUrl,
    description:
      "Webxai – AI Software Development & Web Solutions Company in India",
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Webxai",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Webxai",
    alternateName: "WebX AI",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/logo.png`,
    description:
      "Webxai is an AI development company and web solutions provider based in Hyderabad, India. We offer web development, mobile app development, AI development, ecommerce solutions, chatbot development, and data analytics services.",
    telephone: "+91-7093242788",
    email: "webxdev.ai@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.385,
      longitude: 78.4867,
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "State", name: "Telangana" },
      { "@type": "Country", name: "India" },
    ],
    priceRange: "₹₹",
    openingHours: "Mo-Sa 09:00-18:00",
    sameAs: [
      "https://www.instagram.com/webx.ai",
      "https://www.linkedin.com/company/webxai/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//images.pexels.com" />
        <link rel="dns-prefetch" href="//blogplatform-backend-cloudinary-beta.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <Providers>
          <AOSInit />
          <Navbar />
          {children}
          <Footer />
          <ContactModal />
        </Providers>

        <Analytics />
      </body>
    </html>
  );
}

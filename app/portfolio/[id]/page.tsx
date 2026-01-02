import { Metadata } from "next";
import { allProjects } from "@/data/portfolioContent";
import CaseStudyClient from "./CaseStudyClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxai.com";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const project = allProjects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: `${project.description} ${project.caseStudy.overview}`,
    keywords: [
      project.title,
      project.category,
      "case study",
      "web development",
      "mobile app development",
      "portfolio",
      ...project.caseStudy.techStack,
    ],
    openGraph: {
      title: `${project.title} - Case Study | WebX AI`,
      description: project.description,
      url: `${siteUrl}/portfolio/${project.id}`,
      images: [
        {
          url: `${siteUrl}${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Case Study`,
      description: project.description,
      images: [`${siteUrl}${project.image}`],
    },
    alternates: {
      canonical: `${siteUrl}/portfolio/${project.id}`,
    },
  };
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}

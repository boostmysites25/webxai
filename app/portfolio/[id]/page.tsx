import { Metadata } from "next";
import { allProjects } from "@/data/portfolioContent";
import CaseStudyClient from "./CaseStudyClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webxai.com";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> | { id: string } }): Promise<Metadata> {
  try {
    // Handle both Promise and direct params (Next.js 15+ compatibility)
    const resolvedParams = params instanceof Promise ? await params : params;
    const projectId = resolvedParams?.id;
    
    if (!projectId) {
      return {
        title: "Project Not Found | WebX AI",
        description: "The requested project could not be found.",
      };
    }

    const parsedId = parseInt(projectId, 10);
    if (isNaN(parsedId)) {
      return {
        title: "Project Not Found | WebX AI",
        description: "Invalid project ID.",
      };
    }

    const project = allProjects.find((p) => p.id === parsedId);

    if (!project) {
      return {
        title: "Project Not Found | WebX AI",
        description: "The requested project could not be found.",
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
  } catch (error) {
    return {
      title: "Project Not Found | WebX AI",
      description: "An error occurred while loading the project.",
    };
  }
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function CaseStudyPage() {
  return <CaseStudyClient />;
}


export interface Author {
    _id: string;
    name: string;
}

export interface Category {
    _id: string;
    name: string;
    slug: string;
}

export interface Blog {
    _id: string;
    title: string;
    slug: string;
    excerpt: string;
    content?: string;
    imageUrl: string;
    imageAlt: string;
    publishDate: string;
    author: Author;
    category?: Category; // Based on sample data sometimes it's categoryId populated or just category
    tags: string[];
}

export interface BlogsResponse {
    success: boolean;
    blogs: Blog[];
    totalCount: number;
}

export interface SingleBlogResponse {
    success: boolean;
    blog: Blog;
}

const BASE_URL = "https://blogplatform-backend-cloudinary-beta.vercel.app";

export async function fetchPublishedBlogs(): Promise<Blog[]> {
    const res = await fetch(`${BASE_URL}/api/blogs/published`);
    if (!res.ok) {
        throw new Error("Failed to fetch blogs");
    }
    const data: BlogsResponse = await res.json();
    return data.blogs;
}

export async function fetchBlogBySlug(slug: string): Promise<Blog> {
    const res = await fetch(`${BASE_URL}/api/blogs/slug/${slug}`);
    if (!res.ok) {
        throw new Error("Failed to fetch blog details");
    }
    const data: SingleBlogResponse = await res.json();
    return data.blog;
}

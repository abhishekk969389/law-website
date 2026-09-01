import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import BlogMain from "@/app/components/layout/blogdetails/blogmain";
import BlogSidebar from "@/app/components/layout/blogdetails/blogsidebar";
import rawLawData from "@/app/data/lawData.json";
import { GlobalLawData, BlogDetailItem } from "@/types/law";
import { notFound } from "next/navigation";
import { Metadata } from "next";

function getBlogByIdOrSlug(id: string): BlogDetailItem | undefined {
  const globalData = rawLawData as unknown as GlobalLawData;
  const blogDetails = globalData.blogDetails as BlogDetailItem[] | undefined;

  if (!id || !blogDetails || !Array.isArray(blogDetails)) return undefined;
  const cleanId = id.trim().toLowerCase();

  return blogDetails.find(
    (item) =>
      item.id.toLowerCase() === cleanId ||
      (item.slug && item.slug.toLowerCase() === cleanId)
  );
}

function getAllBlogIds(): string[] {
  const globalData = rawLawData as unknown as GlobalLawData;
  const blogDetails = globalData.blogDetails as BlogDetailItem[] | undefined;

  if (!blogDetails || !Array.isArray(blogDetails)) return [];

  const paramsList: string[] = [];
  blogDetails.forEach((item) => {
    if (item.id) paramsList.push(item.id);
    if (item.slug && item.slug !== item.id) paramsList.push(item.slug);
  });

  return Array.from(new Set(paramsList));
}

export async function generateStaticParams() {
  const ids = getAllBlogIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = getBlogByIdOrSlug(resolvedParams.id);

  if (!blog) {
    return {
      title: "Blog Details | Veritas Law Partners",
      description: "Legal insights, articles and updates from Veritas Law Partners.",
    };
  }

  return {
    title: `${blog.title} - Blog | Veritas Law Partners`,
    description:
      blog.paragraphs1?.[0]?.slice(0, 160) ||
      `${blog.title} - Article by ${blog.author || "Veritas Law Partners"}.`,
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const blog = getBlogByIdOrSlug(resolvedParams.id);

  if (!blog) {
    notFound();
  }

  const globalData = rawLawData as unknown as GlobalLawData;
  const baseSubBanner = globalData.blogSubBanner || globalData.subBanner;

  const subBannerData = {
    title: blog.title,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: blog.title, isActive: true },
    ],
    backgroundImage: baseSubBanner?.backgroundImage || "/subbanner.svg",
  };

  return (
    <main className="min-h-screen bg-[#0C191B] text-white">
      <SubBanner data={subBannerData} />
      <section className="relative w-full bg-[#0C191B] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-12 md:mb-17 lg:mb-20 select-none">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
            <div className="lg:col-span-8">
              <BlogMain blog={blog} />
            </div>
            <div className="lg:col-span-4">
              <BlogSidebar
                currentId={blog.id}
                sidebarData={blog.sidebarData}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PublicationRecentPost, PublicationSidebarData } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";

interface PublicationSidebarProps {
  currentId?: string;
  sidebarData?: PublicationSidebarData;
}

export function PublicationSidebar({
  currentId,
  sidebarData,
}: PublicationSidebarProps) {
  const recentPosts = (sidebarData?.recentPosts || []).slice(0, 5);
  const title = sidebarData?.recentPostsTitle || "Recent Posts";

  if (!recentPosts || recentPosts.length === 0) return null;

  return (
    <aside className="sticky top-24 select-none text-left">
      <FadeIn direction="up" delay={0.15} duration={0.6} className="rounded-2xl bg-[#0A0E17] border border-slate-800/80 p-5 sm:p-6 space-y-4 shadow-xl">
        {/* Header */}
        <h3 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight mb-2">
          {title}
        </h3>

        {/* Post Items */}
        <div className="divide-y divide-slate-800/60 space-y-4 pt-1">
          {recentPosts.map((post: any) => {
            const slug = post.slug || post.id;
            const isActive =
              currentId?.toLowerCase() === post.id.toLowerCase() ||
              currentId?.toLowerCase() === slug.toLowerCase();

            return (
              <Link
                key={post.id}
                href={`/publications/${slug}`}
                className={`flex items-center gap-3.5 pt-4 first:pt-0 group cursor-pointer ${
                  isActive ? "opacity-75 pointer-events-none" : ""
                }`}
              >
                {/* Thumbnail Image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-16 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-slate-800 shadow-sm">
                  <Image src={post.image || "/service1.svg"}
                    alt={post.title}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="space-y-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#D4A359] line-clamp-2 leading-snug transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                    {post.date}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </FadeIn>
    </aside>
  );
}

export default PublicationSidebar;

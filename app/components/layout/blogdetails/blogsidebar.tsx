"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, PhoneCall } from "lucide-react";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { BlogSidebarData, GlobalLawData } from "@/types/law";
import { FadeIn } from "@/app/components/ui/animations";

interface BlogSidebarProps {
  currentId?: string;
  sidebarData?: BlogSidebarData;
}

export function BlogSidebar({ currentId, sidebarData }: BlogSidebarProps) {
  const globalData = ({}) as unknown as GlobalLawData;
  const defaultSidebar = getSectionData('Blog', 'VeritasBlog1')?.blogSidebar;

  const data = sidebarData || defaultSidebar;
  const recentHeading = data?.recentHeading || "Recent Blogs";
  const recentBlogs = data?.recentBlogs || [];
  const contact = data?.contact;

  return (
    <aside className="w-full space-y-8 select-none">
      {/* 1. Recent Blogs Card */}
      {recentBlogs && recentBlogs.length > 0 && (
        <FadeIn direction="up" delay={0.15} duration={0.6} className="rounded-2xl sm:rounded-3xl bg-[#0C191B]/90 border border-slate-800/80 p-5 sm:p-6 shadow-xl space-y-5 text-left">
          <h3 className="font-serif italic text-xl sm:text-2xl text-white font-normal mb-2">
            {recentHeading}
          </h3>

          <div className="space-y-4">
            {recentBlogs.map((item: any) => {
              const isActive = currentId && (item.id === currentId || item.slug === currentId);
              const href = item.linkHref || `/blog/${item.slug || item.id}`;

              return (
                <Link
                  key={item.id}
                  href={href}
                  className={`flex items-center gap-4 group p-2 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-white/5 border border-[#D4A359]/30"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  {/* Left Thumbnail Image */}
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-white/10 shadow-md">
                    <Image
                      src={item.image || "/about.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-400 font-light flex items-center gap-1.5 flex-wrap mb-1">
                      <span>by</span>
                      <span className="text-[#D4A359] font-medium">{item.author || "Zstal"}</span>
                      <span className="text-slate-600">|</span>
                      <span>{item.category || "Attorney"}</span>
                    </div>

                    <h4 className="font-serif italic text-sm sm:text-base text-white group-hover:text-[#D4A359] font-medium leading-snug line-clamp-2 transition-colors">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-light mt-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D4A359]" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </FadeIn>
      )}

      {/* 2. Have You Any Query Feel Please Free Contact Widget */}
      {contact && (
        <FadeIn direction="up" delay={0.25} duration={0.6} className="relative rounded-2xl sm:rounded-3xl bg-[#0A0E17] border border-slate-800/80 p-6 sm:p-8 shadow-xl overflow-hidden text-center flex flex-col items-center justify-center min-h-[340px]">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
            <Image
              src={contact.backgroundImage || "/testinomial.svg"}
              alt="Consultation Background"
              fill
              className="object-cover filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/80 to-[#0A0E17]/50" />
          </div>

          {/* Warm Gold Arc / Glow on Bottom Left matching screenshot */}
          <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-gradient-to-tr from-[#D4A359] via-[#E3C280]/60 to-transparent opacity-80 pointer-events-none blur-[1px]" />

          {/* Title in Serif Italic */}
          <h3 className="font-serif italic text-2xl sm:text-3xl text-white font-normal leading-snug tracking-tight mb-8 relative z-10">
            {contact.headingLines && contact.headingLines.length > 0 ? (
              contact.headingLines.map((line: any, idx: number) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            ) : (
              <>
                Have You Any<br />Query Feel<br />Please Free<br />Contact
              </>
            )}
          </h3>

          {/* Phone Pill Button */}
          {contact.phone && (
            <a
              href={contact.phoneHref || `tel:${contact.phone.replace(/\s+/g, "")}`}
              className="relative z-10 inline-flex items-center gap-3 bg-[#0B0E14]/90 border border-slate-700/80 hover:border-[#D4A359] px-4 py-2.5 rounded-xl text-white font-medium text-sm sm:text-base tracking-wide transition-all duration-300 shadow-xl group"
            >
              <div className="w-8 h-8 rounded-full bg-[#D4A359] text-black flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <PhoneCall className="w-4 h-4 stroke-[2]" />
              </div>
              <span className="font-semibold">{contact.phone}</span>
            </a>
          )}
        </FadeIn>
      )}
    </aside>
  );
}

export default BlogSidebar;

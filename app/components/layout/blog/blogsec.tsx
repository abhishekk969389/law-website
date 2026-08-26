"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PenTool, User, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import Pagination from "@/app/components/ui/pagination";
import rawLawData from "@/app/data/lawData.json";
import { BlogSectionData, GlobalLawData } from "@/types/law";

const defaultBlogSectionData = (rawLawData as GlobalLawData).blogSection;

export interface BlogsecProps {
  data?: BlogSectionData;
}

export function Blogsec({ data = defaultBlogSectionData }: BlogsecProps) {
  if (!data) return null;

  const { tagline, heading, subheading, items } = data;

  return (
    <section className="relative w-full text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header (Centered) matching homelayout/blog.tsx */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Top Tagline with Pen Icon */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
            <div className="flex items-center gap-2">
              <PenTool className="w-4 h-4 text-[#D4A359]" />
              <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
                {tagline}
              </span>
            </div>
            <span className="w-12 h-[1px] bg-[#D4A359]/60" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-4">
            <span className="text-white font-medium">{heading?.line1}</span>{" "}
            <span className="text-[#D4A359] italic font-serif">{heading?.highlight}</span>
          </h2>

          {/* Subheading */}
          {subheading && (
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[620px] mx-auto">
              {subheading}
            </p>
          )}
        </div>

        {/* 6 Blog Cards Grid (3 columns on md/lg screens, 2 rows total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items &&
            items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-[#0C191B]/90 border border-white/10 rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:border-[#D4A359]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] group"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-slate-900">
                  <Image
                    src={item.image || "/about.svg"}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Meta Details (Author, Date, Comments) */}
                <div className="flex items-center gap-3.5 text-xs text-gray-400 font-light mb-3 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#D4A359]" />
                    <span>By {item.author}</span>
                  </div>
                  <span className="text-gray-600">|</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4A359]" />
                    <span>{item.date}</span>
                  </div>
                  <span className="text-gray-600">|</span>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#D4A359]" />
                    <span>{item.commentsCount}</span>
                  </div>
                </div>

                {/* Blog Title */}
                <h3 className="font-serif text-lg sm:text-xl font-medium text-white leading-snug mb-5 group-hover:text-[#E3C280] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Read More Link */}
                <div className="mt-auto">
                  <Link
                    href={item.linkHref || "/blog"}
                    className="inline-flex items-center gap-2 text-[#D4A359] text-xs sm:text-sm font-medium hover:text-[#E3C280] transition-colors group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination Component */}
        <Pagination currentPage={1} totalPages={8} />
      </div>
    </section>
  );
}

export default Blogsec;

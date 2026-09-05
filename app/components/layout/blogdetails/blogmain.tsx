"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { BlogDetailItem } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";

interface BlogMainProps {
  blog: BlogDetailItem;
}

export function BlogMain({ blog }: BlogMainProps) {
  if (!blog) return null;

  return (
    <article className="w-full text-left">
      { }
      <FadeIn
        direction="up"
        delay={0.1}
        duration={0.6}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-6 bg-[#0B0E14] border border-slate-800/80 shadow-2xl"
      >
        <Image
          src={blog.image || "/casedetail.svg"}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/30 via-transparent to-transparent pointer-events-none" />
      </FadeIn>

      { }
      <FadeIn
        direction="up"
        delay={0.15}
        duration={0.6}
        className="flex items-center gap-3 sm:gap-4 text-sm sm:text-sm text-slate-300 font-light mb-4 flex-wrap select-none"
      >
        <div>
          by{" "}
          <span className="text-[#D4A359] font-medium">
            {blog.author || "Zstal"}
          </span>
        </div>
        <span className="text-slate-500">|</span>
        <div>
          <span className="text-slate-300">{blog.category || "Attorney"}</span>
        </div>
        <span className="text-slate-500">|</span>
        <div className="flex items-center gap-1.5 text-slate-300">
          <Calendar className="w-4 h-4 text-[#D4A359]" />
          <span>{blog.date}</span>
        </div>
      </FadeIn>

      { }
      <FadeIn direction="up" delay={0.2} duration={0.6}>
        <h1 className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white font-normal leading-snug tracking-tight mb-6">
          {blog.title}
        </h1>
      </FadeIn>

      { }
      {blog.paragraphs1 && blog.paragraphs1.length > 0 && (
        <FadeIn
          direction="up"
          delay={0.25}
          duration={0.6}
          className="space-y-4 mb-6"
        >
          {blog.paragraphs1.map((p: any, idx: any) => (
            <p
              key={idx}
              className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light"
            >
              {p}
            </p>
          ))}
        </FadeIn>
      )}

      { }
      {blog.quoteText && (
        <FadeIn
          direction="up"
          delay={0.3}
          duration={0.6}
          className="flex items-stretch gap-4 my-6 sm:my-8 pl-1"
        >
          <div className="flex items-center gap-[3px] shrink-0">
            <div className="w-[3px] h-full min-h-[44px] bg-[#D4A359] rounded-full" />
            <div className="w-[3px] h-full min-h-[44px] bg-[#D4A359] rounded-full" />
          </div>
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-slate-100 font-normal leading-relaxed">
            {blog.quoteText}
          </p>
        </FadeIn>
      )}

      { }
      {blog.paragraphs2 && blog.paragraphs2.length > 0 && (
        <FadeIn
          direction="up"
          delay={0.35}
          duration={0.6}
          className="space-y-4 mb-8"
        >
          {blog.paragraphs2.map((p: any, idx: any) => (
            <p
              key={idx}
              className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light"
            >
              {p}
            </p>
          ))}
        </FadeIn>
      )}

      { }
      {blog.subheading && (
        <FadeIn direction="up" delay={0.4} duration={0.6} className="mt-8 pt-2">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-4 tracking-tight">
            {blog.subheading}
          </h2>
          {blog.subheadingParagraphs &&
            blog.subheadingParagraphs.length > 0 && (
              <div className="space-y-4">
                {blog.subheadingParagraphs.map((p: any, idx: any) => (
                  <p
                    key={idx}
                    className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}
        </FadeIn>
      )}
    </article>
  );
}

export default BlogMain;

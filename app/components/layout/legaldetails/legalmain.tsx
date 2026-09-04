"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ShieldCheck, FileText, Users, Award, Scale, BookOpen, CheckCircle2, LucideIcon } from "lucide-react";
import { LegalDetailItem } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";

interface LegalMainProps {
  article: LegalDetailItem;
}

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "file-text": FileText,
  users: Users,
  award: Award,
  scale: Scale,
  "book-open": BookOpen,
  check: CheckCircle2,
};

export function LegalMain({ article }: LegalMainProps) {
  if (!article) return null;

  return (
    <article className="w-full text-left">
      {/* 1. Large Top Hero Image */}
      <FadeIn direction="up" delay={0.1} duration={0.6} className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-6 bg-[#0B0E14] border border-slate-800/80 shadow-2xl">
        <Image src={article.image || "/about.svg"}
          alt={article.title}
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/30 via-transparent to-transparent pointer-events-none" />
      </FadeIn>

      {/* 2. Date • Category Meta Row */}
      <FadeIn direction="up" delay={0.15} duration={0.6} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm mb-4 select-none flex-wrap">
        <div className="flex items-center gap-1.5 text-slate-300">
          <Calendar className="w-4 h-4 text-slate-400" />
          <span className="font-medium tracking-wide uppercase">{article.date}</span>
        </div>
        <span className="text-slate-600 font-bold">•</span>
        <span className="text-[#D4A359] font-semibold tracking-wider uppercase">
          {article.category}
        </span>
      </FadeIn>

      {/* 3. Main Title in Serif */}
      <FadeIn direction="up" delay={0.2} duration={0.6}>
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-snug tracking-tight mb-4">
          {article.title}
        </h1>
      </FadeIn>

      {/* 4. Subtitle / Summary Paragraph */}
      {article.subtitle && (
        <FadeIn direction="up" delay={0.25} duration={0.6}>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
            {article.subtitle}
          </p>
        </FadeIn>
      )}

      {/* 5. Introduction Section */}
      {article.introParagraphs && article.introParagraphs.length > 0 && (
        <FadeIn direction="up" delay={0.3} duration={0.6} className="mb-8 sm:mb-10">
          <h2 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-3">
            {article.introHeading || "Introduction"}
          </h2>
          <div className="space-y-3.5">
            {article.introParagraphs.map((p: any, idx: any) => (
              <p
                key={idx}
                className="text-slate-300 text-sm sm:text-base leading-relaxed font-light"
              >
                {p}
              </p>
            ))}
          </div>
        </FadeIn>
      )}

      {/* 6. Key Highlights of the New Rules */}
      {article.highlights && article.highlights.length > 0 && (
        <FadeIn direction="up" delay={0.35} duration={0.6} className="mb-8 sm:mb-10">
          <h2 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-6">
            {article.highlightsHeading || "Key Highlights of the New Rules"}
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {article.highlights.map((item: any, idx: any) => {
              const IconComponent = (item.icon && iconMap[item.icon]) || BookOpen;

              return (
                <div
                  key={item.id || idx}
                  className="flex items-start gap-4 sm:gap-5 group p-2 rounded-2xl transition-colors duration-200"
                >
                  {/* Circular Gold Icon Badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D4A359]/70 bg-[#0F1420] text-[#D4A359] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 group-hover:border-[#E3C280] transition-all">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Highlight Text */}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1 group-hover:text-[#D4A359] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      )}

      {/* 7. Conclusion / What This Means for Your Business */}
      {article.conclusionParagraphs && article.conclusionParagraphs.length > 0 && (
        <FadeIn direction="up" delay={0.4} duration={0.6} className="mb-6">
          <h2 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-3">
            {article.conclusionHeading || "What This Means for Your Business"}
          </h2>
          <div className="space-y-3.5">
            {article.conclusionParagraphs.map((p: any, idx: any) => (
              <p
                key={idx}
                className="text-slate-300 text-sm sm:text-base leading-relaxed font-light"
              >
                {p}
              </p>
            ))}
          </div>
        </FadeIn>
      )}
    </article>
  );
}

export default LegalMain;

"use client";

import React from "react";
import Image from "next/image";
import {
  Folder,
  Landmark,
  User,
  Calendar,
  Target,
  Award,
  Scale,
  Shield,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import { CaseStudyDetailItem } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";

const iconMap: Record<string, LucideIcon> = {
  landmark: Landmark,
  user: User,
  calendar: Calendar,
  target: Target,
  award: Award,
  scale: Scale,
  shield: Shield,
  briefcase: Briefcase,
};

export interface CaseStudyMainProps {
  caseStudy: CaseStudyDetailItem;
}

export function CaseStudyMain({ caseStudy }: CaseStudyMainProps) {
  if (!caseStudy) return null;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. Hero Banner Card matching exact screenshot */}
      <FadeIn direction="up" delay={0.1} duration={0.6} className="rounded-2xl border border-slate-800/80 bg-[#0A0E17] overflow-hidden relative shadow-2xl">
        {/* Top Hero Body */}
        <div className="relative p-5 sm:p-7 lg:p-8 pt-4 sm:pt-5 lg:pt-12 flex flex-col justify-start">
          {/* Background Image & Gradient Mask */}
          <div className="absolute inset-0 z-0">
            <Image
              src={caseStudy.image || "/casestudy1.svg"}
              alt={typeof caseStudy.title === "string" ? caseStudy.title : caseStudy.title?.whiteText || "Case Study"}
              fill
              priority
              className="object-cover object-right sm:object-center"
            />
            {/* Smooth left-to-right dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E17] via-[#0A0E17]/95 sm:via-[#0A0E17]/85 to-transparent sm:w-[75%] lg:w-[65%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent sm:hidden" />
          </div>

            {/* Left Overlay Text Content */}
            <div className="relative z-10 max-w-sm sm:max-w-md space-y-4">
              {/* Tag Badge */}
              <div className="inline-flex items-center gap-2.5">
                <Folder className="w-5 h-5 text-[#D4A359] stroke-[1.75]" />
                <span className="text-[#D4A359] text-xs md:text-lg font-semibold uppercase tracking-widest font-mono">
                  {caseStudy.badge || "CASE STUDY"}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] leading-[1.15] text-white tracking-tight font-medium mt-2">
                <span className="block">{caseStudy.title?.whiteText}</span>
                <span className="block text-[#D4A359]">{caseStudy.title?.goldText}</span>
              </h1>

              {/* Scale Divider */}
              <div className="flex items-center gap-3 w-full max-w-[260px] py-1">
                <span className="h-[1px] bg-[#D4A359]/60 flex-1" />
                <Scale className="w-5 h-5 text-[#D4A359] shrink-0 stroke-[1.75]" />
                <span className="h-[1px] bg-[#D4A359]/60 flex-1" />
              </div>

              {/* Intro Subtitle */}
              {caseStudy.subtitle && (
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-[340px] font-light">
                  {caseStudy.subtitle}
                </p>
              )}
            </div>
        </div>

        {/* Bottom Meta Stat Bar */}
        {caseStudy.meta && caseStudy.meta.length > 0 && (
          <div className="border-t border-slate-800/80 bg-[#060910] px-6 sm:px-10 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {caseStudy.meta.map((item: any, idx: any) => {
                const MetaIcon = (item.icon && iconMap[item.icon]) || Landmark;

                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 sm:border-r border-slate-800/60 last:border-r-0 pr-4"
                  >
                    <MetaIcon className="w-9 h-9 sm:w-10 sm:h-10 text-[#D4A359] stroke-[1.5] shrink-0" />
                    <div>
                      <p className="text-slate-400 text-xs md:text-sm font-sans leading-none mb-1">
                        {item.label}
                      </p>
                      <p className="text-white text-sm sm:text-base font-serif font-medium leading-tight">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </FadeIn>

      {/* 2. Content Article Body */}
      <div className="space-y-6 pt-2">
        {/* Subheading 1 */}
        {caseStudy.subheading1 && (
          <FadeIn direction="up" delay={0.2} duration={0.6}>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold italic tracking-tight">
              {caseStudy.subheading1}
            </h2>
          </FadeIn>
        )}

        {/* Paragraphs 1 */}
        {caseStudy.paragraphs1 && caseStudy.paragraphs1.length > 0 && (
          <FadeIn direction="up" delay={0.25} duration={0.6} className="space-y-4">
            {caseStudy.paragraphs1.map((p: any, idx: any) => (
              <p key={idx} className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {p}
              </p>
            ))}
          </FadeIn>
        )}

        {/* Quote Callout Box with Double Vertical Gold Accent Bars (||) */}
        {caseStudy.quote && (
          <FadeIn direction="up" delay={0.3} duration={0.6} className="flex items-stretch gap-3.5 sm:gap-8 my-8 py-2">
            {/* Double Vertical Gold Bars (||) */}
            <div className="flex items-stretch gap-1.5 shrink-0">
              <span className="w-[3px] bg-[#D4A359] rounded-sm block" />
              <span className="w-[3px] bg-[#D4A359] rounded-sm block" />
            </div>
            {/* Quote Text */}
            <p className="font-serif italic text-base sm:text-lg md:text-xl text-white font-medium leading-snug self-center">
              {caseStudy.quote}
            </p>
          </FadeIn>
        )}

        {/* Paragraphs 2 */}
        {caseStudy.paragraphs2 && caseStudy.paragraphs2.length > 0 && (
          <FadeIn direction="up" delay={0.35} duration={0.6} className="space-y-4">
            {caseStudy.paragraphs2.map((p: any, idx: any) => (
              <p key={idx} className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {p}
              </p>
            ))}
          </FadeIn>
        )}

        {/* Overview & Challenge Section */}
        {caseStudy.overviewHeading && (
          <FadeIn direction="up" delay={0.4} duration={0.6} className="space-y-4 pt-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold italic tracking-tight">
              {caseStudy.overviewHeading}
            </h2>
            {caseStudy.overviewParagraphs && caseStudy.overviewParagraphs.length > 0 && (
              <div className="space-y-4">
                {caseStudy.overviewParagraphs.map((p: any, idx: any) => (
                  <p key={idx} className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                    {p}
                  </p>
                ))}
              </div>
            )}
          </FadeIn>
        )}
      </div>
    </div>
  );
}

export default CaseStudyMain;

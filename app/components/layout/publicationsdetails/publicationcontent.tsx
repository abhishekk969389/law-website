"use client";

import React from "react";
import {
  Users,
  FileText,
  BarChart2,
  User,
  ShieldCheck,
  Scale,
  Lock,
  Building2,
  HeartPulse,
  Lightbulb,
  LucideIcon,
} from "lucide-react";
import { PublicationDetailItem } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";

interface PublicationContentProps {
  publication: PublicationDetailItem;
}

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  "file-text": FileText,
  "bar-chart-2": BarChart2,
  user: User,
  shield: ShieldCheck,
  scale: Scale,
  lock: Lock,
  building: Building2,
  heart: HeartPulse,
  lightbulb: Lightbulb,
};

export function PublicationContent({ publication }: PublicationContentProps) {
  if (!publication) return null;

  const introParagraphs =
    (publication as any).introductionParagraphs ||
    (publication.introductionText
      ? publication.introductionText.split("\n\n")
      : []);

  const CalloutIcon =
    (publication.callout?.icon && iconMap[publication.callout.icon]) ||
    Lightbulb;

  return (
    <div className="space-y-8 sm:space-y-10 text-left select-none pt-4">
      {}
      {publication.introductionText && (
        <FadeIn
          direction="up"
          delay={0.15}
          duration={0.6}
          className="space-y-3.5"
        >
          <h2 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight">
            {publication.introductionHeading || "Introduction"}
          </h2>
          <div className="space-y-3">
            {introParagraphs.map((para: any, idx: any) => (
              <p
                key={idx}
                className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light"
              >
                {para}
              </p>
            ))}
          </div>
        </FadeIn>
      )}

      {}
      {publication.highlights && publication.highlights.length > 0 && (
        <FadeIn direction="up" delay={0.2} duration={0.6} className="space-y-6">
          <h2 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight">
            {publication.highlightsHeading || "Key Highlights of the New Rules"}
          </h2>

          <div className="space-y-5">
            {publication.highlights.map((item: any, idx: any) => {
              const IconComp = (item.icon && iconMap[item.icon]) || Users;

              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 sm:gap-5 group"
                >
                  {}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4A359]/70 bg-[#070B12] text-[#D4A359] flex items-center justify-center shrink-0 shadow-md group-hover:border-[#D4A359] group-hover:scale-105 transition-all duration-300">
                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
                  </div>

                  {}
                  <div className="flex-1 pt-1">
                    <h3 className="font-serif text-base sm:text-lg text-white font-medium mb-1 group-hover:text-[#D4A359] transition-colors leading-snug">
                      <span className="font-normal text-slate-400 mr-1.5">
                        {item.number}
                      </span>
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      )}

      {}
      {publication.callout && (
        <FadeIn
          direction="up"
          delay={0.25}
          duration={0.6}
          className="rounded-2xl border border-[#D4A359]/60 bg-[#0A0E17]/90 p-5 sm:p-6 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-start gap-4 sm:gap-5">
            {}
            <div className="w-12 h-12 rounded-xl bg-[#D4A359]/10 text-[#D4A359] flex items-center justify-center shrink-0 mt-0.5">
              <CalloutIcon className="w-7 h-7 stroke-[1.8]" />
            </div>

            {}
            <div className="flex-1">
              <h3 className="font-serif text-base sm:text-lg text-[#D4A359] font-medium mb-1.5">
                {publication.callout.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                {publication.callout.description}
              </p>
            </div>
          </div>
        </FadeIn>
      )}

      {}
      {publication.conclusionText && (
        <FadeIn
          direction="up"
          delay={0.3}
          duration={0.6}
          className="space-y-3.5"
        >
          <h2 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight">
            {publication.conclusionHeading || "Conclusion"}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
            {publication.conclusionText}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

export default PublicationContent;

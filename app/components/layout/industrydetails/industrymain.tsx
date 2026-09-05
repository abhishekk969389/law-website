"use client";

import React from "react";
import Image from "next/image";
import {
  Landmark,
  Building2,
  HardHat,
  Scale,
  ShieldCheck,
  Leaf,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Rocket,
  FileText,
  Handshake,
  Lock,
  Briefcase,
  Play,
  Award,
  FileCheck,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { IndustryDetailItem } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";

const iconMap: Record<string, LucideIcon> = {
  landmark: Landmark,
  building: Building2,
  construction: HardHat,
  scale: Scale,
  shield: ShieldCheck,
  leaf: Leaf,
  heart: HeartPulse,
  "shopping-bag": ShoppingBag,
  "graduation-cap": GraduationCap,
  rocket: Rocket,
  "file-text": FileText,
  handshake: Handshake,
  lock: Lock,
  briefcase: Briefcase,
  play: Play,
  award: Award,
  "file-check": FileCheck,
};

export interface IndustryMainProps {
  industry: IndustryDetailItem;
}

export function IndustryMain({ industry }: IndustryMainProps) {
  if (!industry) return null;

  const MainIcon = (industry.icon && iconMap[industry.icon]) || Landmark;

  return (
    <div className="space-y-10 sm:space-y-12">
      {}
      <FadeIn direction="up" delay={0.1} duration={0.6} className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full border-2 border-[#D4A359] bg-[#0A0E17] flex items-center justify-center text-[#D4A359] shadow-xl shrink-0">
            <MainIcon className="w-7 h-7 stroke-[1.75]" />
          </div>
          <h1 className="font-serif text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-2 sm:mb-3">
            {industry.title}
          </h1>
        </div>

        {}
        <div className="flex items-center gap-2 pt-1 pb-2">
          <span className="h-[2px] w-12 bg-[#D4A359]" />
          <span className="w-2 h-2 rotate-45 border border-[#D4A359] bg-[#D4A359]/30" />
          <span className="h-[2px] w-24 bg-slate-800" />
        </div>

        {}
        {industry.introText && (
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            {industry.introText}
          </p>
        )}
      </FadeIn>

      {}
      <FadeIn
        direction="up"
        delay={0.15}
        duration={0.6}
        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl bg-slate-900"
      >
        <Image
          src={industry.heroImage || "/service1.svg"}
          alt={industry.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/40 via-transparent to-transparent" />
      </FadeIn>

      {}
      <FadeIn direction="up" delay={0.2} duration={0.6} className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-2xl md:text-3xl text-white font-semibold tracking-tight">
          {industry.overviewHeading || "Overview"}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {industry.overviewDescription}
        </p>
      </FadeIn>

      <div className="border-b border-slate-800/80" />

      {}
      {industry.services && industry.services.length > 0 && (
        <FadeIn
          direction="up"
          delay={0.25}
          duration={0.6}
          className="space-y-4"
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold tracking-tight">
            {industry.servicesHeading || "Our Services"}
          </h2>
          <div className="divide-y divide-slate-800/60">
            {industry.services.map((service: any) => {
              const ServiceIcon =
                (service.icon && iconMap[service.icon]) || FileText;

              return (
                <div
                  key={service.id}
                  className="flex items-start gap-4 sm:gap-5 py-5 first:pt-0 last:pb-0 group"
                >
                  <div className="w-11 h-11 rounded-full border border-slate-700 bg-[#0F1420] text-[#D4A359] flex items-center justify-center shrink-0 shadow-md group-hover:border-[#D4A359] group-hover:bg-[#D4A359]/10 transition-colors duration-300">
                    <ServiceIcon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <div className="space-y-1.5 pt-0.5">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-white group-hover:text-[#D4A359] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      )}

      <div className="border-b border-slate-800/80" />

      {}
      {industry.challenges && industry.challenges.length > 0 && (
        <FadeIn direction="up" delay={0.3} duration={0.6} className="space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold tracking-tight">
            {industry.challengesHeading || "Key Challenges We Address"}
          </h2>
          <ul className="space-y-3.5">
            {industry.challenges.map((challenge: any, idx: any) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-slate-300 text-sm sm:text-base"
              >
                <CheckCircle2 className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                <span className="leading-snug">{challenge}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      )}

      {}
      {industry.whyChooseUs && industry.whyChooseUs.length > 0 && (
        <FadeIn
          direction="up"
          delay={0.35}
          duration={0.6}
          className="space-y-6"
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-semibold tracking-tight">
            {industry.whyChooseHeading || "Why Choose Us"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {industry.whyChooseUs.map((item: any) => {
              const WhyIcon = (item.icon && iconMap[item.icon]) || Briefcase;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-800/80 bg-[#0A0E17] p-5 text-center flex flex-col items-center justify-start hover:border-[#D4A359]/50 transition-all duration-300 shadow-xl group"
                >
                  <div className="w-12 h-12 rounded-full border border-[#D4A359]/50 bg-[#0F1420] text-[#D4A359] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:border-[#D4A359] transition-transform duration-300">
                    <WhyIcon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h4 className="font-serif text-base font-semibold text-white mb-2 group-hover:text-[#D4A359] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      )}
    </div>
  );
}

export default IndustryMain;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Headphones,
  ArrowRight,
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
  LucideIcon,
} from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import {
  IndustryDetailSidebarData,
  IndustryDetailItem,
  GlobalLawData,
} from "@/app/data";
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
};

export interface IndustrySidebarProps {
  currentId?: string;
  allIndustries?: (
    | IndustryDetailItem
    | { id: string; slug?: string; title: string; icon?: string }
  )[];
  sidebarData?: IndustryDetailSidebarData;
}

const globalSidebar = (
  lawData.categories?.Veritas?.sections?.Industries?.variants
    ?.VeritasIndustries1 as any
)?.industrySidebar;

export function IndustrySidebar({
  currentId,
  allIndustries = [],
  sidebarData,
}: IndustrySidebarProps) {
  const industriesTitle =
    (sidebarData as any)?.industriesTitle ||
    globalSidebar?.industriesTitle ||
    "Industries";
  const getInTouchTitle =
    (sidebarData as any)?.getInTouchTitle ||
    globalSidebar?.getInTouchTitle ||
    "Get in Touch";
  const insightsTitle =
    (sidebarData as any)?.insightsTitle ||
    globalSidebar?.insightsTitle ||
    "Related Insights";

  const getInTouch = sidebarData?.getInTouch || globalSidebar?.getInTouch;
  const insights = sidebarData?.insights || globalSidebar?.insights;

  return (
    <aside className="space-y-8 sticky top-24">
      {}
      {allIndustries && allIndustries.length > 0 && (
        <FadeIn
          direction="up"
          delay={0.15}
          duration={0.6}
          className="rounded-2xl bg-[#0A0E17] border border-slate-800/80 p-5 space-y-2 shadow-xl"
        >
          <h3 className="font-serif text-xl md:text-2xl text-white font-semibold mb-4 px-1 tracking-tight">
            {industriesTitle}
          </h3>

          <nav className="space-y-2">
            {allIndustries.map((ind) => {
              const slug = "slug" in ind && ind.slug ? ind.slug : ind.id;
              const isActive =
                currentId?.toLowerCase() === ind.id.toLowerCase() ||
                currentId?.toLowerCase() === slug.toLowerCase();

              const IconComponent = (ind.icon && iconMap[ind.icon]) || Landmark;

              return (
                <Link
                  key={ind.id}
                  href={`/industries/${slug}`}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm transition-all duration-200 group ${
                    isActive
                      ? "bg-[#131926] border border-[#D4A359]/70 text-[#D4A359] font-medium shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent
                      className={`w-4 h-4 shrink-0 stroke-[1.75] ${
                        isActive
                          ? "text-[#D4A359]"
                          : "text-slate-400 group-hover:text-[#D4A359]"
                      }`}
                    />
                    <span className="truncate max-w-[200px]">{ind.title}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isActive
                        ? "text-[#D4A359] translate-x-0.5"
                        : "text-slate-500 group-hover:text-white group-hover:translate-x-0.5"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </FadeIn>
      )}

      {getInTouch && (
        <FadeIn
          direction="up"
          delay={0.25}
          duration={0.6}
          className="rounded-2xl bg-[#0A0E17] border border-slate-800/80 p-6 space-y-4 shadow-xl text-left"
        >
          <h3 className="font-serif text-xl md:text-2xl text-white font-semibold tracking-tight">
            {getInTouchTitle}
          </h3>

          <div className="flex items-start gap-4 pt-1">
            <div className="w-12 h-12 rounded-full border-2 border-[#D4A359] bg-[#0F1420] flex items-center justify-center text-[#D4A359] shrink-0 shadow-lg">
              <Headphones className="w-6 h-6 stroke-[1.75]" />
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {getInTouch.text}
            </p>
          </div>

          <div className="pt-2">
            <Link
              href={getInTouch.buttonHref || "/contactus"}
              className="inline-flex items-center gap-2 rounded-xl border border-[#D4A359] px-5 py-2.5 text-[#D4A359] hover:bg-[#D4A359] hover:text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group"
            >
              <span>{getInTouch.buttonText || "Contact Us"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      )}

      {insights && insights.length > 0 && (
        <FadeIn
          direction="up"
          delay={0.35}
          duration={0.6}
          className="rounded-2xl bg-[#0A0E17] border border-slate-800/80 p-5 space-y-4 shadow-xl"
        >
          <h3 className="font-serif text-xl md:text-2xl text-white font-semibold mb-2 px-1 tracking-tight">
            {insightsTitle}
          </h3>

          <div className="divide-y divide-slate-800/60 space-y-4 pt-1">
            {insights.map((insight: any) => (
              <Link
                key={insight.id}
                href={insight.linkHref || "/blog"}
                className="flex items-center gap-3.5 pt-4 first:pt-0 group cursor-pointer"
              >
                <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-slate-800">
                  <Image
                    src={insight.image || "/service1.svg"}
                    alt={insight.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#D4A359] line-clamp-2 leading-snug transition-colors">
                    {insight.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                    {insight.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      )}
    </aside>
  );
}

export default IndustrySidebar;

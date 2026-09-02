"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { LegalSidebarData, GlobalLawData } from "@/types/law";
import { FadeIn } from "@/app/components/ui/animations";

interface LegalSidebarProps {
  currentId?: string;
  sidebarData?: LegalSidebarData;
}

export function LegalSidebar({ currentId, sidebarData }: LegalSidebarProps) {
  const globalData = ({}) as unknown as GlobalLawData;
  const defaultSidebar = getSectionData('LegalUpdates', 'VeritasLegalUpdates1')?.legalSidebar;

  const data = sidebarData || defaultSidebar;
  const recentHeading = data?.recentHeading || "Recent Posts";
  const recentPosts = data?.recentPosts || [];

  return (
    <aside className="w-full space-y-8 select-none">
      {/* Recent Posts Card */}
      {recentPosts && recentPosts.length > 0 && (
        <FadeIn direction="up" delay={0.15} duration={0.6} className="rounded-2xl sm:rounded-3xl bg-[#0B0E14] border border-slate-800/80 p-5 sm:p-6 shadow-xl space-y-5 text-left">
          <h3 className="font-serif italic text-xl sm:text-2xl text-white font-normal mb-2">
            {recentHeading}
          </h3>

          <div className="space-y-4">
            {recentPosts.map((item: any) => {
              const isActive = currentId && (item.id === currentId || item.slug === currentId);
              const href = item.link || `/legal/${item.slug || item.id}`;

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
                    <h4 className="font-serif text-xs sm:text-sm text-white group-hover:text-[#D4A359] font-medium leading-snug line-clamp-2 transition-colors">
                      {item.title}
                    </h4>

                    <div className="text-[11px] text-slate-400 font-light mt-1 uppercase tracking-wider">
                      <span>{item.date}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </FadeIn>
      )}
    </aside>
  );
}

export default LegalSidebar;

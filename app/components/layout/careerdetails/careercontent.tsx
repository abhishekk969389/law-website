"use client";

import React from "react";
import {
  CheckCircle2,
  Users,
  BookOpen,
  ShieldCheck,
  HeartPulse,
  Briefcase,
  Scale,
  LucideIcon,
} from "lucide-react";
import { CareerDetailItem } from "@/types/law";

interface CareerContentProps {
  career: CareerDetailItem;
}

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  "book-open": BookOpen,
  shield: ShieldCheck,
  heart: HeartPulse,
  briefcase: Briefcase,
  scale: Scale,
};

export function CareerContent({ career }: CareerContentProps) {
  if (!career) return null;

  return (
    <div className="space-y-8 sm:space-y-10 text-left select-none pt-4">
      
      {/* 1. About the Role */}
      {career.aboutDescription && (
        <div className="space-y-3.5">
          <h2 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight flex items-center gap-2">
            <span className="text-[#D4A359] font-bold">|</span>
            <span>{career.aboutHeading || "About the Role"}</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
            {career.aboutDescription}
          </p>
        </div>
      )}

      {/* 2. Key Responsibilities */}
      {career.responsibilities && career.responsibilities.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight flex items-center gap-2">
            <span className="text-[#D4A359] font-bold">|</span>
            <span>{career.responsibilitiesHeading || "Key Responsibilities"}</span>
          </h2>
          <ul className="space-y-3">
            {career.responsibilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm md:text-base font-light">
                <CheckCircle2 className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 3. Qualifications & Skills */}
      {career.qualifications && career.qualifications.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight flex items-center gap-2">
            <span className="text-[#D4A359] font-bold">|</span>
            <span>{career.qualificationsHeading || "Qualifications & Skills"}</span>
          </h2>
          <ul className="space-y-3">
            {career.qualifications.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm md:text-base font-light">
                <CheckCircle2 className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 4. Why Join Us? */}
      {career.whyJoinItems && career.whyJoinItems.length > 0 && (
        <div className="space-y-6">
          <h2 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight flex items-center gap-2">
            <span className="text-[#D4A359] font-bold">|</span>
            <span>{career.whyJoinHeading || "Why Join Us?"}</span>
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {career.whyJoinItems.map((item, idx) => {
              const IconComp = (item.icon && iconMap[item.icon]) || Users;

              return (
                <div key={idx} className="flex items-start gap-4 sm:gap-5 group">
                  {/* Left Gold Square Outlined Icon Badge matching screenshot */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border border-[#D4A359]/70 bg-[#070B12] text-[#D4A359] flex items-center justify-center shrink-0 shadow-md group-hover:border-[#D4A359] group-hover:scale-105 transition-all duration-300">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>

                  {/* Content: Title & Description */}
                  <div className="flex-1 pt-0.5">
                    <h3 className="font-serif text-base sm:text-lg text-white font-medium mb-1 group-hover:text-[#D4A359] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}

export default CareerContent;

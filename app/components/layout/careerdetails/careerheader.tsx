"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, Users, Clock } from "lucide-react";
import { CareerDetailItem } from "@/types/law";
import { FadeIn } from "@/app/components/ui/animations";

interface CareerHeaderProps {
  career: CareerDetailItem;
}

export function CareerHeader({ career }: CareerHeaderProps) {
  if (!career) return null;

  return (
    <FadeIn direction="up" delay={0.1} duration={0.6} className="space-y-4 sm:space-y-5 text-left select-none pb-6 border-b border-slate-800/80">
      {/* 1. Back to Openings Link */}
      <div>
        <Link
          href={career.backLink || "/career"}
          className="inline-flex items-center gap-2 text-xs sm:text-sm md:text-lg font-medium text-[#D4A359] hover:text-[#E3C280] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{career.backText || "Back to All Openings"}</span>
        </Link>
      </div>

      {/* 2. Job Title */}
      <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-white leading-[1.2] tracking-tight">
        {career.title}
      </h1>

      {/* 3. Meta Row with Icons matching screenshot */}
      <div className="flex items-center gap-4 sm:gap-6 flex-wrap text-xs sm:text-sm text-slate-300 pt-1">
        {/* Location */}
        {career.location && (
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#D4A359] shrink-0" />
            <span>{career.location}</span>
          </div>
        )}

        {/* Department */}
        {career.department && (
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-[#D4A359] shrink-0" />
            <span>{career.department}</span>
          </div>
        )}

        {/* Experience */}
        {career.experience && (
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-[#D4A359] shrink-0" />
            <span>{career.experience}</span>
          </div>
        )}

        {/* Employment Type */}
        {career.employmentType && (
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#D4A359] shrink-0" />
            <span>{career.employmentType}</span>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default CareerHeader;

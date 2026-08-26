"use client";

import React from "react";
import Link from "next/link";
import { Scale, Mail, ArrowRight } from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { CareerCtaData, GlobalLawData } from "@/types/law";

const defaultCareerCtaData = (rawLawData as GlobalLawData).careerCta;

export interface CareerctaProps {
  data?: CareerCtaData;
}

export function Careercta({ data = defaultCareerCtaData }: CareerctaProps) {
  if (!data) return null;

  const { title, subtitle, buttonText, buttonLink, email } = data;

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-6 sm:mt-8 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="group relative rounded-xl border border-slate-800/80 bg-[#0A0E17] p-4 sm:p-5 md:p-6 shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8 hover:border-[#D4A359]/40 transition-all duration-300">
          
          {/* Left Side: Scale Icon + Text Info */}
          <div className="flex mx-8 flex-col sm:flex-row items-center text-center sm:text-left gap-3.5 sm:gap-4.5">
            {/* Gold Balance Scale Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0">
              <Scale className="w-8 h-8 sm:w-9 sm:h-9 text-[#D4A359]" />
            </div>

            {/* Content Text */}
            <div>
              <h3 className="font-serif font-semibold text-white text-lg sm:text-xl leading-snug mb-0.5">
                {title || "Don't see the right role?"}
              </h3>
              {subtitle && (
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right Side: Outlined Button + Vertical Line + Email Link */}
          <div className="flex flex-col mx-8 sm:flex-row items-center gap-4 sm:gap-6 shrink-0 w-full sm:w-auto justify-center">
            
            {/* Outlined Gold Button */}
            <Link
              href={buttonLink || "/contact"}
              className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 px-5 sm:px-6 rounded-lg border border-[#D4A359]/80 bg-transparent text-[#D4A359] hover:bg-[#D4A359] hover:text-[#0A0E17] text-xs sm:text-sm font-semibold transition-all duration-200 w-full sm:w-auto cursor-pointer"
            >
              <span>{buttonText || "Submit Your Resume"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Vertical Divider Line */}
            <span className="hidden sm:block w-[1px] h-8 bg-slate-800" />

            {/* Email Link */}
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2.5 text-[#D4A359] hover:underline text-xs sm:text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4A359] shrink-0" />
                <span>{email}</span>
              </a>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Careercta;

"use client";

import React from "react";
import lawData from "@/app/data/lawData-restructured.json";

import { PrivacyPolicySectionData, GlobalLawData } from "@/app/data";
import { StaggerContainer, StaggerItem } from "@/app/components/ui/animations";

const defaultPrivacyPolicySectionData =
  lawData.categories.Veritas.sections.PrivacyPolicy?.variants
    ?.VeritasPrivacyPolicy1?.privacyPolicySection;

export interface SectionProps {
  data?: PrivacyPolicySectionData;
}

export function Section({
  data = defaultPrivacyPolicySectionData,
}: SectionProps) {
  if (!data || !data.topics) return null;

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <StaggerContainer
        staggerChildren={0.15}
        delayChildren={0.1}
        className="space-y-10 sm:space-y-12 lg:space-y-14"
      >
        {data.topics.map((topic: any) => (
          <StaggerItem key={topic.id}>
            <div className="space-y-3 sm:space-y-4">
              {}
              <h3 className="font-serif text-[#D4A359] text-left text-xl sm:text-2xl lg:text-[26px] font-semibold tracking-tight">
                {topic.title}
              </h3>

              {}
              <div className="space-y-3.5 sm:space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {topic.paragraphs.map((paragraph: any, idx: any) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

export default Section;

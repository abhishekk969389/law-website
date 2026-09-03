"use client";

import React from "react";
import {
  Briefcase,
  Trophy,
  FileText,
  Handshake,
  Gavel,
  BookOpen,
  Landmark,
  Scale,
  Users,
  Award,
  ShieldCheck,
  Building2,
  LucideIcon,
} from "lucide-react";
import { TeamDetailItem, TeamActivitiesData } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

export interface ActivityProps {
  data?: TeamActivitiesData;
  member?: TeamDetailItem;
}

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  trophy: Trophy,
  "file-text": FileText,
  filetext: FileText,
  handshake: Handshake,
  gavel: Gavel,
  "book-open": BookOpen,
  bookopen: BookOpen,
  book: BookOpen,
  landmark: Landmark,
  building: Building2,
  scale: Scale,
  scales: Scale,
  users: Users,
  people: Users,
  award: Award,
  shield: ShieldCheck,
};

export function Activity({ data, member }: ActivityProps) {
  const activitiesData = data || member?.activities;

  if (!activitiesData) {
    return null;
  }

  const {
    skillsTitle = "Activities & Skills",
    skillsIcon = "briefcase",
    skills = [],
    achievementsTitle = "Notable Achievements",
    achievementsIcon = "trophy",
    achievements = [],
  } = activitiesData;

  if (skills.length === 0 && achievements.length === 0) {
    return null;
  }

  const SkillsHeaderIcon = iconMap[skillsIcon.toLowerCase()] || Briefcase;
  const AchievementsHeaderIcon =
    iconMap[achievementsIcon.toLowerCase()] || Trophy;

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white select-none px-4 sm:px-6 lg:px-8 mt-10 md:mt-12">

        <FadeIn direction="up" delay={0.1}>
          <div className="bg-[#070A11] border border-slate-800/80 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* LEFT COLUMN: Activities & Skills */}
              {skills.length > 0 && (
                <div className="lg:border-r lg:border-slate-800/80 lg:pr-8 xl:pr-12 space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-full border border-[#D4A359] text-[#D4A359] flex items-center justify-center shrink-0">
                        <SkillsHeaderIcon className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight">
                        {skillsTitle}
                      </h2>
                    </div>
                    {/* Gold Underline Accent below Title */}
                    <div className="w-12 h-[2px] bg-[#D4A359] ml-16" />
                  </div>

                  {/* Skills Progress List */}
                  <div className="space-y-6 pt-2">
                    {skills.map((skill: any, index: any) => {
                      const SkillIconComponent =
                        iconMap[skill.icon?.toLowerCase() || ""] || FileText;

                      return (
                        <div key={skill.id || index} className="space-y-2.5">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3.5">
                              {/* Icon Box */}
                              <div className="w-11 h-11 rounded-xl bg-[#0A0F1D] border border-slate-800/90 flex items-center justify-center text-[#D4A359] shrink-0 shadow-inner">
                                <SkillIconComponent className="w-5 h-5 stroke-[1.75]" />
                              </div>
                              {/* Skill Name */}
                              <span className="text-white text-sm sm:text-base font-sans font-medium tracking-wide">
                                {skill.name}
                              </span>
                            </div>
                            {/* Percentage */}
                            <span className="text-slate-300 text-sm sm:text-base font-sans font-medium">
                              {skill.percentage}%
                            </span>
                          </div>

                          {/* Progress Bar Track */}
                          <div className="w-full bg-[#111726] h-2.5 rounded-full overflow-hidden border border-slate-800/60 p-[1px]">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.1 * index, ease: "easeOut" }}
                              className="bg-gradient-to-r from-[#D4A359] via-[#E5B56E] to-[#D4A359] h-full rounded-full shadow-[0_0_8px_rgba(212,163,89,0.4)]"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* RIGHT COLUMN: Notable Achievements */}
              {achievements.length > 0 && (
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-full border border-[#D4A359] text-[#D4A359] flex items-center justify-center shrink-0">
                        <AchievementsHeaderIcon className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-medium tracking-tight">
                        {achievementsTitle}
                      </h2>
                    </div>
                    {/* Gold Underline Accent below Title */}
                    <div className="w-12 h-[2px] bg-[#D4A359] ml-16" />
                  </div>

                  {/* Achievements List */}
                  <div className="space-y-6 pt-2">
                    {achievements.map((item: any, index: any) => {
                      const AchievementIconComponent =
                        iconMap[item.icon?.toLowerCase() || ""] || Landmark;
                      const isLast = index === achievements.length - 1;

                      return (
                        <div
                          key={item.id || index}
                          className={`flex items-start gap-4 sm:gap-5 ${
                            !isLast ? "border-b border-slate-800/60 pb-6" : ""
                          }`}
                        >
                          {/* Hexagon Shield Frame for Icon */}
                          <div className="relative w-14 h-16 sm:w-16 sm:h-18 flex items-center justify-center shrink-0 mt-0.5">
                            <svg
                              className="absolute inset-0 w-full h-full text-[#D4A359]"
                              viewBox="0 0 60 68"
                              fill="none"
                            >
                              <polygon
                                points="30 2, 58 17, 58 51, 30 66, 2 51, 2 17"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="#0A0F1D"
                              />
                            </svg>
                            <AchievementIconComponent className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 text-[#D4A359] stroke-[1.75]" />
                          </div>

                          {/* Title & Description */}
                          <div className="space-y-1.5 flex-1">
                            <h3 className="font-serif text-lg sm:text-xl text-white font-medium tracking-wide leading-snug hover:text-[#D4A359] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
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
          </div>
        </FadeIn>
    </section>
  );
}

export default Activity;

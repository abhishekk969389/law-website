"use client";

import React from "react";
import Image from "next/image";
import { Scale, Building2, Award, Phone, Mail, Printer } from "lucide-react";
import { TeamDetailItem } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

export interface TeamDetailsSecProps {
  member: TeamDetailItem;
}

export function TeamDetailsSec({ member }: TeamDetailsSecProps) {
  if (!member) return null;

  const { name, role, tagline, image, shortBio, contactInfo } = member;

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-6 sm:mt-10 md:mt-12 lg:mt-14 select-none px-4 sm:px-6 lg:px-8 pb-12">
      { }
      <FadeIn direction="up" delay={0.1}>
        <div className="bg-[#070A11] rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            { }
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              <div>
                { }
                <div className="flex items-center gap-3.5 mb-6">
                  <svg
                    className="w-8 h-8 text-[#D4A359] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M3 10h18" />
                    <path d="M5 10v11" />
                    <path d="M9 10v11" />
                    <path d="M15 10v11" />
                    <path d="M19 10v11" />
                    <path d="M2 10l10-7 10 7" />
                  </svg>
                  <span className="text-[#D4A359] text-sm md:text-lg font-semibold tracking-[0.18em] uppercase font-sans">
                    {tagline || "EXPERIENCED ATTORNEYS"}
                  </span>
                  <div className="w-32 sm:w-48 md:w-64 lg:w-80 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A359]/70 to-[#D4A359] ml-1" />
                </div>

                { }
                <h1 className="font-serif text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-2 sm:mb-3">
                  {name}
                </h1>

                { }
                <p className="text-[#D4A359] font-serif text-lg sm:text-xl md:text-2xl font-medium tracking-wide">
                  {role}
                </p>

                { }
                <div className="w-14 h-[2px] bg-[#D4A359] my-2" />

                { }
                <p className="text-slate-300 text-sm sm:mt-4 md:mt-6 sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 font-sans max-w-2xl">
                  {shortBio}
                </p>
              </div>

              { }
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
                { }
                <div className="bg-[#0A0F1D] border border-slate-800/90 hover:border-[#D4A359]/50 rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 shadow-md group">
                  <div className="w-12 h-12 rounded-full bg-[#111726] border border-[#D4A359]/40 flex items-center justify-center text-[#D4A359] shrink-0 group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm sm:text-sm font-medium">
                      {contactInfo?.experienceLabel || "Experience"}
                    </p>
                    <p className="text-white text-sm sm:text-base font-bold font-serif">
                      {contactInfo?.experienceValue || "More Than 20 Years"}
                    </p>
                  </div>
                </div>

                { }
                <div className="bg-[#0A0F1D] border border-slate-800/90 hover:border-[#D4A359]/50 rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 shadow-md group">
                  <div className="w-12 h-12 rounded-full bg-[#111726] border border-[#D4A359]/40 flex items-center justify-center text-[#D4A359] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm sm:text-sm font-medium">
                      {contactInfo?.phoneLabel || "Phone"}
                    </p>
                    {contactInfo?.phoneValue ? (
                      <a
                        href={
                          contactInfo.phoneHref ||
                          `tel:${contactInfo.phoneValue.replace(/[^0-9+]/g, "")}`
                        }
                        className="text-white text-sm sm:text-base font-bold hover:text-[#D4A359] transition-colors"
                      >
                        {contactInfo.phoneValue}
                      </a>
                    ) : (
                      <span className="text-white text-sm sm:text-base font-bold">
                        +888 (555) 546-33
                      </span>
                    )}
                  </div>
                </div>

                <div className="bg-[#0A0F1D] border border-slate-800/90 hover:border-[#D4A359]/50 rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 shadow-md group">
                  <div className="w-12 h-12 rounded-full bg-[#111726] border border-[#D4A359]/40 flex items-center justify-center text-[#D4A359] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-slate-400 text-sm sm:text-sm font-medium">
                      {contactInfo?.emailLabel || "Email"}
                    </p>
                    {contactInfo?.emailValue ? (
                      <a
                        href={
                          contactInfo.emailHref ||
                          `mailto:${contactInfo.emailValue}`
                        }
                        className="text-white text-sm sm:text-sm md:text-base font-bold hover:text-[#D4A359] transition-colors truncate block"
                      >
                        {contactInfo.emailValue}
                      </a>
                    ) : (
                      <span className="text-white text-sm sm:text-base font-bold">
                        Info@Example.Com
                      </span>
                    )}
                  </div>
                </div>

                <div className="bg-[#0A0F1D] border border-slate-800/90 hover:border-[#D4A359]/50 rounded-2xl p-4 sm:p-5 flex items-center gap-4 transition-all duration-300 shadow-md group">
                  <div className="w-12 h-12 rounded-full bg-[#111726] border border-[#D4A359]/40 flex items-center justify-center text-[#D4A359] shrink-0 group-hover:scale-105 transition-transform">
                    <Printer className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm sm:text-sm font-medium">
                      {contactInfo?.faxLabel || "Fax"}
                    </p>
                    <p className="text-white text-sm sm:text-base font-bold">
                      {contactInfo?.faxValue || "+3265551209"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center pt-2 sm:pt-4 lg:pt-0">
              <div className="relative w-full max-w-[420px]">
                <div className="absolute inset-y-3 -right-4 w-full rounded-3xl bg-[#080D16] border border-slate-800/90 shadow-2xl overflow-hidden pointer-events-none hidden sm:block">
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-2 opacity-30">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-slate-400/50"
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -top-3 -left-3.5 -bottom-3.5 right-3.5 rounded-3xl border border-[#D4A359]/60 pointer-events-none" />

                <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] lg:h-[530px] rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-800/80 group z-10">
                  <Image
                    src={image || "/about.svg"}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-3 -right-1 sm:-bottom-4 sm:-right-2 z-20">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#D4A359] shadow-2xl border border-amber-200/40 flex items-center justify-center text-slate-950 cursor-pointer"
                  >
                    <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-slate-950 stroke-[1.75]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default TeamDetailsSec;

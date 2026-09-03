"use client";

import React from "react";
import {
    Users,
    Search,
    FileText,
    Gavel,
    ShieldCheck,
    Landmark,
    Phone,
    LucideIcon,
} from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { ProvenApproachData, GlobalLawData } from "@/app/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultProvenData = lawData.categories.Veritas.sections.OurApproach?.variants?.VeritasOurApproach1?.provenApproach;

const iconMap: Record<string, LucideIcon> = {
    users: Users,
    "file-search": Search,
    "file-edit": FileText,
    gavel: Gavel,
    "shield-check": ShieldCheck,
};

export interface ProvenProps {
    data?: ProvenApproachData;
}

export function Proven({ data = defaultProvenData }: ProvenProps) {
    if (!data) return null;

    const { tagline, steps, bottomBanner } = data;

    return (
        <section className="relative max-w-[1400px] mx-auto w-full bg-[#08171B] text-white  mt-8 sm:mt-10 md:mt-12 lg:mt-14 pb-16  select-none px-4 sm:px-6 lg:px-8">

            {/* Outer Card Container with Gold/Slate Border Accent */}
            <FadeIn direction="up" delay={0.1} className="rounded-3xl border border-[#D4A359]/35 bg-[#0A1C20]/90 px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 shadow-2xl relative">

                {/* Top Tagline Header embedded directly on top border line */}
                <div className="absolute -top-3 sm:-top-3.5 left-1/2 -translate-x-1/2 bg-[#08171B] py-1 px-4 sm:px-6 flex items-center gap-3 sm:gap-4 z-20">
                    <span className="w-8 sm:w-16 h-[1.5px] bg-[#D4A359]" />
                    <span className="text-[#D4A359] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
                        {tagline}
                    </span>
                    <span className="w-8 sm:w-16 h-[1.5px] bg-[#D4A359]" />
                </div>

                {/* 5 Process Steps Grid */}
                <StaggerContainer staggerChildren={0.1} delayChildren={0.2} className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-slate-800/80">
                    {steps &&
                        steps.map((step: any) => {
                            const IconComponent = iconMap[step.icon] || Users;

                            return (
                                <StaggerItem key={step.id}>
                                    <motion.div
                                        whileHover={{ y: -4 }}
                                        className="flex flex-col items-center text-center px-3 sm:px-4 lg:px-5 py-4 lg:py-0 relative group cursor-pointer"
                                    >
                                        {/* Top Row: Translucent Step Number + Gold Circle Icon Badge */}
                                        <div className="flex items-center justify-center gap-3 mb-2">
                                            <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-slate-600/50 select-none">
                                                {step.stepNumber}
                                            </span>
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 6 }}
                                                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-[#D4A359]/70 flex items-center justify-center p-3 text-[#D4A359] group-hover:border-[#D4A359] group-hover:bg-[#D4A359]/10 transition-all duration-300 shadow-[0_0_12px_rgba(212,163,89,0.15)]"
                                            >
                                                <IconComponent className="w-6 h-6 stroke-[1.75]" />
                                            </motion.div>
                                        </div>

                                        {/* Step Title */}
                                        <h3 className="font-serif font-semibold text-white text-base sm:text-lg lg:text-xl mt-3 mb-2 min-h-[48px] flex items-center justify-center group-hover:text-[#D4A359] transition-colors">
                                            {step.title}
                                        </h3>

                                        {/* Step Description */}
                                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                </StaggerContainer>

                {/* Bottom Consultation Box (Overlapping Bottom Border Line: Reduced Space Above) */}
                {bottomBanner && (
                    <FadeIn direction="up" delay={0.3} className="-mb-16 sm:-mb-18 lg:-mb-20 translate-y-3 sm:translate-y-4 relative z-20 mt-4 sm:mt-5 rounded-2xl border border-[#D4A359]/35 bg-[#061418] p-5 sm:p-6 lg:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">

                        {/* Left Side: Courthouse Icon & Message */}
                        <div className="flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-full border border-[#D4A359]/60 bg-[#D4A359]/10 flex items-center justify-center p-2.5 text-[#D4A359] shrink-0">
                                <Landmark className="w-5 h-5" />
                            </div>
                            <p className="text-slate-300 text-sm md:text-base font-serif leading-relaxed max-w-2xl">
                                {bottomBanner.text}
                            </p>
                        </div>

                        {/* Middle Vertical Divider (Desktop) */}
                        <div className="hidden md:block h-12 w-[1px] bg-slate-800 shrink-0 mx-2" />

                        {/* Right Side: Phone Call Badge & Number */}
                        <div className="flex items-center gap-4 shrink-0">
                            <div className="w-12 h-12 rounded-full border border-[#D4A359]/60 bg-[#D4A359]/10 flex items-center justify-center p-2.5 text-[#D4A359] shrink-0">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <span className="text-slate-400 text-xs uppercase tracking-wider block mb-0.5 font-medium">
                                    {bottomBanner.callText}
                                </span>
                                <a
                                    href={bottomBanner.phoneHref || `tel:${bottomBanner.phoneNumber}`}
                                    className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-white hover:text-[#D4A359] transition-colors whitespace-nowrap"
                                >
                                    {bottomBanner.phoneNumber}
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                )}
            </FadeIn>
        </section>
    );
}

export default Proven;

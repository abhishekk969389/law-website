"use client";

import React from "react";
import Image from "next/image";
import {
    ShieldCheck,
    User,
    Gavel,
    Lock,
    Users,
    LucideIcon,
} from "lucide-react";
import { AboutData, GlobalLawData } from "@/app/data";
import lawData from "@/app/data/lawData-restructured.json";

import {
    FadeIn,
    StaggerContainer,
    StaggerItem,
    ScaleIn,
} from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultAboutData: AboutData =
    lawData.categories.Veritas.sections.About?.variants?.VeritasAbout1?.about;

interface AboutProps {
    data?: AboutData;
}

const foundationIconMap: Record<string, LucideIcon> = {
    shield: ShieldCheck,
    user: User,
    gavel: Gavel,
    lock: Lock,
};

export default function About({ data = defaultAboutData }: AboutProps) {
    const { topBadge, subTagline, heading, seal, image, imageBadge, foundation } =
        data;

    return (
        <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                { }
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 md:mb-8 gap-6">
                    <FadeIn direction="up" delay={0.1}>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                                <div className="flex -space-x-1.5">
                                    <span className="w-3.5 h-3.5 rounded-full border border-[#D4A359]" />
                                    <span className="w-3.5 h-3.5 rounded-full border border-[#D4A359]" />
                                </div>
                                <span className="text-[#D4A359] text-sm md:text-lg font-medium tracking-wide">
                                    {topBadge}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                                <span className="text-[#D4A359] mt-2 text-sm md:text-lg font-semibold tracking-widest ">
                                    {subTagline}
                                </span>
                                <span className="hidden md:block w-12 h-[1px] mt-4 bg-[#D4A359]/60" />
                            </div>
                            <h2 className="font-serif text-2xl sm:text-2xl md:text-5xl lg:text-[56px] leading-[1.15] tracking-tight text-center md:text-left">
                                <span className="block text-white font-medium">
                                    {heading.line1}
                                </span>
                                <span className="block text-white font-medium">
                                    {heading.line2}{" "}
                                    <span className="text-[#D4A359] italic font-serif">
                                        {heading.highlight}
                                    </span>
                                </span>
                            </h2>
                        </div>
                    </FadeIn>

                    { }
                    <FadeIn
                        direction="left"
                        delay={0.2}
                        className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8 max-w-lg shrink-0 text-center md:text-left mx-auto md:mx-0"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 shrink-0 flex items-center justify-center cursor-pointer translate-x-0 md:-translate-x-5"
                        >
                            <Image
                                src={seal.badgeImage || "/seal-badge.svg"}
                                alt="Law Group Seal Badge"
                                width={180}
                                height={180}
                                className="w-full h-full object-contain"
                                priority
                            />
                        </motion.div>
                        <div className="hidden md:block h-24 w-[1px] bg-slate-800 shrink-0 -translate-x-1.5 sm:-translate-x-2.5" />

                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <p className="text-slate-100 text-base sm:text-lg md:text-[19px] lg:text-[20px] font-normal leading-relaxed max-w-[340px]">
                                {seal.description}
                            </p>
                            <div className="w-14 h-[2px] bg-[#D4A359] mt-3.5 mx-auto md:mx-0" />
                        </div>
                    </FadeIn>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    <FadeIn
                        direction="right"
                        delay={0.3}
                        className="lg:col-span-5 relative pb-8"
                    >
                        <div className="relative border border-[#D4A359]/40 rounded-[30px] p-1.5 bg-[#0B0E14] shadow-2xl">
                            <div className="relative rounded-[24px] overflow-hidden group">
                                <Image
                                    src={image || "/about.svg"}
                                    alt="About Veritas Law"
                                    width={700}
                                    height={550}
                                    className="w-full h-[320px] sm:h-[390px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/80 via-transparent to-transparent" />
                            </div>
                            <ScaleIn
                                delay={0.5}
                                initialScale={0.8}
                                className="absolute -bottom-8 left-6 z-20"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-gradient-to-b from-[#141B26] to-[#0A0D14] border border-[#D4A359]/30 rounded-[22px] px-6 py-4 flex items-center gap-5 shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
                                >
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0D121B] border border-[#D4A359]/60 flex items-center justify-center text-[#E5B562] shrink-0 shadow-inner">
                                        <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#E5B562]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif font-medium text-lg sm:text-xl leading-tight">
                                            {imageBadge.title}
                                        </h4>
                                        <p className="text-[#E5B562] font-serif italic text-base sm:text-lg leading-tight mt-0.5">
                                            {imageBadge.subtitle}
                                        </p>
                                    </div>
                                </motion.div>
                            </ScaleIn>
                        </div>
                    </FadeIn>

                    { }
                    <div className="lg:col-span-7 flex flex-col justify-center text-center md:text-left items-center md:items-start">
                        { }
                        <FadeIn direction="up" delay={0.2}>
                            <span className="text-[#D4A359] text-sm md:text-lg font-semibold tracking-wider uppercase mb-3 block text-center md:text-left">
                                {foundation.subTagline}
                            </span>
                        </FadeIn>

                        { }
                        <FadeIn direction="up" delay={0.3}>
                            <h3 className="font-serif text-2xl sm:text-2xl md:text-4xl lg:text-[42px] leading-tight mb-6 text-center md:text-left">
                                <span className="text-white italic">
                                    {foundation.heading.line1}
                                </span>{" "}
                                <span className="text-[#D4A359] italic">
                                    {foundation.heading.highlight}
                                </span>
                            </h3>
                        </FadeIn>

                        { }
                        <FadeIn direction="up" delay={0.4}>
                            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed mb-10 max-w-2xl text-center md:text-left">
                                {foundation.description}
                            </p>
                        </FadeIn>

                        { }
                        <StaggerContainer
                            staggerChildren={0.12}
                            delayChildren={0.45}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative"
                        >
                            {foundation.items.map((item: any, idx: any) => {
                                const IconComp =
                                    foundationIconMap[item.icon.toLowerCase()] || ShieldCheck;

                                return (
                                    <StaggerItem
                                        key={item.id || idx}
                                        className="relative lg:pr-4 bg-[#0E141E]/40 sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none border border-slate-800/50 sm:border-none"
                                    >
                                        { }
                                        {idx < foundation.items.length - 1 && (
                                            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-24 bg-slate-800" />
                                        )}

                                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                            { }
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 6 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#131C1B] border border-[#1F302D] flex items-center justify-center text-[#D4A359] mb-3 sm:mb-4 shrink-0 shadow-sm group hover:border-[#D4A359]/50 transition-colors cursor-pointer"
                                            >
                                                <IconComp className="w-6 h-6 sm:w-8 sm:h-8" />
                                            </motion.div>

                                            <div className="text-center md:text-left">
                                                { }
                                                <h4 className="text-white font-semibold text-sm sm:text-sm mb-1">
                                                    {item.title}
                                                </h4>

                                                { }
                                                <p className="text-slate-400 text-sm sm:text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}

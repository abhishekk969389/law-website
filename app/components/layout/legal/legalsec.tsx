"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PenTool } from "lucide-react";
import Pagination from "@/app/components/ui/pagination";
import rawLawData from "@/app/data/lawData.json";
import { LegalSectionData, GlobalLawData } from "@/types/law";

const defaultLegalSectionData = (rawLawData as GlobalLawData).legalSection;

export interface LegalsecProps {
    data?: LegalSectionData;
}

export function Legalsec({ data = defaultLegalSectionData }: LegalsecProps) {
    if (!data) return null;

    const { tagline, heading, subheading, featured, items } = data;

    return (
        <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">

                {/* Top Centered Header Section matching blog.tsx design */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
                    {/* Top Tagline with Pen Icon */}
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="w-12 h-[1px] bg-[#D4A359]/60" />
                        <div className="flex items-center gap-2">
                            <PenTool className="w-4 h-4 text-[#D4A359]" />
                            <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
                                {tagline}
                            </span>
                        </div>
                        <span className="w-12 h-[1px] bg-[#D4A359]/60" />
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-4">
                        <span className="text-white font-medium">{heading?.line1}</span>{" "}
                        <span className="text-[#D4A359] italic font-serif">{heading?.highlight}</span>
                    </h2>

                    {/* Subheading */}
                    {subheading && (
                        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-[620px] mx-auto">
                            {subheading}
                        </p>
                    )}
                </div>

                {/* Top Featured Article Card */}
                {featured && (
                    <div className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] overflow-hidden hover:border-[#D4A359]/50 transition-all duration-300 shadow-xl grid grid-cols-1 lg:grid-cols-2 mb-8 lg:mb-10">
                        {/* Left Image Container */}
                        <div className="relative w-full h-[260px] sm:h-[320px] lg:h-full overflow-hidden bg-slate-900 min-h-[260px]">
                            <Image
                                src={featured.image || "/service3.svg"}
                                alt={featured.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Gold FEATURED Badge */}
                            {featured.badge && (
                                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 bg-[#D4A359] text-[#0A0E17] font-bold text-xs uppercase tracking-wider rounded-md shadow-lg">
                                    {featured.badge}
                                </div>
                            )}
                        </div>

                        {/* Right Text Content Body */}
                        <div className="p-6 sm:p-8 flex flex-col justify-between text-left">
                            <div>
                                {/* Date • Category */}
                                <div className="text-slate-400 text-xs font-semibold tracking-wider uppercase mb-3">
                                    <span>{featured.date}</span>
                                    <span className="mx-2">•</span>
                                    <span className="text-[#D4A359]">{featured.category}</span>
                                </div>

                                {/* Title */}
                                <h3 className="font-serif font-semibold text-white text-2xl sm:text-3xl mb-4 group-hover:text-[#D4A359] transition-colors leading-snug">
                                    {featured.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                                    {featured.description}
                                </p>
                            </div>

                            {/* Read More Link */}
                            <div>
                                <Link
                                    href={featured.link || "/legal"}
                                    className="inline-flex items-center gap-2 text-[#D4A359] text-xs sm:text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all hover:underline"
                                >
                                    <span>Read More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* 6 Grid Legal Articles (3 columns on md/lg screens, 2 rows total) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {items &&
                        items.map((item) => (
                            <div
                                key={item.id}
                                className="group relative rounded-2xl border border-slate-800/80 bg-[#0A0E17] overflow-hidden hover:border-[#D4A359]/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
                            >
                                <div>
                                    {/* Top Image Container */}
                                    <div className="relative w-full h-[190px] sm:h-[210px] overflow-hidden bg-slate-900">
                                        <Image
                                            src={item.image || "/about.svg"}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Card Content Body */}
                                    <div className="p-5 sm:p-6 text-left">
                                        {/* Date • Category */}
                                        <div className="text-xs font-semibold tracking-wider uppercase mb-2">
                                            <span className="text-slate-400">{item.date}</span>
                                            <span className="text-slate-600 mx-2">•</span>
                                            <span className="text-[#D4A359]">{item.category}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-serif font-semibold text-white text-lg sm:text-xl mb-3 group-hover:text-[#D4A359] transition-colors line-clamp-2 leading-snug">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 min-h-[56px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Action Link */}
                                <div className="pb-6 pt-2 px-5 sm:px-6 text-left">
                                    <Link
                                        href={item.link || "/legal"}
                                        className="inline-flex items-center gap-2 text-[#D4A359] text-xs font-semibold uppercase tracking-wider group-hover:gap-3 transition-all hover:underline"
                                    >
                                        <span>Read More</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Pagination Component */}
                <Pagination currentPage={1} totalPages={8} />
            </div>
        </section>
    );
}

export default Legalsec;

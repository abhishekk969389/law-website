"use client";

import React from "react";
import Image from "next/image";
import {
    UserCheck,
    ShieldCheck,
    Gavel,
    Handshake,
    FileText,
    Users,
    Scale,
    LucideIcon,
} from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { WhyChooseUsData, GlobalLawData } from "@/types/law";

const defaultWhyChooseUsData = (rawLawData as GlobalLawData).whyChooseUs;

const iconMap: Record<string, LucideIcon> = {
    "user-star": UserCheck,
    "shield-check": ShieldCheck,
    gavel: Gavel,
    handshake: Handshake,
    "file-text": FileText,
    users: Users,
};

export interface WhyChooseUsProps {
    data?: WhyChooseUsData;
}

export function WhyChooseUs({ data = defaultWhyChooseUsData }: WhyChooseUsProps) {
    if (!data) return null;

    const { tagline, heading, description, image, items } = data;

    return (
        <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
                    {/* Left Column: Text & 6 Feature Cards */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div>
                            {/* Tagline */}
                            <div className="flex items-center gap-3 mb-3">
                                <span className="w-8 h-[2px] bg-[#D4A359]" />
                                <span className="text-[#D4A359] text-xs md:text-lg font-semibold tracking-widest uppercase">
                                    {tagline}
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] tracking-tight mb-4">
                                <span className="text-white font-medium block sm:inline">{heading.line1} </span>
                                <span className="text-[#D4A359] italic font-serif font-medium">
                                    {heading.highlight}{" "}
                                </span>
                                <span className="text-white font-medium block sm:inline">{heading.line2}</span>
                            </h2>

                            {/* Decorative Divider */}
                            <div className="flex items-center gap-4 my-6 max-w-md">
                                <div className="h-[1px] bg-slate-800 flex-1" />
                                <Scale className="w-5 h-5 text-[#D4A359] shrink-0" />
                                <div className="h-[1px] bg-slate-800 flex-1" />
                            </div>

                            {/* Subheading / Description */}
                            <p className="text-slate-300 text-sm md:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
                                {description}
                            </p>

                            {/* 6 Feature Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                                {items &&
                                    items.map((item) => {
                                        const IconComponent = iconMap[item.icon] || UserCheck;

                                        return (
                                            <div
                                                key={item.id}
                                                className="bg-[#0E131C] border border-slate-800/80 rounded-xl p-5 text-center flex flex-col items-center group hover:border-[#D4A359]/60 hover:bg-[#121824] transition-all duration-300 shadow-lg"
                                            >
                                                {/* Circle Icon Badge */}
                                                <div className="w-14 h-14 rounded-full border border-[#D4A359]/60 flex items-center justify-center mb-4 p-3 group-hover:scale-110 group-hover:border-[#D4A359] group-hover:bg-[#D4A359]/10 transition-all duration-300">
                                                    <IconComponent className="w-6 h-6 text-[#D4A359]" />
                                                </div>

                                                {/* Card Title */}
                                                <h3 className="font-serif font-semibold text-white text-lg md:text-xl mb-2 group-hover:text-[#D4A359] transition-colors">
                                                    {item.title}
                                                </h3>

                                                {/* Card Description */}
                                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Ornate Gold Framed Legal Image */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                        <div className="relative w-full h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] rounded-2xl p-3 border-2 border-[#C99A2E]/70 bg-[#0E131C] shadow-2xl overflow-hidden group">
                            {/* Inner Gold Border Accent */}
                            <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#C99A2E]/40">
                                <Image
                                    src={image || "/subbanner.svg"}
                                    alt="Why Choose Us"
                                    fill
                                    priority
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;

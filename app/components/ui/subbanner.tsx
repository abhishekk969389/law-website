"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import rawLawData from "@/app/data/lawData.json";
import { SubBannerData, GlobalLawData } from "@/types/law";

const defaultSubBannerData: SubBannerData =
    (rawLawData as GlobalLawData).aboutSubBanner || {
        title: "About us",
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about", isActive: true },
        ],
        backgroundImage: "/subbanner.svg",
    };

export interface SubBannerProps {
    data?: SubBannerData;
    title?: string;
    breadcrumbs?: SubBannerData["breadcrumbs"];
    backgroundImage?: string;
}

export function SubBanner({
    data,
    title: customTitle,
    breadcrumbs: customBreadcrumbs,
    backgroundImage: customBgImage,
}: SubBannerProps) {
    const activeData = data || defaultSubBannerData;
    const title = customTitle || activeData.title;
    const breadcrumbs = customBreadcrumbs || activeData.breadcrumbs;
    const bgImage = customBgImage || activeData.backgroundImage || "/subbanner.svg";

    return (
        <section className="relative w-full overflow-hidden select-none bg-[#0B0E14]">
            {/* Subbanner Background Image Container */}
            <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
                {/* Render subbanner.svg as background photo */}
                <Image
                    src={bgImage}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Dark Angled Overlay with Drop Shadow matching Screenshot */}
                <div
                    className="absolute inset-0 z-[5] pointer-events-none"
                    style={{ filter: "drop-shadow(15px 0 20px rgba(0, 0, 0, 0.95))" }}
                >
                    {/* Mobile Slanted Semi-Transparent Dark Overlay */}
                    <div
                        className="block md:hidden w-full h-full bg-[#0B0E14]/10 backdrop-blur-[2px]"
                        style={{
                            clipPath: "polygon(0 0, 70% 0, 70% 100%, 0 100%)",
                        }}
                    />

                    {/* Desktop Slanted Semi-Transparent Dark Overlay */}
                    <div
                        className="hidden md:block w-full h-full bg-[#0B0E14]/85 backdrop-blur-[2px]"
                        style={{
                            clipPath: "polygon(0 0, 42% 0, 52% 100%, 0 100%)",
                        }}
                    />
                </div>

                {/* Foreground Content (Title & Breadcrumbs) */}
                <div className="relative z-10 max-w-[1400px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                    <div className="max-w-xl">
                        {/* Main Title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-tight mb-3 md:mb-4">
                            {title}
                        </h1>

                        {/* Breadcrumbs */}
                        {breadcrumbs && breadcrumbs.length > 0 && (
                            <nav
                                aria-label="Breadcrumb"
                                className="flex items-center flex-wrap gap-2 text-xs sm:text-sm md:text-base font-medium"
                            >
                                {breadcrumbs.map((item, index) => {
                                    const isLast = index === breadcrumbs.length - 1;
                                    const isActive = item.isActive || isLast;

                                    return (
                                        <React.Fragment key={index}>
                                            {index > 0 && (
                                                <ChevronRight className="w-4 h-4 text-[#C99A2E] shrink-0 stroke-[2.5]" />
                                            )}
                                            {item.href && !isActive ? (
                                                <Link
                                                    href={item.href}
                                                    className="text-slate-300 hover:text-[#C99A2E] transition-colors duration-200"
                                                >
                                                    {item.label}
                                                </Link>
                                            ) : (
                                                <span
                                                    className={
                                                        isActive
                                                            ? "text-[#C99A2E] font-semibold"
                                                            : "text-slate-300"
                                                    }
                                                >
                                                    {item.label}
                                                </span>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SubBanner;

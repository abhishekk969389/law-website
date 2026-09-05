"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { SubBannerData, GlobalLawData } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";

const defaultSubBannerData: SubBannerData = lawData.categories.Veritas.sections
  .PageBanner?.variants?.VeritasPageBanner1?.aboutSubBanner || {
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

const renderFormattedTitle = (text: string) => {
  if (!text) return "";
  if (text.includes(" & ")) {
    const parts = text.split(" & ");
    return (
      <>
        <span className="block sm:inline">{parts[0]} &</span>{" "}
        <span className="block sm:inline">{parts[1]}</span>
      </>
    );
  }
  if (text.includes(" ") && text.length > 10) {
    const spaceIndex = text.indexOf(" ");
    const firstWord = text.slice(0, spaceIndex);
    const rest = text.slice(spaceIndex + 1);
    return (
      <>
        <span className="block sm:inline">{firstWord}</span>{" "}
        <span className="block sm:inline">{rest}</span>
      </>
    );
  }
  return text;
};

export function SubBanner({
  data,
  title: customTitle,
  breadcrumbs: customBreadcrumbs,
  backgroundImage: customBgImage,
}: SubBannerProps) {
  const activeData = data || defaultSubBannerData;
  const title = customTitle || activeData.title;
  const breadcrumbs = customBreadcrumbs || activeData.breadcrumbs;
  const bgImage =
    customBgImage || activeData.backgroundImage || "/subbanner.svg";

  return (
    <section className="relative w-full overflow-hidden select-none bg-[#0B0E14]">
      {}
      <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px]">
        {}
        <Image
          src={bgImage}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover object-center"
        />

        {}
        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{ filter: "drop-shadow(14px 0 20px rgba(0, 0, 0, 0.95))" }}
        >
          {}
          <div
            className="block md:hidden w-full h-full bg-[#0B0E14]/90 backdrop-blur-[1px]"
            style={{
              clipPath: "polygon(0 0, 68% 0, 50% 100%, 0 100%)",
            }}
          />

          {}
          <div
            className="hidden md:block w-full h-full bg-[#0B0E14]/85 backdrop-blur-[2px]"
            style={{
              clipPath: "polygon(0 0, 42% 0, 52% 100%, 0 100%)",
            }}
          />
        </div>

        {}
        <div className="relative z-10 max-w-[1400px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-[70%] sm:max-w-md md:max-w-xl">
            {}
            <FadeIn direction="right" delay={0.1}>
              <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-tight mb-2 sm:mb-3 md:mb-4">
                {renderFormattedTitle(title)}
              </h1>
            </FadeIn>

            {}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <FadeIn direction="right" delay={0.25}>
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center flex-wrap gap-2 text-xs sm:text-sm md:text-base font-medium"
                >
                  {breadcrumbs.map((item: any, index: any) => {
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
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubBanner;

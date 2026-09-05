import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BannerData, GlobalLawData } from "@/app/data";
import lawData from "@/app/data/lawData-restructured.json";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "@/app/components/ui/animations";

const defaultBannerData = lawData.categories.Veritas.sections.Banner?.variants
  ?.VeritasBanner1?.banner as unknown as BannerData;

interface BannerProps {
  data?: BannerData;
}

export default function Banner({ data = defaultBannerData }: BannerProps) {
  return (
    <section className="relative w-full flex items-center bg-[#0B0E14] overflow-hidden">
      { }
      <div className="absolute inset-0 z-0">
        <Image
          src={data.backgroundImage || "/bannerbg.svg"}
          alt="Lady Justice"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center opacity-80"
          priority
        />
        { }
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/90 to-transparent/30" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 lg:pt-16 pb-2 sm:pb-8 md:pb-20 lg:pb-28 flex flex-col lg:flex-row items-start justify-between">
        { }
        <div className="w-full lg:w-3/5 text-center md:text-left flex flex-col items-center md:items-start">
          { }
          <FadeIn direction="right" delay={0.1} duration={0.6}>
            <div className="inline-flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-6">
              <span className="relative italic font-serif text-[#C5A45D] text-base sm:text-lg lg:text-xl">
                {data.tagline}
                { }
                <span className="absolute -bottom-1.5 -left-1 sm:-left-2 w-[60%] h-[1px] bg-gradient-to-r from-[#C5A45D]/20 via-[#C5A45D] to-transparent" />
              </span>
              { }
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-[#C5A45D] to-[#C5A45D]/20" />
            </div>
          </FadeIn>

          { }
          <FadeIn direction="up" delay={0.2} duration={0.7}>
            <h1 className="font-serif text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[65px] mb-6 leading-[1.2] lg:leading-none text-center md:text-left">
              <span className="block text-white">{data.heading.line1}</span>
              <span className="block text-white">
                {data.heading.line2}{" "}
                <span className="text-[#D4A359]">{data.heading.highlight}</span>
              </span>
            </h1>
          </FadeIn>

          { }
          <FadeIn direction="up" delay={0.35} duration={0.7}>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mb-8 sm:mb-10 leading-relaxed text-center md:text-left">
              {data.subheading}
            </p>
          </FadeIn>

          { }
          <StaggerContainer
            delayChildren={0.45}
            staggerChildren={0.15}
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-10"
          >
            {data.buttons.map((button: any, index: any) => (
              <StaggerItem key={index} className="w-full sm:w-auto">
                <a
                  href={button.href}
                  className={`
                    inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3.5 text-sm sm:text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 rounded-lg text-center
                    ${button.variant === "primary"
                      ? "bg-[#E5B562] text-[#0B0E14] hover:bg-[#D4A359] shadow-md"
                      : "border border-[#D4A359] text-white hover:bg-[#D4A359]/10"
                    }
                  `}
                >
                  <span>{button.text}</span>
                  <ArrowUpRight
                    className={`ml-2 w-4 h-4 shrink-0 ${button.variant === "primary" ? "text-[#0B0E14]" : "text-[#D4A359]"}`}
                  />
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer
            delayChildren={0.6}
            staggerChildren={0.1}
            className="flex items-center divide-x divide-gray-700"
          >
            {data.stats.map((stat: any, index: any) => (
              <StaggerItem
                key={index}
                className="px-3 sm:px-6 first:pl-0 flex flex-col justify-center"
              >
                <span className="text-[#D4A359] text-xl sm:text-3xl mb-1">
                  {stat.value}
                </span>
                <span className="text-gray-400 text-[10px] sm:text-sm md:text-sm tracking-wider uppercase">
                  {stat.label}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <ScaleIn
          delay={0.5}
          duration={0.8}
          initialScale={0.85}
          className="mt-8 lg:mt-0 lg:ml-8 w-full max-w-xs sm:max-w-sm lg:w-[240px] xl:w-[260px] shrink-0"
        >
          <div className="border border-white/30 rounded-3xl p-5 sm:p-6 bg-[#0F171E]/40 backdrop-blur-sm flex flex-col items-center justify-center text-center shadow-2xl hover:border-[#C5A45D]/60 transition-colors duration-500">
            <div className="text-[#9C8052] text-6xl sm:text-7xl font-serif leading-none -mb-4 sm:-mb-5 select-none opacity-90">
              “
            </div>

            <div>
              <p className="text-white text-lg sm:text-xl font-serif italic leading-snug">
                {data.quote.text1 || "Fairness."}
              </p>
              <p className="text-white text-lg sm:text-xl font-serif italic leading-snug">
                {data.quote.text2 || "is not an option,"}
              </p>
              <p className="text-white text-lg sm:text-xl font-serif italic leading-snug">
                {data.quote.text3 || "it's our foundation."}
              </p>
            </div>

            <div className="h-[2px] w-10 sm:w-12 bg-[#C5A45D] mt-4 sm:mt-5" />
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}

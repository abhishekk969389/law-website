import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { BannerData, GlobalLawData } from '@/types/law';
import rawLawData from '@/app/data/lawData.json';

const defaultBannerData: BannerData = (rawLawData as GlobalLawData).banner;

interface BannerProps {
  data?: BannerData;
}

export default function Banner({ data = defaultBannerData }: BannerProps) {
  return (
    <section className="relative w-full flex items-center bg-[#0B0E14] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.backgroundImage || '/bannerbg.svg'}
          alt="Lady Justice"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/90 to-transparent/30" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 lg:pt-16 pb-2 sm:pb-8 md:pb-20 lg:pb-28 flex flex-col lg:flex-row items-start justify-between">

        {/* Left Content */}
        <div className="w-full lg:w-3/5">
          {/* Tagline */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="italic font-serif text-[#C5A45D] text-base sm:text-lg lg:text-xl">
              {data.tagline}
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-[#C5A45D]/50" />
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[65px] mb-6 leading-[1.2] lg:leading-none">
            <span className="block text-white">{data.heading.line1}</span>
            <span className="block text-white">
              {data.heading.line2}{' '}
              <span className="text-[#C5A45D]">{data.heading.highlight}</span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mb-8 sm:mb-10 leading-relaxed">
            {data.subheading}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-10">
            {data.buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`
                  inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-medium transition-all duration-300
                  ${button.variant === 'primary'
                    ? 'bg-[#E3C280] text-[#0B0E14] hover:bg-[#C5A45D] rounded-md'
                    : 'border border-[#C5A45D] text-white hover:bg-[#C5A45D]/10 rounded-md'
                  }
                `}
              >
                {button.text}
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center divide-x divide-gray-700">
            {data.stats.map((stat, index) => (
              <div key={index} className="px-3 sm:px-6 first:pl-0 flex flex-col justify-center">
                <span className="text-[#E3C280] text-xl sm:text-3xl mb-1">
                  {stat.value}
                </span>
                <span className="text-gray-400 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Quote Box */}
        <div className="mt-8 lg:mt-0 lg:ml-8 w-full max-w-xs sm:max-w-sm lg:w-[240px] xl:w-[260px] shrink-0">
          <div className="border border-white/30 rounded-3xl p-5 sm:p-6 bg-[#0F171E]/30 flex flex-col items-center justify-center text-center shadow-xl">
            {/* Top Centered Double Quotes */}
            <div className="text-[#9C8052] text-6xl sm:text-7xl font-serif leading-none -mb-4 sm:-mb-5 select-none opacity-90">
              “
            </div>

            {/* Quote Text */}
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

            {/* Bottom Centered Gold Accent Line */}
            <div className="h-[2px] w-10 sm:w-12 bg-[#C5A45D] mt-4 sm:mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  CheckCircle2,
  Clock,
  MapPin,
  Users,
  Car,
  Wifi,
  Coffee,
  Accessibility,
  HelpCircle,
  Plus,
  Minus,
  LucideIcon,
} from "lucide-react";
import { EventDetailItem } from "@/types/law";
import { FadeIn } from "@/app/components/ui/animations";

interface EventContentProps {
  event: EventDetailItem;
}

const amenityIconMap: Record<string, LucideIcon> = {
  car: Car,
  wifi: Wifi,
  coffee: Coffee,
  accessibility: Accessibility,
};

export function EventContent({ event }: EventContentProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!event) return null;

  const headings = event.headings;
  const faqs = event.faqs && event.faqs.length > 0 ? event.faqs : [];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const mapUrl =
    event.mapUrl && event.mapUrl !== "https://maps.google.com"
      ? event.mapUrl
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${event.venue}, ${event.venueAddress || ""}`
        )}`;

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-[#0B0E14] border border-slate-800/80 p-5 sm:p-7 md:p-8 lg:p-10 shadow-2xl select-none text-left divide-y divide-slate-800/80">
      
      {/* 1. About the Event */}
      {event.aboutText && (
        <FadeIn direction="up" delay={0.15} duration={0.6} className="pb-6 sm:pb-8">
          <div className="flex items-start gap-4 sm:gap-5">
            {/* Left Gold Outlined Icon Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#D4A359]/70 bg-[#070B12] text-[#D4A359] flex items-center justify-center shrink-0 shadow-md">
              <FileText className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="font-serif text-xl sm:text-2xl text-white font-medium mb-3">
                {headings?.about ? (
                  <>
                    <span>{headings.about.line1}</span>{" "}
                    <span className="font-normal text-slate-300">{headings.about.highlight}</span>
                  </>
                ) : (
                  <span>About the Event</span>
                )}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                {event.aboutText}
              </p>
            </div>
          </div>
        </FadeIn>
      )}

      {/* 2. Key Takeaways */}
      {event.takeaways && event.takeaways.length > 0 && (
        <FadeIn direction="up" delay={0.2} duration={0.6} className="py-6 sm:py-8">
          <div className="flex items-start gap-4 sm:gap-5">
            {/* Left Gold Outlined Icon Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#D4A359]/70 bg-[#070B12] text-[#D4A359] flex items-center justify-center shrink-0 shadow-md">
              <CheckCircle2 className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="font-serif text-xl sm:text-2xl text-white font-medium mb-5">
                {headings?.takeaways || "Key Takeaways"}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {event.takeaways.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 group">
                    <div className="w-5 h-5 rounded-full border border-[#D4A359]/80 bg-[#070B12] text-[#D4A359] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-300 text-xs sm:text-sm leading-snug font-light group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      {/* 3. Agenda / Schedule */}
      {event.timeline && event.timeline.length > 0 && (
        <FadeIn direction="up" delay={0.25} duration={0.6} className="py-6 sm:py-8">
          <div className="flex items-start gap-4 sm:gap-5">
            {/* Left Gold Outlined Icon Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#D4A359]/70 bg-[#070B12] text-[#D4A359] flex items-center justify-center shrink-0 shadow-md">
              <Clock className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="font-serif text-xl sm:text-2xl text-white font-medium mb-6">
                {headings?.agenda || "Agenda / Schedule"}
              </h2>

              {/* Horizontal Timeline */}
              <div className="overflow-x-auto pb-2 pt-1 scrollbar-thin">
                <div className="min-w-[720px]">
                  {/* Top Text Columns with vertical separators */}
                  <div
                    className="grid divide-x divide-slate-800/90"
                    style={{ gridTemplateColumns: `repeat(${event.timeline.length}, minmax(0, 1fr))` }}
                  >
                    {event.timeline.map((item, idx) => (
                      <div
                        key={idx}
                        className={`text-left ${idx === 0 ? "pr-4" : "px-4"}`}
                      >
                        {/* Time in Gold */}
                        <div className="text-[11px] sm:text-xs font-semibold text-[#D4A359] uppercase tracking-wide mb-1.5 whitespace-nowrap">
                          {item.time}
                        </div>

                        {/* Title in White */}
                        <p className="text-slate-200 text-xs sm:text-[13px] font-medium leading-snug min-h-[36px] line-clamp-2">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Connecting Gold Line with Dots */}
                  <div className="relative w-full mt-5">
                    {/* Continuous Gold Line */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 h-[1.5px] bg-[#D4A359]/60" />
                    <div
                      className="grid relative z-10"
                      style={{ gridTemplateColumns: `repeat(${event.timeline.length}, minmax(0, 1fr))` }}
                    >
                      {event.timeline.map((_, idx) => (
                        <div key={idx} className="flex justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#D4A359] border border-[#070B12] shadow-[0_0_8px_rgba(212,163,89,0.7)]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      {/* 4. Venue Details */}
      <FadeIn direction="up" delay={0.3} duration={0.6} className="py-6 sm:py-8">
        <div className="flex items-start gap-4 sm:gap-5">
          {/* Left Gold Outlined Icon Badge */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#D4A359]/70 bg-[#070B12] text-[#D4A359] flex items-center justify-center shrink-0 shadow-md">
            <MapPin className="w-5 h-5 stroke-[1.8]" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h2 className="font-serif text-xl sm:text-2xl text-white font-medium mb-5">
              {headings?.venue || "Venue Details"}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left: Venue Image & Info */}
              <div className="lg:col-span-6 xl:col-span-6 flex items-center gap-4 sm:gap-5">
                <div className="relative w-28 h-20 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0 shadow-md">
                  <Image
                    src={event.venueImage || event.image || "/about.svg"}
                    alt={event.venue}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                    {event.venue}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light mb-3">
                    {event.venueAddress}
                  </p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D4A359]/60 text-[#D4A359] hover:bg-[#D4A359] hover:text-[#0A0E17] text-xs font-semibold tracking-wider transition-all shadow-sm"
                  >
                    <span>{headings?.mapButtonText || "View on Map"}</span>
                    <MapPin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right: Amenities with Vertical Dividers */}
              {event.amenities && event.amenities.length > 0 && (
                <div className="lg:col-span-6 xl:col-span-6 lg:border-l lg:border-slate-800/90 lg:pl-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-800/90">
                    {event.amenities.map((amenity, idx) => {
                      const IconComp = (amenity.icon && amenityIconMap[amenity.icon]) || Coffee;

                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-center text-center px-3 py-2"
                        >
                          <IconComp className="w-8 h-8 sm:w-9 sm:h-9 text-[#D4A359] stroke-[1.8] mb-2.5 shrink-0" />
                          <span className="text-xs sm:text-[13px] text-slate-300 font-normal leading-snug">
                            {amenity.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 5. Who Should Attend */}
      {event.attendeesText && (
        <FadeIn direction="up" delay={0.35} duration={0.6} className="py-6 sm:py-8">
          <div className="flex items-start gap-4 sm:gap-5">
            {/* Left Gold Outlined Icon Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#D4A359]/70 bg-[#070B12] text-[#D4A359] flex items-center justify-center shrink-0 shadow-md">
              <Users className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="font-serif text-xl sm:text-2xl text-white font-medium mb-3">
                {headings?.attendees || "Who Should Attend"}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                {event.attendeesText}
              </p>
            </div>
          </div>
        </FadeIn>
      )}

      {/* 6. FAQs */}
      {faqs.length > 0 && (
        <FadeIn direction="up" delay={0.4} duration={0.6} className="pt-6 sm:pt-8">
          <div className="flex items-start gap-4 sm:gap-5">
            {/* Left Gold Outlined Icon Badge */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#D4A359]/70 bg-[#070B12] text-[#D4A359] flex items-center justify-center shrink-0 shadow-md">
              <HelpCircle className="w-5 h-5 stroke-[1.8]" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="font-serif text-xl sm:text-2xl text-white font-medium mb-5">
                {headings?.faqs || "FAQs"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;

                  return (
                    <div
                      key={idx}
                      className={`rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                        isOpen
                          ? "bg-[#070B12] border-[#D4A359]/50 shadow-md"
                          : "bg-[#070B12]/70 border-slate-800/90 hover:border-slate-700"
                      }`}
                      onClick={() => toggleFaq(idx)}
                    >
                      {/* Question Header */}
                      <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
                        <h3 className="text-white text-xs sm:text-sm font-medium leading-snug">
                          {faq.question}
                        </h3>
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#D4A359] shrink-0">
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </div>

                      {/* Expandable Answer */}
                      {isOpen && (
                        <div className="px-3.5 sm:px-4 pb-3.5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed font-light border-t border-slate-800/60 animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      )}

    </div>
  );
}

export default EventContent;

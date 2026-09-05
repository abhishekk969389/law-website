"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  User,
  Ticket,
  Globe,
  Languages,
  ChevronRight,
  CalendarPlus,
} from "lucide-react";
import { EventDetailItem } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";

interface EventHeroProps {
  event: EventDetailItem;
}

export function EventHero({ event }: EventHeroProps) {
  if (!event) return null;

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent(
      `${event.venue}, ${event.venueAddress}`,
    );
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <FadeIn
      direction="up"
      delay={0.1}
      duration={0.6}
      className="rounded-2xl sm:rounded-3xl bg-[#0B0E14] border border-slate-800/80 p-5 sm:p-7 lg:p-8 shadow-2xl mb-8 sm:mb-10 text-left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/90 shadow-xl">
          <Image
            src={event.image || "/about.svg"}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17]/60 via-transparent to-transparent pointer-events-none" />

          {event.badge && (
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#0A0E17]/90 backdrop-blur border border-[#D4A359]/60 text-[#D4A359] text-xs font-bold uppercase tracking-wider rounded-md shadow-md">
              {event.badge}
            </div>
          )}

          {event.dateBox && (
            <div className="absolute bottom-4 left-4 z-10 w-16 h-20 bg-[#070B12]/95 backdrop-blur border border-[#D4A359]/70 rounded-xl flex flex-col items-center justify-center text-center p-1.5 shadow-2xl">
              <span className="text-2xl font-bold text-white font-serif leading-none">
                {event.dateBox.day}
              </span>
              <span className="text-xs font-bold text-[#D4A359] uppercase tracking-wider leading-tight mt-1">
                {event.dateBox.month}
              </span>
              <span className="text-[10px] font-semibold text-slate-400 leading-none mt-0.5">
                {event.dateBox.year}
              </span>
            </div>
          )}
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug tracking-tight mb-2.5">
              {event.title}
            </h1>

            <div className="w-9 sm:w-10 h-[2px] bg-[#D4A359] mb-4" />

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-6">
              {event.description}
            </p>

            <div className="rounded-2xl bg-[#070B12]/80 border border-slate-800/80 p-5 sm:p-6 space-y-4 mb-6 text-sm">
              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-4 sm:w-36 shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A359] shrink-0" />
                  <span className="text-slate-300 font-medium text-xs sm:text-sm">
                    {event.labels?.dateTime || ""}
                  </span>
                </div>
                <span className="text-slate-200 font-normal flex-1 pl-6 sm:pl-0 text-sm">
                  {event.dateTime}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-4 sm:w-36 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A359] shrink-0" />
                  <span className="text-slate-300 font-medium text-xs sm:text-sm">
                    {event.labels?.venue || "Venue"}
                  </span>
                </div>
                <div className="flex-1 pl-6 sm:pl-0 text-sm">
                  <span className="text-slate-200 font-normal">
                    {event.venue}
                  </span>
                  {event.venueAddress && (
                    <div className="text-slate-400 text-xs sm:text-sm font-light mt-0.5">
                      {event.venueAddress}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-4 sm:w-36 shrink-0">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A359] shrink-0" />
                  <span className="text-slate-300 font-medium text-xs sm:text-sm">
                    {event.labels?.organizer || ""}
                  </span>
                </div>
                <span className="text-slate-200 font-normal flex-1 pl-6 sm:pl-0 text-sm">
                  {event.organizer}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-4 sm:w-36 shrink-0">
                  <Ticket className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A359] shrink-0" />
                  <span className="text-slate-300 font-medium text-xs sm:text-sm">
                    {event.labels?.ticketPrice || "Ticket Price"}
                  </span>
                </div>
                <div className="flex-1 flex items-center gap-2.5 flex-wrap pl-6 sm:pl-0 text-sm">
                  <span className="text-slate-200 font-normal">
                    {event.ticketPrice}
                  </span>
                  {event.priceBadge && (
                    <span className="border border-[#D4A359]/70 text-[#D4A359] text-[10px] sm:text-xs font-normal px-2 py-0.5 rounded-md bg-[#D4A359]/5">
                      {event.priceBadge}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-4 sm:w-36 shrink-0">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A359] shrink-0" />
                  <span className="text-slate-300 font-medium text-xs sm:text-sm">
                    {event.labels?.eventType || "Event Type"}
                  </span>
                </div>
                <span className="text-slate-200 font-normal flex-1 pl-6 sm:pl-0 text-sm">
                  {event.eventType}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-4 sm:w-36 shrink-0">
                  <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4A359] shrink-0" />
                  <span className="text-slate-300 font-medium text-xs sm:text-sm">
                    {event.labels?.language || "Language"}
                  </span>
                </div>
                <span className="text-slate-200 font-normal flex-1 pl-6 sm:pl-0 text-sm">
                  {event.language}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {event.registerText && (
              <Link
                href={event.registerLink || "/contactus"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#D4A359] to-[#E3C280] text-[#0A0E17] font-semibold text-sm hover:opacity-95 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{event.registerText}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}

            {event.calendarText && (
              <button
                onClick={handleAddToCalendar}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-slate-700 hover:border-[#D4A359] bg-[#0A0E17]/80 hover:bg-[#0A0E17] text-white font-medium text-sm transition-all shadow-md"
              >
                <span>{event.calendarText}</span>
                <CalendarPlus className="w-4 h-4 text-[#D4A359]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default EventHero;

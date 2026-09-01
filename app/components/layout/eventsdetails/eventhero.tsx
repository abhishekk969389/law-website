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
import { EventDetailItem } from "@/types/law";

interface EventHeroProps {
  event: EventDetailItem;
}

export function EventHero({ event }: EventHeroProps) {
  if (!event) return null;

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent(`${event.venue}, ${event.venueAddress}`);
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-[#0B0E14] border border-slate-800/80 p-5 sm:p-7 lg:p-8 shadow-2xl mb-8 sm:mb-10 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* Left Column: Image & Badges */}
        <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/90 shadow-xl">
          <Image
            src={event.image || "/about.svg"}
            alt={event.title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17]/60 via-transparent to-transparent pointer-events-none" />

          {/* Top-Left Category Badge */}
          {event.badge && (
            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#0A0E17]/90 backdrop-blur border border-[#D4A359]/60 text-[#D4A359] text-xs font-bold uppercase tracking-wider rounded-md shadow-md">
              {event.badge}
            </div>
          )}

          {/* Bottom-Left Date Box Badge */}
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

        {/* Right Column: Title, Overview, Details List & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Event Title */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug tracking-tight mb-2.5">
              {event.title}
            </h1>

            {/* Gold Accent Line Divider */}
            <div className="w-9 sm:w-10 h-[2px] bg-[#D4A359] mb-4" />

            {/* Short Description */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-6">
              {event.description}
            </p>

            {/* Meta Details List Card matching screenshot */}
            <div className="rounded-2xl bg-[#070B12]/80 border border-slate-800/80 p-5 sm:p-6 space-y-4 mb-6 text-sm">
              {/* 1. Date & Time */}
              <div className="flex items-start gap-3 sm:gap-4">
                <Calendar className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium w-28 sm:w-32 shrink-0">
                  {event.labels?.dateTime || ""}
                </span>
                <span className="text-slate-200 font-normal flex-1">{event.dateTime}</span>
              </div>

              {/* 2. Venue */}
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium w-28 sm:w-32 shrink-0">
                  {event.labels?.venue || "Venue"}
                </span>
                <div className="flex-1">
                  <span className="text-slate-200 font-normal">{event.venue}</span>
                  {event.venueAddress && (
                    <div className="text-slate-400 text-xs sm:text-sm font-light mt-0.5">
                      {event.venueAddress}
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Organizer */}
              <div className="flex items-start gap-3 sm:gap-4">
                <User className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium w-28 sm:w-32 shrink-0">
                  {event.labels?.organizer || ""}
                </span>
                <span className="text-slate-200 font-normal flex-1">{event.organizer}</span>
              </div>

              {/* 4. Ticket Price */}
              <div className="flex items-center gap-3 sm:gap-4">
                <Ticket className="w-5 h-5 text-[#D4A359] shrink-0" />
                <span className="text-slate-300 font-medium w-28 sm:w-32 shrink-0">
                  {event.labels?.ticketPrice || "Ticket Price"}
                </span>
                <div className="flex-1 flex items-center gap-2.5 flex-wrap">
                  <span className="text-slate-200 font-normal">{event.ticketPrice}</span>
                  {event.priceBadge && (
                    <span className="border border-[#D4A359]/70 text-[#D4A359] text-xs font-normal px-2.5 py-0.5 rounded-md bg-[#D4A359]/5">
                      {event.priceBadge}
                    </span>
                  )}
                </div>
              </div>

              {/* 5. Event Type */}
              <div className="flex items-center gap-3 sm:gap-4">
                <Globe className="w-5 h-5 text-[#D4A359] shrink-0" />
                <span className="text-slate-300 font-medium w-28 sm:w-32 shrink-0">
                  {event.labels?.eventType || "Event Type"}
                </span>
                <span className="text-slate-200 font-normal flex-1">{event.eventType}</span>
              </div>

              {/* 6. Language */}
              <div className="flex items-center gap-3 sm:gap-4">
                <Languages className="w-5 h-5 text-[#D4A359] shrink-0" />
                <span className="text-slate-300 font-medium w-28 sm:w-32 shrink-0">
                  {event.labels?.language || "Language"}
                </span>
                <span className="text-slate-200 font-normal flex-1">{event.language}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {/* Register Now Button */}
            {event.registerText && (
              <Link
                href={event.registerLink || "/contactus"}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-[#D4A359] to-[#E3C280] text-[#0A0E17] font-semibold text-sm hover:opacity-95 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{event.registerText}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}

            {/* Add to Calendar Button */}
            {event.calendarText && (
              <button
                onClick={handleAddToCalendar}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-slate-700 hover:border-[#D4A359] bg-[#0A0E17]/80 hover:bg-[#0A0E17] text-white font-medium text-sm transition-all shadow-md"
              >
                <span>{event.calendarText}</span>
                <CalendarPlus className="w-4 h-4 text-[#D4A359]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHero;

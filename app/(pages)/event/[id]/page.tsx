import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import EventHero from "@/app/components/layout/eventsdetails/eventhero";
import EventContent from "@/app/components/layout/eventsdetails/eventcontent";
import lawData from "@/app/data/lawData-restructured.json";

import { GlobalLawData, EventDetailItem } from "@/types/law";
import { notFound } from "next/navigation";
import { Metadata } from "next";

function getEventByIdOrSlug(id: string): EventDetailItem | undefined {
  const globalData = ({}) as unknown as GlobalLawData;
  const eventDetails = (lawData.categories.Veritas.sections.EventDetail?.variants?.VeritasEventDetail1?.eventDetails || []) as EventDetailItem[] | undefined;

  if (!id || !eventDetails || !Array.isArray(eventDetails)) return undefined;
  const cleanId = id.trim().toLowerCase();

  return eventDetails.find(
    (item) =>
      item.id.toLowerCase() === cleanId ||
      (item.slug && item.slug.toLowerCase() === cleanId)
  );
}

function getAllEventIds(): string[] {
  const globalData = ({}) as unknown as GlobalLawData;
  const eventDetails = (lawData.categories.Veritas.sections.EventDetail?.variants?.VeritasEventDetail1?.eventDetails || []) as EventDetailItem[] | undefined;

  if (!eventDetails || !Array.isArray(eventDetails)) return [];

  const paramsList: string[] = [];
  eventDetails.forEach((item) => {
    if (item.id) paramsList.push(item.id);
    if (item.slug && item.slug !== item.id) paramsList.push(item.slug);
  });

  return Array.from(new Set(paramsList));
}

export async function generateStaticParams() {
  const ids = getAllEventIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const event = getEventByIdOrSlug(resolvedParams.id);

  if (!event) {
    return {
      title: "Event Details | Veritas Law Partners",
      description: "Join upcoming legal seminars, conferences, and workshops.",
    };
  }

  return {
    title: `${event.title} - Events | Veritas Law Partners`,
    description:
      event.description ||
      event.aboutText?.slice(0, 160) ||
      `${event.title} organized by ${event.organizer}.`,
  };
}

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const resolvedParams = await params;
  const event = getEventByIdOrSlug(resolvedParams.id);

  if (!event) {
    notFound();
  }

  const globalData = ({}) as unknown as GlobalLawData;
  const baseSubBanner = lawData.categories.Veritas.sections.PageBanner?.variants?.VeritasPageBanner1?.eventSubBanner;

  const words = (event.title || "").trim().split(/\s+/);
  const shortTitle = event.bannerTitle || event.shortTitle || (words.length > 3 ? words.slice(0, 3).join(" ") : event.title);

  const subBannerData = {
    title: shortTitle,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Events & Webinars", href: "/event" },
      { label: shortTitle, isActive: true },
    ],
    backgroundImage: baseSubBanner?.backgroundImage || "/subbanner.svg",
  };

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white">
      <SubBanner data={subBannerData} />
      <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 mb-12 md:mb-17 lg:mb-20 select-none px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-10">
          {/* 1. Top Hero Card with Register Modal */}
          <EventHero event={event} />

          {/* 2. Unified Event Sections & FAQs Card */}
          <EventContent event={event} />
        </div>
      </section>
    </main>
  );
}

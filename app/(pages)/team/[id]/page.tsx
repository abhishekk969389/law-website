import React from "react";
import SubBanner from "@/app/components/ui/subbanner";
import TeamDetailsSec from "@/app/components/layout/teamdetails/teamdetailssec";
import TeamAbout from "@/app/components/layout/teamdetails/teamabout";
import Activity from "@/app/components/layout/teamdetails/activity";
import { getSectionData, getDetailItem, resolvePageData, getAllItems } from "@/app/lib/getSiteData";

import { GlobalLawData, TeamDetailItem } from "@/types/law";
import { notFound } from "next/navigation";
import { Metadata } from "next";

function getTeamMemberById(id: string): TeamDetailItem | undefined {
  
  const teamDetails = (getSectionData('TeamDetail', 'VeritasTeamDetail1')?.teamDetails || []) as TeamDetailItem[] | undefined;

  if (!teamDetails || !Array.isArray(teamDetails) || teamDetails.length === 0) {
    return undefined;
  }

  const cleanId = id.trim().toLowerCase();

  let found = teamDetails.find(
    (item) =>
      item.id === id ||
      item.id.toLowerCase() === cleanId ||
      (item.slug && item.slug.toLowerCase() === cleanId)
  );

  if (!found) {
    const num = parseInt(cleanId, 10);
    if (!isNaN(num) && num > 0 && num <= teamDetails.length) {
      found = teamDetails[num - 1];
    }
  }

  return found;
}

function getAllTeamMemberIds(): string[] {
  
  const teamDetails = (getSectionData('TeamDetail', 'VeritasTeamDetail1')?.teamDetails || []) as TeamDetailItem[] | undefined;

  if (!teamDetails || !Array.isArray(teamDetails)) return ["1", "2", "3", "4", "5", "6", "7", "8"];

  const paramsList: string[] = [];
  teamDetails.forEach((item) => {
    if (item.id) paramsList.push(item.id);
    if (item.slug) paramsList.push(item.slug);
  });

  return Array.from(new Set(paramsList));
}

export async function generateStaticParams() {
  const ids = getAllTeamMemberIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const member = getTeamMemberById(resolvedParams.id);

  if (!member) {
    return {
      title: "Team Member Details | Veritas Law Partners",
      description: "Attorney and legal team details.",
    };
  }

  return {
    title: `${member.name} - ${member.role} | Veritas Law Partners`,
    description: member.shortBio || `${member.name} - ${member.role} at Veritas Law Partners.`,
  };
}

export default async function TeamMemberDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = resolvePageData('team-detail');
  const resolvedParams = await params;
  const member = getTeamMemberById(resolvedParams.id);

  if (!member) {
    notFound();
  }

  
  const baseSubBanner = getSectionData('PageBanner', 'VeritasPageBanner1')?.teamDetailsSubBanner || data.PageBanner?.teamSubBanner;

  const subBannerData = {
    title: member.name,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Our Team", href: "/team" },
      { label: member.name, isActive: true },
    ],
    backgroundImage: baseSubBanner?.backgroundImage || "/subbanner.svg",
  };

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={subBannerData} />
      <TeamDetailsSec member={member} />
      <TeamAbout member={member} />
      <Activity member={member} />
    </main>
  );
}


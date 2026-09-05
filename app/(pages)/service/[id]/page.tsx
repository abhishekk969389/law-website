import SubBanner from "@/app/components/ui/subbanner";
import ServiceDetailsSec from "@/app/components/layout/servicedetails/servicedetailssec";
import lawData from "@/app/data/lawData-restructured.json";

import {
  GlobalLawData,
  ServiceDetailItem,
  ServiceSidebarContact,
  ServiceSidebarForm,
} from "@/app/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const defaultSidebarContact: ServiceSidebarContact = {
  title: "Contact Info",
  phone: {
    label: "Contact Phone",
    value: "+012 (345) 56 998",
    href: "tel:+01234556998",
  },
  email: {
    label: "Contact Mail",
    value: "support@gmail.com",
    href: "mailto:support@gmail.com",
  },
  location: { label: "Office Location", value: "59 Main Street, USA" },
};

const defaultSidebarForm: ServiceSidebarForm = {
  title: "Get In Touch",
  namePlaceholder: "Your Full Name",
  emailPlaceholder: "Email Address",
  messagePlaceholder: "Additional Message",
  buttonText: "Get In Touch",
};

function getServiceById(id: string): ServiceDetailItem | undefined {
  const serviceDetails = (lawData.categories.Veritas.sections.ServiceDetail
    ?.variants?.VeritasServiceDetail1?.serviceDetails || []) as
    ServiceDetailItem[] | undefined;

  if (
    !serviceDetails ||
    !Array.isArray(serviceDetails) ||
    serviceDetails.length === 0
  ) {
    return undefined;
  }

  const cleanId = id.trim().toLowerCase();

  let found = serviceDetails.find(
    (item) =>
      item.id === id ||
      item.id.toLowerCase() === cleanId ||
      (item.slug && item.slug.toLowerCase() === cleanId),
  );

  if (!found) {
    const num = parseInt(cleanId, 10);
    if (!isNaN(num) && num > 0 && num <= serviceDetails.length) {
      found = serviceDetails[num - 1];
    }
  }

  const target = found || serviceDetails[0];

  return {
    ...target,
    sidebarContact: (target as any).sidebarContact || defaultSidebarContact,
    sidebarForm: (target as any).sidebarForm || defaultSidebarForm,
  };
}

function getAllServiceIds(): string[] {
  const serviceDetails = (lawData.categories.Veritas.sections.ServiceDetail
    ?.variants?.VeritasServiceDetail1?.serviceDetails || []) as
    ServiceDetailItem[] | undefined;
  if (!serviceDetails || !Array.isArray(serviceDetails))
    return ["1", "2", "3", "4", "5", "6", "7", "8"];
  const paramsList: string[] = [];
  serviceDetails.forEach((item) => {
    if (item.slug) paramsList.push(item.slug);
    if (item.id) paramsList.push(item.id);
  });
  return Array.from(new Set(paramsList));
}

export async function generateStaticParams() {
  const ids = getAllServiceIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceById(resolvedParams.id);
  const title = service
    ? `${service.title.line1} ${service.title.line2} | Veritas Law Partners`
    : "Service Details | Veritas Law Partners";

  return {
    title,
    description: service?.subtitle || "Legal service details and consultation.",
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const service = getServiceById(resolvedParams.id);

  if (!service) {
    notFound();
  }

  const subBannerData = {
    title: `${service.title.line1} ${service.title.line2}`,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Our Services", href: "/service" },
      {
        label: `${service.title.line1} ${service.title.line2}`,
        isActive: true,
      },
    ],
    backgroundImage: "/subbanner.svg",
  };

  return (
    <main className="min-h-screen bg-[#0B0E14] text-white pb-12 sm:pb-16 lg:pb-20">
      <SubBanner data={subBannerData} />
      <ServiceDetailsSec service={service} />
    </main>
  );
}

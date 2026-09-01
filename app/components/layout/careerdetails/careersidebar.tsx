"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Lock,
  UploadCloud,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { CareerDetailItem, CareerSidebarData } from "@/types/law";

interface CareerSidebarProps {
  career: CareerDetailItem;
  sidebarData?: CareerSidebarData;
}

const overviewIconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  "map-pin": MapPin,
  "book-open": BookOpen,
  clock: Clock,
  calendar: Calendar,
};

export function CareerSidebar({ career, sidebarData }: CareerSidebarProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const data = sidebarData || career.sidebarData;
  const applyForm = data?.applyForm;

  const defaultOverviewFields = [
    { label: "Job Title", value: career.title, icon: "briefcase" },
    { label: "Location", value: career.location, icon: "map-pin" },
    { label: "Department", value: career.department, icon: "book-open" },
    { label: "Employment Type", value: career.employmentType, icon: "clock" },
    { label: "Experience", value: career.experience, icon: "calendar" },
  ];

  const overviewFields = data?.overviewFields || defaultOverviewFields;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFullName("");
      setEmail("");
      setPhone("");
      setFileName(null);
    }, 4000);
  };

  return (
    <aside className="space-y-6 sticky top-24 select-none text-left">
      
      {/* 1. Job Overview Card */}
      <div className="rounded-2xl bg-[#0A0E17] border border-slate-800/80 p-5 sm:p-6 shadow-xl space-y-4">
        <h3 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight mb-3">
          {data?.overviewHeading || "Job Overview"}
        </h3>

        <div className="space-y-4">
          {overviewFields.map((field, idx) => {
            const IconComp = (field.icon && overviewIconMap[field.icon]) || Briefcase;

            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#070B12] border border-[#D4A359]/50 text-[#D4A359] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <IconComp className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs md:text-[18px] text-slate-400 font-medium">
                    {field.label}
                  </div>
                  <div className="text-xs sm:text-sm md:text-[16px] text-white font-normal mt-0.5">
                    {field.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Apply for This Position Card */}
      <div className="rounded-2xl bg-[#0A0E17] border border-slate-800/80 p-5 sm:p-6 shadow-xl space-y-4">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight mb-1.5">
            {data?.applyHeading || "Apply for This Position"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            {data?.applySubtitle || "Share your details and resume and our team will get in touch."}
          </p>
        </div>

        {isSubmitted ? (
          <div className="rounded-xl border border-[#D4A359]/60 bg-[#D4A359]/10 p-5 text-center space-y-2 animate-in fade-in duration-300">
            <CheckCircle className="w-8 h-8 text-[#D4A359] mx-auto" />
            <h4 className="font-semibold text-white text-sm sm:text-base">
              Application Submitted!
            </h4>
            <p className="text-xs text-slate-300 font-light">
              Thank you for applying. Our talent acquisition team will review your profile.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
            {/* Full Name */}
            <div>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={applyForm?.fullNamePlaceholder || "Full Name"}
                className="w-full rounded-xl border border-slate-800/90 bg-[#070B12] px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-[#D4A359] focus:outline-none transition-colors"
              />
            </div>

            {/* Email Address */}
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={applyForm?.emailPlaceholder || "Email Address"}
                className="w-full rounded-xl border border-slate-800/90 bg-[#070B12] px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-[#D4A359] focus:outline-none transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={applyForm?.phonePlaceholder || "Phone Number"}
                className="w-full rounded-xl border border-slate-800/90 bg-[#070B12] px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-[#D4A359] focus:outline-none transition-colors"
              />
            </div>

            {/* Upload Resume File Input */}
            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-medium block">
                {applyForm?.resumeLabel || "Upload Resume"}
              </label>
              <div className="relative rounded-xl border border-slate-800/90 bg-[#070B12] p-2.5 flex items-center justify-between gap-2 overflow-hidden">
                <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#D4A359]/70 text-[#D4A359] hover:bg-[#D4A359] hover:text-black text-xs font-semibold transition-all shrink-0">
                  <UploadCloud className="w-3.5 h-3.5" />
                  <span>Choose File</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <span className="text-xs text-slate-400 truncate flex-1">
                  {fileName || "No file chosen"}
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                {applyForm?.resumeNote || "PDF, DOC, DOCX (Max 5MB)"}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-[#D4A359] to-[#E3C280] text-[#0A0E17] font-semibold text-xs sm:text-sm hover:opacity-95 transition-all shadow-lg hover:scale-[1.01] active:scale-[0.99] cursor-pointer mt-2"
            >
              <span>{applyForm?.buttonText || "Submit Application"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Security Note */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
              <Lock className="w-3 h-3 text-[#D4A359] shrink-0" />
              <span>
                {applyForm?.securityText || "Your information is secure and will only be used for this application."}
              </span>
            </div>
          </form>
        )}
      </div>

      {/* 3. Explore More Opportunities Card */}
      <div className="rounded-2xl bg-[#0A0E17] border border-slate-800/80 p-5 sm:p-6 shadow-xl space-y-3.5">
        <h3 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight">
          {data?.exploreHeading || "Explore More Opportunities"}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
          {data?.exploreSubtitle || "View all open positions across departments."}
        </p>
        <div className="pt-1">
          <Link
            href={data?.exploreButtonLink || "/career"}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-[#D4A359]/80 text-[#D4A359] hover:bg-[#D4A359] hover:text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group"
          >
            <span>{data?.exploreButtonText || "View All Openings"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </aside>
  );
}

export default CareerSidebar;

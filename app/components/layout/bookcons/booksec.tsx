"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Scale,
  UserCheck,
  ShieldCheck,
  Calendar,
  FileText,
  Headphones,
  Lock,
  ArrowRight,
} from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { BookSectionData, GlobalLawData } from "@/types/law";
import { FadeIn, StaggerContainer, StaggerItem } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultBookSectionData = lawData.categories.Veritas.sections.Consultation?.variants?.VeritasConsultation1?.bookSection;

export interface BooksecProps {
  data?: BookSectionData;
}

export function Booksec({ data = defaultBookSectionData }: BooksecProps) {
  if (!data) return null;

  const {
    title,
    subtitle,
    features,
    assistance,
    formTitle,
    formSubtitle,
    practiceAreas,
    consultationTypes,
    preferredTimes,
  } = data;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceArea: "",
    consultationType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    agreeTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert("Please agree to the Privacy Policy and Terms of Service.");
      return;
    }
    alert("Thank you! Your consultation booking request has been submitted.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      practiceArea: "",
      consultationType: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
      agreeTerms: false,
    });
  };

  const getFeatureIcon = (iconName?: string) => {
    switch (iconName?.toLowerCase()) {
      case "shield":
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A359]" />;
      case "calendar":
        return <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A359]" />;
      case "file":
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A359]" />;
      case "user":
      default:
        return <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A359]" />;
    }
  };

  return (
    <section className="relative w-full bg-[#0B0E14] text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Single Unified Outer Card Container */}
        <FadeIn direction="up" delay={0.1} className="group relative rounded-3xl border border-slate-800/80 bg-[#070A11] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden hover:border-[#D4A359]/30 transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch relative z-10">
            
            {/* Left Column: Title, Subtitle, 4 Feature Points, Assistance Card */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-7">
              
              {/* Top Gold Scale Icon Badge */}
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full border border-[#D4A359]/60 flex items-center justify-center bg-[#05080E] text-[#D4A359] mb-5 shadow-[0_0_12px_rgba(212,163,89,0.15)]">
                <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4A359]" />
              </div>

              {/* Main Title */}
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[50px] leading-[1.15] tracking-tight mb-4">
                  {title || "Book a Consultation"}
                </h2>

                {/* Gold Accent Underline */}
                <div className="w-14 h-[2px] bg-[#D4A359] mb-4 relative flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#D4A359] rotate-45 absolute left-1/2 -translate-x-1/2" />
                </div>

                {/* Subtitle */}
                {subtitle && (
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* 4 Feature Items List */}
              <div className="space-y-6 sm:space-y-7">
                {features &&
                  features.map((item) => (
                    <div key={item.id} className="flex items-start gap-4 sm:gap-4.5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4A359]/65 flex items-center justify-center bg-[#05080E] text-[#D4A359] shrink-0 shadow-[0_0_12px_rgba(212,163,89,0.15)]">
                        {getFeatureIcon(item.icon)}
                      </div>
                      <div className="pt-0.5">
                        <h4 className="font-serif font-semibold text-white text-base sm:text-lg lg:text-xl mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Immediate Assistance Card */}
              {assistance && (
                <div className="rounded-2xl border border-slate-800/80 bg-[#05080E] p-5 sm:p-6 flex items-center gap-4 md:mt-20 shadow-xl">
                  <div className="w-12 h-12 rounded-full border border-[#D4A359]/60 flex items-center justify-center bg-[#090D16] text-[#D4A359] shrink-0">
                    <Headphones className="w-6 h-6 text-[#D4A359]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm sm:text-base mb-0.5">
                      {assistance.title || "Need Immediate Assistance?"}
                    </h5>
                    <p className="text-slate-400 text-xs sm:text-sm mb-1">
                      {assistance.description || "Our team is available to help you right away."}
                    </p>
                    {assistance.phone && (
                      <a
                        href={`tel:${assistance.phone.replace(/\s+/g, "")}`}
                        className="text-[#D4A359] font-bold text-base sm:text-lg hover:underline transition-colors block"
                      >
                        {assistance.phone}
                      </a>
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Detailed Consultation Booking Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-800/60 bg-[#0A0E17]/80 p-6 sm:p-8 lg:p-10 shadow-inner">
                
                {/* Form Title & Subtitle */}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-1">
                    {formTitle || "Fill in your details"}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    {formSubtitle || "Our team will get back to you shortly."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5">
                        First Name <span className="text-[#D4A359]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your first name"
                        className="w-full rounded-lg border border-slate-800 bg-[#060911] px-4 py-3 text-white placeholder-slate-500 text-sm focus:border-[#D4A359]/70 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5">
                        Last Name <span className="text-[#D4A359]">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your last name"
                        className="w-full rounded-lg border border-slate-800 bg-[#060911] px-4 py-3 text-white placeholder-slate-500 text-sm focus:border-[#D4A359]/70 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-[#D4A359]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                        className="w-full rounded-lg border border-slate-800 bg-[#060911] px-4 py-3 text-white placeholder-slate-500 text-sm focus:border-[#D4A359]/70 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5">
                        Phone Number <span className="text-[#D4A359]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone number"
                        className="w-full rounded-lg border border-slate-800 bg-[#060911] px-4 py-3 text-white placeholder-slate-500 text-sm focus:border-[#D4A359]/70 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Practice Area */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5">
                      Practice Area <span className="text-[#D4A359]">*</span>
                    </label>
                    <select
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-800 bg-[#060911] px-4 py-3 text-white text-sm focus:border-[#D4A359]/70 outline-none transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#060911] text-slate-400">
                        Select practice area
                      </option>
                      {practiceAreas &&
                        practiceAreas.map((area, idx) => (
                          <option key={idx} value={area} className="bg-[#060911] text-white">
                            {area}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Row 4: Consultation Type */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5">
                      Consultation Type <span className="text-[#D4A359]">*</span>
                    </label>
                    <select
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-800 bg-[#060911] px-4 py-3 text-white text-sm focus:border-[#D4A359]/70 outline-none transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#060911] text-slate-400">
                        Select consultation type
                      </option>
                      {consultationTypes &&
                        consultationTypes.map((type, idx) => (
                          <option key={idx} value={type} className="bg-[#060911] text-white">
                            {type}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Row 5: Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-800 bg-[#060911] px-4 py-3 text-white placeholder-slate-500 text-sm focus:border-[#D4A359]/70 outline-none transition-colors [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-800 bg-[#060911] px-4 py-3 text-white text-sm focus:border-[#D4A359]/70 outline-none transition-colors cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#060911] text-slate-400">
                          Select preferred time
                        </option>
                        {preferredTimes &&
                          preferredTimes.map((time, idx) => (
                            <option key={idx} value={time} className="bg-[#060911] text-white">
                              {time}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 6: Briefly describe your legal concern */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-1.5">
                      Briefly describe your legal concern <span className="text-[#D4A359]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        maxLength={500}
                        rows={4}
                        placeholder="Share details about your case or legal concern"
                        className="w-full rounded-lg border border-slate-800 bg-[#060911] px-4 py-3 text-white placeholder-slate-500 text-sm focus:border-[#D4A359]/70 outline-none transition-colors resize-none pb-7"
                      />
                      <span className="absolute bottom-2.5 right-3 text-xs text-slate-500">
                        {formData.message.length}/500
                      </span>
                    </div>
                  </div>

                  {/* Row 7: Checkbox for Privacy & Terms */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-1 rounded border-slate-800 bg-[#060911] text-[#D4A359] focus:ring-0 cursor-pointer accent-[#D4A359]"
                    />
                    <label htmlFor="agreeTerms" className="text-xs sm:text-sm text-slate-400 cursor-pointer leading-normal">
                      I agree to the{" "}
                      <Link href="/privacy" className="text-[#D4A359] hover:underline font-medium">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="text-[#D4A359] hover:underline font-medium">
                        Terms of Service
                      </Link>
                      .
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#B87B1D] to-[#D4A359] hover:from-[#C88A23] hover:to-[#E3B46A] text-white font-serif font-medium text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                    >
                      <span>Book My Consultation</span>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Security Footer Note */}
                  <div className="text-center pt-1">
                    <p className="text-slate-400 text-xs flex items-center justify-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-[#D4A359]" />
                      <span>Your information is safe and confidential.</span>
                    </p>
                  </div>

                </form>

              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}

export default Booksec;

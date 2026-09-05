"use client";

import React, { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import lawData from "@/app/data/lawData-restructured.json";

import { StayUpdatedData, GlobalLawData } from "@/app/data";
import { FadeIn } from "@/app/components/ui/animations";
import { motion } from "framer-motion";

const defaultStayUpdatedData =
  lawData.categories.Veritas.sections.StayUpdated?.variants?.VeritasStayUpdated1
    ?.stayUpdated;

export interface StayUpdatedProps {
  data?: StayUpdatedData;
}

export function StayUpdated({
  data = defaultStayUpdatedData,
}: StayUpdatedProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (!data) return null;

  const { title, subtitle, placeholder, buttonText } = data;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto relative w-full bg-[#0B0E14] text-white mt-6 sm:mt-8 overflow-hidden select-none px-4 sm:px-6 lg:px-8">
      <FadeIn
        direction="up"
        delay={0.1}
        className="group relative rounded-xl  border border-slate-800/80 bg-[#0A0E17] p-4 sm:p-5 md:p-6 shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8 hover:border-[#D4A359]/40 transition-all duration-300"
      >
        { }
        <div className="flex flex-col sm:flex-row mx-8 items-center text-center sm:text-left gap-3.5 sm:gap-4.5">
          { }
          <motion.div
            whileHover={{ scale: 1.1, rotate: 6 }}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#D4A359] flex items-center justify-center shrink-0 bg-[#070B12]/80 shadow-[0_0_12px_rgba(212,163,89,0.15)]"
          >
            <Mail className="w-5 h-5 sm:w-5 sm:h-5 text-[#D4A359]" />
          </motion.div>

          { }
          <div>
            <h3 className="font-serif font-semibold text-white text-xl sm:text-2xl leading-snug mb-1">
              {title || "Stay Updated"}
            </h3>
            {subtitle && (
              <p className="text-slate-400 text-sm sm:text-sm leading-relaxed max-w-md">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        { }
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mx-8 sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 min-w-[280px] sm:min-w-[420px] md:min-w-[480px]"
        >
          { }
          <div className="relative w-full flex-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder || "Enter your email address"}
              className="w-full h-10 sm:h-11 px-3.5 sm:px-4 rounded-sm border border-slate-800 bg-[#060911] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#B87B1D] transition-colors"
            />
          </div>

          { }
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full sm:w-auto h-10 sm:h-11 px-5 sm:px-6 rounded-sm bg-[#B87B1D] hover:bg-[#C88A23] text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <span>
              {subscribed ? "Subscribed!" : buttonText || "Subscribe"}
            </span>
            <ArrowRight className="w-4 h-4 text-white" />
          </motion.button>
        </form>
      </FadeIn>
    </section>
  );
}

export default StayUpdated;

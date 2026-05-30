import React from "react";
import InfoCard from "./InfoCard";
import { CARD_INFO } from "../services/contentService";
import { useLanguage } from "../context/LanguageContext";

const Programmes = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-[#f5ede4] px-6 py-16 font-serif md:px-12">
      {/* Section header */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#7c5c42]">
            Programs
          </p>

          <h1 className="text-4xl leading-tight font-normal text-[#1e1208] md:text-5xl">
            {CARD_INFO.mainTitle?.[language] ?? "What we do, together"}
          </h1>
        </div>

        <p className="max-w-xs font-sans text-sm leading-relaxed text-[#5a4030] md:text-right">
          Every program is run by volunteers and offered free of cost. New
          helpers and quiet observers are equally welcome.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-px bg-[#d4b89a] sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard topic="arati" />
        <InfoCard topic="padyatra" />
        <InfoCard topic="plantation" />
        <InfoCard topic="donation" />
        <InfoCard topic="chalisa" />
        <InfoCard topic="meditation" />
      </div>
    </section>
  );
};

export default Programmes;

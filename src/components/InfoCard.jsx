import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { CARD_INFO } from "../services/contentService";

const InfoCard = ({ topic }) => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const cardData = CARD_INFO[topic];

  if (!cardData) {
    return (
      <div
        className="animate-pulse"
        style={{ background: "#ede3d8", height: "420px" }}
      />
    );
  }

  const { image, title, description, meta } = cardData;
  const descText = description[language];
  const isLong = descText.length > 200;
  const displayText =
    isLong && !expanded ? `${descText.slice(0, 200)}…` : descText;

  return (
    <article
      className="flex flex-col overflow-hidden"
      style={{
        background: "#faf5ef",
        border: "1px solid #e2d4c4",
      }}
    >
      {/* Image — full bleed, fixed height */}
      <div className="relative overflow-hidden" style={{ height: "260px" }}>
        <img
          src={image}
          alt={title[language]}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-6 py-6">
        {/* Meta line */}
        {meta && (
          <p
            className="mb-3 text-xs tracking-[0.18em] uppercase"
            style={{
              color: "#7c5c42",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            {meta[language] ?? meta}
          </p>
        )}

        {/* Title */}
        <h2
          className="mb-4 leading-snug"
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: "1.65rem",
            fontWeight: 400,
            color: "#1e1208",
          }}
        >
          {title[language]}
        </h2>

        {/* Description */}
        <p
          className="flex-1 leading-relaxed"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.93rem",
            color: "#4a3525",
            fontWeight: 400,
          }}
        >
          {displayText}
        </p>

        {/* Read more */}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 self-start text-xs tracking-widest uppercase transition-opacity hover:opacity-60 focus:outline-none"
            style={{
              color: "#8b4513",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.15em",
            }}
          >
            {expanded ? "Read less ↑" : "Read more →"}
          </button>
        )}
      </div>
    </article>
  );
};

export default InfoCard;

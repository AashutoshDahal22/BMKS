import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
  "नासा मुक्त जीवन अपनाउ, जीवन आफनो सफल बनाउ",
  "मानव सेवामा नै साँचो धर्म छ",
  "सद्भाव, सेवा र साधनाको बाटो अपनाऔं",
];

const PathSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="w-full py-42 bg-[#fff7f0] flex flex-col items-center justify-center text-center px-6">
      {/* Small label */}
      <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
        Our Path
      </p>
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-medium text-[#2b1b12] mb-3 leading-[1.5]"
        >
          {quotes[currentQuote]}
        </motion.h2>
      </AnimatePresence>{" "}
      {/* Description */}
      <p className="max-w-3xl text-gray-600 text-base md:text-lg leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, enim,
        quisquam placeat a minima sit nulla tenetur reiciendis, tempora magnam
        blanditiis unde voluptatibus. Error similique repellendus asperiores et
        quidem expedita!
      </p>
    </section>
  );
};

export default PathSection;

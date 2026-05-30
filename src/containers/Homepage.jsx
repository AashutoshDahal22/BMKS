import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { TITLE_TEXT, NAVBAR_TEXT } from "../services/contentService";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Programmes from "../components/Programmes";
import PathSection from "../components/PathSection";
import VideoSection from "../components/VideoSection";
import Gallery from "../components/Gallery";

const Homepage = () => {
  const { language, setLang } = useLanguage();

  return (
    <div className="font-['FigTree']">
      <Hero />
      <PathSection />
      <VideoSection />
      <Programmes />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Homepage;

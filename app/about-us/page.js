import AboutHero from "@/components/about-hero-section/aboutHero";
import React from "react";
import content from "@/json/aboutus/aboutus.json";
import AboutSlider from "@/components/about-slider-section/aboutSlider";
import WhatSetsUsApart from "@/components/what-sets-us-section/whatSetsUsApart";
import AboutCEO from "@/components/about-ceo-section/aboutCE0";
import AboutOurTeam from "@/components/about-our-team-section/aboutOurTeam";
import Header from "@/components/head/head";
import homePageData from "@/json/homepage/home.json";
import PromoSection from "@/components/promo-section/promoSection";

export default function page() {
  const header = homePageData.header;
  const promo = homePageData.promoSection;
  return (
    <>
      <Header data={header} />
      <AboutHero content={content?.who_we_are} />
      <AboutSlider />
      <WhatSetsUsApart />
      <AboutCEO />
      <AboutOurTeam />
      <PromoSection data={promo} />
    </>
  );
}

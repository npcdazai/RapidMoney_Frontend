import AboutHero from "@/components/about-hero-section/aboutHero";
import React from "react";
import content from "@/json/aboutus/aboutus.json";
import AboutSlider from "@/components/about-slider-section/aboutSlider";
import WhatSetsUsApart from "@/components/what-sets-us-section/whatSetsUsApart";
import AboutCEO from "@/components/about-ceo-section/aboutCE0";
import AboutOurTeam from "@/components/about-our-team-section/aboutOurTeam";

export default function page() {
  return (
    <>
      <AboutHero content={content?.who_we_are} />
      <AboutSlider />
      <WhatSetsUsApart />
      <AboutCEO />
      <AboutOurTeam />
    </>
  );
}

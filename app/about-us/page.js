import AboutHero from "@/components/about-hero-section/aboutHero";
import React, { Suspense } from "react";
import content from "@/json/aboutus/aboutus.json";
import AboutSlider from "@/components/about-slider-section/aboutSlider";
import WhatSetsUsApart from "@/components/what-sets-us-section/whatSetsUsApart";
import AboutCEO from "@/components/about-ceo-section/aboutCE0";
import AboutOurTeam from "@/components/about-our-team-section/aboutOurTeam";
import Header from "@/components/head/head";
import homePageData from "@/json/homepage/home.json";
import PromoSection from "@/components/promo-section/promoSection";
import endpoints from "@/constants/endpoints";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/about-us",
     {
        next: { revalidate: 300 }, // 300 seconds = 5 minutes
      }
    );

    return await response.json();
  } catch (error) {
    console.log("API call failed: ", error);
    return null;
  }
};


export default async function page() {
  const response = await getCMSPageBySlug();
  console.log(response)

  const header = homePageData.header;
  const promo = homePageData.promoSection;

  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
        <DynamicHead />
        <AboutHero data={response?.data?.pageData?.whoWeAre} />
        <AboutSlider data={response?.data?.pageData?.sliderSection} />
        <WhatSetsUsApart />
        <AboutCEO data={response?.data?.pageData?.aboutCeo} />
        <AboutOurTeam data={response?.data?.pageData?.ourTeam} />
        <PromoSection data={response?.data?.pageData?.promoSection} />
      </Suspense>

      {/* <Header data={header} />
      <AboutHero content={content?.who_we_are} />
      <AboutSlider />
      <WhatSetsUsApart />
      <AboutCEO />
      <AboutOurTeam />
      <PromoSection data={promo} /> */}
    </>
  );
}

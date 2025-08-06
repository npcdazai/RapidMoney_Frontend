import AboutHero from "@/components/about-hero-section/aboutHero";
import React, { Suspense } from "react";
// import content from "@/json/aboutus/aboutus.json";
import AboutSlider from "@/components/about-slider-section/aboutSlider";
import WhatSetsUsApart from "@/components/what-sets-us-section/whatSetsUsApart";
import AboutCEO from "@/components/about-ceo-section/aboutCE0";
import AboutOurTeam from "@/components/about-our-team-section/aboutOurTeam";
// import Header from "@/components/head/head";
// import homePageData from "@/json/homepage/home.json";
import PromoSection from "@/components/promo-section/promoWrapper";
import endpoints from "@/constants/endpoints";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import defaultSEO from "@/constants/defaultSEO";

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/about-us",
      {
        next: { revalidate: 3600 }, // 300 seconds = 5 minutes
      }
    );

    const data = await response.json();

    if (!data?.data?.pageData) {
      notFound(); 
    }
    return data;
    
  } catch (error) {
    console.log("API call failed: ", error);
    notFound();
    // return null;
  }
};
export async function generateMetadata() {
  const res = await getCMSPageBySlug();
  const data = res?.data?.pageData?.seoSetting;
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`;

  const title =
    isProduction && data?.meta_title
      ? data.meta_title
      : defaultSEO.about.title;

  const description =
    isProduction && data?.meta_description
      ? data.meta_description
      : defaultSEO.about.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.about.featureImage;

  return {
    title,
    description,
    robots: isProduction
      ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      : "noindex, nofollow",
    alternates: {
      canonical: isProduction ? canonicalURL : undefined,
    },
    openGraph: {
      title,
      description,
      siteName: defaultSEO.defaultSiteName,
      locale: defaultSEO.defaultLocale,
      type: defaultSEO.defaultType,
      images: [
        {
          url: featureImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [featureImage],
    },
  };
}



export default async function page() {
  const response = await getCMSPageBySlug();
  console.log(response)

  // const header = homePageData.header;
  // const promo = homePageData.promoSection;

  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
        <DynamicHead />
        <AboutHero data={response?.data?.pageData?.whoWeAre} />
        <AboutSlider data={response?.data?.pageData?.sliderSection} />
        <WhatSetsUsApart data={response?.data?.pageData?.setUsApart} />
        <AboutCEO data={response?.data?.pageData?.aboutCeo} />
        <AboutOurTeam data={response?.data?.pageData?.ourTeam} />
        <PromoSection />
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

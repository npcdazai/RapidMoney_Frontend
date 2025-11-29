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
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb";
import Script from "next/script";

export const dynamic = "force-dynamic";

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/about-us",
      {
        cache: "no-store",
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
  const canonicalURL = "https://www.rapidmoney.in/about-us";

  const title =
    isProduction && data?.meta_title ? data.meta_title : defaultSEO.about.title;

  const description =
    isProduction && data?.meta_description
      ? data.meta_description
      : defaultSEO.about.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.about.featureImage;

  return {
    title,
    description,
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalURL,
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
  console.log(response);

  // const header = homePageData.header;
  // const promo = homePageData.promoSection;

  return (
    <>
      <Script id="about-schema" type="application/ld+json">
        {`
        
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Hemali Bhatt",
      "jobTitle": "Director",
        "image": "https://www.rapidmoney.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhemali.b2ba3a89.png&w=3840&q=75",
  "sameAs": "https://www.linkedin.com/in/hemali-bhatt-51099647",
      "url": "https://www.rapidmoney.in/about-us",
      "worksFor": {
        "@type": "Organization",
        "name": "Rapid Money"
      }
    },
        {
      "@type": "Person",
      "name": "Chintan Panchmatya",
      "jobTitle": "Director",
              "image": "https://www.rapidmoney.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchintan.9895c2d4.png&w=3840&q=75",
  "sameAs": "https://www.linkedin.com/in/chintan-panchmatya-0a959815",
      "url": "https://www.rapidmoney.in/about-us",
      "worksFor": {
        "@type": "Organization",
        "name": "Rapid Money"
      }
          },
        {
      "@type": "Person",
      "name": "Ashwani Manaktala",
      "jobTitle": "Chief Executive Officer",
              "image": "https://www.rapidmoney.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fashwani.7d844404.png&w=1080&q=75",
  "sameAs": "https://www.linkedin.com/in/ashwani-manaktala-522349b/",
      "url": "https://www.rapidmoney.in/about-us",
      "worksFor": {
        "@type": "Organization",
        "name": "Rapid Money"
      }
          },
        {
      "@type": "Person",
      "name": "Ankur Chandra",
      "jobTitle": "AVP-Products",
              "image": "https://www.rapidmoney.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fankur2.59350f0d.png&w=1080&q=75",
  "sameAs": "https://www.linkedin.com/in/ankurcs",
      "url": "https://www.rapidmoney.in/about-us",
      "worksFor": {
        "@type": "Organization",
        "name": "Rapid Money"
      }
          },
    {
      "@type": "Person",
      "name": "Amit Agashe",
      "jobTitle": "AVP- Operations",
              "image": "https://www.rapidmoney.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famit.c4afe92a.png&w=1080&q=75",
      "url": "https://www.rapidmoney.in/about-us",
      "worksFor": {
        "@type": "Organization",
        "name": "Rapid Money"
      }
    }
  ]
}`}
      </Script>
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
        <DynamicHead />
        <Breadcrumb />
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

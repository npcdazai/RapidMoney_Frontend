import Header from "@/components/head/head";
import React, { Suspense } from "react";
import homePageData from "@/json/homepage/home.json";
import faqData from "@/json/faqs/faqs.json";
import FaqSection from "@/components/faqs/faq-section";
import endpoints from "@/constants/endpoints";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";

import defaultSEO from "@/constants/defaultSEO";
import { notFound } from "next/navigation";
import Script from "next/script";

const header = homePageData.header;
const faqSteps = faqData?.faqSteps;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/faq",
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
  const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}/faqs`;

  const title = data?.meta_title ? data.meta_title : defaultSEO.faq.title;

  const description = data?.meta_description
    ? data.meta_description
    : defaultSEO.faq.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.faq.featureImage;

  return {
    title,
    description,
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
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

export default async function page({respone}) {
  const response = await getCMSPageBySlug();


return (
    <>
      
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
       
        <FaqSection data={respone?.data?.pageData?.faqSection} />
      </Suspense>
    </>
  );
}
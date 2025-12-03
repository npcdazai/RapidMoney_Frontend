// import Header from "@/components/head/head";
// import termJson from "@/json/termConditions/term.json"

import TermCondition from "@/components/term-conditions/TermCondition";
import homePageData from "@/json/homepage/home.json";
import { Suspense } from "react";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import endpoints from "@/constants/endpoints";
import defaultSEO from "@/constants/defaultSEO";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb";


const header = homePageData.header;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/term-conditions",
      {
        cache: 'no-store',
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
  const canonicalURL = "https://www.rapidmoney.in/term-conditions";

  const title = data?.meta_title
    ? data.meta_title
    : defaultSEO.terms_conditions.title;

  const description = data?.meta_description
    ? data.meta_description
    : defaultSEO.terms_conditions.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.terms_conditions.featureImage;

  return {
    title,
    description,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalURL,
    },
    others:{
      keywords:"Rapid Money terms and conditions, terms and conditions"
    },
    openGraph: {
      title,
      description,
      url:"https://www.rapidmoney.in/term-conditions",
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
  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
        <DynamicHead />
        <Breadcrumb />
        {/* <TermCondition data={termJson}/> */}
        <TermCondition data={response?.data?.pageData?.termConditionSection} />

      </Suspense>
    </>

  );
}

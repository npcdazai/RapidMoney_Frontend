// import Header from '@/components/head/head'
import React, { Suspense } from 'react'
// import homePageData from "@/json/homepage/home.json";
// import partnerData from "@/json/partner/partner.json"
import LendingPartners from '@/components/lending-partners-section/LendingPartners';
import PromoSection from '@/components/promo-section/promoSection';
import endpoints from '@/constants/endpoints';
import Loading from '../loading';
import DynamicHead from '@/components/head/dynamicHead';
import defaultSEO from '@/constants/defaultSEO';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/BreadCrumb';
import Script from "next/script";
import { getStructuredDataScripts, schemaToJsonLd } from "@/utils/structuredData";


// const header = homePageData.header;
// const promo = homePageData.promoSection;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/lending-partners",
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
    console.error("API call failed: ", error);
    notFound();
    // return null;
  }
};

export async function generateMetadata() {
  const res = await getCMSPageBySlug();
  const data = res?.data?.pageData?.seoSetting;
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = "https://www.rapidmoney.in/lending-partners";

  const title = data?.meta_title
    ? data.meta_title
    : defaultSEO?.lending_partner?.title;

  const description = data?.meta_description
    ? data.meta_description
    : defaultSEO?.lending_partner?.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO?.lending_partner?.featureImage;

  return {
    title,
    description,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalURL,
    },
    other:{
      keywords:"NBFC Lending Partners, Digital Loan Partners, Personal Loan Providers India"
    },
    openGraph: {
      title,
      description,
      url:"https://www.rapidmoney.in/lending-partners",
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
  const pageData = response?.data?.pageData || {};
  const uploadedSchemas = getStructuredDataScripts(pageData?.schemaData);

  return (
    <>
      {uploadedSchemas.map((schema, index) => (
        <Script
          key={`lending-partners-schema-${index + 1}`}
          id={`lending-partners-schema-${index + 1}`}
          type="application/ld+json"
        >
          {schemaToJsonLd(schema)}
        </Script>
      ))}
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
        <DynamicHead />
        {/* <LendingPartners data={partnerData} /> */}
        <Breadcrumb />
        <LendingPartners data={response?.data?.pageData?.partners} />
        <PromoSection />
      </Suspense>
    </>
  )
}

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
    console.log("API call failed: ", error);
    notFound(); 
    // return null;
  }
};

export async function generateMetadata() {
  const res = await getCMSPageBySlug();
  const data = res?.data?.pageData?.seoSetting;
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = "https://www.rapidmoney.in/lending-partners";

  const title =
    isProduction && data?.meta_title
      ? data.meta_title
      : defaultSEO?.lending_partner?.title;

  const description =
    isProduction && data?.meta_description
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

  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
        <DynamicHead />
        {/* <LendingPartners data={partnerData} /> */}
        <Breadcrumb/>
        <LendingPartners data={response?.data?.pageData?.partners} />
        <PromoSection  />
      </Suspense>
    </>
  )
}

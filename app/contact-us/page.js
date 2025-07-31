import ContactUsForm from '@/components/contact-us-form/ContactUsForm'
import Header from '@/components/head/head'
import contactData from "@/json/contactus/contactus.json"
import React, { Suspense } from 'react'
import homePageData from "@/json/homepage/home.json";
import ContactMap from '@/components/contact-us-map/ContactMap';
import endpoints from '@/constants/endpoints';
import Loading from '../loading';
import DynamicHead from '@/components/head/dynamicHead';
import defaultSEO from '@/constants/defaultSEO';

const header = homePageData.header;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/contact-us",
      {
        next: { revalidate: 3600 }, // 300 seconds = 5 minutes
      }
    );

    return await response.json();
  } catch (error) {
    console.log("API call failed: ", error);
    return null;
  }
};

export async function generateMetadata() {
  const res = await getCMSPageBySlug();
  const data = res?.data?.pageData?.seoSetting;
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = process.env.NEXT_PUBLIC_REDIRECT_URL;

  const title =
    isProduction && data?.meta_title
      ? data.meta_title
      : defaultSEO.contact.title;

  const description =
    isProduction && data?.meta_description
      ? data.meta_description
      : defaultSEO.contact.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.contact.featureImage;

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
  console.log(response);
  return (
    <>
      {/* <ContactUs /> */}
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
         <DynamicHead  />
        <ContactUsForm data={response?.data?.pageData?.contactSection} />
        {/* <ContactUsForm data={contactData} /> */}
        <ContactMap />
      </Suspense>
    </>
  )
}

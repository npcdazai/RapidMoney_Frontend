import ContactUsForm from "@/components/contact-us-form/ContactUsForm";
import Header from "@/components/head/head";
import contactData from "@/json/contactus/contactus.json";
import React, { Suspense } from "react";
import homePageData from "@/json/homepage/home.json";
import ContactMap from "@/components/contact-us-map/ContactMap";
import endpoints from "@/constants/endpoints";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import defaultSEO from "@/constants/defaultSEO";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb";

const header = homePageData.header;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/contact-us",
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
  const canonicalURL = "https://www.rapidmoney.in/contact-us";

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
  console.log(response);
  return (
    <>
      {/* <ContactUs /> */}
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
        <DynamicHead />
       <Breadcrumb/>
        <ContactUsForm data={response?.data?.pageData?.contactSection} />
        {/* <ContactUsForm data={contactData} /> */}
        {/* <ContactMap /> */}
      </Suspense>
    </>
  );
}

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
import Script from "next/script";

const header = homePageData.header;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/contact-us",
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
  const canonicalURL = "https://www.rapidmoney.in/contact-us";

  const title =
    isProduction && data?.meta_title
      ? data.meta_title
      : data.meta_title;

  const description =
    isProduction && data?.meta_description
      ? data.meta_description
      : data.meta_description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.contact.featureImage;

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
  return (
    <>
      <Script id="contact-schema" type="application/ld+json">
        {`
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "RapidMoney",
  "url": "https://www.rapidmoney.in/contact-us",
  "logo": "https://www.rapidmoney.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flight_rapid_money_logo.ca23ec80.png&w=640&q=75",
  "description": "Reach Rapid Money for personal loan enquiry or support at support@rapidmoney.in. We're here to help you with quick loan assistance.",
    "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shubhjivan Arcade, A-902, Swami Vivekananda Rd, near Borivali Station, opp. Moksh Plaza, Mhatre Wadi, Borivali West",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400092",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@rapidmoney.in",
      "areaServed": "IN",
      "availableLanguage": ["English"]
    },
    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "avinash.dhivar@rapidmoney.in",
      "areaServed": "IN",
      "availableLanguage": ["English"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/rapidmoney",
    "https://x.com/Rapidmoney2025",
    "https://www.youtube.com/channel/UCUR-xUhGJHyrf_u84fDeD6Q",
    "https://www.instagram.com/officialrapidmoney",
    "https://www.facebook.com/rapidmoney"
  ]
}

`}
      </Script>
      {/* <ContactUs /> */}
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
        <DynamicHead />
        <Breadcrumb />
        <ContactUsForm data={response?.data?.pageData?.contactSection} />
        {/* <ContactUsForm data={contactData} /> */}
        {/* <ContactMap /> */}
      </Suspense>
    </>
  );
}

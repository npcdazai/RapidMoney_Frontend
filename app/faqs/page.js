import React, { Suspense } from "react";
import FaqSection from "@/components/faqs/faq-section";
import endpoints from "@/constants/endpoints";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import defaultSEO from "@/constants/defaultSEO";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb";
import Script from "next/script";
import {
  buildFaqSchemaFromStepSections,
  getStructuredDataScripts,
  schemaToJsonLd,
} from "@/utils/structuredData";

async function getFaqPagePayload() {
  try {
    const cmsResponse = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/faq",
      { cache: "no-store" }
    );
    const cmsData = await cmsResponse.json();
    if (cmsData?.data?.pageData) {
      return cmsData.data;
    }
  } catch (e) {}

  try {
    const cmsResponse = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/faqs",
      { cache: "no-store" }
    );
    const cmsData = await cmsResponse.json();
    if (cmsData?.data?.pageData) {
      return cmsData.data;
    }
  } catch (e) {}

  return null;
}

async function getFaqSEO() {
  const pagePayload = await getFaqPagePayload();
  return pagePayload?.pageData?.seoSetting || {};
}

export async function generateMetadata() {
  const data = await getFaqSEO();
  const canonicalURL = "https://www.rapidmoney.in/faqs";

  const title = data?.meta_title ? data.meta_title : defaultSEO.faq.title;

  const description = data?.meta_description
    ? data.meta_description
    : defaultSEO.faq.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.faq.featureImage;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.rapidmoney.in";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalURL,
    },
    other: {
      keywords:
        data?.meta_keywords ||
        "Rapid Money FAQs, Personal Loan Questions, Loan Eligibility FAQ, RapidMoney Help Center",
    },
    openGraph: {
      title,
      description,
      url: canonicalURL,
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

export default async function Page() {
  const pagePayload = await getFaqPagePayload();
  if (!pagePayload?.pageData) {
    notFound();
  }

  const pageData = pagePayload.pageData || {};
  const schemaCandidate =
    pageData?.schemaData || pageData?.seoSetting?.schemaData;
  const uploadedSchemas = getStructuredDataScripts(schemaCandidate);
  const fallbackFaqSchema = buildFaqSchemaFromStepSections(pageData?.faqSection);
  const schemasToRender = uploadedSchemas.length
    ? uploadedSchemas
    : fallbackFaqSchema
      ? [fallbackFaqSchema]
      : [];

  return (
    <>
      {schemasToRender.map((schema, index) => (
        <Script
          key={`faqs-schema-${index + 1}`}
          id={`faqs-schema-${index + 1}`}
          type="application/ld+json"
        >
          {schemaToJsonLd(schema)}
        </Script>
      ))}

      <Suspense fallback={<Loading />}>
        <DynamicHead />
        <Breadcrumb />
        <FaqSection data={pageData?.faqSection} />
      </Suspense>
    </>
  );
}

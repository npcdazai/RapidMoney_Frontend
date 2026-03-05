import React, { Suspense } from "react";
import FaqSection from "@/components/faqs/faq-section";
import endpoints from "@/constants/endpoints";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb";
import Script from "next/script";
import {
  buildFaqSchemaFromStepSections,
  getStructuredDataScripts,
  schemaToJsonLd,
} from "@/utils/structuredData";

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/faq",
      { cache: "no-store" }
    );

    const data = await response.json();
    if (!data?.data?.pageData) notFound();

    return data;
  } catch (error) {
    console.log("API call failed: ", error);
    notFound();
  }
};

export default async function Page() {
  const response = await getCMSPageBySlug();
  const pageData = response?.data?.pageData || {};

  const uploadedSchemas = getStructuredDataScripts(pageData?.schemaData);
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
        <FaqSection data={response?.data?.pageData?.faqSection} />
      </Suspense>
    </>
  );
}

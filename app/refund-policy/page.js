
import endpoints from "@/constants/endpoints";
import { Suspense } from "react";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import RefundPolicy from "@/components/refund-policy-section/refundPolicy";
import defaultSEO from "@/constants/defaultSEO";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb";
import Script from "next/script";
import { getStructuredDataScripts, schemaToJsonLd } from "@/utils/structuredData";

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/refund-policy",
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
  const canonicalURL = "https://www.rapidmoney.in/refund-policy";

  const title = data?.meta_title
      ? data.meta_title
      : defaultSEO.refund_policy.title;

  const description = data?.meta_description
      ? data.meta_description
      : defaultSEO.refund_policy.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.refund_policy.featureImage;

  return {
    title,
    description,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalURL,
    },
    other:{
      keywords:"refund policy Rapid Money, loan refund guidelines"
    },
    openGraph: {
      title,
      description,
      url:"https://www.rapidmoney.in/refund-policy",
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



export default async function Home() {
  const response = await getCMSPageBySlug();
  const pageData = response?.data?.pageData || {};
  const uploadedSchemas = getStructuredDataScripts(pageData?.schemaData);
  console.log(response?.data?.pageData)


  return (
    <>
      {uploadedSchemas.map((schema, index) => (
        <Script
          key={`refund-policy-schema-${index + 1}`}
          id={`refund-policy-schema-${index + 1}`}
          type="application/ld+json"
        >
          {schemaToJsonLd(schema)}
        </Script>
      ))}
      <Suspense fallback={<Loading />}>
        <DynamicHead />
        <Breadcrumb/>
        <RefundPolicy data={response?.data?.pageData?.refundPolicySection} />
      </Suspense>
    </>

  );
}

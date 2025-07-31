
import endpoints from "@/constants/endpoints";
import { Suspense } from "react";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import RefundPolicy from "@/components/refund-policy-section/refundPolicy";
import defaultSEO from "@/constants/defaultSEO";

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/refund-policy",
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
      : defaultSEO.refund_policy.title;

  const description =
    isProduction && data?.meta_description
      ? data.meta_description
      : defaultSEO.refund_policy.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.refund_policy.featureImage;

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



export default async function Home() {
  const response = await getCMSPageBySlug();
  console.log(response?.data?.pageData)


  return (
    <>
      <Suspense fallback={<Loading />}>
        <DynamicHead />
        <RefundPolicy data={response?.data?.pageData?.refundPolicySection}/>
      </Suspense>
    </>

  );
}

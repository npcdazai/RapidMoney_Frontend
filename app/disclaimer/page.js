
import endpoints from "@/constants/endpoints";
import homePageData from "@/json/homepage/home.json";
import { Suspense } from "react";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import Disclaimer from "@/components/disclaimer-section/disclaimer";
import defaultSEO from "@/constants/defaultSEO";
import { notFound } from "next/navigation";


const header = homePageData.header;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/disclaimer",
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
  const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}/disclaimer`;

  const title =
    isProduction && data?.meta_title
      ? data.meta_title
      : defaultSEO.disclaimer.title;

  const description =
    isProduction && data?.meta_description
      ? data.meta_description
      : defaultSEO.disclaimer.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.disclaimer.featureImage;

  return {
    title,
    description,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
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
        <Disclaimer data={response?.data?.pageData?.disclaimerSection}/>
      </Suspense>
    </>

  );
}

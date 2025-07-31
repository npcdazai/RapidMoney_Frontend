import CareerSection from "@/components/career-section/CareerSection";
import Header from "@/components/head/head";
import JobOpening from "@/components/job-openings/JobOpening";
import LifeAtRapidMoney from "@/components/life-at-rapidmoney/LifeAtRapidMoney";
import endpoints from "@/constants/endpoints";
import careerData from "@/json/career/career.json";
import headerData from "@/json/header/header.json"
import Loading from "../loading";
import { Suspense } from "react";
import DynamicHead from "@/components/head/dynamicHead";
import defaultSEO from "@/constants/defaultSEO";

const career = careerData.careerHeroSection
const lifeRapidData = careerData.lifeAtRapidMoney
const jobData = careerData.jobOpenings
const header = headerData.header

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/career",
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
      : defaultSEO.career.title;

  const description =
    isProduction && data?.meta_description
      ? data.meta_description
      : defaultSEO.career.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.career.featureImage;

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



export default async function CareerPage() {
  const response = await getCMSPageBySlug();
  console.log(response)
  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
         <DynamicHead />
        <CareerSection data={response?.data?.pageData?.careerHeroSection} />
        <LifeAtRapidMoney data={response?.data?.pageData?.lifeAtRapidMoney} />
        <JobOpening data={response?.data?.pageData?.jobOpenings} />
      </Suspense>


      {/* <CareerSection data={career} /> */}
      {/* <LifeAtRapidMoney data={lifeRapidData} />
            <JobOpening data={jobData} /> */}
    </>
  );
}

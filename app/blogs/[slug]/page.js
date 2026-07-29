import Header from "@/components/head/head";
import React, { Suspense } from "react";
import homePageData from "@/json/homepage/home.json";
import BlogDetails from "@/components/blog-details-section/BlogDetails";
import BlogDetailsData from "@/json/blogdetails/blogdetails.json";
import PromoSection from "@/components/promo-section/promoWrapper";
import endpoints from "@/constants/endpoints";
import Loading from "@/app/loading";
import DynamicHead from "@/components/head/dynamicHead";
import defaultSEO from "@/constants/defaultSEO";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb";
import Script from "next/script";
import { getStructuredDataScripts, schemaToJsonLd } from "@/utils/structuredData";

const header = homePageData.header;
const promo = homePageData.promoSection;

const getBlog = async (slug) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_blogs_by_slug +
      `/${slug}`,
      {
        cache: 'no-store',
      }
    );

    // console.log("Response from APIs:", response.json()?.status, process.env.NEXT_PUBLIC_API_URL +
    //     endpoints.get_blogs_by_slug +
    //     `/${slug}`);\
    const data = await response.json();
    // console.log(data?.data, "data from API");

    if (!data?.data) {
      notFound();
    }

    return data
  } catch (error) {
    console.error("API call failed: ", error);
    notFound();
    // return null;
  }
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params; // Await params if it's a Promise
  const response = await getBlog(resolvedParams.slug);

  if (!response || !response.data) {
    return {
      title: "Rapid Money - Page Not Found",
      description: "This page does not exist.",
    };
  }

  const seo_setting = {
    meta_title: response?.data?.seo?.title,
    meta_description: response?.data?.seo?.metaDesc,
  };

  let canonicalURL = `https://www.rapidmoney.in/blogs/${resolvedParams.slug}`;

  const featureImage =
    response?.data?.featuredImg?.[0]?.url ||
    defaultSEO?.blog?.featureImage;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
    title: seo_setting?.meta_title || defaultSEO?.blog?.title,
    description: seo_setting?.meta_description || defaultSEO?.blog?.description,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalURL,
    },
    keywords: response?.data?.tags,
    openGraph: {
      title: seo_setting?.meta_title || defaultSEO?.blog?.title,
      description: seo_setting?.meta_description || defaultSEO?.blog?.description,
      url: canonicalURL,
      siteName: defaultSEO?.defaultSiteName,
      images: [
        {
          url: featureImage,
          alt: seo_setting?.meta_title || defaultSEO?.blog?.title,
        },
      ],
      locale: defaultSEO?.defaultLocale,
      type: 'article',
      publishedTime: response?.data?.created_at,
      modifiedTime: response?.data?.updated_at,
      authors: response?.data?.auther?.name ? [response?.data?.auther?.name] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seo_setting?.meta_title || defaultSEO?.blog?.title,
      description: seo_setting?.meta_description || defaultSEO?.blog?.description,
      images: [featureImage],
    },
  };
}

const Page = async ({ params }) => {
  const { slug } = await params;

  const response = await getBlog(slug);
  const schemaCandidate =
    response?.data?.seo?.schemaData || response?.data?.schemaData;
  const uploadedSchemas = getStructuredDataScripts(schemaCandidate);

  return (
    <>
      {uploadedSchemas.map((schema, index) => (
        <Script
          key={`blog-details-schema-${index + 1}`}
          id={`blog-details-schema-${index + 1}`}
          type="application/ld+json"
        >
          {schemaToJsonLd(schema)}
        </Script>
      ))}

      <Suspense fallback={<Loading />}>
        {/* <DynamicHead /> */}
        <Breadcrumb />
        <BlogDetails data={response?.data} />
        <PromoSection />
      </Suspense>
    </>
  );
};
export default Page;

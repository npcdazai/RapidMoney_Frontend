import BlogListing from "@/components/blogs/BlogListing";
import Header from "@/components/head/head";
import React, { Suspense } from "react";
import homePageData from "@/json/homepage/home.json";

import DynamicHead from "@/components/head/dynamicHead";
import Loading from "../loading";
import PromoSection from "@/components/promo-section/promoWrapper";
import defaultSEO from "@/constants/defaultSEO";
import endpoints from "@/constants/endpoints";
import Breadcrumb from "@/components/BreadCrumb";
import Script from "next/script";
import { getStructuredDataScripts, schemaToJsonLd } from "@/utils/structuredData";

const header = homePageData.header;

async function getBlogPagePayload() {
  try {
    const cmsResponse = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/blogs",
      { cache: "no-store" }
    );
    const cmsData = await cmsResponse.json();
    if (cmsData?.data?.pageData) {
      return cmsData.data;
    }
  } catch (e) {}

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        (endpoints.get_blogs_seo || endpoints.get_blogs),
      { cache: "no-store" }
    );
    const data = await response.json();
    return data?.data || {};
  } catch (e) {
    return {};
  }
}

async function getBlogSEO() {
  const pagePayload = await getBlogPagePayload();
  return pagePayload?.pageData?.seoSetting || {};
}

export async function generateMetadata() {
  const data = await getBlogSEO();
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = `https://www.rapidmoney.in/blogs`;

  const title = data?.meta_title
    ? data.meta_title
    : defaultSEO.blog.title;

  const description = data?.meta_description
    ? data.meta_description
    : defaultSEO.blog.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.blog.featureImage;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
    title,
    description,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalURL,
    },
    other: {
      keywords:"Rapid Money Blog, Personal Loan Tips, Finance Guides, personal finance insights"
    },
    openGraph: {
      title,
      description,
      url:"https://www.rapidmoney.in/blogs",
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
  const pagePayload = await getBlogPagePayload();
  const schemaCandidate =
    pagePayload?.pageData?.schemaData ||
    pagePayload?.pageData?.seoSetting?.schemaData;
  const uploadedSchemas = getStructuredDataScripts(schemaCandidate);

  return (
    <>
      {uploadedSchemas.map((schema, index) => (
        <Script
          key={`blogs-schema-${index + 1}`}
          id={`blogs-schema-${index + 1}`}
          type="application/ld+json"
        >
          {schemaToJsonLd(schema)}
        </Script>
      ))}

      {/* <Header data={header} /> */}
      <Suspense fallback={<Loading />}>
        {/* <DynamicHead /> */}
        <Breadcrumb />
        <BlogListing />
        <PromoSection />
      </Suspense>
    </>
  );
}


// import BlogListing from "@/components/blogs/BlogListing";
// import React, { Suspense } from "react";
// import DynamicHead from "@/components/head/dynamicHead";
// import Loading from "../loading";
// import endpoints from "@/constants/endpoints";
// import requests from "@/utils/api";
// import defaultSEO from "@/constants/defaultSEO";
// import { notFound } from "next/navigation";
// import PromoSection from "@/components/promo-section/promoWrapper";

// async function getCMSPageBySlug(pageNum = 1, category = null) {
//   try {
//     const api = requests();
//     let url = `${endpoints.get_blogs}?page=${pageNum}&limit=6`;
//     if (category) url += `&category=${category}`;

//     const response = await api.get(url);

//     // console.log("Blogs response:", response);

//     if (!response?.data) {
//       notFound();
//     }

//     return {
//       data: response?.data?.data || [],
//       pagination: {
//         total: response?.data?.pagination?.total || 0,
//         currentPage: response?.data?.pagination?.currentPage || pageNum,
//       }
//     };
//   } catch (error) {
//     console.error("Failed to fetch blogs on server:", error);
//     notFound();
//     // return {
//     //   data: [],
//     //   pagination: {
//     //     total: 0,
//     //     currentPage: pageNum,
//     //   }
//     // };
//   }
// }

// export async function generateMetadata() {
//   const res = await getCMSPageBySlug();
//   const data = res?.data?.pageData?.seoSetting;
//   const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
//   const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs`;

//   const title =
//     isProduction && data?.meta_title
//       ? data.meta_title
//       : defaultSEO.blog.title;

//   const description =
//     isProduction && data?.meta_description
//       ? data.meta_description
//       : defaultSEO.blog.description;

//   const featureImage =
//     data?.feature_image?.[0]?.url || defaultSEO.blog.featureImage;

//   return {
//     title,
//     description,
//     robots: isProduction
//       ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
//       : "noindex, nofollow",
//     alternates: {
//       canonical: isProduction ? canonicalURL : undefined,
//     },
//     openGraph: {
//       title,
//       description,
//       siteName: defaultSEO.defaultSiteName,
//       locale: defaultSEO.defaultLocale,
//       type: defaultSEO.defaultType,
//       images: [
//         {
//           url: featureImage,
//           alt: title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [featureImage],
//     },
//   };
// }


// export default async function Page({ searchParams }) {
//   const category =  searchParams?.category || null;
//   const initialBlogs = await getCMSPageBySlug(1, category);

//   return (
//     <>
//       <Suspense fallback={<Loading />}>
//         {/* <DynamicHead /> */}
//         <BlogListing
//           initialBlogs={initialBlogs.data}
//           initialTotal={initialBlogs.pagination.total}
//           initialPage={initialBlogs.pagination.currentPage}
//           category={category}
//         />
//         <PromoSection />
//       </Suspense>
//     </>
//   );
// }

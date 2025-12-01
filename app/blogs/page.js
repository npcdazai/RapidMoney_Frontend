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

const header = homePageData.header;

async function getBlogSEO() {
  try {
    const api = requests();
    // Adjust this endpoint to fetch only SEO data if possible
    const response = await api.get(endpoints.get_blogs_seo || endpoints.get_blogs);
    // Adjust the path to your actual SEO data
    return response?.data?.pageData?.seoSetting || {};
  } catch (e) {
    return {};
  }
}

export async function generateMetadata() {
  const data = await getBlogSEO();
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}/blogs`;

  const title =
    isProduction && data?.meta_title
      ? data.meta_title
      : defaultSEO.blog.title;

  const description =
    isProduction && data?.meta_description
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



export default function page() {
  return (
    <>
      {/* <Header data={header} /> */}
      <Suspense fallback={<Loading />}>
        {/* <DynamicHead /> */}
        <Breadcrumb/>
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

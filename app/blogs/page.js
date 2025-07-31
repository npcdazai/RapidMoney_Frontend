// import BlogListing from "@/components/blogs/BlogListing";
// import Header from "@/components/head/head";
// import React, { Suspense } from "react";
// import homePageData from "@/json/homepage/home.json";
// import PromoSection from "@/components/promo-section/promoSection";
// import DynamicHead from "@/components/head/dynamicHead";
// import Loading from "../loading";

// const header = homePageData.header;

// export default function page() {
//   return (
//     <>
//       {/* <Header data={header} /> */}
//       <Suspense fallback={<Loading />}>
//         <DynamicHead />
//         <BlogListing />
//         <PromoSection />
//       </Suspense>
//     </>
//   );
// }


import BlogListing from "@/components/blogs/BlogListing";
import React, { Suspense } from "react";
import PromoSection from "@/components/promo-section/promoSection";
import DynamicHead from "@/components/head/dynamicHead";
import Loading from "../loading";
import endpoints from "@/constants/endpoints";
import requests from "@/utils/api";

async function fetchBlogs(pageNum = 1, category = null) {
  try {
    const api = requests();
    let url = `${endpoints.get_blogs}?page=${pageNum}&limit=6`;
    if (category) url += `&category=${category}`;

    const response = await api.get(url);
    return {
      data: response?.data?.data || [],
      pagination: {
        total: response?.data?.pagination?.total || 0,
        currentPage: response?.data?.pagination?.currentPage || pageNum,
      }
    };
  } catch (error) {
    console.error("Failed to fetch blogs on server:", error);
    return {
      data: [],
      pagination: {
        total: 0,
        currentPage: pageNum,
      }
    };
  }
}

export default async function Page({ searchParams }) {
  const category = searchParams?.category || null;
  const initialBlogs = await fetchBlogs(1, category);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <DynamicHead />
        <BlogListing
          initialBlogs={initialBlogs.data}
          initialTotal={initialBlogs.pagination.total} 
          initialPage={initialBlogs.pagination.currentPage} 
          category={category}
        />
        <PromoSection />
      </Suspense>
    </>
  );
}

import BlogListing from "@/components/blogs/BlogListing";
import Header from "@/components/head/head";
import React, { Suspense } from "react";
import homePageData from "@/json/homepage/home.json";
import PromoSection from "@/components/promo-section/promoSection";
import DynamicHead from "@/components/head/dynamicHead";
import Loading from "../loading";

const header = homePageData.header;

export default function page() {
  return (
    <>
      {/* <Header data={header} /> */}
      <Suspense fallback={<Loading />}>
        <DynamicHead />
        <BlogListing />
        <PromoSection />
      </Suspense>
    </>
  );
}   

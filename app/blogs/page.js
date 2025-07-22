import BlogListing from "@/components/blogs/BlogListing";
import Header from "@/components/head/head";
import React from "react";
import homePageData from "@/json/homepage/home.json";
import PromoSection from "@/components/promo-section/promoSection";
import DynamicHead from "@/components/head/dynamicHead";

const header = homePageData.header;

export default function page() {
  return (
    <>
      {/* <Header data={header} /> */}
       <DynamicHead />
      <BlogListing />
      <PromoSection data={homePageData.promoSection} />
    </>
  );
}   

import BlogListing from "@/components/blogs/BlogListing";
import Header from "@/components/head/head";
import React from "react";
import homePageData from "@/json/homepage/home.json";
import BlogDetails from "@/components/blog-details-section/BlogDetails";
import BlogDetailsData from "@/json/blogdetails/blogdetails.json"
import PromoSection from "@/components/promo-section/promoSection";

const header = homePageData.header;
const promo = homePageData.promoSection;

export default function page() {
  return (
    <>
      <Header data={header} />
      <BlogDetails data={BlogDetailsData} />
      <PromoSection data={promo} />
    </>
  );
}   

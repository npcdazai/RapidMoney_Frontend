import BlogListing from "@/components/blogs/BlogListing";
import Header from "@/components/head/head";
import React from "react";
import homePageData from "@/json/homepage/home.json";

const header = homePageData.header;

export default function page() {
  return (
    <>
      <Header data={header} />
      <BlogListing />
    </>
  );
}   

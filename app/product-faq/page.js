import React, { Suspense } from "react";

import ProductFAQ from "@/components/product-faq/productFAQ";

// import productPageData from "@/json/product/product.json"
import endpoints from "@/constants/endpoints";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import defaultSEO from "@/constants/defaultSEO";
import { notFound } from "next/navigation";


export default async function page({ respone }) {
 
  return (
    <>
     
      <Suspense fallback={<Loading />}>
        <ProductFAQ data={respone?.data?.pageData?.faqSection} />
      </Suspense>
    </>
  );
}

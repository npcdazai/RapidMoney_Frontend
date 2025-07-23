import React, { Suspense } from "react";
import Header from "@/components/head/head";
import homePageData from "@/json/homepage/home.json";
import PromoSection from "@/components/promo-section/promoSection";
import GlobalHeroSection from "@/components/global-hero-section/heroSection";
import ProductFAQ from "@/components/product-faq/productFAQ";
import ProductRepayment from "@/components/product-repayment/productRepayment";
import ProductTermLoans from "@/components/product-term-loans/productTermLoans";
import ProductInstantAccess from "@/components/product-instant-access/productInstantAccess";
import productPageData from "@/json/product/product.json"
import endpoints from "@/constants/endpoints";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/product",
       {
        next: { revalidate: 300 }, // 300 seconds = 5 minutes
      }
    );

    return await response.json();
  } catch (error) {
    console.log("API call failed: ", error);
    return null;
  }
};
export default async function page() {
  const response = await getCMSPageBySlug();
  console.log(response)


  const header = homePageData.header;
  const promo = homePageData.promoSection;
  const heroSection = homePageData.heroSection;
  const repaymentData = productPageData.repaymentSection


  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Header isDark={true} data={header} /> */}
      <DynamicHead isDark={true} />

      <GlobalHeroSection data={response?.data?.pageData?.heroSection} />
      <ProductRepayment data={response?.data?.pageData?.repaymentData} />
      <ProductTermLoans data={response?.data?.pageData?.productTermLoanSection} /> 
      <ProductInstantAccess data={response?.data?.pageData?.instantAccess} />
      <ProductFAQ data={response?.data?.pageData?.faqSection} />
      <PromoSection data={response?.data?.pageData?.promoSection} />
      </Suspense>


      {/* <GlobalHeroSection data={heroSection} />
      <ProductRepayment data={repaymentData} />
      <ProductTermLoans />
      <ProductInstantAccess />
      <ProductFAQ />
      <PromoSection data={promo} /> */}
    </>
  );
}

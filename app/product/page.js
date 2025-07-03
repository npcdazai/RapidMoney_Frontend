import React from "react";
import Header from "@/components/head/head";
import homePageData from "@/json/homepage/home.json";
import PromoSection from "@/components/promo-section/promoSection";
import GlobalHeroSection from "@/components/global-hero-section/heroSection";
import ProductFAQ from "@/components/product-faq/productFAQ";
import ProductRepayment from "@/components/product-repayment/productRepayment";
import ProductTermLoans from "@/components/product-term-loans/productTermLoans";
import ProductInstantAccess from "@/components/product-instant-access/productInstantAccess";
import productPageData from "@/json/product/product.json"

export default function page() {
  const header = homePageData.header;
  const promo = homePageData.promoSection;
  const heroSection = homePageData.heroSection;
  const repaymentData = productPageData.repaymentSection
  return (
    <>
      <Header isDark={true} data={header} />
      <GlobalHeroSection data={heroSection} />
      <ProductRepayment data={ repaymentData} />
      <ProductTermLoans />
      <ProductInstantAccess />
      <ProductFAQ />
      <PromoSection data={promo} />
    </>
  );
}

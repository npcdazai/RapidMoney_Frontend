import React from "react";
import Header from "@/components/head/head";
import homePageData from "@/json/homepage/home.json";
import PromoSection from "@/components/promo-section/promoSection";
import GlobalHeroSection from "@/components/global-hero-section/heroSection";
import ProductFAQ from "@/components/product-faq/productFAQ";

export default function page() {
  const header = homePageData.header;
  const promo = homePageData.promoSection;
  const heroSection = homePageData.heroSection;
  return (
    <>
      <Header isDark={true} data={header} />
      <GlobalHeroSection data={heroSection} />
      <ProductFAQ />
      <PromoSection data={promo} />
    </>
  );
}

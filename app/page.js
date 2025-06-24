import Header from "@/components/head/head";
import HeroSection from "@/components/hero-section/heroSection";
import PromoSection from "@/components/promo-section/promoSection";
import Image from "next/image";
import homePageData from "@/json/homepage/home.json";
import FaqSection from "@/components/faq/faq-section";
import NewsSection from "@/components/news-section/news-section";
import PartnersSection from "@/components/partner-section/partnerSection";
import Benefits from "@/components/our-benefits-section/ourBenefits";
import LoanStep from "@/components/loan-step-section/loanStep";

console.log(homePageData)
const header = homePageData.header;
const promo = homePageData.promoSection;
const faqSteps = homePageData.faqSteps;
const newsData = homePageData.newsSection;
const partner = homePageData.partnerSection;
const benefitsData = homePageData.benefitSection;
const loanData = homePageData.loanStep
export default function Home() {

  return (
    <>
      <Header isDark={true} data={header} />
      {/* <HeroSection /> */}
      <Benefits data={benefitsData} />
      <LoanStep data={ loanData} />
      <PromoSection data={promo} />
      <NewsSection data={newsData} />
      <PartnersSection data={partner} />
      <FaqSection data={faqSteps} />
      {/* <Header isDark={!true } /> */}
    </>

  );
}

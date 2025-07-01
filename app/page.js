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
import PersonalLoan from "@/components/personal-loan-section/personalLoan";
import Testimonials from "@/components/testimonial-section/TestiMonials";
import HeroBgSection from "@/components/hero-bg-section/heroBgSection";
import HeroSwiperWrapper from "@/components/hero-section-swiper-wrapper/heroSwiperWrapper";


// console.log(homePageData);
const header = homePageData.header;
const promo = homePageData.promoSection;
const faqSteps = homePageData.faqSteps;
const newsData = homePageData.newsSection;
const partner = homePageData.partnerSection;
const benefitsData = homePageData.benefitSection;
const loanData = homePageData.loanStep;
const heroSection = homePageData.heroSection;
const personalLoan = homePageData.personalLoanSection;
const testimonialsData = homePageData.testimonialSection;
export default function Home() {

  return (
    <>
      <Header isDark={true} data={header} />
      {/* <HeroSection data={heroSection} /> */}
      {/* <HeroBgSection/> */}
      <HeroSwiperWrapper />
      <Benefits data={benefitsData} />
      <PersonalLoan data={personalLoan}/>
      <LoanStep data={ loanData} />
      <PartnersSection data={partner} />
      <NewsSection data={newsData} />
      {/* <Testimonials data={testimonialsData} /> */}
      <FaqSection data={faqSteps} />
      <PromoSection data={promo} />
      {/* <Header isDark={!true } /> */}
    </>

  );
}

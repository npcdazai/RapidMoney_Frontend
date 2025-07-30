// import Header from "@/components/head/head";
// import HeroSection from "@/components/hero-section/heroSection";
import PromoSection from "@/components/promo-section/promoSection";
// import Image from "next/image";
// import homePageData from "@/json/homepage/home.json";
import FaqSection from "@/components/faq/faq-section";
import NewsSection from "@/components/news-section/news-section";
import PartnersSection from "@/components/partner-section/partnerSection";
import Benefits from "@/components/our-benefits-section/ourBenefits";
import LoanStep from "@/components/loan-step-section/loanStep";
import PersonalLoan from "@/components/personal-loan-section/personalLoan";
// import Testimonials from "@/components/testimonial-section/TestiMonials";
import HeroSwiperWrapper from "@/components/hero-section-swiper-wrapper/heroSwiperWrapper";
import endpoints from "@/constants/endpoints";
import { Suspense } from "react";
import Loading from "./loading";
import DynamicHead from "@/components/head/dynamicHead";
import defaultSEO from "@/constants/defaultSEO";


// console.log(homePageData);
// const header = homePageData.header;
// const promo = homePageData.promoSection;
// const faqSteps = homePageData.faqSteps;
// const newsData = homePageData.newsSection;
// const partner = homePageData.partnerSection;
// const benefitsData = homePageData.benefitSection;
// const loanData = homePageData.loanStep;
// const heroSection = homePageData.heroSection;
// const personalLoan = homePageData.personalLoanSection;
// const testimonialsData = homePageData.testimonialSection;


const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/home",
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
// console.log(process.env.NEXT_PUBLIC_ENVIRONMENT)
export async function generateMetadata() {
  const res = await getCMSPageBySlug();
  const data = res?.data?.pageData?.seoSetting;
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = process.env.NEXT_PUBLIC_REDIRECT_URL;

  const title =
    isProduction && data?.meta_title
      ? data.meta_title
      : defaultSEO.home.title;

  const description =
    isProduction && data?.meta_description
      ? data.meta_description
      : defaultSEO.home.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.home.featureImage;

  return {
    title,
    description,
    robots: isProduction
      ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      : "noindex, nofollow",
    alternates: {
      canonical: isProduction ? canonicalURL : undefined,
    },
    openGraph: {
      title,
      description,
      siteName: defaultSEO.defaultSiteName,
      locale: defaultSEO.defaultLocale,
      type: defaultSEO.defaultType,
      images: [
        {
          url: featureImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [featureImage],
    },
  };
}

export default async function Home() {

  const response = await getCMSPageBySlug();
  // console.log(response);

  return (
    // <>
    //   <Header isDark={true} data={header} />
    //   <HeroSection data={heroSection} />
    //   <HeroBgSection/>
    //   <HeroSwiperWrapper />
    //   <Benefits data={benefitsData} />
    //   <PersonalLoan data={personalLoan}/>
    //   <LoanStep data={ loanData} />
    //   <PartnersSection data={partner} />
    //   <NewsSection data={newsData} />
    //   <Testimonials data={testimonialsData} />
    // <FaqSection data={faqSteps} />
    //   <PromoSection data={promo} />
    // </>
    <>
      <Suspense fallback={<Loading />}>
        <DynamicHead isDark={true} />

        <HeroSwiperWrapper data={response?.data?.pageData?.heroSlides} />
        <Benefits data={response?.data?.pageData?.benefitSection} />
        <PersonalLoan data={response?.data?.pageData?.personalLoanSection} />
        <LoanStep data={response?.data?.pageData?.loanStep} />
        <PartnersSection data={response?.data?.pageData?.partnerSection} />
        <NewsSection data={response?.data?.pageData?.newsSection} />
        {/* <FaqSection data={faqSteps} /> */}
        <FaqSection data={response?.data?.pageData?.faqSection} />
        <PromoSection  />
      </Suspense>
    </>

  );
}

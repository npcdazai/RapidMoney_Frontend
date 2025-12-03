// import Header from "@/components/head/head";
// import HeroSection from "@/components/hero-section/heroSection";
import PromoSection from "@/components/promo-section/promoWrapper";
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
import { notFound } from "next/navigation";
import Script from "next/script";

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
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/home",
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!data?.data?.pageData) {
      notFound();
    }
    return data;
  } catch (error) {
    console.log("API call failed: ", error);
    notFound();
    // return null;
  }
};

export async function generateMetadata() {
  const res = await getCMSPageBySlug();
  const data = res?.data?.pageData?.seoSetting;
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = "";

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
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: isProduction ? canonicalURL : undefined,
    },
    other: {
      "google-site-verification": "twL_GolMQqEgollqmMmpUNK8CAqnO1iN1NgPXT9jbVE",
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
      <Script id="main-schema" type="application/ld+json">
        {`
 { "@context": "https://schema.org",
 "@type": "Organization",
 "name": "Rapid Money",
 "legalName" : "MoneyTime Technology Solutions Private Limited",
 "url": "https://www.rapidmoney.in/",
 "logo": "https://www.rapidmoney.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdark_rapid_money_logo.004d553a.png&w=640&q=75",
 "description": "Access instant, affordable personal loans anytime with RapidMoney. Transparent terms, fast approval, flexible repayment—see what you qualify for now.",
 "foundingDate": "2025",
 "founders": [
 {
 "@type": "Person",
 "name": "Chintan Panchmatiya"
 },
 {
 "@type": "Person",
 "name": "Hemali Bhatt"
 } ],
 "address": {
 "@type": "PostalAddress",
 "streetAddress": "Swami Vivekananda Rd",
 "extendedAddress": "902, 9th Floor, Shubhjyoti Building, Datta Park, Borivali West",
 "addressLocality": "Mumbai",
 "addressRegion": "Maharashtra",
 "postalCode": "400092",
 "addressCountry": "India"
 },
 "contactPoint": {
 "@type": "ContactPoint",
 "contactType": "customer support",
 "email": "support@rapidmoney.com"
 },
 "sameAs": [ 
 "https://www.linkedin.com/company/rapidmoney",
 "https://x.com/Rapidmoney2025",
 "https://x.com/Rapidmoney2025",
 "https://www.instagram.com/officialrapidmoney",
 "https://www.facebook.com/rapidmoney"
 ]}
`}
      </Script>
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
        <PromoSection />
      </Suspense>
    </>
  );
}

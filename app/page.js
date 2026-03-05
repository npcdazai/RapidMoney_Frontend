// import Header from "@/components/head/head";
// import HeroSection from "@/components/hero-section/heroSection";
import PromoSection from "@/components/promo-section/promoWrapper";
// import Image from "next/image";
// import homePageData from "@/json/homepage/home.json";

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
import FaqSection from "@/components/faqs/faq-section";
import { getStructuredDataScripts, schemaToJsonLd } from "@/utils/structuredData";


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
    console.log(data?.data?.pageData?.faqSection, "data")
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

const getDynamicBlogs = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_blogs,
      {
        cache: "no-store",
      }
    );

    const data = await response.json();
    console.log("Blogs API Response:", data);
    return data;
  } catch (error) {
    console.log("Blog API call failed: ", error);
    return { data: [] };
  }
};


export async function generateMetadata() {
  const res = await getCMSPageBySlug();
  const data = res?.data?.pageData?.seoSetting;
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = "https://www.rapidmoney.in/";

  const title = data?.meta_title
    ? data.meta_title
    : defaultSEO.home.title;


  const description = data?.meta_description
    ? data.meta_description
    : defaultSEO.home.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO.home.featureImage;

  return {
    title,
    description,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalURL,
    },
    other: {
      "google-site-verification": "twL_GolMQqEgollqmMmpUNK8CAqnO1iN1NgPXT9jbVE",
      keywords:
        "Rapid Money, RapidMoney, Rapid Money Personal Loans, Rapid Money Loan",
    },
    openGraph: {
      title,
      description,
      siteName: defaultSEO.defaultSiteName,
      url: "https://www.rapidmoney.in/",
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
  const blogsResponse = await getDynamicBlogs();
  const pageData = response?.data?.pageData || {};
  const uploadedSchemas = getStructuredDataScripts(pageData?.schemaData);

  console.log(response, "HOME FAQ");

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
      {uploadedSchemas.length ? (
        uploadedSchemas.map((schema, index) => (
          <Script
            key={`home-schema-${index + 1}`}
            id={`home-schema-${index + 1}`}
            type="application/ld+json"
          >
            {schemaToJsonLd(schema)}
          </Script>
        ))
      ) : (
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
          <Script id="FAQ-schema" type="application/ld+json">
        {`
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is RapidMoney?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "RapidMoney is a customer-focused loan services provider company committed to making access to credit fast, simple, and hassle-free. Established with the goal of empowering individuals and businesses, RapidMoney offers flexible and dependable loan solutions designed to fit diverse financial needs."
    }
  },{
    "@type": "Question",
    "name": "Is RapidMoney a bank or an NBFC?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No. We are the Loan Service Provider"
    }
  },{
    "@type": "Question",
    "name": "Why Should I borrow from RapidMoney?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Borrow from us for quick approvals, hassle-free documentation, and instant disbursal of funds. Our short-term loans offer a seamless and efficient solution for your immediate financial needs"
    }
  },{
    "@type": "Question",
    "name": "I have never taken a loan before; can I apply for a personal loan from rapidmoney?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can apply for a personal loan with us even if you're a first-time borrower. We'll guide you through a simple and quick process to meet your financial needs"
    }
  },{
    "@type": "Question",
    "name": "I don't own a smartphone; can I apply for a loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, You can apply for a loan from your laptop or desktop computer through our www.rapidmoney.in website"
    }
  },{
    "@type": "Question",
    "name": "How is RapidMoney different from other apps?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "RapidMoney stands out from other loan apps with its quick approval process, transparent terms, and personalized loan offers. Experience faster disbursals and better eligibility powered by smart credit analysis."
    }
  },{
    "@type": "Question",
    "name": "What if I have to raise the complaint?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can raise a complaint with RapidMoney, our dedicated support team is available through the app or customer care channels. We ensure quick resolution for all personal loan-related queries and issues with our email support too, care@rapidmoney.in or support@rapidmoney.in"
    }
  },{
    "@type": "Question",
    "name": "What is my Loan eligibility/How much can I borrow?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Your loan eligibility is determined by our system based on specific criteria. A good repayment history can enhance your eligibility over time, unlocking better loan options."
    }
  },{
    "@type": "Question",
    "name": "What documents are required to apply for a loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After downloading our app, you'll need to upload required documents for KYC, including salary slips, bank statements / EPFO, and PAN details. These documents are necessary to process your loan application as per RBI guidelines"
    }
  },{
    "@type": "Question",
    "name": "I am getting my salary via cash, can i apply for the same?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Currently, we support personal loan repayments through secure online payment modes only. This ensures fast, convenient, and hassle-free EMI payments for all users."
    }
  },{
    "@type": "Question",
    "name": "My loan got rejected, How & When can I re-apply for a loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You’re eligible to re-apply for a loan after 90 days. Please note that this duration may vary based on the policies of our lending partners"
    }
  },{
    "@type": "Question",
    "name": "How can I increase my chances of getting a personal loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "To qualify for a loan, you must be between 23 and 60 years of age. Your credit score, repayment history, and current employment status also play a key role in determining your loan eligibility and approval terms."
    }
  },{
    "@type": "Question",
    "name": "What is an instant personal loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "An instant personal loan provides quick access to funds through a completely digital process. You receive money directly in your bank account after online approval without visiting any branch."
    }
  },{
    "@type": "Question",
    "name": "How does a personal loan work?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You receive an approved amount upfront and repay it through fixed monthly installments. The EMI includes principal and interest portions based on your chosen loan tenure and applicable rate."
    }
  },{
    "@type": "Question",
    "name": "How quickly can I receive funds from an instant personal loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The loan amount transfers to your registered bank account within a few working hours after final approval and document verification."
    }
  },{
    "@type": "Question",
    "name": "How does RapidMoney ensure the security of my information?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We use encryption, secure servers and multiple authentication layers to protect your data. Our systems comply with guidelines for financial information security."
    }
  },{
    "@type": "Question",
    "name": "What is the minimum income requirement for a personal loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Individuals need a minimum monthly income of above ₹ 20,000. On the other hand, we do not provide personal loans to self-employed individuals."
    }
  },{
    "@type": "Question",
    "name": "Are there fees for early repayment of loans?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A foreclosure charge may apply if you close your loan too soon."
    }
  },{
    "@type": "Question",
    "name": "What is the typical repayment tenure for personal loans?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We have a repayment tenure of 3 to 6 months for EMI loans."
    }
  },{
    "@type": "Question",
    "name": "Can I apply for a personal loan jointly with my spouse?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Currently, RapidMoney doesn't accept joint loan applications."
    }
  },{
    "@type": "Question",
    "name": "Which platforms can be used to apply for personal loans?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Personal loan functionality can be availed on Android & iOS."
    }
  },{
    "@type": "Question",
    "name": "I've recently started a new job. Can I still get a personal loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can apply for a personal loan even after starting a new job. Loan approval depends on meeting the lender’s eligibility criteria, including income, credit score, and employment stability."
    }
  },{
    "@type": "Question",
    "name": "What are the benefits of having a higher credit score?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A high credit score boosts your personal loan approval chances by showcasing strong repayment history. It can also help you get lower interest rates, higher loan amounts, and reduced charges."
    }
  },{
    "@type": "Question",
    "name": "What is a credit score?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A credit score is a three-digit number that reflects your creditworthiness and repayment behavior. Lenders use it to evaluate your eligibility and reliability before approving a personal loan."
    }
  },{
    "@type": "Question",
    "name": "How is my credit limit decided?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Your credit limit is determined by the authenticity of your KYC documents and your repayment history. It is also influenced by the credit policies of our lending partners."
    }
  },{
    "@type": "Question",
    "name": "What is the Annual Percentage Rate (APR)?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "APR (Annual Percentage Rate) shows the total yearly cost of a loan, including interest and fees. It helps borrowers understand the true cost of borrowing and make informed loan decisions."
    }
  },{
    "@type": "Question",
    "name": "Why do you need my bank account details?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We require your bank account details to securely transfer the approved personal loan amount directly to your account. This ensures a smooth and hassle-free disbursement process."
    }
  },{
    "@type": "Question",
    "name": "Can I get my loan cancelled?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can cancel your personal loan within the cooling-off period, as per our lending partner’s policies. For detailed terms and conditions, simply download your loan agreement."
    }
  },{
    "@type": "Question",
    "name": "How can I track my repayment schedule of the loan?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can view your personal loan details by logging into the RapidMoney app and selecting the Personal Loan icon. Your repayment schedule is also clearly outlined in the loan agreement documents"
    }
  },{
    "@type": "Question",
    "name": "Can I pay before the EMI date?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Currently, we support personal loan repayments through secure online payment modes only. This ensures fast, convenient, and hassle-free EMI payments for all users."
    }
  }]
}
    `}
          </Script>
        </>
      )}
      <Suspense fallback={<Loading />}>
        <DynamicHead isDark={true} />

        <HeroSwiperWrapper data={response?.data?.pageData?.heroSlides} />
        <Benefits data={response?.data?.pageData?.benefitSection} />
        <PersonalLoan data={response?.data?.pageData?.personalLoanSection} />
        <LoanStep data={response?.data?.pageData?.loanStep} />
        <PartnersSection data={response?.data?.pageData?.partnerSection} />
        <NewsSection data={{
          ...response?.data?.pageData?.newsSection,
          relatedBlogsData: blogsResponse?.data?.data || []
        }} />
        {/* <FaqSection data={faqSteps} /> */}

        <FaqSection data={response?.data?.pageData?.faqSection} />
        <PromoSection />
      </Suspense>
    </>
  );
}

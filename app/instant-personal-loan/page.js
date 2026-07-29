import React, { Suspense } from "react";
// import Header from "@/components/head/head";
// import homePageData from "@/json/homepage/home.json";
import PromoSection from "@/components/promo-section/promoWrapper";
import GlobalHeroSection from "@/components/global-hero-section/heroSection";
import ProductFAQ from "@/app/product-faq/page";
import ProductRepayment from "@/components/product-repayment/productRepayment";
import ProductTermLoans from "@/components/product-term-loans/productTermLoans";
import ProductInstantAccess from "@/components/product-instant-access/productInstantAccess";
// import productPageData from "@/json/product/product.json"
import endpoints from "@/constants/endpoints";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import defaultSEO from "@/constants/defaultSEO";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/BreadCrumb";
import Script from "next/script";
import { getStructuredDataScripts, schemaToJsonLd } from "@/utils/structuredData";

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/product",
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
    console.error("API call failed: ", error);
    notFound();
    // return null;
  }
};

export async function generateMetadata() {
  const res = await getCMSPageBySlug();
  const data = res?.data?.pageData?.seoSetting;
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = "https://www.rapidmoney.in/instant-personal-loan";

  const title = data?.meta_title
    ? data?.meta_title
    : defaultSEO?.product?.title;


  const description = data?.meta_description
    ? data?.meta_description
    : defaultSEO?.product?.description;

  const featureImage =
    data?.feature_image?.[0]?.url || defaultSEO?.product?.featureImage;

  return {
    title,
    description,
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: canonicalURL,
    },
    other: {
    keywords:
      "Rapid Money, RapidMoney, Rapid Money Personal Loans, Rapid Money Loan",
    },
    openGraph: {
      title,
      description,
      url: "https://www.rapidmoney.in/instant-personal-loan",
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

export default async function page() {
  const response = await getCMSPageBySlug();
  const pageData = response?.data?.pageData || {};
  const uploadedSchemas = getStructuredDataScripts(pageData?.schemaData);

  // const header = homePageData.header;
  // const promo = homePageData.promoSection;
  // const heroSection = homePageData.heroSection;
  // const repaymentData = productPageData.repaymentSection

  return (
    <>
      {uploadedSchemas.length ? (
        uploadedSchemas.map((schema, index) => (
          <Script
            key={`product-schema-${index + 1}`}
            id={`product-schema-${index + 1}`}
            type="application/ld+json"
          >
            {schemaToJsonLd(schema)}
          </Script>
        ))
      ) : (
        <>
          <Script id="product-schema" type="application/ld+json">
            {`
{
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Instant Personal Loan",
  "description": "Explore RapidMoney's digital loan offerings tailored for your needs. Quick disbursal, flexible repayment, and 100% online application process.",
  "brand": {
    "@type": "Organization",
    "name": "Rapid Money",
    "url": "https://www.rapidmoney.in/"
  },
  "url": "https://www.rapidmoney.in/instant-personal-loan"
  }
}
`}
          </Script>
          <Script id="productFAQ-schema" type="application/ld+json">
            {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
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
    "name": "How does Rapid Money ensure the security of my information?",
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
      "text": "What is the typical repayment tenure for personal loans?"
    }
  },{
    "@type": "Question",
    "name": "Can I apply for a personal loan jointly with my spouse?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Currently, Rapid Money doesn't accept joint loan applications."
    }
  }]
}`}
          </Script>
        </>
      )}
      <Suspense fallback={<Loading />}>
        {/* <Header isDark={true} data={header} /> */}
        <DynamicHead isDark={true} />

        <GlobalHeroSection data={response?.data?.pageData?.heroSection} />
        <Breadcrumb />
        <ProductRepayment data={response?.data?.pageData?.repaymentData} />
        {/* Content is hardcoded in the component (not CMS-driven). Edit values in components/product-term-loans/productTermLoans.js */}
        <ProductTermLoans />
        <ProductInstantAccess data={response?.data?.pageData?.instantAccess} />
        <ProductFAQ respone={response} />
        <PromoSection />
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

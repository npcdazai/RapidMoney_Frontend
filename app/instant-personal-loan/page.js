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
    console.log("API call failed: ", error);
    notFound();
    // return null;
  }
};

export async function generateMetadata() {
  const res = await getCMSPageBySlug();
  const data = res?.data?.pageData?.seoSetting;
  const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === "production";
  const canonicalURL = "https://www.rapidmoney.in/product";

  const title = "Apply Personal Loan Online in India at Low Interest | Rapid Money";

  const description = "Apply online personal loan in India with low interest and instant approval. Check personal loan eligibility and get instant cash loan online from Rapid Money.";

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
      url: "https://www.rapidmoney.in/",
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
  console.log(response);

  // const header = homePageData.header;
  // const promo = homePageData.promoSection;
  // const heroSection = homePageData.heroSection;
  // const repaymentData = productPageData.repaymentSection

  return (
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
  "url": "https://www.rapidmoney.in/product"
  }
}
`}
      </Script>
      <Suspense fallback={<Loading />}>
        {/* <Header isDark={true} data={header} /> */}
        <DynamicHead isDark={true} />

        <GlobalHeroSection data={response?.data?.pageData?.heroSection} />
        <Breadcrumb />
        <ProductRepayment data={response?.data?.pageData?.repaymentData} />
        <ProductTermLoans
          data={response?.data?.pageData?.productTermLoanSection}
        />
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

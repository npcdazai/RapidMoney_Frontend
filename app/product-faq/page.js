import React, { Suspense } from "react";

import ProductFAQ from "@/components/product-faq/productFAQ";

// import productPageData from "@/json/product/product.json"
import endpoints from "@/constants/endpoints";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import defaultSEO from "@/constants/defaultSEO";
import { notFound } from "next/navigation";
import Script from "next/script";

export default async function page({ respone }) {
  console.log(respone?.data?.pageData?.faqSection)
  return (
    <>
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
      <Suspense fallback={<Loading />}>
        <ProductFAQ data={respone?.data?.pageData?.faqSection} />
      </Suspense>
    </>
  );
}

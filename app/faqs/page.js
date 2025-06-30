import Header from '@/components/head/head'
import React from 'react'
import homePageData from "@/json/homepage/home.json";
import faqData from "@/json/faqs/faqs.json"
import FaqSection from '@/components/faq/faq-section';

const header = homePageData.header;
const faqSteps = faqData?.faqSteps

export default function page() {
  return (
    <>
          <Header data={header} />
          <FaqSection data={faqSteps}/>
    </>
  )
}

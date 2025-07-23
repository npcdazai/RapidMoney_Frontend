import Header from '@/components/head/head'
import React, { Suspense } from 'react'
import homePageData from "@/json/homepage/home.json";
import faqData from "@/json/faqs/faqs.json"
import FaqSection from '@/components/faq/faq-section';
import endpoints from '@/constants/endpoints';
import Loading from '../loading';
import DynamicHead from '@/components/head/dynamicHead';

const header = homePageData.header;
const faqSteps = faqData?.faqSteps


const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/faq",
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


export default async function page() {

  const response = await getCMSPageBySlug();
  console.log(response)


  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
         <DynamicHead  />
        <FaqSection data={response?.data?.pageData?.faqSection} />
      </Suspense>
    </>
  )
}

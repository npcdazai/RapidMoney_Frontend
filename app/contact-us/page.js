import ContactUsForm from '@/components/contact-us-form/ContactUsForm'
import Header from '@/components/head/head'
import contactData from "@/json/contactus/contactus.json"
import React, { Suspense } from 'react'
import homePageData from "@/json/homepage/home.json";
import ContactMap from '@/components/contact-us-map/ContactMap';
import endpoints from '@/constants/endpoints';
import Loading from '../loading';
import DynamicHead from '@/components/head/dynamicHead';

const header = homePageData.header;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/contact-us",
      { next: { revalidate: 3600 } }
    );

    return await response.json();
  } catch (error) {
    console.log("API call failed: ", error);
    return null;
  }
};


export default async function page() {
  const response = await getCMSPageBySlug();
  console.log(response);
  return (
    <>
      {/* <ContactUs /> */}
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
         <DynamicHead  />
        <ContactUsForm data={response?.data?.pageData?.contactSection} />
        {/* <ContactUsForm data={contactData} /> */}
        <ContactMap />
      </Suspense>
    </>
  )
}

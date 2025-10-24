import ContactUsForm from '@/components/contact-us-form/ContactUsForm'
import Header from '@/components/head/head'
import contactData from "@/json/contactus/contactus.json"
import React, { Suspense } from 'react'
import homePageData from "@/json/homepage/home.json";
// import ContactMap from '@/components/contact-us-map/ContactMap';
import Loading from '../loading';

const header = homePageData.header;

export default async function page() {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header data={header} />
        <ContactUsForm data={contactData} />
        {/* <ContactMap /> */}
      </Suspense>
    </>
  )
}

import ContactUsForm from '@/components/contact-us-form/ContactUsForm'
import Header from '@/components/head/head'
import contactData from "@/json/contactus/contactus.json"
import React from 'react'
import homePageData from "@/json/homepage/home.json";
import ContactMap from '@/components/contact-us-map/ContactMap';

const header = homePageData.header;

export default function page() {
  return (
    <>
      {/* <ContactUs /> */}
      <Header data={header}/>
      <ContactUsForm data={contactData} />
      <ContactMap />
    </>
  )
}

import Header from '@/components/head/head'
import React from 'react'
import homePageData from "@/json/homepage/home.json";
import partnerData from "@/json/partner/partner.json"
import LendingPartners from '@/components/lending-partners-section/LendingPartners';
import PromoSection from '@/components/promo-section/promoSection';


const header = homePageData.header;
const promo = homePageData.promoSection;


export default function page() {
  return (
    <>
      <Header data={header} />
      <LendingPartners data={partnerData} />
      <PromoSection data={promo}/>
    </>
  )
}

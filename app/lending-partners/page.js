import Header from '@/components/head/head'
import React, { Suspense } from 'react'
import homePageData from "@/json/homepage/home.json";
import partnerData from "@/json/partner/partner.json"
import LendingPartners from '@/components/lending-partners-section/LendingPartners';
import PromoSection from '@/components/promo-section/promoSection';
import endpoints from '@/constants/endpoints';
import Loading from '../loading';


const header = homePageData.header;
const promo = homePageData.promoSection;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/lending-partners",
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
  console.log(response)

  return (
    <>
       <Suspense fallback={<Loading />}>
      <Header data={header} />
      {/* <LendingPartners data={partnerData} /> */}
      <LendingPartners data={response?.data?.pageData?.partners} />
        <PromoSection data={response?.data?.pageData?.promoSection} />
        </Suspense>
    </>
  )
}

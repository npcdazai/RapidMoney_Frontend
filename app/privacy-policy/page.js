import Header from "@/components/head/head";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import endpoints from "@/constants/endpoints";
import homePageData from "@/json/homepage/home.json";
import privacyData from "@/json/privacy/privacy.json"
import { Suspense } from "react";
import Loading from "../loading";


const header = homePageData.header;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/privacy-policy",
      { next: { revalidate: 3600 } }
    );

    return await response.json();
  } catch (error) {
    console.log("API call failed: ", error);
    return null;
  }
};


export default async function Home() {
  const response = await getCMSPageBySlug();
  console.log(response)


  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header data={header} />
        {/* <PrivacyPolicy data={response?.data?.pageData} /> */}
        <PrivacyPolicy data={privacyData} />
      </Suspense>
    </>

  );
}

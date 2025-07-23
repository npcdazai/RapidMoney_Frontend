
import endpoints from "@/constants/endpoints";
import homePageData from "@/json/homepage/home.json";
import { Suspense } from "react";
import Loading from "../loading";
import DynamicHead from "@/components/head/dynamicHead";
import Disclaimer from "@/components/disclaimer-section/disclaimer";


const header = homePageData.header;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/disclaimer",
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


export default async function Home() {
  const response = await getCMSPageBySlug();
  console.log(response?.data?.pageData)


  return (
    <>
      <Suspense fallback={<Loading />}>
        <DynamicHead />
        <Disclaimer data={response?.data?.pageData?.disclaimerSection}/>
      </Suspense>
    </>

  );
}

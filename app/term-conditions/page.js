import Header from "@/components/head/head";
import TermCondition from "@/components/term-conditions/TermCondition";
import termJson from "@/json/termConditions/term.json"

import homePageData from "@/json/homepage/home.json";
import { Suspense } from "react";
import Loading from "../loading";


const header = homePageData.header;

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/term-conditions",
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
          <TermCondition data={termJson}/>
      </Suspense>
    </>

  );
}

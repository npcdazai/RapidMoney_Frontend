import Loading from "@/app/loading";
import Header from "@/components/head/head";

import endpoints from "@/constants/endpoints";
import { Suspense } from "react";


const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/header",
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

export default async function DynamicHead({ isDark }) {

  const response = await getCMSPageBySlug();
  // console.log(response?.data?.pageData?.header)

  return (

    <>
      <Suspense fallback={<Loading />}>
      <Header data={response?.data?.pageData?.header} isDark={isDark} />
      </Suspense>
    </>

  );
}

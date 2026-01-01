// import React, { Suspense } from "react";
// // import homePageData from "@/json/homepage/home.json"; 
// import endpoints from "@/constants/endpoints";
// import Loading from "../loading";
// import DynamicHead from "@/components/head/dynamicHead";

// // import { notFound } from "next/navigation";
// import Breadcrumb from "@/components/BreadCrumb";
// import EmiCalculator from "@/components/EmiCalculator";

// // const getCMSPageBySlug = async () => {
// //   try {
// //     const response = await fetch(
// //       process.env.NEXT_PUBLIC_API_URL + endpoints.get_cms_page + "/emi-calculator",
// //       { cache: "no-store" }
// //     );

// //     const data = await response.json();
// //     if (!data?.data?.pageData) notFound();

// //     return data;
// //   } catch (error) {
// //     console.log("API call failed: ", error); 
// //     notFound();
// //   }
// // };

// export default async function Page() {
//   // const response = await getCMSPageBySlug();

//   return (
//     <>
//       <Suspense fallback={<Loading />}>
//         <DynamicHead />
//         <Breadcrumb />
//     <EmiCalculator/>
//       </Suspense>
//     </>
//   );
// }

import Header from "@/components/head/head";
import React, { Suspense } from "react";
import homePageData from "@/json/homepage/home.json";
import BlogDetails from "@/components/blog-details-section/BlogDetails";
import BlogDetailsData from "@/json/blogdetails/blogdetails.json";
import PromoSection from "@/components/promo-section/promoSection";
import endpoints from "@/constants/endpoints";
import Loading from "@/app/loading";
import DynamicHead from "@/components/head/dynamicHead";

const header = homePageData.header;
const promo = homePageData.promoSection;

const getBlog = async (slug) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        endpoints.get_blogs_by_slug +
        `/${slug}`,
       {
        next: { revalidate: 300 }, // 300 seconds = 5 minutes
      }
    );

    // console.log("Response from APIs:", response.json()?.status, process.env.NEXT_PUBLIC_API_URL +
    //     endpoints.get_blogs_by_slug +
    //     `/${slug}`);

    return await response?.json();
  } catch (error) {
    console.log("API call failed: ", error);
    return null;
  }
};

// export async function generateMetadata({ params }) {
//   const response = await getBlog(params.slug);

//   console.log("Response from API:", response);

//   if (!response || !response.data) {
//     return {
//       title: "Page Not Found",
//       description: "This page does not exist.",
//       robots: "noindex, nofollow",
//     };
//   }

//   const seo_setting = {
//     meta_title: response?.data?.seo_setting?.meta_title,
//     meta_description: response?.data?.seo_setting?.meta_description,
//   };

//   const isProduction =  process.env.NEXT_PUBLIC_ENVIRONMENT === "production";

//   let canonicalURL = `${process.env.NEXT_PUBLIC_REDIRECT_URL}/blog/${params.slug}`;

//   const featureImage =
//     response?.data?.feature_image?.[0]?.url ||
//     defaultSEO?.blog?.featureImage;

//   return {
//     title: isProduction
//       ? seo_setting?.meta_title || defaultSEO?.blog?.title
//       : defaultSEO?.blog?.title,
//     description: isProduction
//       ? seo_setting?.meta_description || defaultSEO?.blog?.description
//       : defaultSEO?.blog?.description,
//     robots:  isProduction
//         ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
//         : "noindex, nofollow",
//     alternates: {
//       canonical: isProduction ? canonicalURL : undefined,
//     },
//     keywords: response?.data?.tags,
//     openGraph: {
//       title: isProduction
//         ? seo_setting?.meta_title || defaultSEO?.blog?.title
//         : defaultSEO?.product?.title,
//       description: isProduction
//         ? seo_setting?.meta_description || defaultSEO?.product?.description
//         : defaultSEO?.product?.description,
//       canonical: isProduction ? canonicalURL : undefined,
//       siteName: defaultSEO?.defaultSiteName,
//       images: [
//         {
//           url: isProduction ? featureImage : undefined,
//           // width: 1200,
//           // height: 630,
//           alt: isProduction ? seo_setting?.meta_title || defaultSEO?.blog?.title : undefined,
//         },
//       ],
//       locale: defaultSEO?.defaultLocale,
//       type: 'article',
//       publishedTime: response?.data?.created_at,
//       modifiedTime: response?.data?.updated_at,
//     authors: response?.data?.auther?.name ? [response?.data?.auther?.name] : [],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: isProduction ? seo_setting?.meta_title || defaultSEO?.blog?.title : undefined,
//       description: isProduction
//         ? seo_setting?.meta_description || defaultSEO?.product?.description
//         : undefined,
//       images: isProduction ? [featureImage] : [],
//     },
//   };
// }

const Page = async ({ params }) => {
  const { slug } = params;

  console.log("Slug from params:", slug);

  const response = await getBlog(slug);

  console.log("Response from API:", response);
  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <Header data={header} /> */}
        <DynamicHead  />
        <BlogDetails data={response?.data} />
        <PromoSection />
      </Suspense>
    </>
  );
};
export default Page;

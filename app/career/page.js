import CareerSection from "@/components/career-section/CareerSection";
import Header from "@/components/head/head";
import JobOpening from "@/components/job-openings/JobOpening";
import LifeAtRapidMoney from "@/components/life-at-rapidmoney/LifeAtRapidMoney";
import endpoints from "@/constants/endpoints";
import careerData from "@/json/career/career.json";
import headerData from "@/json/header/header.json"
import Loading from "../loading";
import { Suspense } from "react";

const career = careerData.careerHeroSection
const lifeRapidData = careerData.lifeAtRapidMoney
const jobData = careerData.jobOpenings
const header = headerData.header

const getCMSPageBySlug = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
      endpoints.get_cms_page +
      "/career",
      { next: { revalidate: 3600 } }
    );

    return await response.json();
  } catch (error) {
    console.log("API call failed: ", error);
    return null;
  }
};


export default async function CareerPage() {
  const response = await getCMSPageBySlug();
  console.log(response)
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header data={header} />
        <CareerSection data={response?.data?.pageData?.careerHeroSection} />
        <LifeAtRapidMoney data={response?.data?.pageData?.lifeAtRapidMoney} />
        <JobOpening data={response?.data?.pageData?.jobOpenings} />
      </Suspense>


      {/* <CareerSection data={career} /> */}
      {/* <LifeAtRapidMoney data={lifeRapidData} />
            <JobOpening data={jobData} /> */}
    </>
  );
}

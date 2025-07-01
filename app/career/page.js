import CareerSection from "@/components/career-section/CareerSection";
import Header from "@/components/head/head";
import JobOpening from "@/components/job-openings/JobOpening";
import LifeAtRapidMoney from "@/components/life-at-rapidmoney/LifeAtRapidMoney";
import careerData from "@/json/career/career.json";
import headerData from "@/json/header/header.json"

const career = careerData.careerHeroSection
const lifeRapidData = careerData.lifeAtRapidMoney
const jobData = careerData.jobOpenings
const header = headerData.header

export default function CareerPage() {
    return (
        <>
            <Header data={header} />
            <CareerSection data={career} />
            <LifeAtRapidMoney data={lifeRapidData} />
            <JobOpening data={jobData} />
        </>
    );
}

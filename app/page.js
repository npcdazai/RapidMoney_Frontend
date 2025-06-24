import Header from "@/components/head/head";
import HeroSection from "@/components/hero-section/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header isDark={true} />
      <HeroSection />
      <Header isDark={!true } />
    </>

  );
}

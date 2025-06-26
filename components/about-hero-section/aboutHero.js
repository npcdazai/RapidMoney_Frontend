import Image from "next/image";
import React from "react";
import aboutHeroImage from "@/components/about-hero-section/assets/about-hero-arrow.svg";

export default function AboutHero({ content }) {
  return (
    <section className="container mx-auto px-4 my-80">
      <h2 className="font-36 text-black font-bold mb-7">{content?.title}</h2>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[50px] relative">
        <p className="w-full lg:w-1/2">{content?.content1}</p>
        <p className="w-full lg:w-1/2">{content?.content2}</p>

        <Image src={aboutHeroImage} alt="About" className="absolute lg:relative right-0 -top-28 lg:top-0 " />
      </div>
    </section>
  );
}

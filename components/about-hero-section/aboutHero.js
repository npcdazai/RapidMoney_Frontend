"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import aboutHeroImage from "@/components/about-hero-section/assets/about-hero-arrow.svg";
import useScrollFadeIn from "@/animations/useScrollFadeIn";
import gsap from "gsap";

export default function AboutHero({ content }) {
  const headingRef = useScrollFadeIn();
  const leftParaRef = useScrollFadeIn();
  const rightParaRef = useScrollFadeIn();
  const imageRef = useScrollFadeIn(); // Optional fade-in

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="container mx-auto px-4 my-80">
      <h2 ref={headingRef} className="font-36 text-black font-bold mb-7">
        {content?.title}
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[50px] relative">
        <p ref={leftParaRef} className="w-full lg:w-1/2">
          {content?.content1}
        </p>
        <p ref={rightParaRef} className="w-full lg:w-1/2">
          {content?.content2}
        </p>

        <Image
          ref={imageRef}
          src={aboutHeroImage}
          alt="About"
          className="absolute lg:relative right-0 -top-28 lg:top-0"
        />
      </div>
    </section>
  );
}

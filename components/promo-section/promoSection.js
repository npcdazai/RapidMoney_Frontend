"use client";
import Image from "next/image";
import bannerImage from "./assets/bannerImage.png";
import { Col, Row } from "antd";
import styles from "./promo-section.module.scss";
import Link from "next/link";
import darkIphone from "./assets/dark_iphone.svg";
import playStore from "./assets/playstore.svg";
import useScrollFadeInOnce from "@/animations/useScrollFadeInOnce";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PromoSection = ({ data }) => {
  const textRef = useScrollFadeInOnce();
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section className={`${styles.section}`}>
      <div className="flex flex-col gap-4 pt-60 container mx-auto">
        <div className="flex flex-col gap-8">
          {/* Heading & CTA */}
          <div
            className="flex flex-col gap-5 max-w-[550px] relative z-10"
            ref={textRef}
          >
            <h2 className={`${styles.promoHeading} font-40 light-color font-weight-bold`}>
              {data?.title}
            </h2>
            <Link href={"#"}>
              <button className="apply-btn apply-btn-dark flex items-center gap-3">
                <span>Download</span>
                <Image src={darkIphone} width={24} height={24} alt="iphone" />
                <Image src={playStore} width={24} height={24} alt="playstore" />
              </button>
            </Link>
          </div>

          {/* Banner Image */}
          <div
            ref={imageRef}
            className={`flex lg:mt-[-100px] sm:mt-[-100px] mt-[-50px] ${styles.bannerImageBkl}`}
          >
            <Image
              src={bannerImage}
              alt="..."
              width={1920}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

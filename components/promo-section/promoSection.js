"use client";
import Image from "next/image";
import bannerImage from "./assets/bannerImage.png";
import { Col, Row } from "antd";
import styles from "./promo-section.module.scss";
import Link from "next/link";
import darkIphone from "./assets/dark_iphone.svg";
import playStore from "./assets/playstore.svg";
import useScrollFadeInOnce from "@/animations/useScrollFadeInOnce";
import { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import curvePattern from "./assets/curve_pattern.svg";
import { UserContext } from "@/contexts/user";

gsap.registerPlugin(ScrollTrigger);

const PromoSection = () => {
  const textRef = useScrollFadeInOnce();
  const imageRef = useRef(null);
  const curveRef = useRef(null);

  const { promoSection } = useContext(UserContext);

  const data = promoSection ? promoSection : []

  // console.log(promoSection);

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
    gsap.to(curveRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // if (curveRef.current) {
    //   const tl = gsap.timeline({ repeat: -1, yoyo: true });

    //   tl.to(curveRef.current, {
    //     y: 15,              // go down more
    //     x: -5,              // add a slight x movement
    //     rotation: -8,       // rotate more
    //     duration: 0.5,
    //     ease: "power1.inOut",
    //   }).to(curveRef.current, {
    //     y: -30,             // bounce up more
    //     x: 10,              // shift opposite direction
    //     rotation: 12,       // rotate opposite
    //     duration: 1.4,
    //     ease: "elastic.out(1.4, 0.25)", // stronger spring effect
    //   });
    // }


  }, []);

  // console.log(data);

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
            <Link href={"/"}>
              <button className="apply-btn apply-btn-dark flex items-center gap-3">
                <span>{ data?.downloadLabel}</span>
                <Image src={darkIphone} width={24} height={24} alt="iphone" />
                <Image src={playStore} width={24} height={24} alt="playstore" />
              </button>
            </Link>
          </div>

          {/* Banner Image */}
          <div
            ref={imageRef}
            className={`flex lg:mt-[-100px]  mt-[-50px] ${styles.bannerImageBkl}`}
          >
            <Image
              // src={bannerImage}
              src={data?.image?.[0]?.url}
              alt="..."
              width={1920}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />

            <div className={styles.curvePattern}>
              <Image
                src={curvePattern}
                alt="Curve Pattern"
                ref={curveRef}
                width={80}
                height={180}
                style={{
                  position: "absolute",
                  left: "53.06%",
                  top: 0,
                  zIndex: -1,
                  pointerEvents: "none"
                }}
                draggable={false}
                priority
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

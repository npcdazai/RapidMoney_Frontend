'use client';

import { useEffect } from "react";
import { Row, Col } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import darkIphone from "./assets/dark_iphone.svg";
import playStore from "./assets/playstore.svg";
import personImage from "./assets/personImage.png";
import downLoad from "./assets/download.svg";
import google from "./assets/google.svg";

import styles from "./personal-loan.module.scss";

gsap.registerPlugin(ScrollTrigger);

const paths = {
  step1: {
    filled: "M 0 100 V 0 Q 50 0 100 0 V 100 Z", // flat top
    inBetween: {
      curve1: "M 0 100 V 37.845 Q 50 0 100 37.845 V 100 Z"
    },
    unfilled: "M 0 100 V 100 Q 50 100 100 100 V 100 Z" // stays flat
  }
};

const PersonalLoan = ({ data }) => {
  useEffect(() => {
    gsap.set(".overlay__path-reverse", {
      // attr: { d: paths.step1.filled }
      attr: { d: paths.step1.inBetween.curve1 }
     
    });

    gsap.utils.toArray(".overlay__path-reverse").forEach((overlayPath) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".overlay-reverse",
          // start: "top top",
          start: "20% 40%",
          end: "+=100", // extend if needed
          // end: "+=300", // extend if needed
          scrub: true,
          toggleActions: "play none reverse none"
        }
      }).to(overlayPath, {
        duration: 1.8,
        ease: "power1.inOut",
        // attr: { d: paths.step1.inBetween.curve1 }
         attr: { d: paths.step1.filled }
      });
    });
  }, []);

  return (
    <section
      className={`${styles.section}  light-color pt-60 relative overflow-hidden`}
      // className={`${styles.section} dark-bg light-color pt-60 relative overflow-hidden`}
      data-label={data.backgroundText || "Personal"}
    >
      <svg
        className="overlay-reverse"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none"
        }}
      >
        <path
          className="overlay__path-reverse"
          d="M 0 100 V 0 Q 50 0 100 0 V 100 Z"
          fill="#000101" 
        />
      </svg>

      {/* <div className="container mx-auto text-center pt-[300px] relative z-10"> */}
      <div className="container mx-auto text-center pt-[100px] sm:pt-[150px] md:pt-[200px] lg:pt-[300px]">

        <div className="flex justify-center">
          <div className="flex flex-col gap-5 max-w-[600px] items-center md:pt-0 pt-[80px] px-4 z-10">
            <h2 className="font-48 font-weight-bold">{data.title}</h2>
            <span className="font-16">{data.subtitle}</span>
            <div className="hidden md:flex items-center gap-3">
              <Link href={data.cta.apply.link || "#"}>
                <button className="apply-btn apply-btn-green dark-color min-w-[180px]">
                  {data.cta.apply.label}
                </button>
              </Link>
              <Link href={data.cta.download.link || "#"}>
                <button className="apply-btn apply-btn-dark flex items-center gap-3 min-w-[180px]">
                  <span>{data.cta.download.label}</span>
                  <Image src={darkIphone} width={24} height={24} alt="iPhone" />
                  <Image src={playStore} width={24} height={24} alt="Play Store" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Row align="middle" justify="center" gutter={[24, 24]}>
          <Col xs={24}>
            <div className={styles.personImage}>
              <Image
                src={personImage}
                alt="Mobile Promo"
                width={600}
                height={600}
                className="relative z-10 mx-auto"
              />
            </div>

            {data.stats.map((stat, idx) => {
              const positionMap = [
                // 'top-0 left-0',
                // 'top-0 right-0',
                // 'bottom-0 left-0',
                'bottom-0 right-0',
              ];
              return (
                <div
                  key={idx}
                  className={`absolute ${positionMap[idx]} m-4 p-4 flex flex-col items-center gap-1 z-10`}
                >
                  <Image
                    src={google
                      // stat.icon === 'download'
                      //   ? require('./assets/download.svg')
                      //   : require('./assets/money.svg')
                    }
                    width={20}
                    height={20}
                    alt={stat.label}
                  />
                  <span className="font-40 font-weight-bold">{stat.value}</span>
                  <span className="font-20">{stat.label}</span>
                </div>
              );
            })}
          </Col>
          
        </Row>
      </div>
    </section>
  );
};

export default PersonalLoan;

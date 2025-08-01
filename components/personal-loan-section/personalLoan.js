'use client';

import { useRef, useEffect } from "react";
import { Row, Col } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import darkIphone from "./assets/dark_iphone.svg";
import playStore from "./assets/playstore.svg";
import personImage from "./assets/personImage.png";
import google from "./assets/google.svg";
import coin from "./assets/blue-coin.png"
import curve from "./assets/curve.png"

import styles from "./personal-loan.module.scss";

gsap.registerPlugin(ScrollTrigger);

const paths = {
  step1: {
    filled: "M 0 100 V 0 Q 50 0 100 0 V 100 Z",
    inBetween: {
      curve1: "M 0 100 V 37.845 Q 50 0 100 37.845 V 100 Z"
    }
  }
};

const PersonalLoan = ({ data }) => {
  const labelRef = useRef(null);
  const leftCoinRef = useRef(null);
  const rightCoinRef = useRef(null);
  const curveRef = useRef(null);

  useEffect(() => {
    if (labelRef.current) {
      gsap.fromTo(
        labelRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 0.12,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: labelRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }

    [leftCoinRef, rightCoinRef, curveRef].forEach((ref, i) => {
      if (ref.current) {
        gsap.to(ref.current, {
          y: i === 2 ? -10 : -40 + i * 10,
          x: i === 0 ? 10 : i === 1 ? -10 : 0,
          rotation: i === 0 ? 15 : i === 1 ? -18 : 0,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.3 * i,
        });
      }
    });
  }, []);

  useEffect(() => {
    gsap.set(".overlay__path-reverse", {
      attr: { d: paths.step1.inBetween.curve1 }
    });

    gsap.utils.toArray(".overlay__path-reverse").forEach((overlayPath) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".overlay-reverse",
          start: "top 80%",
          end: "top top",
          scrub: true,
          toggleActions: "play none reverse none"
        }
      }).to(overlayPath, {
        duration: 1.8,
        ease: "power1.inOut",
        attr: { d: paths.step1.filled }
      });
    });
  }, []);

  // console.log(data);

  return (
    <section className={`${styles.section} light-color pt-60 relative overflow-hidden`}>
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

      <Image src={coin} alt="Blue Coin Left" className={styles.leftCoin} width={200} height={200} priority ref={leftCoinRef} />
      <Image src={coin} alt="Blue Coin Right" className={styles.rightCoin} width={200} height={200} priority ref={rightCoinRef} />
      <Image src={curve} alt="Curve" className={styles.curve} width={100} height={100} priority ref={curveRef} />

      <div className="container mx-auto text-center pt-[50px] sm:pt-[120px] md:pt-[200px]">
        <div ref={labelRef} className={`${styles.sectionLabel} hidden sm:block`}>{data?.backgroundText}</div>

        <div className="flex justify-center pb-10">
          <div className="flex flex-col gap-5 max-w-[600px] items-center md:pt-0 pt-[80px] px-4 z-10">
            <h2 className="font-48 font-weight-bold">{data?.title}</h2>
            <span className="font-16">{data?.subtitle}</span>
            <div className="hidden md:flex items-center gap-3">
              <Link href={"/"}>
                {/* <Link href={data.cta.apply.link || "#"}> */}
                <button className="apply-btn apply-btn-green dark-color min-w-[180px]">
                  {/* Apply Now */}
                  {data.applyLabel}
                </button>
              </Link>
              <Link href={"/"}>
                {/* <Link href={data.cta.download.link || "#"}> */}
                <button className="apply-btn apply-btn-dark flex items-center gap-3 min-w-[180px]">
                  <span>{data?.downloadLabel}</span>
                  {/* <span>{data.cta.download.label}</span> */}
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
                src={data?.mainImage?.[0]?.url}
                alt="Mobile Promo"
                fill
                style={{ objectFit: "cover" }} // or "cover"
                className="z-10"
                priority
              />
            </div>

            {data?.stats?.map((stat, idx) => {
              const positionMap = [
                // 'top-0 left-0',
                // 'top-0 right-0',
                // 'bottom-0 left-0',
                // 'bottom-0 right-0',
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
                  <span className="font-40 font-weight-bold">{stat?.value}</span>
                  <span className="font-20">{stat?.label}</span>
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

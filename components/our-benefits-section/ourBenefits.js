"use client";
import { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import bank from "./assets/banking.svg";
import creditCard from "./assets/credit-card.svg";
import layer from "./assets/layer.svg";
import calender from "./assets/calendar.svg";
import noBank from "./assets/no-bank.json";
import Lottie from "lottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./our-benefits.module.scss";

const icon = {
  bank: bank,
  creditCard: creditCard,
  layer: layer,
  calender: calender,
  noBank: noBank,
};

gsap.registerPlugin(ScrollTrigger);

const Benefits = ({ data }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title fade
      gsap.fromTo(
        titleRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardRefs.current,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.section}`}>
      <div className="container mx-auto">
        <h2
          ref={titleRef}
          className="text-center font-48 font-weight-bold dark-color md:pb-[55px] pb-[25px]"
        >
          {data?.title}
        </h2>
        <Row gutter={[30, 30]} justify="center">
          {data.features.map((item, i) => {
            const lottieRef = useRef(null);

            const handleMouseEnter = () => {
              if (lottieRef.current) {
                lottieRef.current.setSpeed(0.5);
                lottieRef.current.goToAndPlay(0, true);
              }
            };

            const handleComplete = () => {
              if (lottieRef.current) {
                lottieRef.current.pause();
              }
            };

            return (
              <Col
                key={item.id}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                ref={(el) => (cardRefs.current[i] = el)}
              >
                <div
                  className={`h-full flex flex-col gap-2 justify-between p-2 ${styles.benefitsCard}`}
                  onMouseEnter={handleMouseEnter}
                >
                  <div className={`${styles.cardInner}`}>
                    <div className="flex justify-between">
                      <span
                        className="font-18 font-weight-medium dark-color"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    </div>
                    <div className="flex justify-between">
                        <div></div>
                      <div className="">
                      <Image
                        src={icon[item.icon]}
                        // src={item.icon}
                        alt="feature"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                      {/* <div></div> */}
                      {/* <Lottie
                        lottieRef={lottieRef}
                        animationData={noBank}
                        autoplay={true}
                        loop={false}
                        onComplete={handleComplete}
                        style={{ width: "60px", height: "60px" }}
                      /> */}
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default Benefits;

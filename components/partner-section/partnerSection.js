'use client';
import { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import styles from "./partner.section.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SelFin from "./assets/selfin.png";
import PayMe from "./assets/payme.png";
import Fintree from "./assets/fintree.png";
gsap.registerPlugin(ScrollTrigger);

const logos = { SelFin, PayMe, Fintree };

const glowColorMap = {
  "selfin": "#6C63FF",
  "fintree": "#826822",
};
// const glowColorMap = {
//   SelFin: "#6C63FF",
//   PayMe: "#00C48C",
//   Fintree: "#826822",
//   default: "#999999",
// };

const PartnersSection = ({ data }) => {
  const blobsRef = useRef({});
  const cardsRef = useRef({});

  // const getGlowColor = (partner) => console.log(partner, "parnter")
  //   glowColorMap[partner.title] || glowColorMap.default;

  const getGlowColor = (partner) =>
    partner.glowColor || glowColorMap[partner.title] || glowColorMap.default || glowColorMap[partner.name];

  useEffect(() => {
    data?.partners.forEach((partner, i) => {
      const card = cardsRef.current[partner.id];
      const blob = blobsRef.current[partner.id];
      if (!card || !blob) return;

      // Animate blob randomly
      const cardRect = card.getBoundingClientRect();
      const blobSize = 160;
      const maxX = cardRect.width - blobSize;
      const maxY = cardRect.height - blobSize;

      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2,
      });

      const genXY = () => ({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
        duration: 2 + Math.random() * 2,
        ease: "sine.inOut",
      });

      tl.to(blob, genXY()).to(blob, genXY()).to(blob, genXY());

      // Animate card on scroll
      gsap.fromTo(
        card,
        {
          autoAlpha: 0,
          y: 50,
          scale: 0.95,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        }
      );
    });

    // Optional: Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [data]);

  // console.log(data)

  return (
    <section className={`pt-120 pb-120 ${styles.section}`}>
      <h2 className="font-48 font-weight-bold text-center pb-14">{data?.title}</h2>
      <div className="container mx-auto">
        <Row gutter={[24, 24]} justify="center">
          {data?.partners?.map((partner,idx) => (
            <Col key={idx} xs={24} md={12} lg={8}>
              <div
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`dark-bg justify-self-center light-color px-[24px] sm:max-w-96 rounded-3xl w-full py-[30px] !h-full flex flex-col justify-between gap-5 ${styles.cardBkl}`}
                style={{ "--glow-color": getGlowColor(partner?.logo?.[0]) }}
              // style={{ "--glow-color": getGlowColor(partner) }}
              >
                <div
                  className={styles.blob}
                  ref={(el) => (blobsRef.current[idx] = el)}
                ></div>
                <div>
                  <Image
                    src={partner?.logo?.[0]?.url}
                    // src={logos[partner.name]}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <div className="flex justify-between items-center gap-4">
                  <p className="font-16">{partner.description}</p>
                  <Link href={"/lending-partner"} className="self-end cursor-pointer">
                    {/* <Link href={partner.link} className="self-end cursor-pointer"> */}
                    <button className="glossy-btn whitespace-nowrap">Know More</button>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PartnersSection;

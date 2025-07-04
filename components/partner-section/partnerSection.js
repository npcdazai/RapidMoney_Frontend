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
  SelFin: "#6C63FF",
  PayMe: "#00C48C",
  Fintree: "#826822",
  default: "#999999",
};

const PartnersSection = ({ data }) => {
  const blobsRef = useRef({});
  const cardsRef = useRef({});

  const getGlowColor = (partner) =>
    partner.glowColor || glowColorMap[partner.name] || glowColorMap.default;

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

  return (
    <section className={`pt-120 pb-120 ${styles.section}`}>
      <h2 className="font-48 font-weight-bold text-center pb-14">{data?.title}</h2>
      <div className="container mx-auto">
        <Row gutter={[24, 24]} justify="center">
          {data?.partners.map((partner) => (
            <Col key={partner.id} xs={24} sm={12} lg={8}>
              <div
                ref={(el) => (cardsRef.current[partner.id] = el)}
                className={`dark-bg light-color px-[24px] max-w-96 rounded-3xl py-[30px] h-full flex flex-col justify-between gap-5 ${styles.cardBkl}`}
                style={{ "--glow-color": getGlowColor(partner) }}
              >
                <div
                  className={styles.blob}
                  ref={(el) => (blobsRef.current[partner.id] = el)}
                ></div>

                <div>
                  <Image
                    src={logos[partner.name]}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <div className="flex justify-between items-center gap-4">
                  <p className="font-16">{partner.description}</p>
                  <Link href={partner.link} className="self-end cursor-pointer">
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

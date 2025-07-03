'use client';

import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import styles from "./partner.section.module.scss";

import SelFin from "./assets/selfin.png";
import PayMe from "./assets/payme.png";
import Fintree from "./assets/fintree.png";

const logos = {
  SelFin,
  PayMe,
  Fintree
};

const glowColorMap = {
  SelFin: "#6C63FF",
  PayMe: "#00C48C",
  Fintree: "#826822",
  default: "#999999"
};

const PartnersSection = ({ data }) => {
  const getGlowColor = (partner) =>
    partner.glowColor || glowColorMap[partner.name] || glowColorMap.default;

  const handleMouseMove = (e, id) => {
    const blob = document.getElementById(`blob-${id}`);
    if (!blob) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    blob.style.transform = `translate(${x - 90}px, ${y - 90}px)`;
  };

  const resetBlob = (id) => {
    const blob = document.getElementById(`blob-${id}`);
    if (blob) {
      blob.style.transform = `translate(-9999px, -9999px)`;
    }
  };

  return (
    <section className={`pt-120 pb-60 ${styles.section}`}>
      <h2 className="font-48 font-weight-bold text-center pb-14">{data?.title}</h2>
      <div className="container mx-auto">
        <Row gutter={[24, 24]} justify="center">
          {data?.partners.map((partner) => (
            <Col key={partner.id} xs={24} sm={12} lg={8}>
              <div
                className={`dark-bg light-color px-[24px] rounded-3xl py-[30px] h-full flex flex-col justify-between gap-5 ${styles.cardBkl}`}
                style={{ "--glow-color": getGlowColor(partner) }}
                onMouseMove={(e) => handleMouseMove(e, partner.id)}
                onMouseLeave={() => resetBlob(partner.id)}
              >
                {/* 👇 Glow Follower */}
                <div id={`blob-${partner.id}`} className={styles.blob}></div>

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

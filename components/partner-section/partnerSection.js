

import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import styles from "./partner.section.module.scss"
import SelFin from "./assets/selfin.png"
import PayMe from "./assets/payme.png"
import Fintree from "./assets/fintree.png";

const logos = {
  SelFin: SelFin,
  PayMe: PayMe,
  Fintree: Fintree
};

const glowColorMap = {
  SelFin: "#6C63FF",
  PayMe: "#00C48C",
  Fintree: "#826822",
  default: "#999999"
};



const PartnersSection = ({ data }) => {
  const getGlowColor = (partner) => {
  return partner.glowColor || glowColorMap[partner.name] || glowColorMap.default;
};

  return (
    <section className={`pt-60 pb-60 ${styles.section}`}>
      <h2 className="font-20 text-center font-weight-medium pb-[40px]">{data?.title}</h2>
      <div className="container mx-auto">
        <Row gutter={[24, 24]} justify="center">
          {data?.partners.map((partner) => (
            <Col key={partner.id} xs={24} sm={12} lg={8}>
              <div
                className={`dark-bg light-color px-[24px] rounded-3xl py-[30px] h-full flex flex-col justify-between gap-5 ${styles.cardBkl}`}
                 style={{ "--glow-color": getGlowColor(partner) }}
                // style={{ "--glow-color": partner.glowColor }}
              >
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

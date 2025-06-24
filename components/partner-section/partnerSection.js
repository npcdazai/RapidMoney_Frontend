

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


const PartnersSection = ({ data }) => {
  return (
    <section className={`pt-60 pb-60 ${styles.section}`}>
      <h2 className="font-20 text-center font-weight-medium pb-[40px]">{data?.title}</h2>
      <div className="container mx-auto">
        <Row gutter={[24, 24]}>
          {data?.partners.map((partner) => (
            <Col key={partner.id} xs={24} sm={12} lg={8}>
              <div className={`dark-bg light-color px-[24px] rounded-3xl py-[30px] h-full flex flex-col justify-between gap-5 ${styles.cardBkl}`}
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
                  <Link href={partner.link}>
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

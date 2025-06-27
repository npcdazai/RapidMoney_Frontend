'use client';

import { useEffect, useRef, useState } from "react";
import { Row, Col, Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
// import { DownloadOutlined, DollarOutlined } from '@ant-design/icons';
import darkIphone from "./assets/dark_iphone.svg"
import playStore from "./assets/playstore.svg";
import styles from "./personal-loan.module.scss"
import personImage from "./assets/personImage.png"
import downLoad from "./assets/download.svg"
import google from "./assets/google.svg"


const PersonalLoan = ({ data }) => {

  //   const sectionRef = useRef(null);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const top = sectionRef.current?.getBoundingClientRect().top || 0;
  //     setScrolled(top < -50); // adjust threshold for effect
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section
      className={`${styles.section} dark-bg light-color pt-60`}
      data-label={data.backgroundText || "Personal"}
    >

      <div className="container mx-auto text-center pt-[200px]">
        <div className="w-full flex justify-center items-center text-center">
          <div className="flex flex-col gap-5 max-w-[600px] items-center px-4 z-10">
            <h2 className="font-48 font-weight-bold max-w-[460px]">{data.title}</h2>
            <span className="font-16">{data.subtitle}</span>
            <div className="hidden md:flex items-center gap-3">
              <Link href={"#"}>
                <button
                  className={`apply-btn apply-btn-blue min-w-[180px]`}
                >
                  {data.cta.apply.label}
                </button>
              </Link>
              <Link href={"#"}>
                <button
                  className={`apply-btn apply-btn-dark flex item-center gap-3 min-w-[180px]`}
                >
                  <span>{data.cta.download.label}</span>
                  <Image src={darkIphone} width={24} height={24} alt="iphone"></Image>
                  <Image src={playStore} width={24} height={24} alt="playstore"></Image>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Row align="middle" justify="center" gutter={[24, 24]}>
          <Col xs={24}>

            {/* <div className="absolute inset-0 flex justify-center items-center opacity-5 text-[180px] font-bold z-0">
              {data.backgroundText}
            </div> */}

            <div className={styles.personImage}>
              <Image
                src={personImage}
                alt="Mobile Promo"
                width={600}
                height={600}
                className="relative z-10 mx-auto"
              />
            </div>

            {/* Dynamic corner stats */}
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
          {/* <div className='flex flex-col items-center gap-1'>
              <Image src={downLoad} width={20} height={20} alt='' />
              <span className='font-40 font-weight-bold'>10M+</span>
              <span className='font-20'>Downloads</span>
            </div> */}
        </Row>
      </div>
    </section>
  );
};

export default PersonalLoan;

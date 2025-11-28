"use client";

import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Steps } from "antd";
import Image from "next/image";
const { Step } = Steps;
import styles from "./loan-step.module.scss";
// import install from "./assets/install.png"
// import loanApp from "./assets/loanApp.png"
// import verify from "./assets/verify.png"
// import qrImg from './assets/qr.png';
import moneyImg from './assets/money.png';
import coinImage from './assets/coin.png';
import curveImage from './assets/curve.png';
import gsap from "gsap";

const AUTO_PLAY_INTERVAL = 3000;
// const imageArray = {
//   install: install,
//   verify: verify,
//   loanApp: loanApp
// }

const LoanStep = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const stepsCount = data?.steps?.length;
  const moneyRef = useRef(null);
  const coinRef = useRef(null);
  const curveRef = useRef(null);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stepsCount);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [stepsCount]);

  const currentStep = data?.steps[current];
  

  useEffect(() => {
    if (moneyRef.current && coinRef.current && curveRef.current) {
      gsap.to(moneyRef.current, {
        y: -40,
        rotation: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(coinRef.current, {
        y: -20,
        rotation: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(curveRef.current, {
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  // console.log(data);
  return (
    <section className={`pt-120 ${styles.section}`}>
      {/* <Image
        // src={qrImg}
        src = {data?.cta?.qrImage?.[0]?.url}
        alt="QR"
        className={styles.qrDecor}
        priority
        width={250}
        height={120}
      /> */}
      <div className="container mx-auto px-4">
        <span className="flex justify-center items-center">
          <h2 className="font-48 font-weight-bold text-center pb-6 max-w-[480px]">
            {data?.title}
          </h2>
        </span>

        <Row gutter={[32, 32]} justify={"center"} align="bottom">
          <Col xs={24} lg={12} className={`${styles.stepCol} ${styles.stepColPadTop}`}>
            <Steps
              direction="vertical"
              current={current}
              onChange={(index) => setCurrent(index)}
              className={styles.loanStep}
            >
              {data?.steps?.map((step, idx) => (
                <Step
                  key={idx}
                  title={
                    <span className="font-24 font-weight-bold ">
                      {step?.title}
                    </span>
                  }
                  description={
                    <span className="font-16 pb-[60px]">
                      {step?.description}
                    </span>
                  }
                  icon={
                    <div
                      className={`custom-step-icon ${idx === current ? 'active' : ''}`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  }
                />
              ))}
            </Steps>
          </Col>

          <Col xs={24} lg={12} className={styles.imageBkl}>
            <Image
              ref={moneyRef}
              src={moneyImg}
              alt="Money"
              className={styles.moneyDecor}
              priority
            />
            <Image
              ref={coinRef}
              src={coinImage}
              alt="Coin"
              className={styles.coinDecor}
              priority
            />
            <Image
              ref={curveRef}
              src={curveImage}
              alt="Curve"
              className={styles.curveDecor}
              priority
            />

            {/* <Col xs={24} lg={{ span: 11, offset: 1 }} className={styles.imageBkl}> */}
            <div className="flex justify-center items-center">
              <Image
                src={currentStep?.image?.[0]?.url}
                // src={imageArray[currentStep.flag]}
                alt={"Rapid Money - Steps to Appply for Personal Loan"}
                width={400}
                height={500}
                className="max-h-[550px] object-scale-down"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LoanStep;
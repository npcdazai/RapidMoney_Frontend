"use client";

import React, { useState } from "react";
import { Col, Row, Steps } from "antd";
import Image from "next/image";
const { Step } = Steps;
import install from "./assets/install.png"
import styles from "./loan-step.module.scss"

const LoanStep = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const currentStep = data.steps[current];

  return (
    <section className={`pt-120 ${styles.section}`}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="font-48 font-weight-bold text-center pb-6">
          {data.title}
        </h2>

        <Row gutter={[32, 32]}>
          {/* Left Column: Steps */}
          <Col xs={24} lg={12}>
            <Steps
              direction="vertical"
              current={current}
              onChange={(index) => setCurrent(index)}
              className={styles.loanStep}
            >
              {data.steps.map((step, idx) => (
                <Step
                  key={idx}
                  title={
                    <span className="font-24 font-weight-bold ">
                      {step.title}
                    </span>
                  }
                  description={
                    <span className="font-16 pb-[70px]">
                      {step.description}
                    </span>
                  }
                />
              ))}
            </Steps>
          </Col>
          <Col xs={24} lg={12}>
            <Image
              src={install}
              alt={`Step ${currentStep.step}`}
              width={300}
              height={500} />

          </Col>

          {/* Right Column: Phone UI + QR */}
          {/* <Col xs={24} lg={12}>
            <div className="relative flex justify-center">
              <div className="w-[300px] md:w-[350px]">
                <Image
                  src={currentStep.image}
                  alt={`Step ${currentStep.step}`}
                  width={350}
                  height={700}
                  className="w-full h-auto object-contain"
                  priority
                />
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold mb-1">{data.cta.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {data.cta.subtitle}
                  </p>
                  <button className="bg-green-400 text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-500 transition">
                    {data.cta.buttonLabel}
                  </button>
                </div>
              </div> */}

          {/* QR Code */}
          {/* <div className="absolute bottom-0 right-0 hidden lg:flex items-center gap-3 border border-gray-300 px-4 py-3 rounded bg-white shadow">
                <Image
                  src={data.cta.qrImage}
                  alt="QR Code"
                  width={48}
                  height={48}
                />
                <div className="text-sm text-gray-800 leading-tight">
                  {data.cta.qrText}
                </div>
              </div> */}
          {/* </div> */}
          {/* </Col> */}
        </Row>
      </div>
    </section>
  );
};

export default LoanStep;

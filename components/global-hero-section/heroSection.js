"use client";

import React from "react";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import personImage from "./assets/heroPerson.png";
import productImage from "./assets/product-image.png";
import styles from "./hero-section.module.scss";
import { RiArrowRightLine } from "react-icons/ri";
import { RiCheckLine } from "react-icons/ri";

const GlobalHeroSection = ({ data }) => {
  return (
    <section className={`${styles.section} dark-bg flex items-center pt-[200px]`}>
      <div className="container mx-auto relative">
        <Row gutter={[32, 32]} align="">
          <Col xs={24} lg={24} xl={8}>
            <div className="flex flex-col gap-[20px]">
              <h1 className="font-48 light-color font-weight-bold">
                {/* <span>{data?.title}</span> */}
                <span>
                  Apply for Instant{" "}
                  <span className="text-[#B7FB52]">Personal</span> Loan
                </span>
              </h1>
              {/* <span className="font-16 light-color">{data?.description}</span> */}
              <div className="text-white font-16 font-normal flex flex-col gap-3.5">
                <div className="flex gap-2 items-center">
                  <span className="bg-[#E2E0FF36] inline-flex justify-center items-center w-7 h-7 rounded-full">
                    <RiCheckLine size={18} />
                  </span>{" "}
                  No physical documents
                </div>
                <div className="flex gap-2 items-center">
                  <span className="bg-[#E2E0FF36] inline-flex justify-center items-center w-7 h-7 rounded-full">
                    <RiCheckLine size={18} />
                  </span>{" "}
                  Instant approvals
                </div>
              </div>

              <Link href={data?.ctaButton.link}>
                <button
                  className={`apply-btn apply-btn-dark flex gap-2 font-16 font-weight-medium`}
                >
                  {data?.ctaButton.label}
                  <span className="primary-color">
                    <RiArrowRightLine size={24} />
                  </span>
                </button>
              </Link>
            </div>
          </Col>

          <Col xs={24} lg={24} xl={16}>
            <div className={`w-full flex justify-center `}>
              <Image
                src={productImage}
                alt="Hero"
                // width={900}
                // height={800}
                className={`object-cover`}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.curve}></div>
    </section>
  );
};

export default GlobalHeroSection;

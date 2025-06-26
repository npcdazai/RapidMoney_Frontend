'use client';

import React from 'react';
import { Row, Col } from 'antd';
import Link from 'next/link';
import styles from './hero-another.modules.scss';
import { RiArrowRightLine } from 'react-icons/ri';
import heroImage from "./assets/hero.png"

const hero = {
  "heroes": [
    {
      "title": "Quick Loans for Health Emergencies",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      "ctaButton": {
        "label": "Apply Now Loan",
        "link": "/apply"
      },
      "backgroundImage": "/images/hero-health.jpg"
    }
  ]
}


const HeroAnotherSection = () => {
  return (
    <section
      className={`relative h-[90vh] w-full flex items-center bg-cover bg-center bg-no-repeat ${styles.section}`}
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <Row justify="start" align="middle">
          <Col xs={24} md={16} lg={10}>
            <div className="text-white flex flex-col gap-4">
              <h1 className="text-[36px] md:text-[48px] font-bold leading-tight">
                {hero.title}
              </h1>
              <p className="text-base md:text-lg text-white/90">
                {hero.description}
              </p>

              <Link href={hero.ctaButton.link}>
                <button className="apply-btn apply-btn-white flex items-center gap-2 mt-4">
                  {hero.ctaButton.label}
                  <RiArrowRightLine size={24} className="text-green-500" />
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HeroAnotherSection;

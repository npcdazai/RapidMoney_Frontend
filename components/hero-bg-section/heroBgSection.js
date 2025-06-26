'use client';

import React from 'react';
import { Row, Col } from 'antd';
import Link from 'next/link';
import styles from './hero-bg.module.scss';
import { RiArrowRightLine } from 'react-icons/ri';
import heroImage from "./assets/hero.png"
import Image from 'next/image';

// const hero = {

//   "title": "Quick Loans for Health Emergencies",
//   "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
//   "ctaButton": {
//     "label": "Apply Now Loan",
//     "link": "/apply"
//   },
//   "backgroundImage": "/images/hero-health.jpg"
// }
const data = {
        "title": "<span>Loans</span/> for Your Dreams. Our Loans.",
        "description": "Empower your aspirations with customizable loan solutions that adapt to your needs—enjoy transparent terms, swift approvals, and a seamless digital experience from application to funding.",
        "ctaButton": {
            "label": "Apply Now",
            "link": "/apply"
        },
        "image": "happy-man-phone.png",
        "floatingCoins": [
            "coin-left.png",
            "coin-top-right.png",
            "coin-bottom-right.png",
            "note-float.png"
        ]
    }


const HeroBgSection = () => {
  return (
    <section className={`${styles.section} flex items-center pt-[200px]`}
      //  style={{ backgroundImage: `url('./assets/hero.png')`, backgroundSize:"100%" }}
      // style={{ backgroundImage: `url('/components/hero-bg-section/assets/hero.png')` }}
    >
            <div className="container mx-auto relative">
                <Row gutter={[32, 32]} align="">
                    <Col xs={24} lg={24} xl={8}>
                        <div className='flex flex-col gap-[20px]'>
                           <h1
  className={`font-48 light-color font-weight-bold ${styles.heroTitle}`}
  dangerouslySetInnerHTML={{ __html: data?.title || '' }}
/>

                            <span className="font-16 light-color">{data?.description}</span>

                            <Link href={data?.ctaButton.link}>
                                <button
                                    className={`apply-btn apply-btn-dark flex gap-2 font-16 font-weight-medium`}
                                >
                                    {data?.ctaButton.label}
                                    <span className="primary-color"><RiArrowRightLine size={24} /></span>
                                </button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={ styles.curve}></div>
        </section>
  );
};

export default HeroBgSection;

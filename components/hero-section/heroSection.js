'use client';

import React from 'react';
import { Row, Col, Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import personImage from "./assets/heroPerson.png"
import styles from "./hero-section.module.scss"
import { RiArrowRightLine } from 'react-icons/ri';

const HeroSection = ({ data }) => {
    return (
        <section className={`${styles.section} dark-bg flex items-center pt-[120px]`}>
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

                    <Col xs={24} lg={24} xl={16}>
                        <div className={`w-full flex justify-center ${styles.personImage}`}>
                            <Image
                                src={personImage}
                                alt="Hero"
                                width={900}
                                height={800}
                                className={`object-cover`}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className={ styles.curve}></div>
        </section>
    );
};

export default HeroSection;

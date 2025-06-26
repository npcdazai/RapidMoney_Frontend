'use client';

import React from 'react';
import { Row, Col } from 'antd';
import Link from 'next/link';
import styles from './hero-bg.module.scss';
import { RiArrowRightLine } from 'react-icons/ri';
// import heroImage from "./assets/hero.png"
import Image from 'next/image';


const HeroBgSection = ({data}) => {
  return (
      // <section className={`${styles.section} flex items-center pt-[200px]`}>
       <section
          className={`${styles.section} flex items-center pt-[200px]`}
          //   style={{ backgroundImage: `url(${data.backgroundImage})` }}
          style={{ '--hero-bg': `url(${data.backgroundImage})` }}
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

'use client';

import React from 'react';
import { Row, Col, Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import personImage from "./assets/heroPerson.png"
import styles from "./hero-section.module.scss"
import { RiArrowRightLine } from 'react-icons/ri';

const HeroSection = ({ data, showPagination }) => {
    return (
        <section className={`${styles.section} dark-bg flex items-center pt-[150px] sm:pt-[200px]`}>
            <div className="container mx-auto relative">
                <Row gutter={[32, 32]} align="">
                    <Col xs={24} lg={24} xl={8}>
                        <div className='flex flex-col gap-[30px]'>
                           <h1
  className={`font-48 light-color font-weight-bold ${styles.heroTitle} max-w-[340px]`}
  dangerouslySetInnerHTML={{ __html: data?.title || '' }}
/>

                            <span className="font-16 light-color">{data?.description}</span>

                            <Link href={data?.ctaButton.link}>
                                <button
                                    className={`apply-btn apply-btn-dark flex gap-2`}
                                >
                                    {data?.ctaButton.label}
                                    <span className="primary-color"><RiArrowRightLine size={24} /></span>
                                </button>
                            </Link>

                            {/* {
                                showPagination && (
                                    <div className='custom-swiper-pagination'></div>
                                )
                            } */}
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

// 'use client';

// import React from 'react';
// import { Row, Col } from 'antd';
// import Image from 'next/image';
// import Link from 'next/link';
// import { RiArrowRightLine } from 'react-icons/ri';
// import styles from './hero-section.module.scss';

// import personImage from './assets/heroPerson.png';

// const coinImage = "https://cinni.net/images/favi/p/poke_61.gif";

// const HeroSection = ({ data, showPagination }) => {
//   return (
//     <section className={`${styles.section} dark-bg flex items-center pt-[150px] sm:pt-[200px]`}>
//       <div className="container mx-auto relative">
//         <Row gutter={[32, 32]}>
//           <Col xs={24} xl={8}>
//             <div className="flex flex-col gap-[30px]">
//               <h1
//                 className={`font-48 light-color font-weight-bold ${styles.heroTitle} max-w-[340px]`}
//                 dangerouslySetInnerHTML={{ __html: data?.title || '' }}
//               />
//               <span className="font-16 light-color">{data?.description}</span>
//               <Link href={data?.ctaButton.link}>
//                 <button className="apply-btn apply-btn-dark flex gap-2">
//                   {data?.ctaButton.label}
//                   <span className="primary-color"><RiArrowRightLine size={24} /></span>
//                 </button>
//               </Link>
//             </div>
//           </Col>

//           <Col xs={24} xl={16}>
//             <div className={`w-full flex justify-center ${styles.personImage}`}>
//               <Image
//                 src={personImage}
//                 alt="Hero"
//                 width={900}
//                 height={800}
//                 className="object-cover"
//               />
//             </div>
//           </Col>
//         </Row>
//       </div>

//       {/* 🎉 Coin Rain */}
//       <div className={styles.coinRain}>
//         {Array.from({ length: 12 }).map((_, i) => (
//           <div
//             key={i}
//             className={`${styles.coin}`}
//             style={{
//               left: `${Math.floor(Math.random() * 100)}%`,
//               animationDelay: `${Math.random() * 10}s`
//             }}
//           >
//             <img src={coinImage} alt="coin" width={24} />
//           </div>
//         ))}
//       </div>

//       <div className={styles.curve}></div>
//     </section>
//   );
// };

// export default HeroSection;


'use client';

import React from 'react';
import { Row, Col } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import person from "./assets/person.png";
import styles from "./testimonials.module.scss"
import { RiDoubleQuotesR, RiStarFill } from 'react-icons/ri';

const Testimonials = ({ data }) => {
    return (
        <section className={`pt-60 ${styles.section}`}>
            <div>
                <h2 className="text-center font-48 font-weight-bold dark-color md:pb-[55px] pb-[25px]">
                    {data?.title}
                </h2>
                <div className={styles.testimonialsSwiperBkl}>
                    <Swiper
                        modules={[Pagination]}
                        loop={true}
                        pagination={{ clickable: true }}
                        spaceBetween={24}
                        slidesPerView={1}
                        height={'100%'}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2.2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 3.5,
                            },
                        }}
                        className={styles.testimonialsSwiper}
                    >
                        {data?.testimonials.map((t) => (
                            // <div className='h-full' key={t.id}>
                            <SwiperSlide key={t.id} className={`!h-auto ${styles.testimonialSwiperSlide}`}>
                                {/* <Row justify="center" className='!h-full'>
                                    <Col xs={24} sm={22} lg={22} className='!h-full'> */}
                                <div className="border border-gray-200 rounded-2xl p-6 h-full flex flex-col justify-between bg-white">
                                    {/* <div className="flex gap-2.5 font-16 font-weight-medium px-3 py-2 mb-4"> */}
                                    <div className="flex gap-2.5 font-16 font-weight-medium w-max px-3 py-2 mb-4 rounded-[8px] border border-[#E5E7EB]">

                                        <RiStarFill size={20} color='#79CA00' /> {t.rating.toFixed(1)}
                                    </div>
                                    <p className="mt-2 font-14 font-weight-medium text-gray-700 flex-grow">
                                        {t.quote}
                                    </p>
                                    <div className="flex justify-between items-center mt-6">
                                        <div>
                                            <div className='flex gap-1 items-baseline'>
                                                <span className="font-18 font-weight-bold mb-1 text-black">{t.name}</span>
                                            <RiDoubleQuotesR size={28} color='#79CA00' /></div>
                                            <span className="font-14 font-weight-regular text-gray-500">{t.role}</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={person}
                                                alt={`${t.name} avatar`}
                                                width={48}
                                                height={48}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* </Col>
                                </Row> */}
                            </SwiperSlide>
                            // </div>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;


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

const Testimonials = ({ data }) => {
    return (
        <section className={`pt-60 pb-120 ${styles.section}`}>
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
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 }
                        }}
                    >
                        {data?.testimonials.map((t) => (
                            <div className='h-full' key={t.id}>
                                <SwiperSlide key={t.id} className='h-full'>
                                    <Row justify="center">
                                        <Col xs={24} sm={22} lg={22}>
                                            <div className="border border-gray-200 rounded-2xl p-6 h-full flex flex-col justify-between bg-white">
                                                <div className="inline-block bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-semibold w-max mb-4">
                                                    ★ {t.rating.toFixed(1)}
                                                </div>
                                                <p className="mt-2 font-14 font-weight-medium text-gray-700 flex-grow">
                                                    {t.quote}
                                                </p>
                                                <div className="flex justify-between items-center mt-6">
                                                    <div>
                                                        <p className="font-18 font-weight-bold mb-1 text-black">{t.name}</p>
                                                        <p className="font-14 font-weight-regular text-gray-500">{t.role}</p>
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
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;

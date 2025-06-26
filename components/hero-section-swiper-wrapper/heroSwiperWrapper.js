"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import HeroSection from '../hero-section/heroSection'
import HeroBgSection from '../hero-bg-section/heroBgSection'
import homePageData from "@/json/homepage/home.json";
import { Autoplay, Pagination } from 'swiper/modules';
import styles from "./hero-swiper-wrapper.module.scss"

const heroSection = homePageData.heroSection;

export default function HeroSwiperWrapper() {
    return (
        <section className={`mt-[-88px] relative ${styles.section}`}>
            {/* <div className={StyleSheet.heroSwiperContainer}> */}
            <Swiper
                // modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                loop={true}
            >
                <SwiperSlide>
                    <HeroSection data={heroSection} />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroBgSection />
                </SwiperSlide>
                <div className={styles.curve}></div>
            </Swiper>
        </section>
    )
}

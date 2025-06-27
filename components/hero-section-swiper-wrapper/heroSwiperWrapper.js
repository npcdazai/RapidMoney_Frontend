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

  const heroSlides = [
        {
            "title": "Smart Loans for Health Needs",
            "description": "Transparent terms & quick approvals.",
            "ctaButton": { "label": "Learn More", "link": "/learn-more" },
            "backgroundImage": "./assets/hero-health.png"
        },
        {
            "title": "Education Loans Made Easy",
            "description": "Support your student’s journey effortlessly.",
            "ctaButton": { "label": "Get Started", "link": "/education" },
            "backgroundImage": "./assets/hero-marriage.png"
        },
        {
            "title": "Business Loans On Demand",
            "description": "Fuel your growth with flexible financing.",
            "ctaButton": { "label": "Explore Now", "link": "/business" },
            "backgroundImage": "./assets/hero-life.png"
        }
    ]


export default function HeroSwiperWrapper() {
    return (
        <section className={`mt-[-100px] relative ${styles.section}`}>
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
                {heroSlides.map((slide, idx) => (
                    <SwiperSlide key={`hero-${idx}`}>
                        <HeroBgSection data={slide} />
                    </SwiperSlide>
                ))}
                <div className={styles.curve}></div>
            </Swiper>
        </section>
    )
}

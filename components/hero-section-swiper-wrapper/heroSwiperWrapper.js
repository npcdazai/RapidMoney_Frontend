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
        "title": "Your <span>Dreams</span/>. Our Loans.",
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
    },
    {
        "title": "Smart Loans for Health Needs",
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
    },
    {
        "title": "Business Loans On Demand",
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
    },
]


export default function HeroSwiperWrapper() {
    return (
        <section className={`mt-[-100px] relative ${styles.section}`}>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                // modules={[Pagination]}
                modules={[Autoplay,Pagination]}
                loop={true}
                className={styles.heroSwiper}
            >
                {heroSlides.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <HeroSection data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.curve}></div>
        </section>
    )
}

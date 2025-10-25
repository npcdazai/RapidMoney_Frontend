"use client"

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import HeroSection from '../hero-section/heroSection'
import HeroBgSection from '../hero-bg-section/heroBgSection'
import homePageData from "@/json/homepage/home.json";
import { Autoplay, Pagination, Parallax } from 'swiper/modules';
import styles from "./hero-swiper-wrapper.module.scss"
import Curve from "./assets/herosectioncurv.svg"
import Image from 'next/image';

const heroSection = homePageData.heroSection;

// const heroSlides = [
//     {
//         "title": "Your <span>Dreams</span/>. Our Loans.",
//         "description": "Empower your aspirations with customizable loan solutions that adapt to your needs—enjoy transparent terms, swift approvals, and a seamless digital experience from application to funding.",
//         "ctaButton": {
//             "label": "Apply Now",
//             "link": "/apply"
//         },
//         "image": "happy-man-phone.png",
//         "floatingCoins": [
//             "coin-left.png",
//             "coin-top-right.png",
//             "coin-bottom-right.png",
//             "note-float.png"
//         ]
//     },
//     {
//         "title": "Smart Loans for <span>Health</span/> Needs",
//         "description": "Empower your aspirations with customizable loan solutions that adapt to your needs—enjoy transparent terms, swift approvals, and a seamless digital experience from application to funding.",
//         "ctaButton": {
//             "label": "Apply Now",
//             "link": "/apply"
//         },
//         "image": "happy-man-phone.png",
//         "floatingCoins": [
//             "coin-left.png",
//             "coin-top-right.png",
//             "coin-bottom-right.png",
//             "note-float.png"
//         ]
//     },
//     {
//         "title": "<span>Business</span/> Loans On Demand",
//         "description": "Empower your aspirations with customizable loan solutions that adapt to your needs—enjoy transparent terms, swift approvals, and a seamless digital experience from application to funding.",
//         "ctaButton": {
//             "label": "Apply Now",
//             "link": "/apply"
//         },
//         "image": "happy-man-phone.png",
//         "floatingCoins": [
//             "coin-left.png",
//             "coin-top-right.png",
//             "coin-bottom-right.png",
//             "note-float.png"
//         ]
//     },
// ]


export default function HeroSwiperWrapper({ data }) {
    const heroSlides = data || [];
    
    console.log(heroSlides);

    const paginationRef = useRef([]);

    // const updatePagination = (swiper) => {
    //     swiper.slides.forEach((slide, index) => {
    //         const el = slide.querySelector(".custom-pagination");
    //         if (el) {
    //             el.textContent = `${swiper.realIndex + 1} / ${swiper.slides.length}`;
    //             el.style.opacity = index === swiper.realIndex ? "1" : "0.3";
    //         }
    //     });
    // };

    return (
        <section className={`mt-[-100px] relative ${styles.section}`}>
            {/* <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                parallax={true}

                // modules={[Pagination]}
                modules={[Autoplay, Pagination]}
                loop={true}
                className={styles.heroSwiper}
            >
                {heroSlides.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <HeroSection data={item} />
                    </SwiperSlide>
                ))}
            </Swiper> */}
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                parallax={true}
                pagination={{
                    el: paginationRef.current,
                    clickable: true,
                }}
                onSwiper={(swiper) => {
                    swiper.params.pagination.el = paginationRef.current;
                    swiper.pagination.init();
                    swiper.pagination.render();
                    swiper.pagination.update();
                }}
                modules={[Autoplay, Pagination, Parallax]}
                className={styles.heroSwiper}
            >
                {heroSlides.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <HeroSection data={item} paginationRef={(el) => paginationRef.current[idx] = el} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="custom-swiper-pagination" /> */}
            <div className={styles.curve}></div>
            {/* <Image src={Curve} alt="Glow" /> */}


        </section>
    )
}



















// const HeroSection = ({ data, paginationRef, isActive }) => {
//   useEffect(() => {
//     if (!isActive) return;

//     // trigger animations here only when active
//     const context = gsap.context(() => {
//       // animation logic...
//     });

//     return () => context.revert();
//   }, [isActive]); // 🔁 run only



//   import React, { useRef, useState } from 'react';

// export default function HeroSwiperWrapper() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const paginationRefs = useRef([]);

//   return (
//     <Swiper
//       slidesPerView={1}
//       loop={true}
//       modules={[Pagination]}
//       pagination={{
//         clickable: true,
//         el: null,
//       }}
//       onSwiper={(swiper) => {
//         swiper.params.pagination.el = paginationRefs.current[swiper.realIndex];
//         swiper.pagination.init();
//         swiper.pagination.render();
//         swiper.pagination.update();

//         swiper.on("slideChange", () => {
//           const current = swiper.realIndex;
//           swiper.params.pagination.el = paginationRefs.current[current];
//           swiper.pagination.render();
//           swiper.pagination.update();
//           setActiveIndex(current); // 🔁 update React state
//         });
//       }}
//     >
//       {heroSlides.map((item, idx) => (
//         <SwiperSlide key={idx}>
//           {/* 👇 Re-render this with correct index */}
//           <HeroSection
//             data={item}
//             paginationRef={(el) => paginationRefs.current[idx] = el}
//             isActive={activeIndex === idx}
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

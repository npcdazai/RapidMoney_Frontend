'use client';

import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import styles from './hero-section.module.scss';
import { RiArrowRightLine } from 'react-icons/ri';

import personImage from "./assets/heroPerson.png";
import moneyCoin1 from "./assets/money1.png";
import moneyCoin2 from "./assets/money2.png";
import moneyCoin3 from "./assets/money3.png";
import moneyCoin4 from "./assets/money3.png";
import moneyNote1 from "./assets/note1.png";
import moneyNote2 from "./assets/note2.png";

import { gsap } from 'gsap';

const HeroSection = ({ data, showPagination }) => {

useEffect(() => {
  const context = gsap.context(() => {
    const elements = gsap.utils.toArray(".floating-image");
    const heroTitle = document.querySelector(".hero-title");
    const heroDescription = document.querySelector(".hero-description");
    const heroButton = document.querySelector(".hero-button");

    // Initial state for coins
    gsap.set(elements, { y: -150, opacity: 0, visibility: 'hidden' });
    
    // Initial state for left content (bottom to top)
    gsap.set(heroTitle, { y: 60, opacity: 0 });
    gsap.set(heroDescription, { y: 60, opacity: 0 });
    gsap.set(heroButton, { y: 60, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section-container',
        start: 'top 80%',
        once: true,
      },
    });

    // Animate left content sequentially from bottom to top with smoother easing
    tl.to(heroTitle, {
      y: 0,
      opacity: 1,
      duration: 1.0,
      ease: 'power4.out',
    })
    .to(heroDescription, {
      y: 0,
      opacity: 1,
      duration: 1.0,
      ease: 'power4.out',
    }, "+=0.3") // 0.3s delay after title
    .to(heroButton, {
      y: 0,
      opacity: 1,
      duration: 1.0,
      ease: 'power4.out',
    }, "+=0.3") // 0.3s delay after description

    // Start coin animation after left content is done
    .set(elements, { visibility: 'visible' }, "+=0.4")
    .fromTo(
      elements,
      { y: -150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      }
    )

    // Add controlled floating animation with shorter duration
    .add(() => {
      elements.forEach((el) => {
        const floatY = gsap.utils.random(5, 10);
        const floatX = gsap.utils.random(2, 5);
        const rotate = gsap.utils.random(-3, 3);
        const duration = gsap.utils.random(1.5, 2.0); // Shorter duration
        const delay = gsap.utils.random(0, 0.2);

        gsap.to(el, {
          y: `-=${floatY}`,
          x: `+=${floatX}`,
          rotation: rotate,
          duration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay,
        });
      });
    });
  });

  return () => context.revert();
}, []);


    return (
        <section className={`${styles.section} dark-bg flex items-center pt-[150px] sm:pt-[200px] hero-section-container`}>
            <div className="container mx-auto relative">
                <Row gutter={[32, 32]}>
                    <Col xs={24} lg={24} xl={8}>
                        <div className="flex flex-col gap-[30px]">
                            <h1
                                className={`font-48 light-color font-weight-bold ${styles.heroTitle} max-w-[340px] hero-title opacity-0 translate-y-10 transition-all duration-500`}
                                dangerouslySetInnerHTML={{ __html: data?.title || '' }}
                            />

                            <span className="font-16 light-color hero-description opacity-0 translate-y-10 transition-all duration-500">
                                {data?.description}
                            </span>

                            <Link href={data?.ctaButton.link} className="hero-button opacity-0 translate-y-10 transition-all duration-500">
                                <button className="apply-btn apply-btn-dark flex gap-2">
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
                                className="object-cover"
                            />
                            <div className="absolute inset-0 z-[4] pointer-events-none">
                                <Image
                                    src={moneyCoin1}
                                    alt="Coin 1"
                                    priority
                                    loading='eager'
                                    className="absolute w-[250px] top-[-80px] left-[130px] floating-image"
                                    style={{ visibility: 'hidden' }}
                                />
                                <Image
                                    src={moneyCoin2}
                                    alt="Coin 2"
                                    priority
                                    loading='eager'
                                    className="absolute w-[250px] top-[-20px] right-[0px] floating-image"
                                    style={{ visibility: 'hidden' }}
                                />
                                <Image
                                    src={moneyCoin3}
                                    alt="Coin 3"
                                    priority
                                    loading='eager'
                                    className="absolute w-[200px] top-[140px] left-[60px] z-1 floating-image"
                                    style={{ visibility: 'hidden' }}
                                />
                                <Image
                                    src={moneyCoin4}
                                    alt="Coin 4"
                                    priority
                                    loading='eager'
                                    className="absolute w-[200px] top-[150px] right-[-60px] z-1 floating-image"
                                    style={{ visibility: 'hidden' }}
                                />
                                <Image
                                    src={moneyNote1}
                                    alt="Note 1"
                                    priority
                                    loading='eager'
                                    className="absolute w-[150px] top-[200px] left-[50px] z-0 floating-image"
                                    style={{ visibility: 'hidden' }}
                                />
                                <Image
                                    src={moneyNote2}
                                    alt="Note 2"
                                    priority
                                    loading='eager'
                                    className="absolute w-[150px] top-[120px] right-[-60px] floating-image"
                                    style={{ visibility: 'hidden' }}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={styles.curve}></div>
        </section>
    );
};

export default HeroSection;
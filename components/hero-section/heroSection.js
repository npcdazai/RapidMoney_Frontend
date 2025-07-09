'use client';

import React, { useEffect, useState } from 'react';
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
import SelectLanguage from '../select-language/SelectLanguage';

const HeroSection = ({ data, showPagination }) => {  
  // const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  useEffect(() => {
  const context = gsap.context(() => {
    const elements = gsap.utils.toArray(".floating-image");
    const heroTitle = document.querySelector(".hero-title");
    const heroDescription = document.querySelector(".hero-description");
    const heroButton = document.querySelector(".hero-button");

    // Initial states
    gsap.set(elements, { y: -100, opacity: 0, visibility: 'hidden' });
    gsap.set([heroTitle, heroDescription, heroButton], { y: 60, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section-container',
        start: 'top 80%',
        once: true,
      },
    });

    // Animate text content
    tl.to([heroTitle, heroDescription, heroButton], {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1,
    }, 0)

    // Animate coins/notes in
    .set(elements, { visibility: 'visible' }, 0)
    .fromTo(
      elements,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.07,
      },
      0.1
    )

    // Floating animation
    .add(() => {
      elements.forEach((el) => {
        const alt = el.getAttribute("alt");

        // Extra spacing for Note 1 and Coin 3
        const isNote1 = alt === "Note 1";
        const isCoin3 = alt === "Coin 3";

        const floatY = isNote1 ? gsap.utils.random(20, 28) : gsap.utils.random(10, 18);
        const floatX = isCoin3 ? gsap.utils.random(12, 18) : gsap.utils.random(5, 10);
        const rotate = gsap.utils.random(-6, 6);
        const duration = gsap.utils.random(0.6, 1.2); // Faster loop
        const delay = gsap.utils.random(0, 0.05);

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
    }, 0.6);
  });

  return () => context.revert();
}, []);

  return (
    <section className={`${styles.section} dark-bg flex items-center pt-[150px] sm:pt-[200px] hero-section-container`}>
      <div className="container mx-auto relative">
        <Row gutter={[32, 32]}>
          <Col xs={24} lg={24} xl={8}>
            <div className="flex flex-col gap-[30px] z-10 relative">
              <h1
                className={`font-48 light-color font-weight-bold ${styles.heroTitle} max-w-[340px] hero-title `}
                dangerouslySetInnerHTML={{ __html: data?.title || '' }}
              />

              <span className="font-16 light-color hero-description">
                {data?.description}
              </span>

              <Link href={data?.ctaButton.link} className="hero-button">
                <button className="apply-btn apply-btn-dark flex gap-2" >
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
                  loading="eager"
                  className="absolute w-[140px] top-[-50px] left-[60px] sm:w-[250px] sm:top-[-80px] sm:left-[130px] floating-image"
                  style={{ visibility: 'hidden' }}
                />
                <Image
                  src={moneyCoin2}
                  alt="Coin 2"
                  priority
                  loading="eager"
                  className="absolute w-[140px] top-[-10px] right-[20px] sm:w-[250px] sm:top-[-20px] sm:right-[0px] floating-image"
                  style={{ visibility: 'hidden' }}
                />
                <Image
                  src={moneyCoin3}
                  alt="Coin 3"
                  priority
                  loading="eager"
                  className="absolute w-[120px] top-[100px] left-[30px] sm:w-[200px] sm:top-[140px] sm:left-[60px] z-1 floating-image"
                  style={{ visibility: 'hidden' }}
                />
                <Image
                  src={moneyCoin4}
                  alt="Coin 4"
                  priority
                  loading="eager"
                  className="absolute w-[120px] top-[110px] right-[-20px] sm:w-[200px] sm:top-[150px] sm:right-[-60px] z-1 floating-image"
                  style={{ visibility: 'hidden' }}
                />
                <Image
                  src={moneyNote1}
                  alt="Note 1"
                  priority
                  loading="eager"
                  className="absolute w-[100px] top-[140px] left-[20px] sm:w-[150px] sm:top-[200px] sm:left-[50px] z-0 floating-image"
                  style={{ visibility: 'hidden' }}
                />
                <Image
                  src={moneyNote2}
                  alt="Note 2"
                  priority
                  loading="eager"
                  className="absolute w-[100px] top-[90px] right-[-20px] sm:w-[150px] sm:top-[120px] sm:right-[-60px] floating-image"
                  style={{ visibility: 'hidden' }}
                />
              </div>


            </div>
          </Col>
        </Row>
      </div>

      {/* <div className={styles.curve}></div> */}
     {/* <SelectLanguage
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
      /> */}
    </section>
  );
};

export default HeroSection;
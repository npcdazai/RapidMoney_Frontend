'use client';

import Image from 'next/image';
import darkIphone from "./assets/dark_iphone.svg";
import playStore from "./assets/playstore.svg";
import styles from './apply-verification.module.scss';
import moneyHand from "./assets/woman-hands-money.png";
import Link from 'next/link';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Button } from 'antd';
import coin1 from "./assets/coin1.png";
import coin2 from "./assets/coin1.png";
import coin3 from "./assets/coin1.png";
import coin4 from "./assets/coin1.png";
import coin5 from "./assets/coin1.png";
import curve from "./assets/curve.png";
import note1 from "./assets/note1.png";
import note2 from "./assets/note2.png";
import { useEffect } from 'react';
import gsap from 'gsap';


export default function ConsentForm({ setStep }) {
useEffect(() => {
  const elements = gsap.utils.toArray(".floating-image");

  // Initial state
  gsap.set(elements, { y: -100, opacity: 0, visibility: "hidden" });

  const tl = gsap.timeline();

  tl.set(elements, { visibility: "visible" })

    // Drop with stagger
    .to(elements, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.1,
    })

    // Start bounce & rotation for all at once (no delay or index-based stagger)
    .add(() => {
      gsap.to(elements, {
        y: -40,
        rotation: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, "+=0"); // run immediately after drop
}, []);




    return (
        <div className={`${styles.successScreen} h-screen flex flex-col bg-black text-white overflow-hidden`}>
            <Image
                src={curve}
                alt="curve"
                className="floating-image max-w-[70px] max-h-[150px] absolute top-[280px] left-[240px] z-40"
            />
            <Image src={coin1} alt="coin" className="floating-image absolute top-[-60px] left-[300px] max-w-[200px] max-h-[200px] rotate-6 z-10" />
            <Image src={coin2} alt="coin" className="floating-image absolute top-[-60px] right-[300px] max-w-[200px] max-h-[200px] z-10 rotate-12" />
            <Image src={coin3} alt="coin" className="floating-image absolute top-[250px] left-[-70px] max-w-[200px] max-h-[200px] z-10 rotate-45" />
            <Image src={coin4} alt="coin" className="floating-image absolute top-[400px] right-[-80px] max-w-[200px] max-h-[200px] z-10 rotate-3" />
            <Image src={coin5} alt="coin" className="floating-image absolute bottom-[-80px] left-[200px] max-w-[200px] max-h-[200px] z-10 rotate-2" />
            <Image src={note1} alt="note" className="floating-image absolute top-[150px] left-[240px] max-w-[200px] max-h-[200px] z-10" />
            <Image src={note2} alt="note" className="floating-image absolute top-[300px] right-[150px] max-w-[200px] max-h-[200px] z-10" />


            <div className="flex-shrink-0 pt-6 px-6 z-10 relative">
                <button onClick={() => setStep(prev => prev - 1)} className='text-[#fff] font-24 font-bold flex gap-2 items-center cursor-pointer'>
                    <RiArrowLeftLine size={24} />
                    <span>Back</span>
                </button>
            </div>

            {/* Center Content - Flexible and centered */}
            <div className='flex-1 flex flex-col items-center justify-center text-center px-4 py-4 relative z-10'>
                <h2 className='text-3xl md:text-4xl font-bold pb-4'>Congratulations!</h2>

                <div className='flex flex-col items-center gap-2 pb-6'>
                    <span className='text-lg font-light'>
                        You are pre-qualified for a loan up to
                    </span>
                    <span className='text-3xl md:text-4xl font-bold text-[#B7FB52]'>₹ 25000/-</span>
                </div>

                <Link href="#">
                    <button className="apply-btn apply-btn-dark flex items-center justify-center min-w-[230px] gap-3 py-2 px-4 bg-[#1a1a1a] rounded hover:bg-[#2a2a2a] transition mb-6">
                        <span>Download</span>
                        <Image src={darkIphone} width={24} height={24} alt="iphone" />
                        <Image src={playStore} width={24} height={24} alt="playstore" />
                    </button>
                </Link>

                <div className='max-w-[560px] w-full bg-[rgba(0,0,0,0.53)] backdrop-blur-[70.15px] rounded-[12px] text-sm px-5 py-4 flex gap-4'>
                    <span className='text-[#53A10A] font-semibold flex-shrink-0'>Note</span>
                    <span className='text-left'>
                        Please Download & Install RapidMoney mobile app from android / apple PlayStore to continue with your Loan Application Journey
                    </span>
                </div>
            </div>

            {/* Bottom Image - Fixed at bottom */}
            <div className={`flex justify-center items-end relative ${styles.moneyHand} flex-shrink-0 pb-4`}>
                <Image
                    src={moneyHand}
                    alt="Rupee Notes"
                    width={500}
                    height={250}
                    className=" h-auto object-contain relative z-10"
                />
            </div>
        </div>
    );
}

'use client';

import Image from 'next/image';
import darkIphone from "./assets/dark_iphone.svg";
import playStore from "./assets/playstore.svg";
import styles from './apply-verification.module.scss';
import moneyHand from "./assets/woman-hands-money.png";
import Link from 'next/link';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Button } from 'antd';

export default function ConsentForm({setStep}) {
    return (
        <div className={`${styles.successScreen} h-screen flex flex-col bg-black text-white overflow-hidden`}>
            
            {/* Top Back Button - Fixed at top */}
            <div className="flex-shrink-0 pt-6 px-6 z-10 relative">
                <button onClick={()=> setStep(prev => prev - 1)} className='text-[#333333] font-24 font-bold flex gap-2 items-center'>
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

                <div className='max-w-[500px] w-full bg-[rgba(0,0,0,0.53)] backdrop-blur-[70.15px] rounded-[12px] text-sm px-5 py-4 flex gap-4'>
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

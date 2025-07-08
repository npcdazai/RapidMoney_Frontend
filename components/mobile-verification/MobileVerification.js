'use client';

import { Input, Button, Select } from 'antd';
import { useState } from 'react';
import Image from 'next/image'; // or use <img> if you're not using Next.js
import ApplyForm from './ApplyForm';
import ApplyImageContainer from './ApplyImageContainer';
import lightRapidMoneyLogo from "./assets/light_rapid_money_logo.png";
import styles from './mobile-verification.module.scss';
// import indiaFlag from './assets/india-flag.svg'; // Replace with your path

const { Option } = Select;

export default function MobileVerification() {
    const [mobile, setMobile] = useState('');
    const [countryCode, setCountryCode] = useState('+91');

    return (
        <div className="min-h-screen flex">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12">
                {/* Logo */}
                <Image
                    src={lightRapidMoneyLogo}
                    alt="RapidMoney Logo"
                    width={220}
                    height={50}
                    className={`max-w-full h-auto object-contain ${styles.headerLogo}`}
                />
                <ApplyForm />
            </div>

            <div className="hidden lg:block w-1/2 overflow-hidden">
                <ApplyImageContainer />
            </div>
        </div>
    );
}

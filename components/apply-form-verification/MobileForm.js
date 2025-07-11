import { Form, Input, Select } from 'antd'
import React, { useState } from 'react'
import ApplyImageContainer from './ApplyImageContainer';
import lightRapidMoneyLogo from "./assets/light_rapid_money_logo.png";
import Image from 'next/image';
import styles from './apply-verification.module.scss'
const { Option } = Select
import personImage from './assets/personImage.png'
import note1 from "./assets/note1.png"
import note2 from "./assets/note2.png"
import coin1 from "./assets/coin1.png"
import coin2 from "./assets/coin2.png"
import coin3 from "./assets/coin3.png"
import coin4 from "./assets/coin3.png"
import passwordstar from "./assets/password.png"
import curve from "./assets/curve.png"
import indiaFlag from "./assets/india.svg";
import { RiArrowDownSLine } from 'react-icons/ri';
import Link from 'next/link';

export default function MobileForm({ setStep }) {
    const [countryCode, setCountryCode] = useState('+91');

    return (
        <div className="h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className=" flex flex-col justify-center items-center px-6 py-12">
                <Link href="/">
                    <Image
                        src={lightRapidMoneyLogo}
                        alt="RapidMoney Logo"
                        width={220}
                        height={50}
                        className={`max-w-full h-auto object-contain ${styles.headerLogo}`}
                    />
                </Link>
                <div className="w-full max-w-sm mx-auto py-12 px-4 text-center">
                    <Form.Item
                        required={false}
                        label={<span className="font-14 font-semibold text-[#333333]">Mobile Number</span>}
                        name="mobile"
                        rules={[
                            { required: true, message: 'Please enter your mobile number' },
                            { pattern: /^\d{10}$/, message: 'Mobile number must be 10 digits' },
                        ]}
                        className={`!mb-4 ${styles.MobileForm} `}
                    >
                        <Input

                            addonBefore={
                                <div className="flex items-center">
                                    <Image
                                        src={indiaFlag}
                                        alt="India Flag"
                                        width={24}
                                        height={16}
                                        className="mr-2"
                                    />
                                    <Select
                                        value={countryCode}
                                        onChange={setCountryCode}
                                        bordered={false}
                                        className="w-[90px]"
                                        // style={{ borderRight: 'none' }}
                                        suffixIcon={<RiArrowDownSLine color='#000' size={18} />}
                                    >
                                        <Option value="+91">+91</Option>
                                        {/* <Option value="+1">+1</Option> */}
                                    </Select>
                                </div>
                            }
                            size='large'
                            allowClear
                        />
                    </Form.Item>

                    <p className="font-14 text-[#333333CC] mb-6">
                        Please enter your <span className="primary-color">AADHAAR</span> linked mobile number
                    </p>
                    <button
                        // className="apply-btn apply-btn-green !w-full font-medium"
                        className="apply-btn apply-btn-green !w-full mt-[50px] font-medium"
                        onClick={() => setStep(prev => prev + 1)}
                    >
                        Request OTP
                    </button>
                </div>
            </div>
            {/* <div className="hidden lg:flex overflow-hidden"> */}
            <div className="hidden lg:flex overflow-hidden  items-start">
                <ApplyImageContainer
                    personImage={personImage}
                    note1={note1}
                    note2={note2}
                    coin1={coin1}
                    coin2={coin2}
                    coin3={coin3}
                    coin4={coin4}
                />
            </div>
        </div>
    )
}

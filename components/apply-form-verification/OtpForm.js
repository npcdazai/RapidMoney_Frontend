import { Checkbox, Form, Input, Select } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import lightRapidMoneyLogo from "./assets/light_rapid_money_logo.png";
import ApplyImageContainer from './ApplyImageContainer';
import styles from './apply-verification.module.scss'
import personImage from './assets/otpWomen.png'
import note1 from "./assets/note1.png"
import note2 from "./assets/note2.png"
import coin1 from "./assets/coin1.png"
import coin2 from "./assets/coin2.png"
import coin3 from "./assets/coin3.png"
import coin4 from "./assets/coin3.png"
import passwordstar from "./assets/password.png"
import curve from "./assets/curve.png"
import Link from 'next/link';
const { Option } = Select
export default function OtpForm({ setStep }) {
    const [countryCode, setCountryCode] = useState('+91');
    return (
        <div className="h-screen flex overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-8">

                <Link href="/">
                    <Image
                        src={lightRapidMoneyLogo}
                        alt="RapidMoney Logo"
                        width={220}
                        height={50}
                        className={`max-w-full h-auto object-contain ${styles.headerLogo}`}
                    />
                </Link>
                <div className="w-full max-w-sm mx-auto pt-12 px-4 text-center">
                    <Form.Item
                        required={false}
                        label={<span className="font-20 font-semibold text-[#333333]">Enter OTP</span>}
                        name="otp"
                        rules={[{ required: true, message: 'Please enter the OTP' }]} className='!mb-4'>
                        <div className="mb-2 text-left">
                            <span className="font-14 text-[#333333CC] font-medium">
                                Sent To 1234567890
                                <span onClick={() => setStep(1)} className="text-[#09A143] cursor-pointer font-medium ml-2 underline">
                                    Edit
                                </span>
                            </span>
                        </div>

                        {/* ✅ Ant Design OTP Input */}
                        <div className={styles.otpInputContainer}>
                            <Input.OTP
                                length={4}
                                // maxLength={4}
                                size='large'
                            // className="w-full custom-otp-input"
                            // style={{ gap: 12 }}
                            // inputStyle={{ width: 48, height: 48, fontSize: 24, textAlign: 'center', borderRadius: 8 }}
                            />
                        </div>
                    </Form.Item>

                    <p className="font-14 text-[#333333CC] text-left pb-[30px]">{"Didn't Receive OTP?"}</p>

                    <p className='text-center text-black font-14 pb-[30px] underline'>Re-send in 00:53s</p>

                    <Form.Item>
                        <button
                            className="apply-btn apply-btn-green w-full"
                            onClick={() => setStep(prev => prev + 1)}
                        >
                            Continue
                        </button>
                    </Form.Item>

                    <Form.Item >
                        <div className={styles.consentCheckbox}>
                            <Checkbox onChange={() => console.log("first")}>I hereby consent to receive loan related communication from MoneyTime Technology Solutions Pvt. Ltd. or its authorized representatives via Call, SMS, Email, RCS & Voice over Internet Protocol (VolP) including WhatsApp.</Checkbox>
                        </div>
                    </Form.Item>
                </div>
            </div>
            {/* <button onClick={() => setStep(prev => prev - 1)} className='text-[#333333] font-24 font-bold flex gap-2 items-center mt-4'>
                    <span>Back</span>
                </button> */}
            {/* </div> */}
            <div className="hidden lg:block w-1/2 overflow-hidden">
                <ApplyImageContainer
                    personImage={personImage}
                    note1={note1}
                    note2={note2}
                    passwordstar={passwordstar}
                    curve={curve}
                />
            </div>
        </div>
    )
}

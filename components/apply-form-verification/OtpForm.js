import { Checkbox, Form, Input, Select } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import lightRapidMoneyLogo from "./assets/light_rapid_money_logo.png";
import ApplyImageContainer from './ApplyImageContainer';
import styles from './apply-verification.module.scss'
const { Option } = Select
export default function OtpForm({ setStep }) {
    const [countryCode, setCountryCode] = useState('+91');
    return (
        <div className="h-screen flex overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-8">
                <div className="w-full max-w-sm mx-auto text-center">
                    <Image
                        src={lightRapidMoneyLogo}
                        alt="RapidMoney Logo"
                        width={220}
                        height={50}
                        className={`max-w-full h-auto object-contain ${styles.headerLogo}`}
                    />
                    <Form.Item label={<span className="font-20 font-semibold text-[#333333]">Enter OTP</span>} name="otp" rules={[{ required: true, message: 'Please enter the OTP' }]} className='!mb-4'>
                        <div className="mb-2 text-left">
                            <span className="font-14 text-[#333333CC] font-medium">
                                Sent To 1234567890
                                <span onClick={() => setStep(1)} className="text-[#09A143] cursor-pointer font-medium ml-2 underline">
                                    Edit
                                </span>
                            </span>
                        </div>

                        <div className={styles.otpInputContainer}>
                            <Input.OTP
                                length={4}
                                size='large'
                            />
                        </div>
                    </Form.Item>

                    <p className="font-14 text-[#333333CC] text-left mb-4">{"Didn't Receive OTP?"}</p>

                    <p className='text-center text-black font-14 mb-6 underline'>Re-send in 00:53s</p>

                    <Form.Item>
                        <button
                            className="apply-btn apply-btn-green w-full mb-4"
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
                <button onClick={() => setStep(prev => prev - 1)} className='text-[#333333] font-24 font-bold flex gap-2 items-center mt-4'>
                    <span>Back</span>
                </button>
            </div>
            <div className="hidden lg:block w-1/2 overflow-hidden">
                <ApplyImageContainer />
            </div>
        </div>
    )
}

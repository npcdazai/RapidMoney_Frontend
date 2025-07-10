import { Checkbox, Form, Input, Select } from 'antd'
import Image from 'next/image'
import React, { useState } from 'react'
import lightRapidMoneyLogo from "./assets/light_rapid_money_logo.png";
import ApplyImageContainer from './ApplyImageContainer';
import styles from './mobile-verification.module.scss'
const { Option } = Select
export default function OtpForm({ setStep }) {
    const [countryCode, setCountryCode] = useState('+91');
    return (
        <div className="min-h-screen flex">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12">
                <div className="w-full max-w-sm mx-auto py-12 px-4 text-center">
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

                    <p className="font-14 text-[#333333CC] text-left pb-[60px]">{"Didn't Receive OTP?"}</p>

                    <p className='text-center text-black font-14 pb-10 underline'>Re-send in 00:53s</p>

                    <Form.Item>
                        <button
                            className="apply-btn apply-btn-green w-full"
                            onClick={() => setStep(prev => prev + 1)} // Change to next step
                        // type="button"
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
                <button onClick={() => setStep(prev => prev - 1)} className='text-[#333333] font-24 font-bold flex gap-2 items-center pt-6 px-6 z-10 relative'>
                    <span>Back</span>
                </button>
            </div>
            <div className="hidden lg:block w-1/2 overflow-hidden">
                <ApplyImageContainer />
            </div>

        </div>
    )
}

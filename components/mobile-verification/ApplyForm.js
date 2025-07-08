'use client';

import { useState } from 'react';
import { Button, Cascader, Form, Input, Select } from 'antd';
import { RiArrowLeftLine } from 'react-icons/ri';
import styles from "./mobile-verification.module.scss"

const { Option } = Select;

export default function ApplyForm() {
    const [step, setStep] = useState(2);
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [countryCode, setCountryCode] = useState('+91');

    const [form] = Form.useForm();

    return (
        <div className="w-full max-w-sm mx-auto py-12 px-4 text-center">
            <Form form={form} layout="vertical" requiredMark={false} className={styles.applyForm}>
                {step === 1 ? (
                    <>
                        <Form.Item
                            label={<span className="font-14 font-semibold text-[#333333]">Mobile Number</span>}
                            name="mobile"
                            rules={[
                                { required: true, message: 'Please enter your mobile number' },
                                { pattern: /^\d{10}$/, message: 'Mobile number must be 10 digits' },
                            ]}
                            className='!mb-4'
                        >

                            <Input
                                addonBefore={<Select
                                    value={countryCode}
                                    onChange={setCountryCode}
                                    bordered={false}
                                    className="w-[70px]"
                                >
                                    <Option value="+91">+91</Option>
                                    <Option value="+1">+1</Option>
                                </Select>}
                                // defaultValue="mysite"
                                size='large'
                                allowClear
                            />
                            {/* </div> */}
                        </Form.Item>

                        <p className="font-14 text-[#333333CC];
">
                            Please enter your <span className="primary-color">AADHAAR</span> linked mobile number
                        </p>
                        <button
                            className="apply-btn apply-btn-green !w-full mt-[100px] font-medium"
                            onClick={() => setStep(2)}
                        >
                            Request OTP
                        </button>
                    </>
                ) : (
                    <>

                        <Form.Item label={<span className="font-20 font-semibold text-[#333333]">Enter OTP</span>} name="otp" rules={[{ required: true, message: 'Please enter the OTP' }]}>
                            <div className="mb-2 text-left">
                                <span className="font-14 text-[#333333CC] font-medium">
                                    Sent To 1234567890
                                    <span onClick={() => setStep(1)} className="text-[#09A143] cursor-pointer font-medium ml-2">
                                        Edit
                                    </span>
                                </span>
                            </div>

                            {/* ✅ Ant Design OTP Input */}
                                <Input.OTP
                                    length={4}
                                    // maxLength={4}
                                    size='large'
                                    // className="w-full custom-otp-input"
                                    // style={{ gap: 12 }}
                                    // inputStyle={{ width: 48, height: 48, fontSize: 24, textAlign: 'center', borderRadius: 8 }}
                                />
                        </Form.Item>

                        <p className="text-sm text-gray-500 mb-2">Didn't Receive OTP?</p>

                        <Form.Item>
                            <Button
                                className="w-full h-12 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-500 border-none"
                            >
                                Continue
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="text"
                                className="mt-0 flex items-center justify-center gap-2 text-sm text-gray-700"
                                onClick={() => setStep(1)}
                            >
                                <RiArrowLeftLine size={18} />
                                Back to Login
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form>
        </div>
    );
}

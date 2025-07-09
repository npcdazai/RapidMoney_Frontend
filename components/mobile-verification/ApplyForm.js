'use client';

import { useState } from 'react';
import { Button, Cascader, Checkbox, Form, Input, Select, Space } from 'antd';
import { RiArrowLeftLine } from 'react-icons/ri';
import styles from "./mobile-verification.module.scss"
import BasicDetailsForm from './BasicForm';

const { Option } = Select;

export default function ApplyForm() {
    const [step, setStep] = useState(2);
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [countryCode, setCountryCode] = useState('+91');

    const [form] = Form.useForm();

    const steps = [
        "Mobile Number",
        "OTP Verification",
        "Basic Details",
        "Consent & Submit"
    ];

    return (
        <div className="w-full max-w-sm mx-auto py-12 px-4 text-center">
            <Form form={form} layout="vertical" requiredMark={false} className={styles.applyForm}>
                {step === 1 && (
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
                )}
                {step === 2 && (
                    <>

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
                            >
                                Continue
                            </button>
                        </Form.Item>

                        <Form.Item >
                            <div className={styles.consentCheckbox}>
                                <Checkbox onChange={() => console.log("first")}>I hereby consent to receive loan related communication from MoneyTime Technology Solutions Pvt. Ltd. or its authorized representatives via Call, SMS, Email, RCS & Voice over Internet Protocol (VolP) including WhatsApp.</Checkbox>
                            </div>
                        </Form.Item>
                    </>
                )}

                {step === 3 && (
                    <BasicDetailsForm />
                )}

                {step === 4 && (
                    <>
                        <Form.Item>
                            <div className={styles.consentCheckbox}>
                                <Checkbox>
                                    I hereby consent to receive loan related communication from MoneyTime Technology Solutions Pvt. Ltd. or its authorized representatives via Call, SMS, Email, RCS & Voice over Internet Protocol (VolP) including WhatsApp.
                                </Checkbox>
                            </div>
                        </Form.Item>
                        {/* <div className="flex gap-2 mt-6">
                            <Button onClick={() => setStep(3)} block>Back</Button>
                            <Button
                                className="apply-btn apply-btn-green w-full"
                                type="primary"
                                htmlType="submit"
                                block
                            >
                                Submit
                            </Button>
                        </div> */}
                    </>
                )}
            </Form>

            <div className='pt-10'>
                <Space>
                    <Button
                        // type="text"
                        // icon={<RiArrowLeftLine size={24} />}
                        onClick={() => setStep(step > 1 ? step - 1 : step)}
                        className="text-[#333333] font-medium"
                    >
                        Back
                    </Button>
                    <Button
                        // type="primary"
                        onClick={() => setStep(step < steps.length ? step + 1 : step)}
                        className="apply-btn apply-btn-green w-full"
                    >
                        Next
                    </Button>
                </Space>
            </div>
        </div>
    );
}

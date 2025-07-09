import { Checkbox, Form, Input } from 'antd'
import React from 'react'

export default function OtpForm() {
    return (
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
    )
}

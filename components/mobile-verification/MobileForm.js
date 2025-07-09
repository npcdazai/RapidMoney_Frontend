import { Form, Input, Select } from 'antd'
import React, { useState } from 'react'
import ApplyImageContainer from './ApplyImageContainer';
const { Option } = Select
export default function MobileForm() {
    const [countryCode, setCountryCode] = useState('+91');

    // const [form] = Form.useForm();
    return (
        <>
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12">
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
            </div >
            <div className="hidden lg:block w-1/2 overflow-hidden">
                <ApplyImageContainer />
            </div>
        </>
    )
}

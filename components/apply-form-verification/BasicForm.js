'use client';
import { Form, Input, DatePicker, Select, Button, Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { RiArrowLeftLine, RiMenuFill, RiNotification2Line } from 'react-icons/ri';
import Image from 'next/image';
import Idcard from "./assets/IdCard.png"

const { Option } = Select;

export default function BasicDetailsForm({ setStep }) {
  const [form] = Form.useForm();

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className='flex items-center justify-between px-10 py-5 bg-white border-b border-gray-200 flex-shrink-0'>
        <h2 className="font-24 font-bold text-[#333333] flex items-center gap-2">
          <button  onClick={()=> setStep(prev => prev - 1)}><RiArrowLeftLine /></button> Basic Details
        </h2>

        <div className='flex items-center gap-4'>
          <RiNotification2Line />
          <RiMenuFill />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 overflow-y-auto">
        <div className="text-center mb-6">
          <Image src={Idcard} alt="Id Card" width={150} height={150} className="mb-4" />
        </div>

        <Form
          form={form}
          layout="vertical"
          className="w-full max-w-4xl p-4 md:p-8"
          requiredMark={false}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item
                name="fullName"
                label="Full Name as per PAN Number"
                rules={[{ required: true, message: 'Please enter your full name' }]}
              >
                <Input placeholder="Full Name as per PAN Number" size='large' />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="panCard"
                label="Pan Card Number"
                rules={[{ required: true, message: 'Please enter your PAN card number' }]}
              >
                <Input placeholder="For eg: ABCDE134" size='large' />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="fatherName"
                label="Father's Full Name as per PAN Number"
                rules={[{ required: true, message: "Please enter your father's name" }]}
              >
                <Input placeholder="Enter your father name" size='large' />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="dob"
                label="Date of Birth (as per PAN Card / Number)"
                rules={[{ required: true, message: 'Please enter your DOB' }]}
              >
                <DatePicker
                  format="DD-MM-YYYY"
                  className="w-full"
                  placeholder="DD-MM-YYYY"
                  size='large'
                />
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                name="pincode"
                label="Pincode"
                rules={[{ required: true, message: 'Please enter your pincode' }]}
              >
                <Input placeholder="Enter your pincode" size='large' />
              </Form.Item>
            </Col>
          </Row>

          <div className="text-[#53A10A] font-14 font-semibold mb-3">IMPORTANT*</div>
          <p className="text-[#333333CC] font-14 mb-5">
            Your PAN, Full Name and Date of Birth help us verify your details quickly.
            Please ensure you enter correct information.
          </p>

          <div className="flex justify-end">
            <button
              className="apply-btn apply-btn-green"
              onClick={() => setStep(prev => prev + 1)}
            >
              Proceed
              <ArrowRightOutlined className="ml-2" />
            </button>
          </div>
        </Form>
      </div>
      
      <div className="font-16 text-black border-t border-gray-200 p-5 text-center flex-shrink-0">
        MoneyTime Technology Solutions Pvt. Ltd.
      </div>
    </div>
  );
}

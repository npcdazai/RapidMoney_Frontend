'use client';
import { Form, Input, DatePicker, Select, Button, Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function BasicDetailsForm() {
  const [form] = Form.useForm();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-xl font-semibold mb-6 w-full max-w-4xl text-left">
        ← Basic Details
      </h1>

      <Form
        form={form}
        layout="vertical"
        className="w-full max-w-4xl bg-white p-4 md:p-8 rounded-xl shadow"
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="fullName"
              label="Full Name as per PAN Number"
              rules={[{ required: true, message: 'Please enter your full name' }]}
            >
              <Input placeholder="Full Name as per PAN Number" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="panCard"
              label="Pan Card Number"
              rules={[{ required: true, message: 'Please enter your PAN card number' }]}
            >
              <Input placeholder="For eg: ABCDE134" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="fatherName"
              label="Father's Full Name as per PAN Number"
              rules={[{ required: true, message: "Please enter your father's name" }]}
            >
              <Input placeholder="Enter your father name" />
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
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="pincode"
              label="Pincode"
              rules={[{ required: true, message: 'Please enter your pincode' }]}
            >
              <Input placeholder="Enter your pincode" />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="language"
              label="Preferred Language"
              rules={[{ required: true, message: 'Please select your language' }]}
            >
              <Select placeholder="Select language">
                <Option value="en">English</Option>
                <Option value="hi">Hindi</Option>
                {/* Add more languages as needed */}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <div className="text-green-600 text-sm font-semibold mb-1">IMPORTANT*</div>
        <p className="text-gray-600 text-sm mb-6">
          Your PAN, Full Name and Date of Birth help us verify your details quickly.
          Please ensure you enter correct information.
        </p>

        <div className="flex justify-end">
          <Button
            type="primary"
            icon={<ArrowRightOutlined />}
            className="bg-lime-400 hover:bg-lime-500 text-black font-semibold"
          >
            Proceed
          </Button>
        </div>
      </Form>

      <footer className="mt-10 text-sm text-gray-500">
        MoneyTime Technology Solutions Pvt. Ltd.
      </footer>
    </div>
  );
}

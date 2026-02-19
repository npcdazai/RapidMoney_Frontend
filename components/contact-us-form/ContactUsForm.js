"use client";
import React, { useState } from "react";
import { Col, Form, Input, Row, Alert, Checkbox } from "antd";
import styles from "./contact-form.module.scss";
import Image from "next/image";
import personImage from "./assets/personImage.png";
import { RiMailLine, RiMapPinLine } from "react-icons/ri";
import { GiPoliceOfficerHead } from "react-icons/gi";

const ContactUs = ({ data }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [alertInfo, setAlertInfo] = useState(null);

  const onFinish = async (values) => {
    console.log("Form submitted:", values);
    setLoading(true);
    setAlertInfo({ type: "info", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      // Show success alert
      setAlertInfo({
        type: "success",
        message: result.message || "Message sent successfully!",
      });

      // Reset form
      form.resetFields();

      // Clear alert after 5 seconds
      setTimeout(() => {
        setAlertInfo(null);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setAlertInfo({
        type: "error",
        message: error.message || "Failed to send message. Please try again.",
      });

      setTimeout(() => {
        setAlertInfo(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);

  return (
    <>
      <section className="container mx-auto pt-[80px] pb-60 flex flex-col items-center">
        {/* Alert positioned at top */}
        {alertInfo && (
          <div className="z-50 w-[80%] px-4">
            <Alert
              message={alertInfo.message}
              type={alertInfo.type}
              showIcon
              closable
              onClose={() => setAlertInfo(null)}
            />
          </div>
        )}

        <div className=" w-full text-center">
          <div className="mx-auto">
            <h1 className="font-bold text-4xl pb-6 ">{data.title}</h1>
            <span className="block font-40 font-weight-bold">
              {data.description}
            </span>
          </div>
        </div>
        <Row gutter={[32, 32]} justify="center">
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 12, offset: 0 }}
            style={{ justifyContent: "center" }}
          >
            <div
              className={`${styles.contactForm} border border-[var(--border-color)] rounded-4xl pt-10 pb-2 px-8`}
            >
              <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
                style={{ marginInlineStart: 0 }}
              >
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[
                    { required: true, message: "Please enter your full name" },
                  ]}
                >
                  <Input
                    placeholder="Enter your Full Name"
                    size="large"
                    disabled={loading}
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input
                    placeholder="Enter your Email"
                    size="large"
                    disabled={loading}
                  />
                </Form.Item>
                <Form.Item
                  label="Mobile Number"
                  name="mobileNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your mobile number",
                    },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit mobile number",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your Mobile Number"
                    size="large"
                    disabled={loading}
                  />
                </Form.Item>
                <Form.Item label="Message" name="message">
                  <Input.TextArea
                    rows={4}
                    placeholder="Enter your Message"
                    size="large"
                    disabled={loading}
                  />
                </Form.Item>


                <Form.Item>
                  <span className="text-xs text-gray-600">
                    By clicking Submit, you agree to our{" "}
                    <a href="/term-conditions" style={{ color: "#1890ff" }}>
                      Terms of Service
                    </a>{" "}
                    and that you have read our{" "}
                    <a href="/privacy-policy" style={{ color: "#1890ff" }}>
                      Privacy Policy
                    </a>.
                  </span>
                </Form.Item>

                <Form.Item
                  name="consent"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(new Error("Please provide your consent")),
                    },
                  ]}
                >
                  <Checkbox>
                    <span className="text-xs">
                      I hereby authorize to send notifications on SMS/Messages/Promotional/Informational messages
                    </span>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  {/* <button
                    htmlType="submit"
                    className="apply-btn apply-btn-green max-w-[140px] w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button> */}
                  <button
                    type="submit"
                    className="apply-btn apply-btn-green max-w-[140px] w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>

                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col xs={24} lg={10}>
            <div className={`${styles.addressBkl} flex flex-col gap-5`}>
              <div
                className={`${styles.addressContainer} border border-[var(--border-color)] rounded-3xl pt-4 pl-4`}
              >
                <div className="flex flex-col items-start gap-4 mb-4 x">
                  <div className="flex gap-2">
                    <RiMapPinLine
                      size={32}
                      className="min-h-[24px] min-w-[24px]"
                    />
                    <span className="font-16 font-medium">
                      {data?.location_side}
                    </span>
                  </div>
                  <span className="font-16">{data.address}</span>
                </div>
                <span className={`${styles.personImageContainer}`}>
                  <Image
                    src={personImage}
                    width={120}
                    height={200}
                    alt="Contact Rapid Money"
                    className={styles.personImage}
                  />
                </span>
              </div>
              <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-[#fff] p-6 shadow-sm space-y-3">

                {/* Grievance Officer */}
                <div className="flex items-start gap-4">
                  <GiPoliceOfficerHead
                    size={26}
                    className="mt-1 text-[#5FB000]"
                  />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Grievance Redressal Officer
                    </p>
                    <p className="text-[16px] font-semibold text-[#5FB000]">
                      Avinash Babulal Dhivar
                    </p>
                  </div>
                </div>

                <hr className="border-gray-200" />
                <div className="flex items-center gap-4">
                  <RiMailLine size={22} className="text-gray-600" />
                  <a
                    href="mailto:avinash.dhivar@rapidmoney.inn"
                    className="text-[15px] font-medium text-blue-600 hover:text-blue-700 hover:underline transition"
                  >
                    avinash.dhivar@rapidmoney.in
                  </a>
                </div>

                {/* Email 1 */}
                <div className="flex items-center gap-4">
                  <RiMailLine size={22} className="text-gray-600" />
                  <a
                    href="mailto:support@rapidmoney.com"
                    className="text-[15px] font-medium text-blue-600 hover:text-blue-700 hover:underline transition"
                  >
                    support@rapidmoney.com
                  </a>
                </div>

                {/* Email 2 */}

              </div>

            </div>
          </Col>
        </Row>
      </section>

    </>
  );
};

export default ContactUs;

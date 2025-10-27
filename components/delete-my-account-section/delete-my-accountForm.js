"use client";
import React, { useState } from "react";
import { Col, Form, Input, Row, message, Button } from "antd";
import styles from "./delete-form.module.scss";
import Image from "next/image";
import personImage from "./assets/personImage.png";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";

const DeleteMyAccountForm = ({ data }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    console.log("Form submitted:", values);
    setLoading(true);

    // Show loading message
    const loadingMessage = messageApi.loading({
      content: 'Processing your request...',
      duration: 0,
    });

    try {
      const response = await fetch("/api/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      // Dismiss loading message
      loadingMessage();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      // Success message
      messageApi.success({
        content: 'Your account deletion request has been submitted successfully!',
        duration: 5,
      });

      // Reset form after success
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Error message
      messageApi.error({
        content: error.message || "Failed to submit deletion request. Please try again.",
        duration: 5,
      });
    } finally {
      setLoading(false);
    }
  };

  console.log(data);

  return (
    <>
      {contextHolder}
      <section className="container mx-auto pt-[80px] pb-60">
        <div className=" w-full text-center">
          <div className="mx-auto">
            <h1 className="font-bold text-4xl pb-6 ">Delete My Account</h1>
            <span className="block font-40 font-weight-bold">
              {data.description}
            </span>
          </div>
        </div>
        <Row gutter={[32, 32]} justify="center">
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 20, offset: 0 }}
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
                <Form.Item label="Reason" name="message">
                  <Input.TextArea
                    rows={4}
                    placeholder="Enter your Message"
                    size="large"
                    disabled={loading}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="apply-btn apply-btn-green max-w-[140px] w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default DeleteMyAccountForm;
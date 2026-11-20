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


  return (
    <>
      {contextHolder}
      <section className="container mx-auto pt-[80px] pb-60">
        <div className="w-full text-center max-w-3xl mx-auto pb-8">
          <h1 className="font-bold text-4xl pb-4">Delete RapidMoney Account</h1>
          <p className="text-gray-600 text-base">
            {data?.description || "Request permanent deletion of your RapidMoney account and associated personal data."}
          </p>
        </div>

        <Row gutter={[32, 32]} justify="center">
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 20, offset: 0 }}
          >
            <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 mb-8 text-sm text-gray-700 leading-relaxed">
              <h3 className="font-bold text-base text-gray-900 pb-2">
                Account Deletion &amp; Regulatory Data Retention Policy
              </h3>
              <p className="pb-3">
                In compliance with Google Play Developer Policies, RBI Digital Lending Guidelines, and applicable Indian data protection regulations, you have the right to request deletion of your RapidMoney account and personal information.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Processing Timeline:</strong> Deletion requests are verified and processed within <strong>thirty (30) days</strong> of submission.
                </li>
                <li>
                  <strong>Data Deleted:</strong> Your account profile, login credentials, authentication tokens, marketing preferences, and device identifiers will be permanently removed from our active databases.
                </li>
                <li>
                  <strong>Statutory Retention Requirements:</strong> If you have availed a loan through the RapidMoney platform, certain records (including loan application data, sanction letters, repayment transactions, and KYC verification records) are legally mandated to be retained for a minimum of <strong>8 years</strong> under the Prevention of Money Laundering Act (PMLA), 2002 and Reserve Bank of India (RBI) regulations. Such records will be securely archived and retained strictly for regulatory compliance and audit purposes.
                </li>
                <li>
                  <strong>Active Loans:</strong> Accounts with active, outstanding loan balances cannot be deleted until all pending dues are fully settled.
                </li>
                <li>
                  <strong>Alternative Submission:</strong> You may also submit your deletion request by sending an email from your registered email ID to our Grievance Officer at <a href="mailto:support@rapidmoney.in" className="text-lime-600 underline font-medium">support@rapidmoney.in</a> along with your registered mobile number.
                </li>
              </ul>
            </div>
          </Col>
        </Row>

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
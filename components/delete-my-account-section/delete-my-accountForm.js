"use client";
import React, { useState } from "react";
import { Col, Form, Input, Row, message } from "antd";
import styles from "./delete-form.module.scss";
import Image from "next/image";
import personImage from "./assets/personImage.png";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";

const DeleteMyAccountForm = ({ data }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("Form submitted:", values);
    setLoading(true);

    try {
      const response = await fetch("/api/delete-account", {
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

      message.success({
        content: 'Your account deletion request has been submitted successfully!',
        duration: 5,
        style: {
          marginTop: '20vh',
        },
      });

      // Reset form
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error({
        content: error.message || "Failed to submit deletion request. Please try again.",
        duration: 5,
        style: {
          marginTop: '20vh',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  console.log(data);

  return (
    <>
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
                  <button
                    htmlType="submit"
                    className="apply-btn apply-btn-green max-w-[140px] w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          {/* <Col xs={24} lg={10} >
                        <div className={`${styles.addressBkl} flex flex-col gap-5`}>
                            <div className={`${styles.addressContainer} border border-[var(--border-color)] rounded-3xl pt-4 pl-4`}>
                                <div className="flex flex-col items-start gap-4 mb-4 x">
                                    <div className='flex gap-2'> 
                                        <RiMapPinLine size={32} className='min-h-[24px] min-w-[24px]'/>
                                        <span className='font-16 font-medium'>{data?.location_side}</span>
                                    </div>
                                    <span className='font-16'>{data.address}</span>
                                </div>
                                <span className={`${styles.personImageContainer}`}>
                                    <Image
                                        src={personImage}
                                        width={200}
                                        height={250}
                                        alt="person"
                                        className={styles.personImage}
                                    />
                                </span>
                            </div>
                            <div className='flex flex-wrap sm:flex-nowrap gap-4 w-full'>
                                <div className="flex flex-col p-4 border rounded-[10px]  border-[var(--border-color)] gap-4 w-full">
                                    <RiMailLine size={24} />
                                    <span className='font-16'>{data.email}</span>
                                </div>
                            </div>
                        </div>
                    </Col> */}
        </Row>
      </section>
    </>
  );
};

export default DeleteMyAccountForm;

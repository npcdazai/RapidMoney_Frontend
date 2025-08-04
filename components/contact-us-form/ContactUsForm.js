'use client';
import React from 'react';
import { Col, Form, Input, Row } from 'antd';
import styles from "./contact-form.module.scss"
import Image from 'next/image';
import personImage from './assets/personImage.png';
import { RiMailLine, RiMapPinLine, RiPhoneLine } from 'react-icons/ri';
import useScrollFadeIn from '@/animations/useScrollFadeIn';
import useScrollCardFadeIn from '@/animations/useScrollCardFadeIn';

const ContactUs = ({ data }) => {
    const [form] = Form.useForm();
    const headingRef = useScrollFadeIn();
    const descRef = useScrollFadeIn();
    const formRef = useScrollFadeIn();
    const addressRef = useScrollFadeIn();
    const phoneCardRef = useScrollCardFadeIn(0); // Animation for phone card
    const mailCardRef = useScrollCardFadeIn(1);

    const onFinish = (values) => {
        console.log('Form submitted:', values);
    };

    // console.log(data)

    return (
        <>
            <section className="container mx-auto pt-[80px] pb-60">
                <div className="pb-[70px] w-full text-center">
                    <div className="max-w-[660px] mx-auto">
                        <h1 className="font-18 pb-6" ref={headingRef}>
                            {data.title}
                        </h1>
                        <span className="block font-40 font-weight-bold" ref={descRef}>
                            {data.subtitle}
                        </span>
                    </div>
                </div>
                <Row gutter={[32, 32]}>
                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 2 }}>
                        <div className={`${styles.contactForm} border border-[var(--border-color)] rounded-4xl pt-10 pb-2 px-8`} ref={formRef}>
                            <Form layout="vertical" form={form} onFinish={onFinish}>
                                <Form.Item
                                    label="Full Name"
                                    name="fullName"
                                    rules={[{ required: true, message: 'Please enter your full name' }]}
                                >
                                    <Input placeholder="Enter your Full Name" size='large' />
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Please enter your email' }]}
                                >
                                    <Input placeholder="Enter your Email" size='large' />
                                </Form.Item>
                                <Form.Item
                                    label="Mobile Number"
                                    name="mobileNumber"
                                    rules={[{ required: true, message: 'Please enter your mobile number' }]}
                                >
                                    <Input placeholder="Enter your Mobile Number" size='large' />
                                </Form.Item>
                                <Form.Item label="Message" name="message">
                                    <Input.TextArea rows={4} placeholder="Enter your Message" size='large' />
                                </Form.Item>
                                <Form.Item>
                                    <button

                                        htmlType="submit"
                                        className="apply-btn apply-btn-green max-w-[140px] w-full"
                                    >
                                        Submit
                                    </button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={24} lg={10} >
                        <div className={`${styles.addressBkl} flex flex-col gap-5`} ref={addressRef}>
                            <div className={`${styles.addressContainer} border border-[var(--border-color)] rounded-3xl pt-4 pl-4`}>
                                <div className="flex flex-col items-start gap-4 mb-4 max-w-[240px]">
                                    <RiMapPinLine size={32} />
                                    <span className='font-16'>{data.address}</span>
                                </div>
                                <span className={`${styles.personImageContainer}`}>
                                    <Image
                                        // src={personImage}
                                        src={data?.contact_image?.[0]?.url}
                                        width={200}
                                        height={250}
                                        alt="person"
                                        className={styles.personImage}
                                    />
                                </span>
                            </div>
                            <div className='flex flex-wrap sm:flex-nowrap lg:flex-wrap xl:flex-nowrap gap-4 w-full'>
                                <div className="flex flex-col p-4 border rounded-[10px] border-[var(--border-color)] gap-4 w-full hover:shadow-md transition-shadow duration-300 group" ref={phoneCardRef}>
                                    <RiPhoneLine size={24} className="transition-transform duration-300 group-hover:scale-110" />
                                    <a href={`tel:${data?.phone}`} target='_blank' className='!text-black hover:!text-black'>
                                        <span className='font-16'>{data?.phone}</span>
                                    </a>
                                </div>

                                <div className="flex flex-col p-4 border rounded-[10px] border-[var(--border-color)] gap-4 w-full hover:shadow-md transition-shadow duration-300 group" ref={mailCardRef}>
                                    <RiMailLine size={24} className="transition-transform duration-300 group-hover:scale-110" />
                                    <a href={`mailto:${data?.email}`} target='_blank' className='!text-black hover:!text-black'>
                                        <span className='font-16'>{data?.email}</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default ContactUs;


// <section className="container mx-auto pt-120 pb-60">
// <div className="pb-[70px] w-full text-center">
//     <div className="max-w-[660px] mx-auto">
//         <h1 className="font-18 pb-6">{data.title}</h1>
//         <span className="block font-40 font-weight-bold">{data.description}</span>
//     </div>
// </div>

// <div className="flex flex-col lg:flex-row gap-y-8 gap-x-6">
//     {/* Form Section */}
//     <div className="w-full lg:w-7/12">
//         <div className={`${styles.contactForm} border border-[var(--border-color)] rounded-4xl pt-10 pb-2 px-8`}>
//             <Form layout="vertical" form={form} onFinish={onFinish}>
//                 <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Please enter your full name' }]}>
//                     <Input placeholder="Enter your Full Name" size='large' />
//                 </Form.Item>
//                 <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
//                     <Input placeholder="Enter your Email" size='large' />
//                 </Form.Item>
//                 <Form.Item label="Mobile Number" name="mobileNumber" rules={[{ required: true, message: 'Please enter your mobile number' }]}>
//                     <Input placeholder="Enter your Mobile Number" size='large' />
//                 </Form.Item>
//                 <Form.Item label="Message" name="message">
//                     <Input.TextArea rows={4} placeholder="Enter your Message" size='large' />
//                 </Form.Item>
//                 <Form.Item>
//                     <button htmlType="submit" className="apply-btn apply-btn-green max-w-[140px] w-full">
//                         Submit
//                     </button>
//                 </Form.Item>
//             </Form>
//         </div>
//     </div>

//     {/* Address Section */}
//     <div className="w-full lg:w-5/12 flex flex-col gap-6">
//         <div className={`${styles.addressBkl} flex flex-col h-full gap-5`}>
//             <div className={`${styles.addressContainer} border border-[var(--border-color)] rounded-3xl pt-4 pl-4 flex flex-col justify-between h-[340px] min-h-[320px]`}>
//                 <div className="flex flex-col items-start gap-4">
//                     <RiMapPinLine size={32} />
//                     <span className='font-16'>{data.address}</span>
//                 </div>
//                 <div className="mt-auto flex justify-end">
//                     <Image src={personImage} width={200} height={250} alt="person" className={styles.personImage} />
//                 </div>
//             </div>
//             <div className='flex flex-col sm:flex-row gap-4 w-full'>
//                 <div className="flex flex-col p-4 border rounded-[10px] border-[var(--border-color)] gap-4 w-full">
//                     <RiPhoneLine size={24} />
//                     <span className='font-16'>{data.phone}</span>
//                 </div>
//                 <div className="flex flex-col p-4 border rounded-[10px] border-[var(--border-color)] gap-4 w-full">
//                     <RiMailLine size={24} />
//                     <span className='font-16'>{data.email}</span>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </section>
'use client';
import React from 'react';
import { Row, Col } from 'antd';
import { Form, Input, Button } from 'antd';
import styles from "./contact-form.module.scss"
import Image from 'next/image';
import personImage from './assets/personImage.png';
import { RiMailLine, RiMapPinLine, RiPhoneLine } from 'react-icons/ri';



const ContactUs = ({ data }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form submitted:', values);
    };
    return (
        <section className="container mx-auto pt-120 pb-60">
            <div className="pb-[70px] w-full text-center">
                <div className="max-w-[660px] mx-auto">
                    <h1 className="font-18 pb-6">
                        {data.title}
                    </h1>
                    <span className="block font-40 font-weight-bold">
                        {data.description}
                    </span>
                </div>
            </div>


            <Row gutter={[32, 32]}>
                <Col xs={24} lg={{ span: 12, offset: 2 }}>
                    <div className={`${styles.contactForm} border border-[var(--border-color)] rounded-4xl pt-10 pb-2 px-8`}>
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
                <Col xs={24} lg={10} className="flex flex-col justify-between">
                    <div className={`${styles.addressBkl} flex flex-col gap-5`}>
                        <div className={`${styles.addressContainer} border border-[var(--border-color)] rounded-3xl pt-4 pl-4`}>
                            <div className="flex flex-col items-start gap-4 mb-4 pb-[180px] max-w-[240px]">
                                <RiMapPinLine size={32} />
                                <span className='font-16'>{data.address}</span>
                            </div>
                            <Image src={personImage} width={200} height={250} alt="person" className={styles.personImage} />
                        </div>


                        <div className='flex flex-wrap sm:flex-nowrap gap-4 w-full'>
                            <div className="flex flex-col p-4 border rounded-[10px]  border-[var(--border-color)] gap-4 w-full">
                                <RiPhoneLine size={24} />
                                <span className='font-16'>{data.phone}</span>
                            </div>
                            <div className="flex flex-col p-4 border rounded-[10px]  border-[var(--border-color)] gap-4 w-full">
                                <RiMailLine size={24} />
                                <span className='font-16'>{data.email}</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default ContactUs;


// 'use client';
// import React from 'react';
// import { Row, Col } from 'antd';
// import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
// import { Form, Input, Button } from 'antd';
// import styles from "./contact-form.module.scss"
// import Image from 'next/image';
// import personImage from './assets/personImage.png';



// const ContactUs = ({ data }) => {
//     const [form] = Form.useForm();

//     const onFinish = (values) => {
//         console.log('Form submitted:', values);
//     };
//     return (
//         <section className="bg-black py-20">
//             <div className="container mx-auto">
//                 <Row gutter={[32, 32]} justify="center" align="stretch">
//                     <Col xs={24} md={12}>
//                         <div className={`bg-white rounded-3xl p-8 h-full`}>

//                             <Form layout="vertical" form={form} onFinish={onFinish}>
//                                 <Form.Item
//                                     label={<>Full Name<span className='text-red-500'>*</span></>}
//                                     name="fullName"
//                                     rules={[{ required: true, message: 'Please enter your full name' }]}
//                                 >
//                                     <Input placeholder="Enter your Full Name" size='large' />
//                                 </Form.Item>

//                                 <Form.Item
//                                     label={<>Email<span className='text-red-500'>*</span></>}
//                                     name="email"
//                                     rules={[{ required: true, message: 'Please enter your email' }]}
//                                 >
//                                     <Input placeholder="Enter your Email" size='large' />
//                                 </Form.Item>

//                                 <Form.Item
//                                     label={<>Mobile Number<span className='text-red-500'>*</span></>}
//                                     name="mobileNumber"
//                                     rules={[{ required: true, message: 'Please enter your mobile number' }]}
//                                 >
//                                     <Input placeholder="Enter your Mobile Number" size='large' />
//                                 </Form.Item>

//                                 <Form.Item label="Message" name="message">
//                                     <Input.TextArea rows={4} placeholder="Enter your Message" size='large' />
//                                 </Form.Item>

//                                 <Form.Item>
//                                     <Button
//                                         type="primary"
//                                         htmlType="submit"
//                                         className="bg-lime-400 text-black hover:bg-lime-500 px-8 rounded-full font-semibold"
//                                     >
//                                         Submit
//                                     </Button>
//                                 </Form.Item>
//                             </Form>
//                         </div>
//                     </Col>
//                     <Col xs={24} md={10}>
//                         <div className="flex flex-col gap-4 h-full">
//                             <div className={`${styles.addressContainer} bg-white rounded-3xl p-8`}>
//                                 <div className="w-[55%]">
//                                     <div className="flex flex-col items-start gap-2">
//                                         <EnvironmentOutlined className="text-3xl" />
//                                         <p className='text-gray-700'>{data.address}</p>
//                                     </div>
//                                 </div>
//                                 <Image src={personImage} alt="person" className={styles.personImage} />
//                             </div>


//                             <div className='flex gap-4 w-full'>
//                                 <div className="bg-white flex items-center p-4 rounded-2xl gap-4 w-full">
//                                     <PhoneOutlined className='text-2xl text-gray-700' />
//                                     <span className='text-gray-700'>{data.phone}</span>
//                                 </div>
//                                 <div className="bg-white flex items-center p-4 rounded-2xl gap-4 w-full">
//                                     <MailOutlined className='text-2xl text-gray-700' />
//                                     <span className='text-gray-700'>{data.email}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </div>
//         </section>
//     );
// };

// export default ContactUs;
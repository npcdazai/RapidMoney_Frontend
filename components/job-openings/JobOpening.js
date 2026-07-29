"use client"

import React, { useState } from 'react';
import styles from "./job-opening.module.scss"
import { Input, Pagination, Modal, Form, Upload, Button, message, Row, Col } from 'antd';
import { RiArrowRightLine, RiCloseLine, RiSearchLine } from 'react-icons/ri';


const JobOpening = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [selectedJob, setSelectedJob] = useState(null);
  if (!data) return null;
  const { title, jobs } = data;
  const pageSize = 2; // Show 2 jobs per page for demo

  const handleApply = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    form.resetFields();
  };

  const handleFinish = (values) => {
    message.success('Application submitted!');
    setModalOpen(false);
    form.resetFields();
  };

  // Pagination logic
  const paginatedJobs = jobs.slice((currentPage - 1) * pageSize, currentPage * pageSize);


  return (
    <section className={`${styles.section} pb-120 pt-60`}>
      <div className="container mx-auto">
        <div className='flex justify-between items-center w-full pb-10'>
          <h2 className='font-40 font-weight-bold dark-color'>{title}</h2>
          <div className={`w-1/4 ${styles.searchInput}`}>
            <Input prefix={<RiSearchLine size={20} />} placeholder='Search Opening' size='large' />
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          {/* {paginatedJobs.map((job, index) => (
            <div key={index} className="bg-white border border-[var(--border-color)] rounded-lg p-6  md:flex-row  text-black ">
              <div className='flex items-center flex-wrap gap-3 justify-between w-full'>
                <h3 className="font-24 font-weight-semibold w-1/3 lg:w-1/2">{job.title}</h3>
                <span className="font-18 w-1/3 lg:w-1/4">{job.experience}</span>
                <div className='w-1/3 lg:w-1/6 text-end'>
                  <button
                    // type={index === 0 ? 'default' : 'primary'}
                    className={`apply-btn  gap-2 ${index === 0 ? 'apply-btn-transparent' : 'apply-btn-green'} `}
                    onClick={() => handleApply(job)}
                  >
                    Apply Now <RiArrowRightLine size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))} */}
          {paginatedJobs.map((job, index) => (
            <div key={index} className="bg-white border border-[var(--border-color)] rounded-lg p-6 text-black">
              <div className="flex flex-col lg:flex-row lg:items-center md:gap-3 gap-5 justify-between w-full">
                <h3 className="font-24 font-weight-semibold lg:w-1/2">{job.title}</h3>
                <span className="font-18 lg:w-1/4">{job.experience}</span>
                <div className="lg:w-1/6 w-full lg:text-end">
                  <button
                    className={`apply-btn gap-2 ${index === 0 ? 'apply-btn-transparent' : 'apply-btn-green'} w-auto`}
                    onClick={() => handleApply(job)}
                  >
                    Apply Now <RiArrowRightLine size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end pt-2">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={jobs.length}
              onChange={setCurrentPage}
              showSizeChanger={false}
              align='end'
            />
          </div>
        </div>
        <Modal
          open={modalOpen}
          onCancel={handleCancel}
          footer={null}
          closable={false} // Hide default close button
          centered
          width={600}
          className='jobApplicationModal'
        // bodyStyle={{ padding: 32, borderRadius: 20 }}
        >
          <div className="flex justify-between items-center  border-b border-[#EBEBEB] py-6 px-8 ">
            <h2 className="text-3xl font-bold">
              Apply Here <span className="text-lg font-normal">( For Open Application )</span>
            </h2>
            <button
              onClick={handleCancel}
              className="text-2xl font-bold hover:text-[#86858523] transition cursor-pointer"
              aria-label="Close"
              type="button"
            >
              <RiCloseLine size={24} />
            </button>
          </div>
          <div className='py-6 px-8'>

            <Form
              form={form}
              layout="vertical"
              onFinish={handleFinish}
              className="mt-6 jobApplicationForm" // You can keep this Tailwind margin, or replace with `style={{ marginTop: 24 }}`
            >
              <Row gutter={[16]}>
                <Col span={24}>
                  <Form.Item
                    name="fullname"
                    rules={[{ required: true, message: 'Please enter your full name' }]}
                  >
                    <Input size="large" placeholder="Full Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}
                  >
                    <Input size="large" placeholder="Your Email" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="phone"
                    rules={[{ required: true, message: 'Enter your phone' }]}
                  >
                    <Input size="large" placeholder="Your Phone" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="experience"
                    rules={[{ required: true, message: 'Enter experience' }]}
                  >
                    <Input size="large" placeholder="Experience Year & Months" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="location"
                    rules={[{ required: true, message: 'Enter your location' }]}
                  >
                    <Input size="large" placeholder="Your Location" />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item name="message" className="mb-4">
                    <Input.TextArea rows={3} size="large" placeholder="Your Message" />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    name="cv"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                    rules={[{ required: true, message: 'Please upload your CV (PDF)' }]}
                    className="mb-4"
                  >
                    <div className="flex justify-between items-center border border-[#EBEBEB] rounded-lg px-4 py-2 bg-white">
                      <span className="font-14 text-[#1A1A1A]">Drop your CV ( PDF )</span>
                      <Upload
                        beforeUpload={(file) => (file.type === 'application/pdf' ? true : Upload.LIST_IGNORE)}
                        maxCount={1}
                        accept="application/pdf"
                        showUploadList={{ showRemove: true }}
                      >
                        <Button type="default" className="ml-4 font-12">Choose File</Button>
                      </Upload>
                    </div>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item>
                <div className='flex justify-end'>
                  <button
                    htmlType="submit"
                    size="large"
                    className="apply-btn apply-btn-green gap-2"

                  >
                    Submit <RiArrowRightLine size={22} />
                  </button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default JobOpening;

"use client"

import React, { useState } from 'react';
import styles from "./job-opening.module.scss"
import { Input, Pagination, Modal, Form, Upload, Button, message } from 'antd';
import { RiArrowRightLine, RiSearchLine } from 'react-icons/ri';
import { UploadOutlined } from '@ant-design/icons';

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
          <div className="w-1/4">
            <Input prefix={<RiSearchLine />} placeholder='Search Opening' size='large' />
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          {paginatedJobs.map((job, index) => (
            <div key={index} className="bg-white border border-[var(--border-color)] rounded-lg p-6  md:flex-row  text-black ">
              <div className='flex items-center justify-between w-full'>
                <h3 className="font-24 font-weight-semibold w-1/2">{job.title}</h3>
                <span className="font-18 w-1/4">Experience: {job.experience}</span>
                <div className='w-1/6'>
                  <Button
                    type={index === 0 ? 'default' : 'primary'}
                    className={`mt-4 md:mt-0 px-6 py-2 rounded-full font-semibold ${index === 0 ? 'bg-black text-white' : 'bg-green-400 text-white border-none'}`}
                    onClick={() => handleApply(job)}
                  >
                    Apply Now <RiArrowRightLine size={22} />
                  </Button>
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
          centered
          width={600}
          closeIcon={<span style={{ fontSize: 28, fontWeight: 600 }}>&times;</span>}
          bodyStyle={{ padding: 32, borderRadius: 20 }}
        >
          <h2 className="text-3xl font-bold mb-2">Apply Here <span className="text-lg font-normal">( For Open Application )</span></h2>
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            className="mt-6"
          >
            <Form.Item name="fullname" rules={[{ required: true, message: 'Please enter your full name' }]}>
              <Input size="large" placeholder="Full Name" />
            </Form.Item>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}> <Input size="large" placeholder="Your Email" /></Form.Item>
              <Form.Item name="phone" rules={[{ required: true, message: 'Enter your phone' }]}> <Input size="large" placeholder="Your Phone" /></Form.Item>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item name="experience" rules={[{ required: true, message: 'Enter experience' }]}> <Input size="large" placeholder="Experience Year & Months" /></Form.Item>
              <Form.Item name="location" rules={[{ required: true, message: 'Enter your location' }]}> <Input size="large" placeholder="Your Location" /></Form.Item>
            </div>
            <Form.Item name="message" className="mb-4"> <Input.TextArea rows={3} size="large" placeholder="Your Message" /></Form.Item>
            <Form.Item name="cv" valuePropName="fileList" getValueFromEvent={e => Array.isArray(e) ? e : e && e.fileList} rules={[{ required: true, message: 'Please upload your CV (PDF)' }]}
              extra="Drop your CV ( PDF )">
              <Upload beforeUpload={file => file.type === 'application/pdf' ? true : Upload.LIST_IGNORE} maxCount={1} accept="application/pdf" showUploadList={{ showRemove: true }}>
                <Button icon={<UploadOutlined />}>Choose File</Button>
              </Upload>
            </Form.Item>
            <Form.Item className="flex justify-end mt-8">
              <Button htmlType="submit" size="large" className="bg-lime-300 hover:bg-lime-400 text-black font-semibold px-10 py-2 rounded-full flex items-center gap-2" style={{ boxShadow: 'none', border: 'none' }}>
                Submit <RiArrowRightLine size={22} />
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </section>
  );
};

export default JobOpening;

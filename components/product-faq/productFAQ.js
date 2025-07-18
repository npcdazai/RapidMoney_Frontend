"use client";

import React from "react";
import styles from "./faq-section.module.scss";
import { Collapse } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
const { Panel } = Collapse;

// const productFAQs = [
//   {
//     question: "What is an instant personal loan? ",
//     answer:
//       "An instant personal loan provides quick access to funds through a completely digital process. You receive money directly in your bank account after online approval without visiting any branch. ",
//   },
//   {
//     question: "How does a personal loan work? ",
//     answer:
//       "You receive an approved amount upfront and repay it through fixed monthly installments. The EMI includes principal and interest portions based on your chosen loan tenure and applicable rate. ",
//   },
//   {
//     question: "How quickly can I receive funds from an instant personal loan? ",
//     answer:
//       "The loan amount transfers to your registered bank account within a few working hours after final approval and document verification.",
//   },
//   {
//     question: "How does RapidMoney ensure the security of my information? ",
//     answer:
//       "We use encryption, secure servers and multiple authentication layers to protect your data. Our systems comply with guidelines for financial information security. ",
//   },
//   {
//     question: "What is the minimum income requirement for a personal loan? ",
//     answer:
//       "Individuals need a minimum monthly income of above ₹ 20,000. On the other hand, we do not provide personal loans to self-employed individuals. ",
//   },
//   {
//     question: "Are there fees for early repayment of loans? ",
//     answer: "A foreclosure charge may apply if you close your loan too soon. ",
//   },
//   {
//     question: "What is the typical repayment tenure for personal loans? ",
//     answer: "We have a repayment tenure of 3 to 6 months for EMI loans.",
//   },
//   {
//     question: "Can I apply for a personal loan jointly with my spouse? ",
//     answer: "Currently, RapidMoney doesn't accept joint loan applications. ",
//   },
// ];
export default function ProductFAQ({data}) {
  return (
    <section className={`bg-white py-[100px] container px-4 ${styles.section}`}>
      <h2 className="font-40 text-black font-bold text-center mb-11">{data?.title}</h2>

      <div>
        <Collapse
          accordion
          expandIconPosition="end"
          // expandIcon={({ isActive }) => <RiArrowDropDownLine size={26} color="" rotate={isActive ? 90 : 0} />}
          expandIcon={({ isActive }) => (
            <RiArrowDropDownLine
              size={32}
              className=" transition-transform duration-300"
              style={{
                transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
              }}
              color="#212121b3"
            />
          )}
          bordered={false}
          className={styles.faqCollapse}
          defaultActiveKey={["1"]}
        >
          {data?.questions?.map((faq, index) => {
            // console.log(index);
            return (
              <Panel
                // header={<span className="font-18 font-weight-medium">{q.question}</span>}
                header={
                  <div className="flex justify-between items-center w-full">
                    <span className="font-18 font-weight-medium">
                      {faq?.question}
                    </span>
                  </div>
                }
                key={index + 1}
                className={`${styles.faqCollapsePanel} w-full`}
              >
                <p className="font-14 text-[rgba(33, 33, 33, 0.8)]">
                  {faq?.answer}
                </p>
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </section>
  );
}

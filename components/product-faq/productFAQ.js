"use client";

import React from "react";
import styles from "./faq-section.module.scss"
import { Collapse  } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
const { Panel } = Collapse;

export default function ProductFAQ() {
  return (
    <section className="bg-white my-100 container px-4">
      <h2 className="font-40 text-black font-bold text-center mb-11">FAQs</h2>

      <div >
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
        >
           <Panel
              // header={<span className="font-18 font-weight-medium">{q.question}</span>}
              header={
                <div className="flex justify-between items-center w-full">
                  <span className="font-18 font-weight-medium">
                    What is an instant personal loan?
                  </span>
                </div>
              }
              key={'1'}
              className={`${styles.faqCollapsePanel} w-full`}
            >
              <p className="font-14 text-[rgba(33, 33, 33, 0.8)]">An instant personal loan provides quick access to funds through a completely digital process. You receive money directly in your bank account after online approval without visiting any branch.</p>
            </Panel>
           <Panel
              // header={<span className="font-18 font-weight-medium">{q.question}</span>}
              header={
                <div className="flex justify-between items-center w-full">
                  <span className="font-18 font-weight-medium">
                    What is an instant personal loan?
                  </span>
                </div>
              }
              key={'1'}
              className={`${styles.faqCollapsePanel} w-full`}
            >
              <p className="font-14 text-[rgba(33, 33, 33, 0.8)]">An instant personal loan provides quick access to funds through a completely digital process. You receive money directly in your bank account after online approval without visiting any branch.</p>
            </Panel>
        </Collapse>
      </div>
    </section>
  );
}

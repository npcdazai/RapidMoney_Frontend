"use client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import styles from "./term-condition.module.scss";
 
function TermCondition({ data }) {
  return (
    <section className={`container mx-auto pt-120 pb-120 ${styles.section}`}>
      <div className="mb-7">
        <h1 className={`${styles.topHeading} font-40 font-weight-bold`}>
          {data.heading}
        </h1>
        <p className="text-[#5047FE] font-16 text-center font-weight-medium">
          Last updated {data.lastUpdated}
        </p>
      </div>
 
      {data.sections.map((section, index) => (
        <div key={index} className="mb-16">
          <h2 className={`${styles.sectionHeading} font-32`}>
            {section.title}
          </h2>
          <div className="flex flex-col gap-4">
            {Array.isArray(section.content) ? (
              section.content.map((item, itemIndex) => {
                if (Array.isArray(item)) {
                  return (
                    <div
                      key={itemIndex}
                      className="flex flex-col gap-2 pl-6 mt-2"
                    >
                      {item.map((subItem, subIndex) => (
                        <div key={subIndex} className="flex gap-2">
                          <div className={styles.square}></div>
                          <span className="font-16">{subItem}</span>
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
                  <div key={itemIndex} className="flex gap-[10px]  items-start">
                    <span className={styles.checkCircle}>
                      <FaCheck size={10} />
                    </span>
                    <p className={`font-16 ${styles.sectionContent}`}>{item}</p>
                  </div>
                );
              })
            ) : (
              <p className={styles.sectionContent}>{section.content}</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
 
export default TermCondition;
 
 
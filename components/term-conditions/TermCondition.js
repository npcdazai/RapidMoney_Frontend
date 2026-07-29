"use client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import styles from "./term-condition.module.scss";

function TermCondition({ data }) {
  return (
    <section className={`container mx-auto pb-120 ${styles.section}`}>
      {/* <div className="mb-7"> */}
        <h1
          className={`py-15 sm:py-20 font-40 font-weight-bold text-center`}
          dangerouslySetInnerHTML={{ __html: data?.heading }}
        />
        {/* <p className="text-[#5047FE] font-16 text-center font-weight-medium">
          Last updated {data?.lastUpdated}
        </p> */}
      {/* </div> */}

      {data?.sections && data?.sections?.map((section, index) => (
        <div key={index} className={index > 0 ? 'mt-10' : ''}>
          <h2
            className={`font-bold font-32 pb-6`}
            dangerouslySetInnerHTML={{ __html: section?.title }}
          />
          <div dangerouslySetInnerHTML={{ __html: section?.content }} className={`ql-editor`}/>
        </div>
      ))}
    </section>
  );
}

export default TermCondition;

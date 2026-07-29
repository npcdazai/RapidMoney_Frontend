import React from 'react'
import styles from "./refund-policy.module.scss"

export default function RefundPolicy({ data }) {
    if (!data) return null;
    return (
        <section className={`container mx-auto  pb-120 ${styles.section}`}>
            <h1 className={`py-15 sm:py-20 font-40 font-weight-bold text-center`}>
                {data.title}
            </h1>
            {data?.sections?.map((sec, idx) => (
                  <div key={idx} className={idx > 0 ? 'mt-10' : ''}>
                    {sec?.title && <h2 className={`font-bold font-32 pb-6`}>{sec.title}</h2>}
                     <div
                        className={`ql-editor`}
                        dangerouslySetInnerHTML={{ __html: sec.description }}
                    />
                </div>
            ))}
        </section>
    );
};


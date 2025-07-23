import React from 'react'
import styles from "./disclaimer-section.module.scss"

export default function Disclaimer({ data }) {
    
    console.log(data)

  if (!data) return null;
  return (
    <section className={`container mx-auto pt-120 pb-120 ${styles.section}`}>
      <h1 className={`${styles.topHeading} pb-60 font-40 font-weight-bold text-center`}>
        {data.heading}
      </h1>

    
      {data?.sections?.map((sec, idx) => (
        <div key={idx} className={`${styles.sectionBlock} *: ${idx > 0 ? 'mt-8' : ''}`}>
          {sec?.title && <h2 className={styles.sectionHeading}>{sec.title}</h2>}
          <div
            className={styles.richTextWrapper}
            dangerouslySetInnerHTML={{ __html: sec.content }}
          />
        </div>
      ))}
    </section>
  );
}

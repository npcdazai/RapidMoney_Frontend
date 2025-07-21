// 'use client';
// import React from 'react';
// import { FaCheck } from 'react-icons/fa6';
// import styles from './privacy-policy.module.scss';

// const PrivacyPolicy = ({ data }) => {
//   console.log(data)
//   return (
//     <section className={`container mx-auto pt-120 pb-120 ${styles.section}`}>
//       <h1 className={`${styles.topHeading} pb-60 font-40 font-weight-bold text-center`}>{data?.title}</h1>
//       <div className="flex gap-[10px] pb-10">
//           <span className={styles.checkCircle}>
//             <FaCheck size={10} />
//           </span>
//         <p className={styles.section1Subtitle}>{data?.intro.text}</p>
//       </div>

//       <div className="">
//         <h2 className={styles.sectionHeading}>
//           { data?.subSection?.subtitle}
//         </h2>
//         <div className="mt-2">
//           {data?.subSection?.complianceList.map((item, idx) => (
//             <p key={idx} className={styles.sectionContent}>
//               <strong>{String.fromCharCode(65 + idx)}.</strong> {item}
//             </p>
//           ))}
//         </div>
//       </div>

//       <div className="pt-8">
//         <h2 className={styles.sectionHeading}>
//           {data?.consentSection.heading}
//         </h2>
//         <div className="flex flex-col gap-6">
//           {data?.consentSection.points.map((point, idx) => (
//             <div key={idx} className={`${styles.sectionContent}`}>
//               <div className={styles.checkCircle}>
//                 <FaCheck size={10} />
//               </div>
//               <span>{point}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PrivacyPolicy;

'use client';
import React from 'react';
import styles from './privacy-policy.module.scss';

const PrivacyPolicy = ({ data }) => {
  if (!data) return null;

  return (
    <section className={`container mx-auto pt-120 pb-120 ${styles.section}`}>
      <h1 className={`${styles.topHeading} pb-60 font-40 font-weight-bold text-center`}>
        {data.title}
      </h1>

      {data?.intro?.text && (
        <div className={`pb-10 ${styles.introWrapper}`}>
          <p className={styles.sectionIntro}>{data.intro.text}</p>
        </div>
      )}

      {data?.sections?.map((sec, idx) => (
        <div key={idx} className={`${styles.sectionBlock} *: ${idx > 0 ? 'mt-8' : ''}`}>
          {sec?.title && <h2 className={styles.sectionHeading}>{sec.title}</h2>}
          <div
            className={styles.richTextWrapper}
            dangerouslySetInnerHTML={{ __html: sec.description }}
          />
        </div>
      ))}
    </section>
  );
};

export default PrivacyPolicy;


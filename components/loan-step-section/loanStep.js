// "use client";

// import React, { useEffect, useState } from "react";
// import { Col, Row, Steps } from "antd";
// import Image from "next/image";
// const { Step } = Steps;
// import install from "./assets/install.png"
// import loanApp from "./assets/loanApp.png"
// import verify from "./assets/verify.png"
// import styles from "./loan-step.module.scss"

// const LoanStep = ({ data }) => {
//   const [current, setCurrent] = useState(0);
//   const currentStep = data.steps[current];

//   // useEffect(() => {
//   //   const timer =  setTimeout(() => {
//   //     setCurrent(prev => prev + 1);

//   //     if (data?.steps?.length === current) {
//   //       setCurrent(o)
//   //     }

//   //   }, timeout);

//   //   timer(3000);
//   // },[])

//   return (
//     <section className={`pt-120 ${styles.section}`}>
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <span className="flex justify-center items-center">
//           <h2 className="font-48 font-weight-bold text-center pb-6 max-w-[550px]">
//             {data.title}
//           </h2>
//         </span>

//         <Row gutter={[32, 32]}>
//           {/* Left Column: Steps */}
//           <Col xs={24} lg={12}>
//             <Steps
//               direction="vertical"
//               current={current}
//               onChange={(index) => setCurrent(index)}
//               className={styles.loanStep}
//             >
//               {data.steps.map((step, idx) => (
//                 <Step
//                   key={idx}
//                   title={
//                     <span className="font-24 font-weight-bold ">
//                       {step.title}
//                     </span>
//                   }
//                   description={
//                     <span className="font-16 pb-[70px]">
//                       {step.description}
//                     </span>
//                   }
//                 // status={current > idx ? 'finish' : current === idx ? 'process' : 'wait'}
//                 />
//               ))}
//             </Steps>
//           </Col>
//           <Col xs={24} lg={11} offset={1} className={styles.imageBkl}>
//             <div >
//             {/* <div className={styles.imageBkl}> */}
//               <Image
//                 src={install}
//                 alt={`Step ${currentStep.step}`}
//                 width={300}
//                 height={500} />

//             </div>
//           </Col>
//         </Row>
//       </div>
//     </section>
//   );
// };

// export default LoanStep;


"use client";

import React, { useEffect, useState } from "react";
import { Col, Row, Steps } from "antd";
import Image from "next/image";
const { Step } = Steps;
import styles from "./loan-step.module.scss";
import install from "./assets/install.png"
import loanApp from "./assets/loanApp.png"
import verify from "./assets/verify.png"

const AUTO_PLAY_INTERVAL = 3000;
const imageArray = {
  install: install,
  verify: verify,
  loanApp: loanApp
}

const LoanStep = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const stepsCount = data.steps.length;

  // Auto-play effect
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % stepsCount);
  //   }, AUTO_PLAY_INTERVAL);
  //   return () => clearInterval(timer);
  // }, [stepsCount]);

  const currentStep = data.steps[current];

  return (
    <section className={`pt-120 ${styles.section}`}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <span className="flex justify-center items-center">
          <h2 className="font-48 font-weight-bold text-center pb-6 max-w-[550px]">
            {data.title}
          </h2>
        </span>

        <Row gutter={[32, 32]} justify={"center"} align="middle">
          {/* Left Column: Steps */}
          <Col xs={24} lg={12}>
            <Steps
              direction="vertical"
              current={current}
              onChange={(index) => setCurrent(index)}
              className={styles.loanStep}
            >
              {data.steps.map((step, idx) => (
                <Step
                  key={idx}
                  title={
                    <span className="font-24 font-weight-bold ">
                      {step.title}
                    </span>
                  }
                  description={
                    <span className="font-16 pb-[70px]">
                      {step.description}
                    </span>
                  }
                  icon={
                    <div
                      className={`custom-step-icon ${idx === current ? 'active' : ''}`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  }
                />
              ))}
            </Steps>
          </Col>

          {/* <Col xs={24} lg={11} offset={1} className={styles.imageBkl}> */}
          <Col xs={24} lg={{ span: 11, offset: 1 }} className={styles.imageBkl}>
            <div className="flex justify-center items-center">
              <Image
                // src={currentStep.image}
                src={imageArray[currentStep.flag]}
                alt={`Step ${currentStep.step}`}
                width={400}
                height={500}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default LoanStep;
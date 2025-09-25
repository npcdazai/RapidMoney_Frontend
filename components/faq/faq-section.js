// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { Card, Col, Collapse, Row, Tabs } from "antd";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import dropDownArrow from "./assets/drowpDownArrow.svg";
// import rapidMoneyLogo from "./assets/rapid_money.png";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "./faq-section.module.scss";
// import Image from "next/image";

// // const { TabPane } = Tabs;
// gsap.registerPlugin(ScrollTrigger);

// const FaqSection = ({ data }) => {
//   //  const { token } = theme.useToken();
//   // const panelStyle = {
//   //     marginBottom: 24,
//   //     background: token.colorFillAlter,
//   //     borderRadius: token.borderRadiusLG,
//   //     border: 'none',
//   // };

//   const titleRef = useRef(null);
//   const panelRefs = useRef([]);
//   panelRefs.current = [];

//   useEffect(() => {
//     gsap.fromTo(
//       titleRef.current,
//       { autoAlpha: 0, y: 40 },
//       {
//         autoAlpha: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 85%",
//         },
//       }
//     );

//     gsap.fromTo(
//       panelRefs.current,
//       { autoAlpha: 0, y: 40 },
//       {
//         autoAlpha: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 85%",
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   console.log(data)

//   return (
//     <section className={`w-full ${styles.section} pt-120 pb-120`}>
//       <div className="container mx-auto px-4">
//         <h2
//           ref={titleRef}
//           className="text-center font-48 font-weight-bold dark-color md:pb-[55px] pb-[25px]"
//         >
//           FAQs
//         </h2>
//         <Row>
//           <Col span={24} offset={0} lg={{ offset: 4, span: 16 }}>
//             <Tabs
//               defaultActiveKey="1"
//               tabPosition="top"
//               className={`${styles.faqTabs}`}
//             >
//               {data?.map((step, index) => (
//                 // <TabPane tab={`${step.tabTitle}`} key={String(step.step)} className={`${styles.faqTabsPane}`}>
//                 <TabPane
//                   tab={
//                     step.step === 1 ? (
//                       <div className="flex items-center w-full gap-2">
//                         <span className="inline-block">{step.tabTitle}</span>
//                         <Image
//                           src={rapidMoneyLogo}
//                           // width={20}
//                           // height={20}
//                           alt="Rapid Money Logo"
//                           className="inline-block object-contain align-middle max-w-[95px] min-w-[95px] w-full"
//                         />
//                       </div>
//                     ) : (
//                       step.tabTitle
//                     )
//                   }
//                   key={String(step.step)}
//                   className={styles.faqTabsPane}
//                 >
//                   <Collapse
//                     accordion
//                     expandIconPosition="end"
//                     // expandIcon={({ isActive }) => <RiArrowDropDownLine size={26} color="" rotate={isActive ? 90 : 0} />}
//                     expandIcon={({ isActive }) => (
//                       <RiArrowDropDownLine
//                         size={32}
//                         className=" transition-transform duration-300"
//                         style={{
//                           transform: isActive
//                             ? "rotate(180deg)"
//                             : "rotate(0deg)",
//                         }}
//                         color="#212121b3"
//                       />
//                     )}
//                     bordered={false}
//                     className={styles.faqCollapse}
//                     // defaultActiveKey={["1"]}
//                     defaultActiveKey={["1"]}
//                     // collapsible="header"
//                   >
//                     {step.questions.map((q, i) => (
//                       <Panel
//                         ref={(el) => (panelRefs.current[i] = el)}
//                         // header={<span className="font-18 font-weight-medium">{q.question}</span>}
//                         header={
//                           <div className="flex justify-between items-center w-full">
//                             <span className="font-18 font-weight-medium">
//                               {q.question}
//                             </span>
//                           </div>
//                         }
//                         key={(i + 1).toString()}
//                         className={`${styles.faqCollapsePanel} w-full`}
//                       >
//                         <div className="flex justify-between items-center gap-10">
//                           <p className="font-14 text-[rgba(33, 33, 33, 0.8)]">
//                             {q.answer}
//                           </p>
//                           {/* <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
//                                                         <RiArrowDropDownLine
//                                                             size={32}
//                                                             style={{ transform: "rotate(0deg)" }}
//                                                             color="#212121b3"
//                                                         />
//                                                     </div> */}
//                         </div>
//                       </Panel>
//                     ))}
//                   </Collapse>
//                 </TabPane>
//               ))}
//             </Tabs>
//           </Col>
//         </Row>
//       </div>
//     </section>
//   );
// };

// export default FaqSection;


"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Card, Col, Collapse, Row, Tabs } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./faq-section.module.scss";
import rapidMoneyLogo from "./assets/rapid_money.png";


gsap.registerPlugin(ScrollTrigger);

const FaqSection = ({ data }) => {
  const titleRef = useRef(null);
  const panelRefs = useRef([]);
  panelRefs.current = [];

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      panelRefs.current,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const steps = data?.steps || [];

  return (
    <section className={`w-full ${styles.section} pt-120 pb-120`}>
      <div className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-center font-48 font-weight-bold dark-color md:pb-[55px] pb-[25px]"
        >
          {data?.title}
        </h2>
        <Row>
          <Col span={24} offset={0} lg={{ offset: 4, span: 16 }}>
            <Tabs
              defaultActiveKey="0"
              tabPosition="top"
              className={`${styles.faqTabs}`}
              items={steps.map((step, index) => ({
                key: String(step.step || index),
                label: step.tabTitle?.includes("Rapid Money") ? (
                  <div className="flex items-center w-full gap-2">
                    <span className="inline-block">{step.tabTitle?.replace("Rapid Money", "").trim()}</span>
                    <Image
                      src={rapidMoneyLogo}
                      alt="Rapid Money Logo"
                      className="inline-block object-contain align-middle max-w-[95px] min-w-[95px] w-full"
                    />
                  </div>
                ) : (
                  step.tabTitle
                ),
                children: (
                  <Collapse
                    accordion
                    expandIconPosition="end"
                    expandIcon={({ isActive }) => (
                      <RiArrowDropDownLine
                        size={32}
                        className="transition-transform duration-300"
                        style={{
                          transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                        color="#212121b3"
                      />
                    )}
                    bordered={false}
                    className={styles.faqCollapse}
                    defaultActiveKey={["1"]}
                    items={step?.questions && step?.questions?.length > 0 ? step.questions.map((q, i) => ({
                      key: (i + 1).toString(),
                      label: (
                        <div className="flex justify-between items-center w-full">
                          <span className="font-18 font-weight-medium">
                            {q.question}
                          </span>
                        </div>
                      ),
                      children: (
                        <div className="flex justify-between items-center gap-10">
                          <p className="font-14 text-[rgba(33, 33, 33, 0.8)]">
                            {q.answer}
                          </p>
                        </div>
                      ),
                      className: `${styles.faqCollapsePanel} w-full`
                    })) : []}
                  />
                ),
                className: styles.faqTabsPane
              }))}
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FaqSection;

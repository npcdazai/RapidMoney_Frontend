// import React from 'react';
// import Image from 'next/image';
// import styles from "./life-rapidmoney.module.scss"
// import culture from "./assets/culture.svg"

// const LifeAtRapidMoney = ({ data }) => {

//     // const icon = {
//     //     creditCard: creditCard,
//     //     bank: bank,
//     //     layer: layer,
//     //     calender: calender
//     // }

//     return (
//         <section className={`${styles.section} pb-120 pt-120`}>
//             <div className="container mx-auto">
//                 <h2 className="text-center font-48 font-weight-bold dark-color md:pb-[55px] pb-[25px]">{data?.title}</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//                     {data?.benefits.map((benefit, index) => (
//                         <div key={index} className="bg-white rounded-lg p-6 flex flex-col items-center text-center text-black">
//                             <div className={`h-full flex flex-col gap-2 justify-between p-8 ${styles.benefitsCard}`}>

//                                 <div className="flex justify-between">
//                                     <span className="font-18 font-weight-medium dark-color" dangerouslySetInnerHTML={{ __html: benefit.text }}></span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <div></div>
//                                     <div className="">
//                                         <Image
//                                             // src={icon[item.icon]}
//                                             src={culture}
//                                             alt="feature"
//                                             width={40}
//                                             height={40}
//                                             className="object-contain"
//                                         />
//                                     </div>

//                                 </div>
//                             </div>
//                             {/* <Image src={benefit.icon} width={50} height={50} alt={benefit.text} className="mb-4" />
//               <p className="font-semibold">{benefit.text}</p> */}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* <div className="container mx-auto">
//                 <h2 className="text-center font-48 font-weight-bold dark-color md:pb-[55px] pb-[25px]">{data?.title}</h2>
//                 <Row gutter={[24, 24]} justify="center">
//                     {benefits?.map((item) => (
//                         <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
//                             <div className={`h-full flex flex-col gap-2 justify-between p-8 ${styles.benefitsCard}`}>

//                                 <div className="flex justify-between">
//                                     <span className="font-18 font-weight-medium dark-color" dangerouslySetInnerHTML={{ __html: item.text }}></span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <div></div>
//                                     <div className="">
//                                         <Image
//                                             src={icon[item.icon]}
//                                             // src={item.icon}
//                                             alt="feature"
//                                             width={40}
//                                             height={40}
//                                             className="object-contain"
//                                         />
//                                     </div>

//                                 </div>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </div> */}
//         </section>
//     );
// };
// export default LifeAtRapidMoney;

"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from "./life-rapidmoney.module.scss";
// import culture from "./assets/culture.svg"
// import stability from "./assets/stability.svg"
// import growth from "./assets/growth.svg"
// import trophy from "./assets/trophy.svg"
// import investment from "./assets/investment.svg"
// import emotion from "./assets/emotion.svg"
// import shield from "./assets/shield.svg"
// import invoice from "./assets/invoice.svg"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LifeAtRapidMoney = ({ data }) => {

    // const icon = {
    //     culture: culture,
    //     stability: stability,
    //     growth: growth,
    //     trophy: trophy,
    //     investment: investment,
    //     emotion: emotion,
    //     shield: shield,
    //     invoice: invoice
    // }

    // console.log(data);

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        if (!data || !data.features || !Array.isArray(data.features)) {
            console.warn("Benefits component: Invalid data prop");
            return;
        }
        if (
            !sectionRef.current ||
            !titleRef.current ||
            !cardRefs.current.length ||
            cardRefs.current.some(ref => !ref)
        ) {
            console.warn("Benefits component: Refs not ready");
            return;
        }

        const ctx = gsap.context(() => {
            ScrollTrigger.refresh();
            gsap.fromTo(
                titleRef.current,
                { autoAlpha: 0, y: 40 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                cardRefs.current.filter(ref => ref !== null),
                { autoAlpha: 0, y: 50 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [data]);

    return (
        <section className={`${styles.section} pb-60 pt-60`} ref={sectionRef}>
            <div className="container mx-auto">
                <h2 className="text-center font-40 font-weight-bold dark-color md:pb-[55px] pb-[25px]" ref={titleRef}>{data?.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cardRefs.current = []}
                    {data?.features.map((feature, index) => (
                        <div key={index} className={`h-full flex flex-col gap-2 justify-between p-8 ${styles.benefitsCard}`} ref={(el) => {
                  if (el) {
                    cardRefs.current[index] = el;
                  }
                }}>
                            <div className="flex justify-between">
                                <span className="font-18 font-weight-medium dark-color" dangerouslySetInnerHTML={{ __html: feature.text }}></span>
                            </div>
                            <div className="flex justify-end">
                                <Image
                                    src={feature?.icon?.[0]?.url}
                                    // src={icon[benefit.icon]}
                                    alt={feature.text}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LifeAtRapidMoney;

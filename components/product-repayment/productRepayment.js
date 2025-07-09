// import React from "react";
// import { FiFileText } from "react-icons/fi";
// import { RiShieldCheckLine } from "react-icons/ri";
// import { RiCheckLine } from "react-icons/ri";

// export default function ProductRepayment() {
//   return (
//     <section className="container px-4 bg-white pb-24">
//       <h2 className="font-40 text-black font-bold text-center mb-12">
//         Bullet Repayment Loan
//       </h2>
//       <div className="flex flex-col lg:flex-row gap-4 lg:gap-[30px] relative">
//         <div className="w-full lg:w-1/2 bg-[#F9FAFF] rounded-4xl  p-7">
//           <div className="flex justify-between">
//             <h3 className="text-black font-28 font-semibold">
//               Document Required
//             </h3>
//             <span className="bg-white w-20 h-20 rounded-full text-[#6379F9] inline-flex items-center justify-center">
//               <FiFileText size={28} />
//             </span>
//           </div>
//           <div className="text-black font-16 font-bold flex flex-col gap-5">
//             <div className="flex gap-3 items-center">
//               <span className="bg-[#4D43FE1C] text-[#121114] font-semibold font-16  inline-flex justify-center items-center w-9 h-9 rounded-full">
//                 01
//               </span>{" "}
//               No Collateral Required
//             </div>
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2 bg-[#F9FAFF] rounded-4xl p-7">
//           <div className="flex justify-between">
//             <h3 className="text-black font-28 font-semibold">Eligibility</h3>
//             <span className="bg-white w-20 h-20 rounded-full text-[#6379F9] inline-flex items-center justify-center">
//               <RiShieldCheckLine size={28} />
//             </span>
//           </div>
//           <div className="text-black font-16 font-normal flex flex-col gap-5">
//             <div className="flex gap-3 items-center">
//               <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
//                 <RiCheckLine size={18} />
//               </span>{" "}
//               Indian Citizen, 21+ years & Above
//             </div>
//             <div className="flex gap-3 items-center">
//               <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
//                 <RiCheckLine size={18} />
//               </span>{" "}
//               Fixed Monthly Re-Payments & Instant Approval
//             </div>
//             <div className="flex gap-3 items-center">
//               <span className="bg-[#4D43FE1C] text-[#6379F9] inline-flex justify-center items-center w-7 h-7 rounded-full">
//                 <RiCheckLine size={18} />
//               </span>{" "}
//               Quick Access to Lump Sum Amount
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./product-repayment.module.scss";
import { RiCheckLine } from "react-icons/ri";
// import checkIcon from "./assets/check-circle.svg";
import moneyImage from "./assets/money.png";
import useScrollFadeIn from "@/animations/useScrollFadeIn";
import gsap from "gsap";

export default function productRepayment({ data }) {
  // const imageRef = useScrollFadeIn();

  // useEffect(() => {
  //   gsap.to(imageRef.current, {
  //     y: -10,
  //     duration: 2,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "sine.inOut",
  //   });
  // }, []);
  return (
    <section className={`${styles.section} pb-120 pt-[30px]`}>
      <div className="container mx-auto px-4 ">
        <h2 className="text-[#191515] font-bold text-3xl mb-14 text-center">
          {data.title}
        </h2>
        <div className="flex flex-col lg:flex-row justify-between px-8 py-16 dark-bg light-color rounded-[32px] items-center gap-12 overflow-hidden">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 z-1">
            {/* Document Required */}
            <div className="pb-60 overflow-hidden">
              <h4 className="font-32 font-weight-semibold pb-7">
                {data.document.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {data.document.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white">
                    {/* <Image src={checkIcon} alt="check" width={20} height={20} /> */}
                    <span className="bg-[var(--primary-color)] text-[var(--light-color)] inline-flex justify-center items-center w-6 h-6 rounded-full">
                      <RiCheckLine size={18} />
                    </span>{" "}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div>
              <h4 className="font-32 font-weight-semibold pb-7">
                {data.eligibility.heading}
              </h4>
              <ul className="flex flex-col gap-6">
                {data.eligibility.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white">
                    {/* <Image src={checkIcon} alt="check" width={20} height={20} /> */}
                    <span className="bg-[var(--primary-color)] text-[var(--light-color)] inline-flex justify-center items-center w-6 h-6 rounded-full">
                      <RiCheckLine size={18} />
                    </span>{" "}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className={styles.imageWrapper}>
              <Image
                src={moneyImage}
                // ref={imageRef}
                alt="Gold Coins"
                width={450}
                height={320}
                className="object-contain w-full max-w-[450px] h-full max-h-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

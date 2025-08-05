"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import blog1 from "./assets/blog-1.jpg";
import blog2 from "./assets/blog-2.jpg";
import blog3 from "./assets/blog-3.jpg";

import rapidMoney from "./assets/rapid_money.png";
import styles from "./news-section.module.scss";
import { Col, Row, Button } from "antd";
import { RiArrowRightLine } from "react-icons/ri";
import dayjs from "dayjs";

gsap.registerPlugin(ScrollTrigger);

const NewsSection = ({ data }) => {
  const imageArray = [blog1, blog2, blog3];

  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  useEffect(() => {
    // Animate title
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

    // Animate each card with stagger
    gsap.fromTo(
      cardsRef.current,
      {
        autoAlpha: 0,
        y: 60,
        scale: 0.95,
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
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

  // console.log(data?.sectionTitle)

  return (
    <section className={`py-12 bg-[#FAFAFA] ${styles.section}`}>
      <div className="container mx-auto">
        <div
          ref={titleRef}
          className="flex justify-center flex-wrap items-center gap-2 pb-12 text-center"
        >

          {
            data?.sectionTitle?.includes("Rapid Money") ? (
              <span className="text-[40px] font-bold leading-none text-black">
                {data?.sectionTitle.split("Rapid Money").map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && (
                      <Image
                        src={rapidMoney}
                        alt="rapid_money"
                        width={270}
                        height={45}
                        className="inline-block object-contain mx-1"
                      />
                    )}
                  </React.Fragment>
                ))}
              </span>
            ) : (
              <span className="text-[40px] font-bold leading-none text-black">
                {data?.sectionTitle}
              </span>
            )
          }

        </div>

        <Row gutter={[24, 32]} justify={Array.isArray(data?.relatedBlogsData) && data.relatedBlogsData.length > 1 ? "start" : "center"}>
          {data?.relatedBlogsData?.map((item, idx) => (
            <Col
              key={idx}
              xs={24}
              sm={12}
              // md={12}
              lg={8}
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <div className="flex flex-col gap-4 h-full group">
                <Link href={`/blogs/${item?.slug}`}>
                  <div className="overflow-hidden w-full rounded-3xl ">
                    <Image
                      src={item?.image}
                      alt={item?.title}
                      width={500}
                      height={300}
                      className="sm:max-w-[370px] sm:max-h-[270px] w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-105 rounded-3xl"
                    />
                  </div>
                </Link>

                <p className="font-14 font-weight-semibold purple-color">
                  {item?.authorName} • {dayjs(item?.date).format("DD MMM YYYY")}
                </p>

                <Link href={`/blogs/${item?.slug}`}>
                  <h3 className="font-24 font-weight-bold dark-color">
                    {item?.title.length > 38 ? `${item.title.slice(0, 52)}....` : item.title}
                  </h3>
                </Link>

                <Link
                  href={`/blogs/${item?.slug}`}
                  className="font-18 font-weight-medium dark-color flex items-end gap-2 group hover:!text-[#79CA00] transition-colors duration-300  flex-1"
                >
                  Learn More
                  <span className="text-[#79CA00] transform transition-transform duration-300 group-hover:translate-x-1">
                    <RiArrowRightLine size={24} />
                  </span>
                </Link>
              </div>
            </Col>
          ))}

        </Row>

        {
          data?.relatedBlogsData?.length > 1 &&
          <div className="text-center mt-10">
            <Link
              href={"/blogs"}
            // className="font-18 font-weight-medium dark-color flex items-center gap-2 group hover:!text-[#79CA00] transition-colors duration-300"
            >
              <button className={`apply-btn apply-btn-green`}>
                View All Blogs
              </button>
            </Link>
          </div>
        }
      </div>
    </section>
  );
};

export default NewsSection;


// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Link from "next/link";
// import Image from "next/image";
// import blog1 from "./assets/blog-1.jpg";
// import blog2 from "./assets/blog-2.jpg";
// import blog3 from "./assets/blog-3.jpg";

// import rapidMoney from "./assets/rapid_money.png";
// import styles from "./news-section.module.scss";
// import { Col, Row, Button } from "antd";
// import { RiArrowRightLine } from "react-icons/ri";

// gsap.registerPlugin(ScrollTrigger);

// const NewsSection = ({ data }) => {
//   const imageArray = [blog1, blog2, blog3];

//   const titleRef = useRef(null);
//   const cardsRef = useRef([]);
//   cardsRef.current = [];

//   useEffect(() => {
//     // Animate title
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

//     // Animate each card with stagger
//     gsap.fromTo(
//       cardsRef.current,
//       {
//         autoAlpha: 0,
//         y: 60,
//         scale: 0.95,
//       },
//       {
//         autoAlpha: 1,
//         y: 0,
//         scale: 1,
//         duration: 0.9,
//         ease: "power3.out",
//         stagger: 0.2,
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

//   return (
//     <section className={`py-12 bg-[#FAFAFA] ${styles.section}`}>
//       <div className="container mx-auto">
//         <div
//           ref={titleRef}
//           className="flex justify-center flex-wrap items-center gap-2 pb-12"
//         >
//           <Image
//             src={rapidMoney}
//             alt="rapid_money"
//             width={270}
//             height={45}
//             className="object-contain mt-2"
//           />
//           <h2 className="text-[40px] font-bold leading-none text-black">
//             in the News
//           </h2>
//         </div>

//         <Row gutter={[24, 32]}>
//           {data?.cards.map((item, idx) => (
//             <Col
//               key={idx}
//               xs={24}
//               sm={24}
//               md={8}
//               ref={(el) => (cardsRef.current[idx] = el)}
//             >
//               <div className="flex flex-col gap-4 h-full group">
//                 <Link href={item.link} className="h-full">
//                   <div className="overflow-hidden h-full rounded-3xl ">
//                     <Image
//                       src={imageArray[idx]}
//                       alt={item.title}
//                       width={500}
//                       height={300}
//                       className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-105 rounded-3xl"
//                     />
//                   </div>
//                 </Link>

//                 <p className="font-14 font-weight-semibold purple-color">
//                   {item.author} • {item.date}
//                 </p>

//                 {/* Title */}
//                 <Link href={item.link} className="">
//                   <h3 className="font-24 font-weight-bold dark-color">
//                     {item.title}
//                   </h3>
//                 </Link>

//                 {/* CTA */}
//                 <Link
//                   href={item.link}
//                   className="font-18 font-weight-medium dark-color flex items-center gap-2 group hover:!text-[#79CA00] transition-colors duration-300"
//                 >
//                   Learn More
//                   <span className="text-[#79CA00] transform transition-transform duration-300 group-hover:translate-x-1">
//                     <RiArrowRightLine size={24} />
//                   </span>
//                 </Link>
//               </div>
//             </Col>
//           ))}
//         </Row>

//         <div className="text-center mt-10">
//           <Link
//             href={data.link}
//             // className="font-18 font-weight-medium dark-color flex items-center gap-2 group hover:!text-[#79CA00] transition-colors duration-300"
//           >
//             <button className={`apply-btn apply-btn-green`}>
//               View All Blogs
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsSection;

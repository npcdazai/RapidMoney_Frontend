"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ImgCard from "@/components/about-slider-section/imgCard";
import ContentCard from "@/components/about-slider-section/contentCard";
import useScrollFadeIn from "@/animations/useScrollFadeIn";

const AboutSlider = ({ data = [] }) => {
  const fadeInRef = useScrollFadeIn();
  // console.log(data);
  return (
    <section ref={fadeInRef} className="mx-auto my-20">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={"aboutSliderSwiper"}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3.5 },
        }}
      >
        {data?.contentSliderBlocks?.map((item, idx) => (
          <SwiperSlide key={idx} className="!h-auto">
            {item?.description ? (
              <ContentCard
                title={item?.imageTitle || "Title"}
                description={item?.description}
                imageSrc={item?.image?.[0]?.url || ""}
                imageAlt={item?.image?.[0]?.alt_name || "Icon"}
              />
            ) : (
              <ImgCard
                imageSrc={item?.image?.[0]?.url || ""}
                imageAlt={item?.image?.[0]?.alt_name || "Slide Image"}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutSlider;


// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import OurVisionImg from "@/components/about-slider-section/assets/our-vission.png";
// import OurMissionImg from "@/components/about-slider-section/assets/our-mission.png";
// import VissionIcon from "@/components/about-slider-section/assets/vission.svg";
// import MissionIcon from "@/components/about-slider-section/assets/mission.svg";
// import ImgCard from "@/components/about-slider-section/imgCard";
// import ContentCard from "@/components/about-slider-section/contentCard";
// import useScrollFadeIn from "@/animations/useScrollFadeIn";

// const AboutSlider = ({data}) => {
//   const fadeInRef = useScrollFadeIn();
  
//   console.log(data)

//   return (
//     <section ref={fadeInRef}  className="mx-auto my-20">
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         className={"about-hero-slider"}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//           },
//           640: {
//             slidesPerView: 2,
//           },
//           768: {
//             slidesPerView: 2.2,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//           1280: {
//             slidesPerView: 3.5,
//           },
//         }}
//       >
//         <SwiperSlide className="!h-auto">
//           <ImgCard imageSrc={OurVisionImg} imageAlt="Vision" />
//         </SwiperSlide>
//         <SwiperSlide className="!h-auto">
//           <ContentCard
//             title="Our Vision"
//             description="Our vision is to become the most trusted and accessible digital lending platform, driving financial inclusion by effortlessly delivering credit solutions to everyone, everywhere, whenever they need it."
//             imageSrc={VissionIcon}
//             imageAlt="Vision"
//           />
//         </SwiperSlide>
//         <SwiperSlide className="!h-auto">
//           <ImgCard imageSrc={OurMissionImg} imageAlt="Mission" />
//         </SwiperSlide>
//         <SwiperSlide className="!h-auto">
//           <ContentCard
//             title="Our Mission"
//             description="Our goal is to empower 10 million customers with access to credit over the next five years, driving financial inclusion and fostering economic growth through innovative and reliable lending solutions"
//             imageSrc={MissionIcon}
//             imageAlt="Mission"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

// export default AboutSlider;

// "use client";

import { Row, Col, Input, Divider, Avatar } from "antd";
import Image from "next/image";
import styles from "./blog-details.module.scss";
import Link from "next/link";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
import BlogCard from "../blogs/BlogCard";
// import blog1 from "./assets/blog-1.jpg";
// import blog2 from "./assets/blog-2.jpg";
// import blog3 from "./assets/blog-3.jpg";
import authorImage from "./assets/author.png";
// import { useEffect, useRef, useState } from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiSearchLine,
} from "react-icons/ri";
import dayjs from "dayjs";
import BlogCategory from "@/components/blog-details-section/BlogCategoy";

const socialLinks = [
  {
    platform: "LinkedIn",
    icon: "linkedin",
    url: "/#",
  },
  {
    platform: "X",
    icon: "x-twitter",
    url: "/#",
  },
  {
    platform: "Instagram",
    icon: "instagram",
    url: "/#",
  },
  {
    platform: "Facebook",
    icon: "facebook",
    url: "/#",
  },
];

const BlogDetails = ({ data }) => {
  //   const imageArray = [blog1, blog2, blog3];
  //   const prevRef = useRef(null);
  //   const nextRef = useRef(null);

  //   const [isSwiperReady, setIsSwiperReady] = useState(false);

  //   useEffect(() => {
  //     setIsSwiperReady(true); // Trigger re-render when refs are mounted
  //   }, []);
  const socialIcons = {
    linkedin: linkedin,
    "x-twitter": twitter,
    instagram: instagram,
    facebook: facebook,
  };
  return (
    <section className={`${styles.section} pt-120 pb-120`}>
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="flex flex-col max-w-[520px] w-full gap-6 mb-8">
          <h1 className="section-title">{data?.title}</h1>
          <span className="font-weight-medium font-18 text-[#737373]">
            {" "}
            {[data?.author?.firstName, data?.author?.lastName].join(" ")} •{" "}
            {dayjs(data?.createdAt).format("DD MMM YYYY")}
          </span>
        </div>

        <Row gutter={[32, 32]}>
          {/* Main Content */}
          <Col xs={24} lg={16}>
            <div className="rounded-xl overflow-hidden pb-[60px]">
              <Image
                src={data?.featuredImg?.[0]?.url}
                alt={data?.title}
                width={740}
                height={400}
                className="rounded-[24px] object-cover max-w-[740px] w-full"
              />
            </div>

            {/* Content Loop */}
            {/* {data?.content?.map((item, idx) => (
              <div key={idx} className="pb-11">
                <h2 className="font-24 dark-color font-weight-bold pb-5">
                  {item?.heading}
                </h2>
                <p className="font-16 dark-color">{item?.paragraph}</p>
              </div>
            ))} */}

            <div className="pb-11">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.description || "",
                }}
              ></div>
            </div>

            {/* <div className='border-dashed border-t border-[#B9B9B9]'></div> */}
            <Divider
              variant="dashed"
              style={{ borderColor: "#B9B9B9" }}
              dashed
            ></Divider>

            <div className="flex gap-6 pt-10">
              <span className="font-24">Share On</span>
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks?.map((link, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                    >
                      <Image
                        src={socialIcons[link.icon]}
                        alt={link.platform}
                        width={24}
                        height={24}
                        className="hover:scale-110 transition-transform"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Author Bio Swiper */}
            <div className="pt-8">
              {/* {isSwiperReady && ( */}
              {/* <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                spaceBetween={24}
                slidesPerView={1}
                className={`mb-8 ${styles.blogSwiper}`}
              >
                {data.authorBio.map((author, idx) => ( */}
              {/* <SwiperSlide key={idx}> */}
              <div className="border border-[#C7C7C7] p-4 rounded-[24px] px-8 py-6 bg-white shadow flex flex-col gap-5">
                <div className="flex gap-5">
                  {/* <div className="w-16 h-16 rounded-full overflow-hidden bg-[#FFF5D6] flex items-center justify-center flex-shrink-0"> */}
                  {/* <Image
                      src={data?.author?.profileImg?.[0]?.url || authorImage}
                      alt={
                        data?.author?.firstName + " " + data?.author?.lastName
                      }
                      width={65}
                      height={65}
                      className="object-contain"
                    /> */}
                  <Avatar src={data?.author?.profileImg?.[0]?.url} size={65}>
                    {data?.author?.firstName?.charAt(0) +
                      data?.author?.lastName?.charAt(0)}
                  </Avatar>
                  {/* </div> */}
                  <div className="flex-1 gap-2 flex flex-col justify-center">
                    <span className="font-14 font-semibold text-[#737373]">
                      Author
                    </span>
                    <h3 className="text-md font-semibold mb-1">
                      {data?.author?.firstName + " " + data?.author?.lastName}
                    </h3>
                  </div>
                </div>
                <div>
                  <span className="dark-color font-16">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever .
                  </span>
                </div>
              </div>
              {/* </SwiperSlide> */}
              {/* ))}
              </Swiper> */}
              {/* )} */}

              <div className="flex justify-between items-center mt-4">
                {data?.hasPrevious ? (
                  <Link
                    href={`/blogs/${data?.previousSlug}`}
                    className="flex items-center gap-3 group !cursor-pointer"
                  >
                    <button className="w-12 h-12 rounded-full bg-[#F8F8F9] flex items-center justify-center hover:shadow-md cursor-pointer">
                      <RiArrowLeftLine size={24} color="#000" />
                    </button>
                    <span className="font-16 dark-color group-hover:text-primary transition">
                      Previous Article
                    </span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 opacity-40 !cursor-not-allowed">
                    <button
                      className="w-12 h-12 rounded-full bg-[#F8F8F9] flex items-center justify-center !cursor-not-allowed"
                      disabled
                    >
                      <RiArrowLeftLine size={24} />
                    </button>
                    <span className="font-16 dark-color">Previous Article</span>
                  </div>
                )}

                {/* Next Article */}
                {data?.hasNext ? (
                  <Link
                    href={`/blogs/${data?.nextSlug}`}
                    className="flex items-center gap-3 group !cursor-pointer"
                  >
                    <span className="font-16 dark-color group-hover:text-primary transition cursor-pointer">
                      Next Article
                    </span>
                    <button className="w-12 h-12 rounded-full bg-[#F8F8F9] flex items-center justify-center hover:shadow-md !cursor-pointer">
                      <RiArrowRightLine size={24} color="#000" />
                    </button>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3 opacity-40 !cursor-not-allowed">
                    <span className="font-16 dark-color">Next Article</span>
                    <button
                      className="w-12 h-12 rounded-full bg-[#F8F8F9] flex items-center justify-center !cursor-not-allowed"
                      disabled
                    >
                      <RiArrowRightLine size={24} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Col>

          <Col xs={24} lg={8}>
            {/* <div className="lg:sticky top-[100px] z-10">
              <div className="border border-[#D9D9D9] rounded-t-lg p-[30px] bg-white">
                <Input
                  placeholder="Search Here..."
                  className={`px-4 py-2 border border-[#D0D5DD] focus:border-[#B9B9B9] shadow-none ${styles.categoriesSearch}`}
                  prefix={<RiSearchLine size={20} color="#667085" />}
                />
              </div>
              <div className="border-t-0 border border-[#D9D9D9] rounded-b-lg p-[30px] bg-white">
                <h4 className="font-semibold font-24 dark-color mb-4 mt-2">
                  Categories
                </h4>
                <ul
                  className={`font-16 space-y-4 text-[#4C4C4C] ${styles.categoriesList}`}
                >
                  {data.categories.map((cat, idx) => (
                    <li key={idx} className="pl-2 list-disc list-inside">
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            <BlogCategory />
          </Col>
        </Row>

        {data?.relatedBlogsDetails?.length > 0 ? (
          <div className="mt-32">
            <h2 className="section-title pb-10 text-center">Related Blogs</h2>
            <Row gutter={[24, 24]}>
              {data?.relatedBlogsDetails?.map((blog, idx) => (
                <Col key={idx} xs={24} sm={24} md={8}>
                  <BlogCard item={{ ...blog }} />
                </Col>
              ))}
            </Row>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default BlogDetails;

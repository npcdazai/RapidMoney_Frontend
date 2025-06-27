"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import news from "./assets/newsImage.png";
import plant from "./assets/plant.png";
import paper from "./assets/paper.png";

import rapidMoney from "./assets/rapid_money.png";
import styles from "./news-section.module.scss";
import { Col, Row } from "antd";
import { RiArrowRightLine } from "react-icons/ri";

const NewsSection = ({ data }) => {
  const imageArray = [news, plant, paper];

  return (
    <section className={`pt-60 pb-60 ${styles.section}`}>
      <div className="container mx-auto">
        <div className="flex justify-center flex-wrap items-center gap-2 pb-60">
          <Image
            src={rapidMoney}
            alt="rapid_money"
            width={270}
            height={45}
            className="object-contain mt-2"
          />
          <h2 className="text-[40px] font-bold leading-none text-black">
            in the News
          </h2>
        </div>

        <Row gutter={[24, 32]}>
          {data?.cards.map((item, idx) => (
            <Col key={idx} xs={24} sm={24} md={8}>
              <div className="flex flex-col gap-4 h-full group">
                <Link href={item.link} className="">
                  <div className="overflow-hidden h-full rounded-3xl ">
                    <Image
                      src={imageArray[idx]}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-105 rounded-3xl"
                    />
                  </div>
                </Link>

                <p className="font-14 font-weight-semibold purple-color">
                  {item.author} • {item.date}
                </p>

                {/* Title */}
                <Link href={item.link} className="">
                  <h3 className="font-24 font-weight-bold dark-color">
                    {item.title}
                  </h3>
                </Link>

                {/* CTA */}
                <Link
  href={item.link}
  className="font-18 font-weight-medium dark-color flex items-center gap-2 group hover:!text-[#79CA00] transition-colors duration-300"
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
      </div>
    </section>
  );
};

export default NewsSection;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import newsImage from './assets/newsImage.png'
import rapidMoney from "./assets/rapid_money.png"
import styles from "./news-section.module.scss"
import { Col, Row } from "antd";
import { RiArrowRightLine } from "react-icons/ri";

const NewsSection = ({ data }) => {
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
                            <div className="flex flex-col gap-4 h-full">

                                <div className="overflow-hidden">
                                    <Image
                                        src={newsImage}
                                        alt={item.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-auto object-cover rounded-3xl"
                                    />
                                </div>

                                <p className="font-14 font-weight-semibold purple-color">
                                    {item.author} • {item.date}
                                </p>

                                {/* Title */}
                                <h3 className="font-24 font-weight-bold dark-color">
                                    {item.title}
                                </h3>

                                {/* CTA */}
                                <Link
                                    href={item.link}
                                    className="font-18 font-weight-medium dark-color flex gap-2"
                                >
                                    Learn More
                                    <span className="primary-color">
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

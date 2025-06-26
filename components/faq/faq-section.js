"use client";

import React from "react";
import { Card, Col, Collapse, Row, Tabs } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import dropDownArrow from "./assets/drowpDownArrow.svg"

const { Panel } = Collapse;
const { TabPane } = Tabs;
import styles from "./faq-section.module.scss"

const FaqSection = ({ data }) => {
    //  const { token } = theme.useToken();
    // const panelStyle = {
    //     marginBottom: 24,
    //     background: token.colorFillAlter,
    //     borderRadius: token.borderRadiusLG,
    //     border: 'none',
    // };
    return (
        <section className={`w-full ${styles.section} pt-60 pb-60`}>
            <div className="container mx-auto px-4">
                <h2 className="text-center font-48 font-weight-bold dark-color md:pb-[55px] pb-[25px]">FAQs</h2>
                <Row>
                    <Col span={16} offset={4}>
                        <Tabs defaultActiveKey="1" tabPosition="top" className={`${styles.faqTabs}`}>
                            {data?.map((step, index) => (
                                <TabPane tab={`${step.tabTitle}`} key={String(step.step)} className={`${styles.faqTabsPane}`}>
                                    <Collapse
                                        accordion
                                        expandIconPosition="end"
                                        // expandIcon={({ isActive }) => <RiArrowDropDownLine size={26} color="" rotate={isActive ? 90 : 0} />}
                                        expandIcon={({ isActive }) => (
                                            <RiArrowDropDownLine
                                                size={32}
                                                className=" transition-transform duration-300"
                                                style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}
                                                color="#212121b3"
                                            />
                                        )}
                                        bordered={false}
                                        className={styles.faqCollapse}
                                    >
                                        {step.questions.map((q, i) => (
                                            <Panel
                                                // header={<span className="font-18 font-weight-medium">{q.question}</span>}
                                                header={
                                                    <div className="flex justify-between items-center w-full">
                                                        <span className="font-18 font-weight-medium">{q.question}</span>
                                                    </div>
                                                }
                                                key={`${index}-${i}`}
                                                className={`${styles.faqCollapsePanel} w-full`}
                                            >

                                                <p className="font-14 text-[rgba(33, 33, 33, 0.8)]">{q.answer}</p>

                                            </Panel>
                                        ))}
                                    </Collapse>
                                </TabPane>
                            ))}
                        </Tabs>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default FaqSection;




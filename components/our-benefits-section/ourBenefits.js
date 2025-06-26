import { Row, Col } from "antd";
import Image from "next/image";
import bank from './assets/banking.svg'
import styles from "./our-benefits.modules.scss"

const Benefits = ({ data }) => {
    return (
        <section className={`pt-60`}>
            {/* <section className={`${styles.section} pb-120 pt-120`}> */}
            <div className="container mx-auto">
                <Row gutter={[24, 24]} justify="center">
                    {data.features.map((item) => (
                        <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                            <div className="h-full flex flex-col gap-2 justify-between transparent-bg rounded-4xl p-8">

                                <div className="flex justify-between">
                                    <span className="font-18 font-weight-medium dark-color">
                                        {item.text}
                                    </span><span></span>
                                </div>
                                <div className="flex justify-between">
                                    <div></div>
                                    <div className="">
                                        <Image
                                            src={bank}
                                            // src={item.icon}
                                            alt="feature"
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>

                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Benefits;

import { Row, Col } from "antd";
import Image from "next/image";
import bank from './assets/banking.svg'
import creditCard from './assets/credit-card.svg'
import layer from './assets/layer.svg'
import calender from './assets/calendar.svg'
import styles from "./our-benefits.module.scss"

const icon = {
    creditCard: creditCard,
    bank: bank,
    layer: layer,
    calender :calender
}

const Benefits = ({ data }) => {
    return (
        <section className={`${styles.section} pb-120`}>
            {/* <section className={`${styles.section} pb-120 pt-120`}> */}
            <div className="container mx-auto">
                <h2 className="text-center font-48 font-weight-bold dark-color md:pb-[55px] pb-[25px]">{data?.title }</h2>
                <Row gutter={[24, 24]} justify="center">
                    {data.features.map((item) => (
                        <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                            <div className={`h-full flex flex-col gap-2 justify-between p-8 ${styles.benefitsCard}`}>

                                <div className="flex justify-between">
                                    <span className="font-18 font-weight-medium dark-color" dangerouslySetInnerHTML={{ __html: item.text}}></span>
                                </div>
                                <div className="flex justify-between">
                                    <div></div>
                                    <div className="">
                                        <Image
                                           src={icon[item.icon]}
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

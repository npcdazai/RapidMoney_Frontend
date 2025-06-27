import Image from "next/image";
import bannerImage from './assets/bannerImage.png'
import { Col, Row } from "antd";
import styles from "./promo-section.module.scss"
import Link from "next/link";
import darkIphone from "./assets/dark_iphone.svg"
import playStore from "./assets/playstore.svg"


const PromoSection = ({ data }) => (
    <section className={`${styles.section} `}>
        {/* <Row>

            <Col>
            </Col>
            <Col>
                <Image
                src={bannerImage}
                //   src={`/${data?.image}`}
                alt="RapidMoney App Promo"
                width={900}
                height={400}
                className="w-full max-w-2xl h-auto object-contain"
                priority
            /></Col>
        </Row> */}
        
        <div className="flex flex-col gap-4 pt-60 container mx-auto">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-5 max-w-[550px] relative z-[1]">
                    <h2 className={`${styles.promoHeading} font-40 light-color font-weight-bold`}>
                        {data?.title}
                    </h2>
                    <Link href={"#"}>
                        <button
                            // type="default
                            className={`apply-btn apply-btn-dark flex item-center gap-3`}
                        >
                            <span>Download</span>
                            <Image src={darkIphone} width={24} height={24} alt="iphone"></Image>
                            <Image src={playStore} width={24} height={24} alt="playstore"></Image>
                        </button>
                    </Link>
                </div>

                <div className={`flex lg:mt-[-100px] sm:mt-[-100px] mt-[-50px] ${styles.bannerImageBkl}`}>
                    <Image
                        src={bannerImage}
                        alt="..."
                        width={1920}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>

            </div>
        </div>


    </section>
);

export default PromoSection;
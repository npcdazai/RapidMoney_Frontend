import Image from "next/image";
import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import CEO from "@/components/about-ceo-section/assets/ceo.png";
import CEOBG from "@/components/about-ceo-section/assets/ceo-bg-util.svg";
import CEOUtil from "@/components/about-ceo-section/assets/ceo-util.svg";
import styles from "./aboutCEO.module.scss"

export default function AboutCEO() {
  return (
    <section className="bg-black lg:mt-52">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-10 bg-black relative">
          <div className="lg:w-2/3 py-10 xl:py-14">
            <p className="text-white text-base lg:text-lg leading-relaxed mb-6">
              At RapidMoney, we deliver speedy, trustworthy, and transparent
              lending solutions tailored to individual needs. Our seamless
              process marks the beginning of a partnership aimed at improving
              financial well-being, recognizing that every circumstance is
              unique and deserving of a personalized approach.
            </p>

            <h3 className="text-white text-xl font-bold flex items-center gap-2 mb-1">
              - Ashwani Manaktala{" "}
              <span className="text-[#FFFFFF61]">
                <RiDoubleQuotesR size={32} />
              </span>
            </h3>
            <p className="text-[#DEDEDE] text-sm">Chief Executive Officer</p>
          </div>

          <div
            className={`lg:w-1/3 flex justify-center lg:justify-end pt-10 lg:pt-0 ${styles.ceoImage} `}
          >
            <Image
              src={CEOBG}
              alt="CEO Background Design"
              className="hidden lg:block absolute bottom-0 -right-14 xl:-right-24 z-0 object-cover"
            />
            <Image
              src={CEO}
              alt="Chief Executive Officer"
              className={`max-w-full h-auto relative lg:absolute bottom-0 z-10  `}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

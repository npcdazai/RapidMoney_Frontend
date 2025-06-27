import React from "react";
import Image from "next/image";
import InstantAccess from "@/components/product-instant-access/assets/instant-access.png";
import lightIphone from "./assets/light_iphone.svg";
import playStore from "./assets/playstore.svg";
import Link from "next/link";

export default function ProductInstantAccess() {
  return (
    <section className="bg-[#0573DB] mt-44">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-9 relative">
          <div className="w-full lg:w-1/2 py-[86px]">
            <h2 className="text-white font-bold font-40 max-w-[500px]">
              Get <span className="text-[#B7FB52]">Instant</span> Access to Cash
              – Download the App Today!"
            </h2>

            <Link href={"#"}>
              <button
                // type="default
                className={`apply-btn apply-btn-light flex item-center gap-3 mt-8`}
              >
                <span>Download</span>
                <Image
                  src={lightIphone}
                  width={24}
                  height={24}
                  alt="iphone"
                ></Image>
                <Image
                  src={playStore}
                  width={24}
                  height={24}
                  alt="playstore"
                ></Image>
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={InstantAccess}
              alt="Rapid Money"
              className={`max-w-full h-auto relative lg:absolute bottom-0 z-10  `}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

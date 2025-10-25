import React from "react";
import Image from "next/image";
import InstantAccess from "@/components/product-instant-access/assets/instant-access.png";
import lightIphone from "./assets/light_iphone.svg";
import playStore from "./assets/playstore.svg";
import Util1 from "./assets/util1.svg";
import Link from "next/link";
import styles from "./product-instant.module.scss";

export default function ProductInstantAccess({ data }) {
  console.log(data);

  return (
    <section className="bg-[#0573DB] lg:mt-44">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-9 relative">
          <div className="w-full text-center lg:text-left lg:w-1/2 py-16 lg:py-[86px]">
            <h2
              className={`text-white font-bold font-40 lg:max-w-[500px] ${styles.title}`}
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />

            {/* <Link href={"#"}>
              <button
                // type="default
                className={`apply-btn apply-btn-light flex item-center gap-3 mt-8`}
              >
                <span>{ data?.downloadButtonLabel}</span>
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
            </Link> */}
          </div>
          <div className="w-full text-center lg:text-left lg:w-1/2 relative">
            <Image
              src={data?.image?.[0]?.url}
              // src={InstantAccess}
              width={450}
              height={550}
              alt="Rapid Money"
              className={`max-w-full h-auto mx-auto relative lg:absolute bottom-0  z-10 max-h-[550px]`}
              priority
            />

            <Image
              src={Util1}
              alt="Rapid Money"
              className={`max-w-full hidden sm:block h-auto absolute -top-16 right-0 z-10  `}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
// import React from "react";
// import Image from "next/image";
// import InstantAccess from "@/components/product-instant-access/assets/instant-access.png";
// import lightIphone from "./assets/light_iphone.svg";
// import playStore from "./assets/playstore.svg";
// import Util1 from "./assets/util1.svg";
// import Link from "next/link";

// export default function ProductInstantAccess() {
//   return (
//     <section className="bg-[#0573DB] lg:mt-44">
//       <div className="container mx-auto px-4 relative">
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-9 relative">
//           <div className="w-full text-center lg:text-left lg:w-1/2 py-16 lg:py-[86px]">
//             <h2 className="text-white font-bold font-40 lg:max-w-[500px]">
//               Get <span className="text-[#B7FB52]">Instant</span> Access to Cash
//               – Download the App Today!
//             </h2>

//             <Link href={"#"}>
//               <button
//                 // type="default
//                 className={`apply-btn apply-btn-light flex item-center gap-3 mt-8`}
//               >
//                 <span>Download</span>
//                 <Image
//                   src={lightIphone}
//                   width={24}
//                   height={24}
//                   alt="iphone"
//                 ></Image>
//                 <Image
//                   src={playStore}
//                   width={24}
//                   height={24}
//                   alt="playstore"
//                 ></Image>
//               </button>
//             </Link>
//           </div>
//           <div className="w-full text-center lg:text-left lg:w-1/2 relative">
//             <Image
//               src={InstantAccess}
//               alt="Rapid Money"
//               className={`max-w-full h-auto mx-auto relative lg:absolute bottom-0  z-10  `}
//               priority
//             />

//              <Image
//               src={Util1}
//               alt="Rapid Money"
//               className={`max-w-full hidden sm:block h-auto absolute -top-16 right-0 z-10  `}
//               priority
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

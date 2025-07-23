// "use client";
// import Image from "next/image";
// import React, { useEffect } from "react";
// import aboutHeroImage from "@/components/about-hero-section/assets/about-hero-arrow.svg";
// import useScrollFadeIn from "@/animations/useScrollFadeIn";
// import gsap from "gsap";

// export default function AboutHero({ content }) {
//   const headingRef = useScrollFadeIn();
//   const leftParaRef = useScrollFadeIn();
//   const rightParaRef = useScrollFadeIn();
//   const imageRef = useScrollFadeIn(); // Optional fade-in

//   useEffect(() => {
//     gsap.to(imageRef.current, {
//       y: -10,
//       duration: 2,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//     });
//   }, []);

//   return (
//     <section className="container mx-auto px-4 my-80">
//       <h2 ref={headingRef} className="font-36 text-black text-center font-bold mb-7">
//         {content?.title}
//       </h2>

//       <div className="flex flex-col lg:flex-row gap-4 lg:gap-[50px] relative">
//         <div className="flex flex-col gap-4 w-full text-center">
//           <p ref={leftParaRef} className="w-full">
//             {content?.content1}
//           </p>
//           <p ref={rightParaRef} className="w-full">
//             {content?.content2}
//           </p>
//         </div>

//         <Image
//           ref={imageRef}
//           src={aboutHeroImage}
//           alt="About"
//           className="absolute lg:relative right-0 -top-28 lg:top-0"
//         />
//       </div>
//     </section>
//   );
// }


"use client";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import aboutHeroImage from "@/components/about-hero-section/assets/about-hero-arrow.svg";
import useScrollFadeIn from "@/animations/useScrollFadeIn";
import gsap from "gsap";

export default function AboutHero({ data }) {
  const headingRef = useScrollFadeIn();
  const leftParaRef = useScrollFadeIn();
  const rightParaRef = useScrollFadeIn();
  const imageRef = useScrollFadeIn(); // Optional fade-in


  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, [imageRef]);

  return (
    <section className="relative">
      <div className="container mx-auto px-4 my-80">
        <h2 ref={headingRef} className="font-36 text-black text-center font-bold mb-7">
          {data?.title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[50px] relative">
          <div className="flex flex-col gap-4 w-full text-center">
            <p ref={leftParaRef} className="w-full" >
              {data?.content1}
            </p>
            <p ref={rightParaRef} className="w-full">
              {data?.content2}
            </p>
          </div>

        </div>
      </div>
      <Image
        ref={imageRef}
        src={aboutHeroImage}
        alt="About"
        className="absolute  right-[80px] -top-28 lg:top-[50px]"
      // className="absolute lg:relative right-0 -top-28 lg:top-0"
      />
    </section>

  );
}

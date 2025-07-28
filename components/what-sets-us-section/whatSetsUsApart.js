"use client";
import React from "react";
import useScrollStaggerFadeIn from "@/animations/useScrollStaggerFadeIn";
import Image from "next/image";

export default function WhatSetsUsApart({data}) {
  const Bg = ['#007BFF', '#32CD85', '#1D3557'];

  // const data = {
  //   title: "What Sets Us Apart?",
  //   cards: [
  //     {
  //       title: "Speed",
  //       description: "Quick approvals and fast disbursal so you can move forward without delay.",
  //       image: [
  //         {
  //           is_visible: true,
  //           url: "http://192.168.1.32:5020/uploads/1752737649850-392382954.svg",
  //         }
  //       ]
  //     },
  //     {
  //       title: "Flexibility",
  //       description: "A range of Loan Options designed to fit your lifestyle and financial situation.",
  //       image: [
  //         {
  //           is_visible: true,
  //           url: "http://192.168.1.32:5020/uploads/1752737655999-360734872.svg",
  //         }
  //       ]
  //     },
  //     {
  //       title: "Trust",
  //       description: "Clear communication, no hidden fees and a commitment to responsible lending.",
  //       image: [
  //         {
  //           is_visible: true,
  //           url: "http://192.168.1.32:5020/uploads/1752737663485-718417891.svg",
  //         }
  //       ]
  //     }
  //   ]
  // };

  const sectionRef = useScrollStaggerFadeIn({ stagger: 0.2 });

  return (
    <section ref={sectionRef} className="container mx-auto my-100 px-4">
      <h2 className="font-40 text-black font-bold mb-9 text-center fade-card">
        {data?.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.cards.map((card, i) => (
          <div
            key={i}
            className="rounded-xl p-7 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 fade-card group"
            style={{ backgroundColor: Bg[i % Bg.length] }} // ✅ Correct dynamic color
          >
            <div className="mb-8 rounded-full bg-white p-5 w-fit transition-transform duration-300 group-hover:rotate-6 hover:scale-110">
              <Image
                width={28}
                height={28}
                // src={card.image[0].url}
                src={card?.image?.[0]?.url}
                alt={card.title}
              />
            </div>
            <div className="mt-auto">
              <h3 className="font-28 font-bold text-white mb-4">
                {card.title}
              </h3>
              <p className="light-color font-18 font-weight-regular text-white">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// "use client";
// import React from "react";
// import { RiFlashlightLine, RiHeart2Line } from "react-icons/ri";
// import { FaRegChessKnight } from "react-icons/fa6";
// import useScrollStaggerFadeIn from "@/animations/useScrollStaggerFadeIn";

// export default function WhatSetsUsApart() {
//   const cards = [
//     {
//       icon: <RiFlashlightLine size={28} />,
//       title: "Speed",
//       description:
//         "Quick approvals and fast disbursal so you can move forward without delay.",
//       bg: "#007BFF",
//     },
//     {
//       icon: <FaRegChessKnight size={28} />,
//       title: "Flexibility",
//       description:
//         "A range of Loan Options designed to fit your lifestyle and financial situation.",
//       bg: "#32CD85",
//     },
//     {
//       icon: <RiHeart2Line size={28} />,
//       title: "Trust",
//       description:
//         "Clear communication, no hidden fees and a commitment to responsible lending.",
//       bg: "#1D3557",
//     },
//   ];

//   const sectionRef = useScrollStaggerFadeIn({ stagger: 0.2 });

//   return (
//     <section ref={sectionRef} className="container mx-auto my-100 px-4">
//       <h2 className="font-40 text-black font-bold mb-9 text-center fade-card">
//         What Sets Us Apart?
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cards.map((card, i) => (
//           <div
//             key={i}
//             className="rounded-xl p-7 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 fade-card group"
//             style={{ backgroundColor: card.bg }}
//           >
//             <div className="mb-8 rounded-full bg-white p-5 w-fit transition-transform duration-300 group-hover:rotate-6 hover:scale-110 ">
//               {card.icon}
//             </div>
//             <div className="mt-auto">
//               <h3 className="font-28 font-bold text-white mb-4">
//                 {card.title}
//               </h3>
//               <p className="light-color font-18 font-weight-regular">
//                 {card.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

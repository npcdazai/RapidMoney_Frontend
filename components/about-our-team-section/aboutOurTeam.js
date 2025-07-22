// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import useScrollFadeInOnce from "@/animations/useScrollFadeInOnce";
// import useStaggerFadeIn from "@/animations/useStaggerFadeIn";

// import HemaliImg from "@/components/about-our-team-section/assets/hemali.png";
// import ChintanImg from "@/components/about-our-team-section/assets/chintan.png";
// import AnkurImg from "@/components/about-our-team-section/assets/ankur.png";
// import AshwaniImg from "@/components/about-our-team-section/assets/ashwani.png";

// const leaders = [
//   {
//     name: "Hemali Bhatt",
//     title: "Director",
//     img: HemaliImg,
//     linkedin: "#",
//   },
//   {
//     name: "Chintan Panchmatiya",
//     title: "Director",
//     img: ChintanImg,
//     linkedin: "#",
//   },
// ];

// const team = [
//   {
//     name: "Ashwani Manaktala",
//     title: "Chief Executive Officer",
//     img: AshwaniImg,
//     linkedin: "#",
//   },
//   {
//     name: "Ankur Chandra",
//     title: "AVP-Products",
//     img: AnkurImg,
//     linkedin: "#",
//   },
// ];

// function MemberCard({ name, title, img, linkedin, cardRef }) {
//   return (
//     <div className="max-w-[270px] [perspective:1000px] group" ref={cardRef}>
//       <div className="relative w-full h-[370px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//         {/* Front Side */}
//         <div>
//           <div className="bg-[#F4F5F8] rounded-4xl relative w-full mx-auto overflow-hidden mb-[10px]">
//             <div className="overflow-hidden rounded-xl pt-8">
//               <Image
//                 src={img}
//                 alt={name}
//                 className="w-auto h-[300px] object-cover transform  group-hover:opacity-0 transition-opacity duration-1000"
//               />
//             </div>
//             <a
//               href={linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="absolute top-[18px] right-4 transition-transform hover:scale-110 hover:rotate-6"
//             >
//               <svg width="24" height="24" fill="#0B63BD" viewBox="0 0 24 24">
//                 <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
//               </svg>
//             </a>
//           </div>
//           <div className="text-start block  group-hover:opacity-0 transition-opacity group-hover:duration-100 duration-1000">
//             <div className="text-black font-bold text-[20px]">{name}</div>
//             <div className="text-sm text-[#333333]">{title}</div>
//           </div>
//         </div>

//         {/* Back Side */}
//         <div className="absolute inset-0 bg-[#F4F5F8]  rounded-4xl px-5 py-[22px] [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
//           <div>
//             <div className="flex !justify-end  w-full mb-4">
//               <a
//                 href={linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="transition-transform hover:scale-110 hover:rotate-6"
//               >
//                 <svg width="24" height="24" fill="#0B63BD" viewBox="0 0 24 24">
//                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
//                 </svg>
//               </a>
//             </div>
//             <p className="text-sm text-[#00000087] font-14 font-normal !leading-relaxed">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industrys standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book. It has
//               survived not only five.
//             </p>
//           </div>
//           <div className="flex items-center mt-auto">
//             <div className="w-11 h-11 rounded-full overflow-hidden mr-3 bg-white">
//               <Image
//                 src={img}
//                 alt={name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <div className="text-black font-16 font-bold !mb-[2px]">
//                 {name}
//               </div>
//               <div className="text-[#333333] text-[13px]">{title}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function AboutOurTeam() {
//   const titleRef1 = useScrollFadeInOnce();
//   const titleRef2 = useScrollFadeInOnce();
//   const leaderRefs = useStaggerFadeIn();
//   const teamRefs = useStaggerFadeIn();

//   return (
//     <section className="bg-white px-4 z-50 relative">
//       <div className="py-24">
//         <div className="max-w-4xl mx-auto">
//           <h2
//             className="font-40 text-black font-bold text-center mb-10"
//             ref={titleRef1}
//           >
//             Our Leader Board
//           </h2>
//           <div className="flex justify-center flex-wrap gap-8 mb-20 md:mb-24">
//             {leaders.map((member, i) => (
//               <MemberCard
//                 key={member.name}
//                 {...member}
//                 cardRef={(el) => (leaderRefs.current[i] = el)}
//               />
//             ))}
//           </div>

//           <h2
//             className="font-40 text-black font-bold text-center mb-10"
//             ref={titleRef2}
//           >
//             Our Team Member
//           </h2>
//           <div className="flex justify-center flex-wrap gap-8">
//             {team.map((member, i) => (
//               <MemberCard
//                 key={member.name}
//                 {...member}
//                 cardRef={(el) => (teamRefs.current[i] = el)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import useScrollFadeInOnce from "@/animations/useScrollFadeInOnce";
import useStaggerFadeIn from "@/animations/useStaggerFadeIn";
import MemberCard from "./memberCard";

import HemaliImg from "@/components/about-our-team-section/assets/hemali.png";
import ChintanImg from "@/components/about-our-team-section/assets/chintan.png";
import AnkurImg from "@/components/about-our-team-section/assets/ankur.png";
import AshwaniImg from "@/components/about-our-team-section/assets/ashwani.png";


export default function AboutOurTeam({ data }) {
  const sectionTitleRefs = data.sections.map(() => useScrollFadeInOnce());
  const sectionCardRefs = data.sections.map(() => useStaggerFadeIn());

  return (
    <section className="bg-white px-4 z-50 relative">
      <div className="py-24 max-w-6xl mx-auto">
        {data.sections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-20 md:mb-24">
            <h2
              className="font-40 text-black font-bold text-center mb-10"
              ref={sectionTitleRefs[sectionIndex]}
            >
              {section.title}
            </h2>
            <div className="flex justify-center flex-wrap gap-8">
              {section.persons.map((person, i) => {
                const imgObj = person.image?.[0] || {};
                return (
                  <MemberCard
                    key={person.name}
                    name={person.name}
                    title={person.designation}
                    description={person.description}
                    imgUrl={imgObj.url}
                    alt={imgObj.alt_name || person.name}
                    linkedin={person.linkedin}
                    cardRef={(el) =>
                      (sectionCardRefs[sectionIndex].current[i] = el)
                    }
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

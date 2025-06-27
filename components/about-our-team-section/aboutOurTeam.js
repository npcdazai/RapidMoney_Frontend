import React from "react";
import HemaliImg from "@/components/about-our-team-section/assets/hemali.png";
import ChintanImg from "@/components/about-our-team-section/assets/chintan.png";
import AnkurImg from "@/components/about-our-team-section/assets/ankur.png";
import AshwaniImg from "@/components/about-our-team-section/assets/ashwani.png";
import Image from "next/image";

const leaders = [
  {
    name: "Hemali Bhatt",
    title: "Director",
    img: HemaliImg,
    linkedin: "#",
  },
  {
    name: "Chintan Panchmatya",
    title: "Director",
    img: ChintanImg,
    linkedin: "#",
  },
];

const team = [
  {
    name: "Ashwani Manaktala",
    title: "Chief Executive Officer",
    img: AshwaniImg,
    linkedin: "#",
  },
  {
    name: "Ankur Chandra",
    title: "AVP-Products",
    img: AnkurImg,
    linkedin: "#",
  },
];

function MemberCard({ name, title, img, linkedin }) {
  return (
    <div className="max-w-[270px] group">
      <div className="bg-[#F4F5F8] rounded-4xl relative w-full mx-auto overflow-hidden mb-[10px]">
        <div className="overflow-hidden rounded-xl pt-8">
          <Image
            src={img}
            alt={name}
            className="w-auto h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[18px] right-4 transition-transform hover:scale-110 hover:rotate-6"
        >
          <svg width="24" height="24" fill="#0B63BD" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
          </svg>
        </a>
      </div>
      <div className="text-start">
        <div className="text-black font-bold text-[20px]">{name}</div>
        <div className="text-sm text-[#333333]">{title}</div>
      </div>
    </div>
  );
}

export default function AboutOurTeam() {
  return (
    <section className="bg-white px-4 z-50 relative">
      <div className=" py-24 ">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-40 text-black font-bold text-center mb-10">
            Our Leader Board
          </h2>
          <div className="flex justify-center flex-wrap gap-8 mb-20 md:mb-24">
            {leaders.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
          <h2 className="font-40 text-black font-bold text-center mb-10">
            Our Team Member
          </h2>
          <div className="flex justify-center flex-wrap gap-8">
            {team.map((member) => (
              <MemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

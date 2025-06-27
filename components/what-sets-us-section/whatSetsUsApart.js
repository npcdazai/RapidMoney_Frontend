import React from "react";
import { RiFlashlightLine, RiHeart2Line } from "react-icons/ri";
import { FaRegChessKnight } from "react-icons/fa6";

export default function WhatSetsUsApart() {
    const cards = [
    {
      icon: <RiFlashlightLine size={28} />,
      title: "Speed",
      description:
        "Quick approvals and fast disbursal so you can move forward without delay.",
      bg: "#007BFF",
    },
    {
      icon: <FaRegChessKnight size={28} />,
      title: "Flexibility",
      description:
        "A range of Loan Options designed to fit your lifestyle and financial situation.",
      bg: "#32CD85",
    },
    {
      icon: <RiHeart2Line size={28} />,
      title: "Trust",
      description:
        "Clear communication, no hidden fees and a commitment to responsible lending.",
      bg: "#1D3557",
    },
  ];
  return (
    <section className="container mx-auto my-80 px-4">
      <h2 className="font-40 text-black font-bold mb-7 text-center">
        What sets us apart?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {cards.map((card, i) => (
          <div
            key={i}
            className="rounded-xl p-7 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            style={{ backgroundColor: card.bg }}
          >
            <div className="mb-8 rounded-full bg-white p-5 w-fit transition-transform duration-300 hover:rotate-6 hover:scale-110">
              {card.icon}
            </div>
            <div className="mt-auto">
              <h3 className="font-28 font-bold text-white mb-4">
                {card.title}
              </h3>
            <p className="light-color font-18 font-weight-regular">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


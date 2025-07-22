import React from 'react';
import Image from 'next/image';

export default function ContentCard({ title, description, imageSrc, imageAlt }) {
  return (
    <div className="bg-[#AFAFB214] rounded-xl p-8 flex flex-col h-full group hover:shadow-lg transition-all duration-500">
      <div className="animate-pulse transition-transform group-hover:scale-110">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={90}
          height={90}
          className="mb-4"
        />
      </div>
      <div className="mt-auto">
        <h3 className="font-24 font-bold text-black mb-4">{title}</h3>
        <p className="text-[#00000087] font-14 font-normal tracking-wider !leading-5">
          {description}
        </p>
      </div>
    </div>
  );
}

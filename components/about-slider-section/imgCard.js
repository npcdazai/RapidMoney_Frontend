import React from 'react';
import Image from 'next/image';

export default function ImgCard({ imageSrc, imageAlt }) {
  return (
    <div className="rounded-xl h-full overflow-hidden group">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="w-full !h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

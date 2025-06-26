import React from 'react'
import Image from 'next/image'

export default function ImgCard({ imageSrc, imageAlt }) {
  return (
    <div className='rounded-xl h-full'>
        <Image src={imageSrc} alt={imageAlt} className="w-full  max-h-[320px]  object-cover rounded-xl" />
    </div>
  )
}

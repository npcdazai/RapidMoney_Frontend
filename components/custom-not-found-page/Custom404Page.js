

// import React from 'react'
// import notFoundImage from './assets/404.png'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Custom404Page() {
//     return (
//         <div className='flex justify-center items-center min-h-[90vh] pt-60 pb-60'>
//             <div className='flex flex-col items-center gap-8 w-full container mx-auto px-4'>
//                 <Image src={notFoundImage} alt='not_found' width={480} height={200} className="w-full max-w-[480px] h-auto" />
//                 <h2 className='font-40 font-medium text-center'>Page Not Found</h2>
//                 <Link href="/">
//                   <button className='apply-btn text-center apply-btn-light'>Go to Home Page</button>
//                 </Link>
//             </div>
//         </div>
//     )   
// }

"use client"

import React, { useRef, useEffect } from 'react'
import notFoundImage from './assets/404.png'
import coin from './assets/coin.png'
import not from './assets/4.png'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'


export default function Custom404Page() {
    const imageRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(
            imageRef.current,
            { y: 0, rotateY: 0, opacity: 1 },
            {
                y: -180,
                rotateY: 720,
                duration: 0.8,
                ease: "power2.out",
                opacity: 1,
                onComplete: () => {
                    gsap.to(imageRef.current, {
                        y: 0,
                        rotateY: 0,
                        duration: 0.6,
                        ease: "bounce.out"
                    });
                }
            }
        );
    }, []);

    return (
        <div className='flex justify-center items-center min-h-[90vh] pt-60 pb-60'>
            <div className='flex flex-col items-center gap-8 w-full max-w-xl px-4'>
                <div className='flex items-center justify-center gap-4'>
                    <span>
                        <Image src={not} alt='not_found' width={460} height={200} className="w-full" priority />
                    </span>
                    <span ref={imageRef} className="block">
                        <Image src={coin} alt='not_found' width={460} height={200} className="w-full" priority />
                    </span>
                    <span>
                        <Image src={not} alt='not_found' width={460} height={200} className="w-full" priority />
                    </span>
                </div>
                <h2 className='font-40 font-medium text-center'>Page Not Found</h2>
                <Link href="/">
                    <button className='apply-btn text-center apply-btn-light'>Go to Home Page</button>
                </Link>
            </div>
        </div>
    )
}
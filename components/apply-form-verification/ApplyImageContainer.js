import Image from 'next/image'
import React from 'react'
import styles from './apply-verification.module.scss'
import personImage from './assets/personImage.png'

export default function ApplyImageContainer() {
    return (
        <>
            <div className={`${styles.applyImageContainer} h-full`}>
                <div className={`w-full h-full flex justify-center ${styles.personImage}`}>
                    <Image
                        src={personImage}
                        alt="Hero"
                        width={900}
                        height={800}
                        className="object-cover z-1 justify-self-end !h-full"
                    />
                </div>
            </div>
        </>
    )
}

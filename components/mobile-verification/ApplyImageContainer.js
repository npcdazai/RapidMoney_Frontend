import Image from 'next/image'
import React from 'react'
import styles from './mobile-verification.module.scss' // Adjust the path as necessary
import personImage from './assets/personImage.png' // Adjust the path as <necessary></necessary>

export default function ApplyImageContainer() {
    return (
        <>
            <div className={styles.applyImageContainer}>
                <div className={`w-full h-full flex justify-center ${styles.personImage}`}>
                    <Image
                        src={personImage}
                        alt="Hero"
                        width={900}
                        height={800}
                        className="object-cover z-1 justify-self-end !h-full"
                    />
                    {/* <div className="absolute inset-0 z-[4] pointer-events-none">
                        <Image
                            src={moneyCoin1}
                            alt="Coin 1"
                            priority
                            loading="eager"
                            className="absolute w-[140px] top-[-50px] left-[60px] sm:w-[250px] sm:top-[-80px] sm:left-[130px] floating-image"
                            style={{ visibility: 'hidden' }}
                        />
                        <Image
                            src={moneyCoin2}
                            alt="Coin 2"
                            priority
                            loading="eager"
                            className="absolute w-[140px] top-[-10px] right-[20px] sm:w-[250px] sm:top-[-20px] sm:right-[0px] floating-image"
                            style={{ visibility: 'hidden' }}
                        />
                        <Image
                            src={moneyCoin3}
                            alt="Coin 3"
                            priority
                            loading="eager"
                            className="absolute w-[120px] top-[100px] left-[30px] sm:w-[200px] sm:top-[140px] sm:left-[60px] z-1 floating-image"
                            style={{ visibility: 'hidden' }}
                        />
                        <Image
                            src={moneyCoin4}
                            alt="Coin 4"
                            priority
                            loading="eager"
                            className="absolute w-[120px] top-[110px] right-[-20px] sm:w-[200px] sm:top-[150px] sm:right-[-60px] z-1 floating-image"
                            style={{ visibility: 'hidden' }}
                        />
                        <Image
                            src={moneyNote1}
                            alt="Note 1"
                            priority
                            loading="eager"
                            className="absolute w-[100px] top-[140px] left-[20px] sm:w-[150px] sm:top-[200px] sm:left-[50px] z-0 floating-image"
                            style={{ visibility: 'hidden' }}
                        />
                        <Image
                            src={moneyNote2}
                            alt="Note 2"
                            priority
                            loading="eager"
                            className="absolute w-[100px] top-[90px] right-[-20px] sm:w-[150px] sm:top-[120px] sm:right-[-60px] floating-image"
                            style={{ visibility: 'hidden' }}
                        />
                    </div> */}
                </div>
            </div>
        </>
    )
}

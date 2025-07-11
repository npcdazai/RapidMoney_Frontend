import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from './apply-verification.module.scss';
import gsap from 'gsap';

export default function ApplyImageContainer({
  personImage,
  note1,
  note2,
  coin1,
  coin2,
  coin3,
  coin4,
  curve,
  passwordstar
}) {
useEffect(() => {
  const elements = gsap.utils.toArray('.floating-image');

  gsap.set(elements, { y: -100, opacity: 0, visibility: 'hidden' });

  const tl = gsap.timeline();

  tl.set(elements, { visibility: 'visible' })

    // Drop-in animation
    .to(elements, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,
    })

    // Start bounce+rotate after the last element finishes dropping
    .add(() => {
      elements.forEach((el, index) => {
        gsap.to(el, {
          y: -40,
          rotation: 10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      });
    }, "+=0"); // start immediately after drop ends
}, []);


  return (
    <div className={`${styles.applyImageContainer} applyImageContainer h-full relative`}>
      {/* Coins and Notes */}
      {note1 && (
        <div className="absolute top-16 z-10">
          <Image src={note1} alt="Note 1" className="max-w-[200px] max-h-[200px] floating-image" />
        </div>
      )}
      {note2 && (
        <div className="absolute top-16 right-3 z-10">
          <Image src={note2} alt="Note 2" className="max-w-[200px] max-h-[200px] floating-image" />
        </div>
      )}
      {coin1 && (
        <div className="absolute top-30 z-10">
          <Image src={coin1} alt="Coin 1" className="max-w-[300px] max-h-[300px] floating-image" />
        </div>
      )}
      {coin2 && (
        <div className="absolute top-30 right-[-10px] z-10">
          <Image src={coin2} alt="Coin 2" className="max-w-[300px] max-h-[300px] floating-image" />
        </div>
      )}
      {coin3 && (
        <div className="absolute bottom-20 z-10">
          <Image src={coin3} alt="Coin 3" className="max-w-[200px] max-h-[200px] floating-image" />
        </div>
      )}
      {coin4 && (
        <div className="absolute bottom-12 right-0 z-10">
          <Image src={coin4} alt="Coin 4" className="max-w-[200px] max-h-[200px] floating-image" />
        </div>
      )}

      {/* Person Image */}
      <div className={`w-full h-full flex justify-center items-end ${styles.personImage} relative`}>
        <div className="relative w-full h-full flex justify-center items-end">
          {personImage && (
            <Image
              src={personImage}
              alt="Hero"
              className="object-cover z-30 w-full h-auto max-h-full"
              width={900}
              height={800}
            />
          )}
          {passwordstar && (
            <Image
              src={require('./assets/password.png')}
              alt="password"
              className="absolute left-1/2 top-30 max-w-[200px] max-h-[230px] z-40"
            />
          )}
          {curve && (
            <Image
              src={curve}
              alt="curve"
              className="max-w-[70px] max-h-[150px] absolute left-40 bottom-40 z-40 floating-image"
            />
          )}
        </div>
      </div>
    </div>
  );
}

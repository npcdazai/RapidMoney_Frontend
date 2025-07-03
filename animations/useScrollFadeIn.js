// hooks/useScrollFadeIn.js
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollFadeIn() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse", // fade in & out
          markers: false, // set to true if you want to debug
        },
      }
    );
  }, []);

  return ref;
}

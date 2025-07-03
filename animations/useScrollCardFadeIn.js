import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollCardFadeIn(index) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 50, scale: 0.95 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.2, // staggered entrance
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [index]);

  return ref;
}

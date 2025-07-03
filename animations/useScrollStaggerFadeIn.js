import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollStaggerFadeIn({ stagger = 0.2 } = {}) {
  const ref = useRef();

  useEffect(() => {
    const targets = ref.current.querySelectorAll(".fade-card");

    gsap.fromTo(
      targets,
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: stagger,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [stagger]);

  return ref;
}

import gsap from "gsap";

export function animateFloatingCoins(moneyRef, coinRef, curveRef) {
  if (moneyRef.current && coinRef.current && curveRef.current) {
    gsap.to(moneyRef.current, {
      y: -40,
      rotation: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }
}
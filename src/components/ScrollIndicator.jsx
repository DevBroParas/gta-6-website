"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollIndicator() {
  const indicator = useRef();

  useEffect(() => {
    gsap.to(indicator.current, {
      y: 20,
      opacity: 0.6,
      duration: 0.8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="scroll-indicator" ref={indicator}>
      <svg width="34" height="14" viewBox="0 0 34 14">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.5609 1.54346C34.0381 2.5875 33.6881 3.87821 32.7791 4.42633L17.0387 13.9181L1.48663 4.42115C0.580153 3.86761 0.235986 2.57483 0.717909 1.53365C1.19983 0.492464 2.32535 0.097152 3.23182 0.650692L17.0497 9.08858L31.051 0.64551C31.96 0.0973872 33.0837 0.499411 33.5609 1.54346Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

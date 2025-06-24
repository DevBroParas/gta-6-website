"use client";
import { createContext, useContext, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState(null);

  useEffect(() => {
    // Only run on client
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ".container",
        scrub: 2,
        pin: true,
        start: "top top",
        end: "+=2000",
        ease: "none",
      },
    });
    setTimeline(tl);

    // Cleanup
    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <TimelineContext.Provider value={timeline}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);

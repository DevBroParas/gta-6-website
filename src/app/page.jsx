"use client";
import gsap from "gsap";
import { useTimeline } from "@/Context/TimelineContext";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const tl = useTimeline();
  const frameImageRef = useRef();
  const loaderRef = useRef();
  const section3Ref = useRef();
  const imagesRef = useRef([]);
  const totalFrames = 120;
  let imagesLoaded = 0;

  useEffect(() => {
    const images = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/frames/video-1/frame_${String(i).padStart(4, "0")}.jpg`;
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === totalFrames) {
          loaderRef.current.style.display = "none";
        }
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  useGSAP(
    () => {
      if (!tl || !frameImageRef.current) return;

      gsap.from(".hero-main-container", {
        scale: 1.3,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.to(".overlay", {
        opacity: 0,
        duration: 2.8,
        ease: "power3.out",
        onComplete: () => {
          document.body.style.overflow = "visible";
          document.body.style.overflowX = "hidden";
        },
      });

      tl.set(".hero-main-container", { scale: 1.2 })
        .to(".hero-main-container", { scale: 1, duration: 1 })
        .to(".hero-main-logo", { opacity: 0, duration: 0.5 }, "<")
        .to(".hero-main-image", { opacity: 0, duration: 0.9 }, "<+=0.5")
        .to(
          ".hero-main-container",
          { backgroundSize: "28vh", duration: 1.5 },
          "<+=0.2"
        )
        .fromTo(
          ".hero-text",
          {
            backgroundImage: `radial-gradient(circle at 50% 200vh, rgba(255,214,135,0) 0, rgba(157,47,106,0.5) 90vh, rgba(157,47,106,0.8) 120vh, rgba(32,31,66,0) 150vh)`,
          },
          {
            backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255,213,133) 0vh, rgb(247,77,82) 50vh, rgb(145,42,105) 90vh, rgba(32,31,66,0) 140vh)`,
            duration: 3,
          },
          "<1.2"
        )
        .fromTo(
          ".hero-text-logo",
          {
            opacity: 0,
            maskImage: `radial-gradient(circle at 50% 145.835%, rgb(0,0,0) 36.11%, rgba(0,0,0,0) 68.055%)`,
          },
          {
            opacity: 1,
            maskImage: `radial-gradient(circle at 50% 105.594%, rgb(0,0,0) 62.9372%, rgba(0,0,0,0) 81.4686%)`,
            duration: 3,
          },
          "<0.2"
        )
        .set(".hero-main-container", { opacity: 0 })
        .to(".section-1", { scale: 0.85, duration: 3 }, "<-=3")
        .from(".support-logo", { opacity: 0, y: 10, duration: 0.5 }, "<+=0.5")
        .set(
          ".section-1",
          {
            maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(0,0,0) 96.1949vh, rgba(0,0,0,0) 112.065vh)`,
          },
          "<+=2.1"
        )
        .to(
          ".section-1",
          {
            maskImage: `radial-gradient(circle at 50% -40vh, rgb(0,0,0) 0vh, rgba(0,0,0,0) 80vh)`,
            duration: 2,
          },
          "<+=0.2"
        )
        .to(".hero-text-logo", { opacity: 0, duration: 2 }, "<1.5")
        .to(".support-logo", { opacity: 0, duration: 2 }, "<1.5")
        .set(".section-1", { opacity: 0 })
        .set(".section-2", { visibility: "visible" })
        .to(".section-2", { opacity: 1, duration: 3 }, "<+=0.2")
        .fromTo(
          ".section-2",
          {
            backgroundImage: `radial-gradient(circle at 50% 200vh, rgba(255,214,135,0) 0, rgba(157,47,106,0.5) 90vh, rgba(157,47,106,0.8) 120vh, rgba(32,31,66,0) 150vh)`,
          },
          {
            backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255,213,133) 0vh, rgb(247,77,82) 50vh, rgb(145,42,105) 90vh, rgba(32,31,66,0) 140vh)`,
            duration: 3,
          },
          "<1.2"
        )
        .set(
          ".section-2",
          {
            maskImage: `radial-gradient(circle at 50% 50%, rgb(0,0,0) 96.1949vh, rgba(0,0,0,0) 112.065vh)`,
          },
          "<+=2.1"
        )
        .to(
          ".section-2",
          {
            maskImage: `radial-gradient(circle at 0% -40%, rgb(0,0,0) 0vh, rgba(0,0,0,0) 80vh)`,
            duration: 2,
          },
          "<+=0.5"
        )
        .set(".section-2", { opacity: 0 })
        .add("video-1 -=2")
        .set(".section-3", { visibility: "visible" })

        .to(
          null,
          {
            duration: 3,
            onUpdate: () => {
              const videoStart = tl.labels["video-1"];
              const videoDuration = 3;
              const videoEnd = videoStart + videoDuration;

              const currentTime = tl.time();

              if (currentTime >= videoStart && currentTime <= videoEnd) {
                const segmentProgress =
                  (currentTime - videoStart) / videoDuration;

                const calculatedFrame = segmentProgress * (totalFrames - 1) + 1;

                const frameToShow = Math.max(
                  1,
                  Math.min(totalFrames, Math.round(calculatedFrame))
                );

                if (imagesRef.current.length > 0 && frameImageRef.current) {
                  frameImageRef.current.src =
                    imagesRef.current[frameToShow - 1].src;
                }
              }
            },
          },
          "video-1"
        )
        .to(".section-3", { opacity: 1, duration: 3 }, "video-1")
        .add("profileStart", "video-1+=1")

        .fromTo(
          ".jason-profile-1",
          { y: "100%" },
          { y: "0%", duration: 2 },
          "profileStart"
        )

        .to(".video-1-container", { opacity: 0, duration: 2 }, "video-1+=2")
        .add("profileHold", "profileStart+=2")
        .to("video-1-container", { visibility: "hidden" }, "profileHold")

        .fromTo(
          ".jason-profile-1",
          { y: "0%" },
          { y: "-100%", duration: 2, ease: "power3.in" },
          "profileHold"
        );
    },
    { dependencies: [tl] }
  );

  return (
    <div className="container">
      <div className="overlay"></div>
      <Section1 />
      <Section2 />
      <Section3 ref={section3Ref} frameImageRef={frameImageRef} />
      <ScrollIndicator />
      <div className="loader" ref={loaderRef}>
        Loading...
      </div>
    </div>
  );
}

import React, { forwardRef } from "react";

const Section3 = forwardRef(({ frameImageRef }, ref) => {
  return (
    <div className="section-3" ref={ref}>
      {/* video 1 */}
      <div className="video-1-container">
        <img
          src="./frames/video-1/frame_0001.jpg"
          className="frame-image-1"
          ref={frameImageRef}
        />
      </div>
      {/* profile 1 */}
      <div className="jason-profile-1">
        <div className="jason-section-1">
          <h1>JASON Duval</h1>
          <div className="jason-text-1-container">
            <h3>
              Jason wants an easy life, but things just keep getting harder.
            </h3>
            <p>
              Jason grew up around grifters and crooks. After a stint in the
              Army trying to shake off his troubled teens, he found himself in
              the Keys doing what he knows best, working for local drug runners.
              It might be time to try something new.
            </p>
          </div>

          <div className="jason-pic-1"></div>
        </div>
        <div className="jason-section-2">
          <div className="jason-pic-2"></div>
          <div className="jason-pic-3"></div>

        </div>
      </div>
    </div>
  );
});

export default Section3;

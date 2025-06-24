import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="section-1">
      <div className="hero-main-container">
        <img
          className="hero-main-logo"
          draggable="false"
          src="/gta_logo_cut.webp"
          alt="gta logo"
        />
        <img
          className="hero-main-image"
          draggable="false"
          src="/gta_hero.webp"
          alt="gta logo"
        />
      </div>
      <div className="hero-text-logo-container">
        <div className="hero-text-logo"></div>
        <div>
          <h3 className="hero-text">
            Coming
            <br />
            May 26
            <br />
            2025
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Section1;

import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">
          {/* Left side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <h1>
                Discover <br /> Most Suitable
                <br /> Property
              </h1>
            </div>
            <div className="flexColStart hero-des">
              <span>
                Find a variety of Properties that suit you very easilty
              </span>
              <span>
                Forget all difficulties in finding a residence for you
              </span>
            </div>
            <div className="search-bar">
              <HiLocationMarker color="var(--blue)" size={23} />
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

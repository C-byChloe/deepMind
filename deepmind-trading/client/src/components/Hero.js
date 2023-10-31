import React from "react";
import mainBg from "../images/mainBg.mp4";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <video src={mainBg} loop autoPlay muted></video>
      <div className="hero-banner">
        <h1>deepMIND Trading</h1>
        <p>
          extract signals from financial and alternative data to design and
          backtest systematic strategies.
        </p>
        <a href="#tours" className="btn hero-btn ">
          explore algorithmic Trading
        </a>
      </div>
    </section>
  );
};
export default Hero;

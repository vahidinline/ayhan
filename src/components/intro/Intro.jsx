import React from "react";
import "./intro.css";
import { Helmet } from "react-helmet";

const Intro = () => {
  const TITLE =
    "Ayhan Design - Interior Design for residental and commercial places";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h1 className="i-intro">Ayhan Design</h1>
            <h2 className="i-slug">Level up your place Decoration</h2>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Business Decorations</div>
                <div className="i-title-item">Residental Decorations</div>
                <div className="i-title-item">E-Design service</div>
              </div>
            </div>
            <p className="i-desc">Some Description about business</p>
            <nav></nav>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          {/* <img src={office} alt="office-decoration" className="i-image" /> */}
        </div>
      </div>
    </>
  );
};

export default Intro;

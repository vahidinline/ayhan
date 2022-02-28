import React from "react";
import "./intro.css";
import { Helmet } from "react-helmet";
import { Carousel } from "react-bootstrap";
import { products } from "../../data";

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
              <p className="i-desc">Interior design Group in Estonia</p>
            </div>

            <nav></nav>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg">
            {" "}
            <Carousel>
              {products.map((item) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.thumb}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;

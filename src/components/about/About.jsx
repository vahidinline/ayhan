import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Ayhan Group</h1>
        <p className="a-sub">Where does it come from?</p>
        <p className="a-desc">
          Ayhan OÜ is an interior design firm in Estonia, Tallinn that will
          handles residential and commercial spaces within the city, but also
          works on projects nationwide. It specializes in modern and
          contemporary styles, but also provides customized design services for
          any type of project. The company aims for beauty, functionality and
          excellence in every project. Thus, its team of designers are the best
          in their field, experienced and equipped with a high quality
          educational background in Interior Design and related fields. Most of
          all, client satisfaction is Ayhan OÜ’s priority. It prides itself in
          achieving clients’ goals for their space without compromising design,
          quality and comfort.
        </p>
      </div>
    </div>
  );
};

export default About;

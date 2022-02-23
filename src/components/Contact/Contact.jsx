import React, { useRef, useState } from "react";
import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3j7szx8",
        "template_i6ew65i",
        formRef.current,
        "user_AojyLlBXqPeM6pti4WsCU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c p5">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +1 1234 556 75
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={email} alt="" />
              info@ayhandesign.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={address} alt="" />
              Juhkentali tn 8 Tallinn Harjumaa 10132
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" name="client_name" />
            <input type="text" placeholder="Subject" name="subject" />
            <input type="text" placeholder="Your Email" name="client_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "  Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

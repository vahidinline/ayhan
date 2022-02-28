import React, { useState, useRef } from "react";
import { Form, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const FormP1 = ({ title }) => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3j7szx8",
        "template_mb4jfyn",
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
    <div className="container">
      <div class="row">
        <div class="col">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              class="form-control"
              placeholder="FullName"
              name="Name"
            />
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              name="Email"
            />
            <input
              type="text"
              class="form-control"
              placeholder={title}
              name="service"
              value={title}
              disabled
            />
            {/* <select class="form-control form-select-lg mb-3" name="TypeOfPlace">
              <option selected>Open this select menu</option>
              <option value={title}> {title}</option>
              <option value="Commercial">Commercial Place</option>
              <option value="Others">Others</option>
            </select> */}
            <input
              type="text"
              class="form-control"
              placeholder="City"
              name="City"
            />
            <input
              type="text"
              class="form-control"
              placeholder="country"
              name="Country"
            />
            {title == "Minimal Commercial Decoration" && (
              <input
                type="text"
                class="form-control"
                placeholder="Field of activity  "
                name="SizeOfPlace"
              />
            )}
            {title != "E-design Service" && (
              <input
                type="text"
                class="form-control"
                placeholder="number of Rooms"
                name="Rooms"
              />
            )}
            {title == "Minimal home Decoration" && (
              <>
                <input
                  type="text"
                  class="form-control"
                  placeholder="number of restroom"
                  name="WC"
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Kitchen Area"
                  name="kitchen"
                />
              </>
            )}

            <input
              type="text"
              class="form-control"
              placeholder="Phone"
              name="Phone"
            />
            <textarea class="form-control" placeholder="More info"></textarea>
            {/* <ReCAPTCHA /> */}
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <br />
            {done && "  Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormP1;

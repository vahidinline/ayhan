import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

ReactDOM.render(
  <ReCAPTCHA
    sitekey="6Le2-ckSAAAAAAEehEPmurIl7LzLUgEmudFrajR3
    "
    onChange={onChange}
  />,
  document.body
);

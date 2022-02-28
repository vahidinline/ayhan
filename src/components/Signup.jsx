import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase.jsx";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Signup = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(currentUser);
  });

  const SignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/payment");
    } catch (error) {
      alert("error :", error);
    }
  };
  const TITLE = "e-Design";

  return (
    <div className="container p-5">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Container>
        <div class="col-sm p-5">
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />

          <button onClick={SignUp} class="btn btn-primary" type="button">
            Create New Account{" "}
          </button>

          <br />
        </div>
      </Container>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase.jsx";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Design = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const signInWithgGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/payment");
    });
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(currentUser);
  });

  const SignIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/payment");
    } catch (error) {
      console.log("error :", error);
    }
  };
  const TITLE = "e-Design";

  return (
    <div>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div class="container p-5">
        <div class="row">
          <div class="col-sm">
            <Container className="container-fluid p-5">
              <Row>
                <Container>
                  <div class="col-sm">
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

                    <button
                      onClick={SignIn}
                      class="btn btn-primary"
                      type="button"
                    >
                      LogIn to your account
                    </button>

                    <br />
                    <p>
                      Don't have an account here?{" "}
                      <Link to="/signup">Create an account</Link> or
                      <button
                        onClick={signInWithgGoogle}
                        class="btn btn-success bi bi-google"
                        type="button"
                      >
                        Sign in with Google
                      </button>
                    </p>
                  </div>
                </Container>
              </Row>
            </Container>
          </div>
          <div class="col-sm p-5">
            <div>
              e-Design: Online interior design consultation that includes space
              design/plan, coordinating with client’s local suppliers for
              furniture and raw materials, and access to Ayhan OÜ’s online space
              designing platform. Ayhan OÜ designs projects for residential and
              commercial properties, as well hospitality clients.
              <br />
              Ayhan OÜ is an interior design firm in Estonia, Tallinn that will
              handles residential and commercial spaces within the city, but
              also works on projects nationwide. It specializes in modern and
              contemporary styles, but also provides customized design services
              for any type of project. The company aims for beauty,
              functionality and excellence in every project. Thus, its team of
              designers are the best in their field, experienced and equipped
              with a high quality educational background in Interior Design and
              related fields. Most of all, client satisfaction is Ayhan OÜ’s
              priority. It prides itself in achieving clients’ goals for their
              space without compromising design, quality and comfort.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;

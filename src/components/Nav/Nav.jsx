import React from "react";
import "./Nav.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import {
  Button,
  Container,
  Toast,
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
  Navbar,
} from "react-bootstrap";
const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg  bg-primary" role="navigation">
        <div class="navbar-header"></div>
        <Link class="navbar-brand text-light" to="/">
          Ayhan Design
        </Link>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-left">
            <li>
              {" "}
              <Link class="nav-item nav-link text-light" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link class="nav-item nav-link text-light" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <Link class="nav-item nav-link text-light" to="/productList">
                Services
              </Link>
            </li>
          </ul>
        </div>

        <button class="btn btn-light my-2 my-sm-0" type="submit">
          <Link to="/edesign">e-Design</Link>
        </button>
      </nav>
    </>
  );
};

export default Nav;

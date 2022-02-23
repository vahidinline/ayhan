import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
const Footer = () => {
  return (
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <Link to="/" class="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/productList" class="nav-link px-2 text-muted">
              Features
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/privacy" class="nav-link px-2 text-muted">
              Privacy Policy
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/terms" class="nav-link px-2 text-muted">
              Terms and Conditions
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link px-2 text-muted">
              About
            </Link>
          </li>
        </ul>
        <p class="text-center text-muted">&copy; 2022 Ayhan OÜ</p>
      </footer>
    </div>
  );
};

export default Footer;

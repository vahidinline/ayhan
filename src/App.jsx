import React, { useState } from "react";
import { auth } from "./firebase.jsx";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import Nav from "./components/Nav/Nav";
import Product from "./components/Product/Product";
import Design from "./components/Design";
import { signOut } from "firebase/auth";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Payment from "./components/Payment.jsx";
import { products } from "./data.js";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const logOut = async () => {
    await signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  };
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="about" element={<About />} />
          <Route path="/product/:id" element={<Product props={true} />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edesign" element={<Design setIsAuth={setIsAuth} />} />
          <Route path="/payment" element={<Payment setIsAuth={setIsAuth} />} />
          <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
          <Route path="/profile" element={<Profile setIsAuth={setIsAuth} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

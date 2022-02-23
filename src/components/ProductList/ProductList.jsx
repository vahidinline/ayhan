import React from "react";
import "./productlist.css";
import { products } from "../../data";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Product from "../Product/Product";
function ProductList() {
  const TITLE = "Ayhan Services";
  return (
    <div className="pl">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="pl-texts">
        <h1 className="pl-title">The services we offer</h1>
        <p className="pl-desc">
          Ayhan OÜ will be able to provide the following services to its
          clients:
          <ul>
            <li>Interior design: Planning and designing of indoor spaces</li>
            <li>
              e-Design: Online interior design consultation that includes space
              design/plan, coordinating with client’s local suppliers for
              furniture and raw materials, and access to Ayhan OÜ’s online space
              designing platform.
            </li>
          </ul>
          Ayhan OÜ designs projects for residential and commercial properties,
          as well hospitality clients.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <div className="p">
            <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
            </div>
            <Routes>
              <Route path="/product/:id" element={<Product props={true} />} />
            </Routes>
            <Link to={"/product/" + item.id}>
              <img src={item.img} alt={item.desc} className="pl-img" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

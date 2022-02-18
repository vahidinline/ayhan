import React from "react";
import "./product.css";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Product(props) {
  let navigate = useNavigate();
  let { id } = useParams();
  const TITLE = id;
  return (
    <div className="p">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <h1>Product id: {id}</h1>
    </div>
  );
}

export default Product;

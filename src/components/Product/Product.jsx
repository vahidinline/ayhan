import React from "react";
import "./product.css";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { products } from "../../data";
import { NavItem } from "react-bootstrap";
function Product({ props }) {
  let navigate = useNavigate();
  let { id } = useParams();

  const pageId = id;
  const content = products.find((e) => e.id == pageId);
  return (
    <div className="container-md">
      <div class="row align-items-start">
        <div class="col">{content.desc}</div>
      </div>
    </div>
  );
}

export default Product;

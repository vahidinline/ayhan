import React from "react";
import "./product.css";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { products } from "../../data";
import { NavItem } from "react-bootstrap";
import FormP1 from "../Form/FormP1";
function Product({ props }) {
  let navigate = useNavigate();
  let { id } = useParams();

  const pageId = id;
  const content = products.find((e) => e.id == pageId);
  return (
    <div className="container-md p-3">
      <Helmet>
        <title>{content.title}</title>
      </Helmet>
      <div class="row align-items-start">
        <div>
          <img
            src={content.img}
            className="img-fluid img-thumbnail mx-auto d-block p-img"
          />
        </div>
        <div class="col">
          <h1 class="text-muted text-center">{content.title}</h1>
          <div class="text-muted text-center">
            {content.desc} for {content.title}
          </div>
          <div className="text-center">
            <FormP1 title={content.title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

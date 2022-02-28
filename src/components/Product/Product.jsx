import React from "react";
import "./product.css";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { products } from "../../data";
import FormP1 from "../Form/FormP1";
import { Carousel, Container, Col, Row } from "react-bootstrap";

function Product({ props }) {
  let navigate = useNavigate();
  let { id } = useParams();

  const pageId = id;
  const content = products.find((e) => e.id == pageId);
  const images = content.img;
  console.log(images);

  return (
    <Container>
      <Helmet>
        <title>{content.title}</title>
      </Helmet>
      <Row>
        <Col>
          <h1 class="text-muted text-center">{content.title}</h1>
          <div class="text-muted text-center">
            {content.desc} for {content.title}
          </div>
          <Carousel>
            {images.map((img) => (
              <Carousel.Item>
                <img className="d-block w-100" src={img.src} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col>
          <div className="text-center">
            <FormP1 title={content.title} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;

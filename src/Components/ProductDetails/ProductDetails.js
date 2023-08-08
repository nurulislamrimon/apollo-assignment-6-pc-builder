import { Col, Image, Rate, Row } from "antd";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <Row
        justify="space-between"
        style={{ gap: "30px", justifyContent: "center", alignItems: "center" }}
      >
        <Col>
          <h1>Name: {product?.productName}</h1>
          <h3>Category: {product?.category}</h3>
          <h3>Price: {product?.price}</h3>
          <h3>Status: {product?.status}</h3>
          <h3>
            Rating:{" "}
            <span>
              <Rate defaultValue={product?.rating} />
            </span>
          </h3>
        </Col>
        <Col>
          <Image
            src={product?.image}
            height="30vh"
            width="30vw"
            alt={product?.productName}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;

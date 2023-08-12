import { Button, Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import React from "react";
import style from "./SelectProductCard.module.css";

const SelectProductCard = ({ product }) => {
  return (
    <Row style={{ alignItems: "center", borderBottom: "1px solid gainsboro" }}>
      <Col span={6} offset={2}>
        <Image
          src={product?.image}
          height={200}
          width={250}
          alt={product.image}
          style={{
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
          }}
        />
      </Col>
      <Col span={10} offset={2}>
        <h3>{product?.productName}</h3>
        {product?.keyFeatures
          ?.map((eachFeature) => Object.entries(eachFeature))
          ?.map((k) => (
            <p className={style.keyFeaturesElement} key={k[0][0]}>
              <span>{k[0][0]?.toUpperCase()}</span> : <span> {k[0][1]}</span>
            </p>
          ))}
      </Col>
      <Col span={2} offset={2}>
        <h3>{product.price}</h3>
        <Button
          size="large"
          style={{ color: "white", backgroundColor: "blue" }}
        >
          Add
        </Button>
      </Col>
    </Row>
  );
};

export default SelectProductCard;

import { Col, Rate, Row } from "antd";
import React from "react";
import style from "./ProductDetails.module.css";
import NextImage from "next/image";
import AntImage from "antd/lib/image";

const ProductDetails = ({ product }) => {
  return (
    <div className={style.mainContainer}>
      <Row
        justify="space-between"
        style={{
          gap: "30px",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Col span={12}>
          <h2 className={style.productTitle}>{product?.productName}</h2>
          <div className={style.productInfoContainer}>
            {product.keyFeatures.length && (
              <div>
                <p className={style.keyFeaturesTitle}>Key Features</p>
                {product.keyFeatures
                  .map((eachFeature) => Object.entries(eachFeature))
                  .map((k) => (
                    <p className={style.keyFeaturesElement} key={k[0][0]}>
                      <span>{k[0][0].toUpperCase()}</span> :{" "}
                      <span> {k[0][1]}</span>
                    </p>
                  ))}
              </div>
            )}
            <h3>Category: {product?.category}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Status: {product?.status}</h3>
            <h3>
              Item Rating:{" "}
              <span>
                <Rate
                  style={{ fontSize: "30px" }}
                  allowHalf
                  disabled
                  defaultValue={product?.individualRating}
                />
              </span>
            </h3>
            <h3>
              Avarage Rating:{" "}
              <span>
                <Rate
                  allowHalf
                  disabled
                  defaultValue={product?.avarageRating}
                />
              </span>
            </h3>
          </div>
        </Col>
        <Col span={11} style={{ height: "70vh" }}>
          <AntImage
            src={product?.image}
            height="100%"
            width="100%"
            alt={product?.productName}
            style={{ objectFit: "contain" }}
          />
        </Col>
      </Row>
      <div className={style.descriptionContainer}>
        <h1>Description</h1>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
      <div className={style.commentContainer}>
        <h1>Comments</h1>
        {product.reviews.map((review, i) => (
          <div key={i}>
            <div>
              <NextImage
                src="/images/user.jpg"
                height={30}
                width={30}
                alt="user"
              />
              {review.user}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

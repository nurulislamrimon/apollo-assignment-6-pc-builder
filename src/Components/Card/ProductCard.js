import { Card, Rate } from "antd";
import Image from "next/image";
import React from "react";
import style from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card>
        <Image
          src={product?.image}
          height={200}
          width={250}
          alt={product.image}
        />
        <h3 className={style.title}>{product.productName} </h3>
        <h3>Category: {product.category}</h3>
        <h3>Price: {product.productName}</h3>
        <h3>Status: {product.status}</h3>
        <h3>
          Rating: &nbsp;
          {<Rate allowHalf disabled value={product.rating} />}
        </h3>
      </Card>
    </div>
  );
};

export default ProductCard;

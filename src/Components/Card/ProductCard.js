import { Card, Rate } from "antd";
import Image from "next/image";
import React from "react";
import style from "./ProductCard.module.css";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/product/${product.id}`)}>
      <Card style={{ cursor: "pointer" }}>
        <Image
          src={product?.image}
          height={200}
          width={250}
          alt={product.image}
        />
        <h3>{product.productName} </h3>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Status: {product.status}</p>
        <span>
          Rating: &nbsp;
          {<Rate allowHalf disabled value={product.rating} />}
        </span>
      </Card>
    </div>
  );
};

export default ProductCard;

import { Card, Rate } from "antd";
import Image from "next/image";
import React from "react";
import style from "./ProductCard.module.css";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/product/${product.id}`)}>
      <Card style={{ cursor: "pointer", width: "24vw" }}>
        <Image
          src={product?.image}
          height={200}
          width={250}
          alt={product.image}
        />
        <h1>
          {product?.productName?.length > 20
            ? product?.productName?.slice(0, 20).concat("...")
            : product.productName}{" "}
        </h1>
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

import { Row } from "antd";
import React from "react";
import ProductCard from "./Card/ProductCard";

const RelatedProducts = ({ category, data }) => {
  console.log(data);

  return (
    <div>
      {/* <Row justify="start" style={{ gap: "30px", justifyContent: "center" }}>
        {relatedProduct?.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </Row> */}
    </div>
  );
};

export default RelatedProducts;

// data fetching
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/api");
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: { category: product?.category },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);

  const res = await fetch(`http://localhost:3000/api/api?category=${params}`);

  const data = await res.json();

  return {
    props: { data: data.data },
  };
};

import ProductCard from "@/Components/Card/ProductCard";
import ProductDetails from "@/Components/ProductDetails/ProductDetails";
import MainLayout from "@/Layout/MainLayout";
import { Row } from "antd";
import React from "react";

const ProductDetailsPage = ({ data: product, relatedProducts }) => {
  return (
    <section>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          textDecoration: "underline",
        }}
      >
        Product Details
      </h1>
      <ProductDetails product={product} />
      <h1
        style={{
          fontSize: "20px",
        }}
      >
        Related Products
      </h1>
      <Row justify="start" style={{ gap: "30px", justifyContent: "center" }}>
        {relatedProducts?.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </Row>
    </section>
  );
};

export default ProductDetailsPage;
// ========Layout adding
ProductDetailsPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

// ===============data fetching
//generate paths
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/api");
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: { id: product?.id?.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
//get data
export const getStaticProps = async ({ params }) => {
  let relatedProducts = [];
  const res = await fetch(`http://localhost:3000/api/api/${params.id}`);

  const data = await res.json();

  if (data?.success) {
    const category = data?.data?.category;
    const res = await fetch(
      `http://localhost:3000/api/api/category/${category}`
    );
    const categoryData = await res.json();
    relatedProducts = categoryData?.data;
  }

  return {
    props: { data: data?.data, relatedProducts },
  };
};

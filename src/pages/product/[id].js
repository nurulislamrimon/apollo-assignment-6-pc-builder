import ProductCard from "@/Components/Card/ProductCard";
import ProductDetails from "@/Components/ProductDetails/ProductDetails";
import RelatedProducts from "@/Components/RelatedProducts";
import MainLayout from "@/Layout/MainLayout";
import { Row } from "antd";
import React from "react";

const ProductDetailsPage = ({ data: product }) => {
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
      <RelatedProducts category={product?.category} />
    </section>
  );
};

export default ProductDetailsPage;
// Layout adding
ProductDetailsPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

// data fetching
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

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/api/${params.id}`);

  const data = await res.json();

  return {
    props: { data: data.data },
  };
};

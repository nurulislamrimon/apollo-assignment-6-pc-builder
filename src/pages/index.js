import ProductCard from "@/Components/Card/ProductCard";
import MainLayout from "@/Layout/MainLayout";
import { Row } from "antd";
import React from "react";

const HomePage = ({ data }) => {
  return (
    <section>
      <h1>Featured Products</h1>
      <Row justify="start" style={{ gap: "30px" }}>
        {data?.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </Row>
    </section>
  );
};

export default HomePage;

// data fetching
HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  return { props: { data } };
};

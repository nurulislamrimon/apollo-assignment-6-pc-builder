import ProductCard from "@/Components/Card/ProductCard";
import CarouselComponent from "@/Components/Carousel/Carousel";
import MainLayout from "@/Layout/MainLayout";
import { apiUrl } from "@/Utils/apiUrl";
import { Row } from "antd";
import React from "react";

const HomePage = ({ data: products }) => {
  return (
    <section>
      <CarouselComponent />
      <h1>Featured Products</h1>
      <Row justify="start" style={{ gap: "30px", justifyContent: "center" }}>
        {products?.map((product) => (
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
  const res = await fetch(`${apiUrl}/products`);
  const data = await res.json();

  return { props: { data: data?.data } };
};

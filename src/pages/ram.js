import ProductCard from "@/Components/Card/ProductCard";
import MainLayout from "@/Layout/MainLayout";
import { apiUrl } from "@/Utils/apiUrl";
import { Row } from "antd";
import React from "react";

const RAMPage = ({ data: products }) => {
  return (
    <section>
      <h1>RAM</h1>
      <Row justify="start" style={{ gap: "30px", justifyContent: "center" }}>
        {products?.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </Row>
    </section>
  );
};

export default RAMPage;

RAMPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${apiUrl}/products/category/RAM`);
  const data = await res.json();

  return { props: { data: data?.data } };
};

import SelectProductCard from "@/Components/SelectProductCard/SelectProductCard";
import MainLayout from "@/Layout/MainLayout";
import { apiUrl } from "@/Utils/apiUrl";
import React from "react";

const SelectComponentBuildPcPage = ({ data }) => {
  return (
    <div>
      {data?.map((product) => (
        <SelectProductCard product={product} key={product?._id} />
      ))}
    </div>
  );
};

export default SelectComponentBuildPcPage;

// ========Layout adding
SelectComponentBuildPcPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
//get data
export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`${apiUrl}/products/category/${params.category}`);
  const data = await res.json();

  return {
    props: { data: data?.data },
  };
};

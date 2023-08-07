import MainLayout from "@/Layout/MainLayout";
import React from "react";

const Home = () => {
  return <div>This is home</div>;
};

export default Home;

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

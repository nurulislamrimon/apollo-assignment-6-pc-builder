import MainLayout from "@/Layout/MainLayout";
import React from "react";

const HomePage = () => {
  return <div>This is home</div>;
};

export default HomePage;

HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

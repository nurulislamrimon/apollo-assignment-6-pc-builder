import MainLayout from "@/Layout/MainLayout";
import React from "react";

const BuildPcPage = () => {
  return <div>buildpc</div>;
};

export default BuildPcPage;

BuildPcPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

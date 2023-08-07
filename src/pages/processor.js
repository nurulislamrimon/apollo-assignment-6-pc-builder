import MainLayout from "@/Layout/MainLayout";
import React from "react";

const ProcessorPage = () => {
  return <div>processor</div>;
};

export default ProcessorPage;

ProcessorPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

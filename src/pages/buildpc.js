import BuildPCForm from "@/Components/BuildPCForm/BuildPCForm";
import MainLayout from "@/Layout/MainLayout";
import React from "react";

const BuildPcPage = () => {
  return (
    <div>
      <BuildPCForm />
    </div>
  );
};

export default BuildPcPage;

BuildPcPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

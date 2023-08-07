import MainLayout from "@/Layout/MainLayout";
import React from "react";

const MotherBoardPage = () => {
  return <div>motherboard</div>;
};

export default MotherBoardPage;

MotherBoardPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

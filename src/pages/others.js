import MainLayout from "@/Layout/MainLayout";
import React from "react";

const OthersPage = () => {
  return <div>others</div>;
};

export default OthersPage;

OthersPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

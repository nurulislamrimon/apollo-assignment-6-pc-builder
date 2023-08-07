import MainLayout from "@/Layout/MainLayout";
import React from "react";

const RamPage = () => {
  return <div>ram</div>;
};

export default RamPage;
RamPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

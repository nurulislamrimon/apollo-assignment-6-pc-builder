import MainLayout from "@/Layout/MainLayout";
import React from "react";

const MonitorPage = () => {
  return <div>monitor</div>;
};

export default MonitorPage;

MonitorPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

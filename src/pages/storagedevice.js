import MainLayout from "@/Layout/MainLayout";
import React from "react";

const StorageDevicePage = () => {
  return <div>storagedevice</div>;
};

export default StorageDevicePage;

StorageDevicePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

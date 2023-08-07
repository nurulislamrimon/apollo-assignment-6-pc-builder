import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

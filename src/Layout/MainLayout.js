import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
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

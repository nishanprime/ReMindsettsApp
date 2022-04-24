import React from "react";
import { Header, Footer } from "../component";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;

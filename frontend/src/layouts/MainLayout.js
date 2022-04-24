import React from "react";
import { Header, Footer } from "../component";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;

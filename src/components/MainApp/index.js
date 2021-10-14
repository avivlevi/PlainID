import React from "react";

// components
import Header from "../Header";
import SideBar from "../SideBar";
import ItemContent from "../ItemContent";

// styles
import * as Layout from "../styles/Layout";


export const MainApp = () => {

  return (
      <Layout.MainGrid>
        <Header />
        <SideBar />
        <ItemContent />
      </Layout.MainGrid>
  );
};

export default MainApp;

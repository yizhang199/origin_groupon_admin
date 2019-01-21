import React from "react";

import LeftSideMenu from "./LeftSideMenu";
import ProductManageMainWindow from "./ProductManageMainWindow";
const App = () => {
  return (
    <div className="app">
      <LeftSideMenu />
      <ProductManageMainWindow />
    </div>
  );
};

export default App;

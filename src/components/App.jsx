import React from "react";
import ProductList from "./ProductsList";
import ControlPanel from "./ControlPanel";
const App = () => {
  return (
    <div className="ui container">
      <ProductList data-test="product-list" />
      <ControlPanel data-test="control-panel" />
    </div>
  );
};

export default App;

import React from "react";

import CatalogTopNav from "./TopNav";
import Routes from "./Routes";

const CatalogManageMainWindow = () => {
  return (
    <div className="component-catalog-manage-main-window">
      <CatalogTopNav />
      <Routes />
    </div>
  );
};

export default CatalogManageMainWindow;

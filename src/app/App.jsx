import React, { useEffect } from "react";
import { checkLogin } from "./auth/hooks";
import Routes from "./Routes";

import "./App.css";

const App = () => {
  useEffect(checkLogin, []);

  return (
    <div className="app">
      <Routes />
    </div>
  );
};

export default App;

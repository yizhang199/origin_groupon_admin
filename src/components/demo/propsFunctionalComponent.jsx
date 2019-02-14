import React from "react";

const propsFunctionalComponent = props => {
  return <div>hello word</div>;
};

const name = props => {
  return <span onClick={alert}>{propsFunctionalComponent()}</span>;
};
const alert = props => {
  window.alert("ok");
};
export default name;

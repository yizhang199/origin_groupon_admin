import React from "react";

const propsFunctionalComponent = props => {
  console.log("main: ", props);

  return <div>hello word</div>;
};

const name = props => {
  console.log("name function: ", props);
  return <span onClick={alert}>{propsFunctionalComponent()}</span>;
};
const alert = props => {
  console.log(props);
  window.alert("ok");
};
export default name;

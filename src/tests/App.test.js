import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttribute } from "./helpers/testUtil";
import App from "../components/App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test("render without errors", () => {
  const wrapper = setup();

  expect(wrapper).toBeTruthy();
});

test("render product list without errors", () => {
  const wrapper = setup();
  const productList = findByTestAttribute(wrapper, "product-list");

  expect(productList.length).toBe(1);
});

test("render control panel without errors", () => {
  const wrapper = setup();
  const controlPanel = findByTestAttribute(wrapper, "control-panel");

  expect(controlPanel.length).toBe(1);
});

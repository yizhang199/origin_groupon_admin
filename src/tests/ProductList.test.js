import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttribute, checkProps } from "./helpers/testUtil";

import ProductList from "../components/ProductsList";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<ProductList {...props} />);
};

test("render category list without errors", () => {
  const wrapper = setup();
  const categoryList = findByTestAttribute(wrapper, "category-list");

  expect(categoryList.length).toBe(1);
});

test("render without errors with valid prop types", () => {
  const expectedProps = { products: {} };
  const wrapper = setup(expectedProps);
  checkProps(wrapper, expectedProps);
});

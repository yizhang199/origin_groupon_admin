import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "../../reducers";

/**
 * @function findByTestAttribute - find an html dom element by data-test attribute
 * @param {ShallowWrapper} wrapper
 * @param {String} value
 * @returns {ShallowWrapper}
 */
export const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

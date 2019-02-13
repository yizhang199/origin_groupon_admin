import React from "react";
import { connect } from "react-redux";

import { selectOption } from "../actions";
import OptionValue from "./OptionValue";
import { makeType } from "../helpers";

import "../css/OptionListItem.css";

const OptionListItem = ({ option, selectOption }) => {
  const { name, type, values } = option;

  const select = () => {
    selectOption(option);
  };

  const renderValues = () => {
    if (!values) {
      return null;
    }
    return values.map(value => {
      return (
        <OptionValue
          value={value}
          key={`optionValue${value.option_value_id}`}
        />
      );
    });
  };

  return (
    <div onClick={select} className="component-option-list-item">
      <div className="component-option-list-item__info">
        <span className="component-option-list-item__info__name">{name}</span>{" "}
        <span className="component-option-list-item__info__type">
          {makeType(type)}
        </span>
      </div>
      <div className="component-option-list-item__values">{renderValues()}</div>
    </div>
  );
};

export default connect(
  null,
  { selectOption }
)(OptionListItem);

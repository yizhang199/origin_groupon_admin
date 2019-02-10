import React from "react";
import { connect } from "react-redux";

import { setNewProductCategory } from "../actions";

import "../css/CategoryCard.css";

const CategoryCard = props => {
  const setCategory = () => {
    props.setNewProductCategory(props.category);
    props.toggleBody();
  };
  return (
    <div className="component-category-card" onClick={setCategory}>
      {props.category.name}
    </div>
  );
};

export default connect(
  null,
  { setNewProductCategory }
)(CategoryCard);

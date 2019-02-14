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
      <span className="component-category-card__name">
        {props.category.name}
      </span>
      <span className="component-category-card__number">
        {props.category.number_of_products} products
      </span>
    </div>
  );
};

export default connect(
  null,
  { setNewProductCategory }
)(CategoryCard);

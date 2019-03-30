import React from "react";
import { connect } from "react-redux";

import { setNewProductCategory } from "../../../../../_actions";

const CategoryCard = props => {
  const setCategory = () => {
    props.setNewProductCategory(props.category);
    props.toggleBody();
  };
  if (!props.category) {
    return <div className="component-category-card">loading...</div>;
  }
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

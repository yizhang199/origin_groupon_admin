import React from "react";
import { connect } from "react-redux";

import { setSelectedCategory } from "../actions";
import "../css/CategoryGridItem.css";
import { history } from "../history";

const CategoryGridItem = ({ category, setSelectedCategory }) => {
  const selectCategory = () => {
    setSelectedCategory(category);
    history.push("/categories/update");
  };
  return (
    <div onClick={selectCategory} className="component-category-grid-item">
      <span
        className="component-category-grid-item__name"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        {category ? category.name : null}
      </span>
      <span className="component-category-grid-item__number-of-products">
        {category ? `已有${category.number_of_products}产品` : null}
      </span>
    </div>
  );
};

export default connect(
  null,
  { setSelectedCategory }
)(CategoryGridItem);

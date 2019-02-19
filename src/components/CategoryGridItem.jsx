import React from "react";
import { connect } from "react-redux";

import { setSelectedCategory, deleteCategory } from "../actions";
import "../css/CategoryGridItem.css";
import { history } from "../history";

const CategoryGridItem = ({
  category,
  setSelectedCategory,
  deleteCategory
}) => {
  const selectCategory = () => {
    setSelectedCategory(category);
    history.push("/categories/update");
  };
  const remove = () => {
    deleteCategory(category.category_id);
  };
  const baseUrl = "http://kidsnparty.com.au/redpay/public/";
  return (
    <div className="component-category-grid-item">
      <div className="component-category-grid-item__close" onClick={remove}>
        <i className="material-icons">clear</i>
      </div>
      <span
        onClick={selectCategory}
        className="component-category-grid-item__name"
        style={{ backgroundImage: `url(${baseUrl}${category.image})` }}
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
  { setSelectedCategory, deleteCategory }
)(CategoryGridItem);

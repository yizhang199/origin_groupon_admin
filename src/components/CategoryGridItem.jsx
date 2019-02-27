import React from "react";
import { connect } from "react-redux";

import { deleteCategory, fetchSingleCategory } from "../actions";
import { baseUrl } from "../apis/kidsnParty";
import "../css/CategoryGridItem.css";

const CategoryGridItem = ({
  category,
  deleteCategory,
  fetchSingleCategory
}) => {
  const selectCategory = () => {
    fetchSingleCategory(category.category_id);
  };
  const remove = () => {
    deleteCategory(category.category_id);
  };

  // const baseUrl = "http://localhost/groupon_api/public";
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
  { deleteCategory, fetchSingleCategory }
)(CategoryGridItem);

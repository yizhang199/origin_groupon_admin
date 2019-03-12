import React from "react";
import { connect } from "react-redux";

import {
  deleteCategory,
  fetchSingleCategory,
  activeCategory
} from "../actions";
import { baseUrl } from "../apis/kidsnParty";
import "../css/CategoryGridItem.css";

const CategoryGridItem = ({
  category,
  deleteCategory,
  fetchSingleCategory,
  activeCategory
}) => {
  const selectCategory = () => {
    fetchSingleCategory(category.category_id);
  };
  const remove = () => {
    deleteCategory(category.category_id);
  };
  const active = () => {
    activeCategory(category.category_id);
  };
  const renderControlButton = () => {
    const { status } = category;

    if (parseInt(status) === 0) {
      return (
        <div className="component-category-grid-item__close" onClick={remove}>
          <i className="material-icons">clear</i>
        </div>
      );
    } else if (parseInt(status) === 1) {
      return (
        <div className="component-category-grid-item__active" onClick={active}>
          <i className="material-icons">done</i>
        </div>
      );
    }
  };

  // const baseUrl = "http://localhost/groupon_api/public";
  return (
    <div className="component-category-grid-item">
      {renderControlButton()}
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
  { deleteCategory, fetchSingleCategory, activeCategory }
)(CategoryGridItem);

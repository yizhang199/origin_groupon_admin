import React from "react";
import { connect } from "react-redux";

import {
  createNewCategory,
  fetchAvaliableCategories
} from "../../../../../_actions";
import CategoryForm from "./CategoryForm";

class AddCategoryForm extends React.Component {
  onSubmit = () => {
    this.props.createNewCategory();
    this.props.toggleForm();
  };
  render() {
    return (
      <div
        className="component-add-category-form"
        onClick={this.props.toggleForm}
      >
        <div
          className="component-add-category-form__main-container"
          onClick={e => e.stopPropagation()}
        >
          <div className="component-add-category-form__title">
            添加新产品分类
          </div>
          <CategoryForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createNewCategory, fetchAvaliableCategories }
)(AddCategoryForm);

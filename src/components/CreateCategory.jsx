import React from "react";
import { connect } from "react-redux";

import { createNewCategory } from "../actions";
import CategoryForm from "./CategoryForm";

import "../css/CreateCategory.css";
class CreateCategory extends React.Component {
  onSubmit = () => {
    this.props.createNewCategory();
  };
  render() {
    return (
      <div className="component-create-category">
        <div className="component-create-category__header">添加新产品分类</div>
        <CategoryForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createNewCategory }
)(CreateCategory);

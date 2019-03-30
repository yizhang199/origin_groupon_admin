import React from "react";
import { connect } from "react-redux";

import {
  createNewCategory,
  setSelectCategoryImage
} from "../../../../_actions";
import CategoryForm from "./CategoryForm";

class CreateCategory extends React.Component {
  onSubmit = file => {
    this.props.createNewCategory(file);
  };

  render() {
    return (
      <div className="component-create-category">
        <div className="component-create-category__header">添加新产品分类</div>
        <CategoryForm
          onSubmit={this.onSubmit}
          setSelectCategoryImage={this.props.setSelectCategoryImage}
          image={this.props.selectedCategory.image}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ selectedCategory }) => {
  return { selectedCategory };
};

export default connect(
  mapStateToProps,
  { createNewCategory, setSelectCategoryImage }
)(CreateCategory);

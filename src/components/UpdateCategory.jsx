import React from "react";
import { connect } from "react-redux";

import {
  updateCategory,
  fetchSingleCategory,
  setSelectCategoryImage
} from "../actions";
import CategoryForm from "./CategoryForm";

import "../css/UpdateCategory.css";
class UpdateCategory extends React.Component {
  componentDidMount() {
    if (this.props.selectedCategory.category_id) {
      const id = parseInt(this.props.match.params.category_id);
      this.props.fetchSingleCategory(id);
    }
  }

  onSubmit = file => {
    this.props.updateCategory(this.props.selectedCategory.category_id, file);
  };
  render() {
    if (!this.props.selectedCategory.image) {
      return <div className="component-update-category">loading...</div>;
    }
    return (
      <div className="component-update-category">
        <div className="component-update-category__header">编辑产品分类</div>
        <CategoryForm
          initialValues={{
            chinese_name: this.props.selectedCategory.name,
            english_name: this.props.selectedCategory.other_name
          }}
          image={this.props.selectedCategory.image}
          setSelectCategoryImage={this.props.setSelectCategoryImage}
          onSubmit={this.onSubmit}
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
  { updateCategory, fetchSingleCategory, setSelectCategoryImage }
)(UpdateCategory);

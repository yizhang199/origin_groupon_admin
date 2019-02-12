import React from "react";
import { connect } from "react-redux";

import { updateCategory } from "../actions";
import CategoryForm from "./CategoryForm";

import "../css/UpdateCategory.css";
class UpdateCategory extends React.Component {
  componentDidMount() {
    console.log(this.props.selectedCategory);
  }

  onSubmit = () => {
    this.props.updateCategory(this.props.selectedCategory.category_id);
  };
  render() {
    return (
      <div className="component-update-category">
        <div className="component-update-category__header">编辑产品分类</div>
        <CategoryForm
          initialValues={{
            chinese_name: this.props.selectedCategory.name,
            english_name: this.props.selectedCategory.other_name
          }}
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
  { updateCategory }
)(UpdateCategory);

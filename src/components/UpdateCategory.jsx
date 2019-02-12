import React from "react";

import CategoryForm from "./CategoryForm";
class UpdateCategory extends React.Component {
  render() {
    return (
      <div className="component-update-category">
        <div className="component-update-category__header">编辑产品分类</div>
        <CategoryForm />
      </div>
    );
  }
}

export default UpdateCategory;

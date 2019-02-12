import React from "react";

import CategoryForm from "./CategoryForm";
class CreateCategory extends React.Component {
  render() {
    return (
      <div className="component-create-category">
        <div className="component-create-category__header">添加新产品分类</div>
        <CategoryForm />
      </div>
    );
  }
}

export default CreateCategory;

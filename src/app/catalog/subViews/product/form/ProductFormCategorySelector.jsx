import React from "react";
import { connect } from "react-redux";
import { fetchAvaliableCategories } from "../../../../../_actions";
import CategoryCard from "./CategoryCard";
import AddCategoryForm from "./AddCategoryForm";

class ProductFormCategorySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expand: false, showAddCategoryForm: false };
  }
  componentDidMount() {
    this.props.fetchAvaliableCategories();
  }

  toggleBody = () => {
    this.setState({ expand: !this.state.expand });
  };
  toggleAddCategoryForm = () => {
    this.setState({ showAddCategoryForm: !this.state.showAddCategoryForm });
  };

  /**
   * render JSX, a list of all avaliable categories
   * @return {JSX}
   */
  renderBody = () => {
    if (!this.state.expand) {
      return null;
    }
    return (
      <div className="component-product-form-category-selector__body">
        {this.props.avaliableCategories.map(ele => {
          return (
            <CategoryCard
              key={`avaliableCategory${ele.category_id}`}
              category={ele}
              toggleBody={this.toggleBody}
            >
              {ele.name}
            </CategoryCard>
          );
        })}
        <div
          onClick={this.toggleAddCategoryForm}
          className="component-product-form-category-selector__body__add-button"
        >
          <i className="material-icons">add_circle_outline</i>
          <span className="component-produt-form-category-selector__body__add-button-label">
            添加新产品分类
          </span>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="component-product-form-category-selector">
        <div className="component-product-form-category-selector__header">
          <span>商品分类</span>
          {this.props.newProduct.category ? (
            <span>{this.props.newProduct.category.name}</span>
          ) : null}
          <span
            className="component-product-form-category-selector__header__selector"
            onClick={this.toggleBody}
          >
            <span>点击选择</span>
            <i className="material-icons">keyboard_arrow_up</i>
          </span>
        </div>
        {this.renderBody()}
        {this.state.showAddCategoryForm ? (
          <AddCategoryForm toggleForm={this.toggleAddCategoryForm} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ avaliableCategories, newProduct }) => {
  return { avaliableCategories, newProduct };
};

export default connect(
  mapStateToProps,
  { fetchAvaliableCategories }
)(ProductFormCategorySelector);

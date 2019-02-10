import React from "react";
import { connect } from "react-redux";
import { fetchAvaliableCategories } from "../actions";
import CategoryCard from "./CategoryCard";
import "../css/ProductFormCategorySelector.css";
class ProductFormCategorySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expand: false };
  }
  componentDidMount() {
    this.props.fetchAvaliableCategories();
  }

  toggleBody = () => {
    this.setState({ expand: !this.state.expand });
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

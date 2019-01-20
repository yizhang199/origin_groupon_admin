import React from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions";

import ProductCard from "./ProductCard";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.props.products.map(category => {
          return (
            <div
              data-test="category-list"
              key={`category${category.category_id}`}
              className="item"
            >
              {category.category_name}
            </div>
          );
        })}
        <ProductCard />
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return { products };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductList);

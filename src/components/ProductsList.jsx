import React from "react";
import { connect } from "react-redux";
import { Link, Element } from "react-scroll";

import { getProducts } from "../actions";
import ProductCard from "./ProductCard";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div className="products-list" data-test="component-products-list">
        <div className="category-list">
          {this.props.products.map(category => {
            return (
              <Link
                key={`categoryList${category.category_id}`}
                activeClass="active"
                to={`nav${category.category_id}`}
                className="item"
                isDynamic={true}
                offset={-75}
                spy={true}
                smooth={true}
                duration={300}
                onSetActive={this.handleSetActive}
                containerId="product-list"
              >
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>

        <div id="product-list" className="product-list">
          {this.props.products.map(productGroup => {
            return (
              <Element
                className="item"
                key={`productGroup${productGroup.category_id}`}
                name={`nav${productGroup.category_id}`}
              >
                <h3 className="">{productGroup.name}</h3>
                {productGroup.products.map(product => {
                  return (
                    <ProductCard
                      key={`product${product.product_id}`}
                      product={product}
                    />
                  );
                })}
              </Element>
            );
          })}
        </div>
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

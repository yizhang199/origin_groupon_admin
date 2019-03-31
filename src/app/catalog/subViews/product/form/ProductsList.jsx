import React, { useContext } from "react";
import { Link, Element } from "react-scroll";
import { ProductContext } from "../_context";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const context = useContext(ProductContext);

  const { products } = context;

  if (!products) {
    return <div className="product-list">Loading...</div>;
  }
  return (
    <div className="products-list" data-test="component-products-list">
      <div className="category-list">
        {products.map(category => {
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
              containerId="product-list"
            >
              <span>{category.name}</span>
            </Link>
          );
        })}
      </div>

      <div id="product-list" className="product-list">
        {products.map(productGroup => {
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
};

export default ProductList;

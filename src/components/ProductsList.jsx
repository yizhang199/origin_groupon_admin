import React from "react";
import { connect } from "react-redux";

const ProductList = props => {
  return (
    <div className="ui relaxed divided list">
      {props.products.map(category => {
        return <div className="item">{category.category_name}</div>;
      })}
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  return { products };
};

export default connect(mapStateToProps)(ProductList);

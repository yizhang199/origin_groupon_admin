import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

ProductList.propTypes = {
  products: PropTypes.Object.isRequired
};

export default connect(mapStateToProps)(ProductList);

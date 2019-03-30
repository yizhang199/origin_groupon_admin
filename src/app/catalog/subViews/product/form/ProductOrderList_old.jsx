import React from "react";
import { connect } from "react-redux";

import { getProducts } from "../../../../../_actions";

class ProductOrderList extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  getStyle = (num, maxNum, index) => {
    console.log(index);

    return {
      height: "45px",
      width: "100%",
      backgroundImage: `linear-gradient(90deg, #${
        index % 2 === 0 ? "f55747" : "ffba2b4d"
      } ${((maxNum - num) / maxNum) * 100}%,#fff, #fff)`
    };
  };

  renderProducts = () => {
    let index = 0;
    return this.props.products.map(productGroup => {
      return productGroup.products.map(product => {
        index++;
        return (
          <tr
            className="product-order-list__table__tbody__tr"
            style={this.getStyle(
              product.quantity,
              product.stock_status_id,
              index
            )}
            key={`orderProduct${product.product_id}`}
          >
            <td className="product-order-list__table__tbody__name">
              {product.name}
            </td>
            <td className="product-order-list__table__tbody__quantity">
              {product.quantity}
            </td>
            <td className="product-order-list__table__tbody__quantity">
              {product.stock_status_id}
            </td>
          </tr>
        );
      });
    });
  };

  render() {
    return (
      <div className="component-product-order-list">
        <table className="component-product-order-list__table">
          <tbody className="product-order-list__table__tbody">
            {this.renderProducts()}
          </tbody>
        </table>
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
)(ProductOrderList);

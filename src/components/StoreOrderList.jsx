import React from "react";
import { connect } from "react-redux";

import { fetchOrdersByStore } from "../actions";

import "../css/StoreOrderList.css";
import { getStyle } from "../helpers";
class StoreOrderList extends React.Component {
  componentDidMount() {
    this.props.fetchOrdersByStore();
  }
  renderStoreOrders = element => {
    return (
      <div
        key={`storeSection${element.store_id}`}
        className="component-store-order-list__store"
      >
        <div className="component-store-order-list__store__header">
          <span>{element.store_name}</span>
        </div>
        <div className="component-store-order-list__store__product-list">
          {this.renderStoreOrderProducts(element.order_products)}
        </div>
      </div>
    );
  };
  renderStoreOrderProducts = list => {
    if (list.length === 0) {
      return <p>本店今天没有订单</p>;
    }
    return list.map(productArray => {
      return (
        <div
          className="component-store-order-list__store__product-list__product-card"
          key={`storeOrderProduct${productArray[0].product_name}`}
        >
          <p>{productArray[0].product_name}</p>
          {this.renderProductItems(productArray)}
        </div>
      );
    });
  };
  renderProductItems = list => {
    if (list.length === 0) {
      return null;
    }
    let index = 0;
    return (
      <table>
        <thead>
          <tr>
            <th className="text">
              <span>用户名</span>
            </th>
            <th className="number">
              <span>订货数量</span>
            </th>
            <th className="number">
              <span>取货时间</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map(product => {
            index++;
            const { product_name, date, username, quantity } = product;
            return (
              <tr
                key={`product${product_name}${date}${username}`}
                style={getStyle(index)}
              >
                <td className="text">{username}</td>

                <td className="number">{quantity}</td>

                <td className="number">{date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  render() {
    return (
      <div className="component-store-order-list">
        {this.props.ordersByStore.map(element => {
          return this.renderStoreOrders(element);
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ ordersByStore }) => {
  return { ordersByStore };
};

export default connect(
  mapStateToProps,
  { fetchOrdersByStore }
)(StoreOrderList);

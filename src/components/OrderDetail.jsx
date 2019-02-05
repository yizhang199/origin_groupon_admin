import React from "react";
import { connect } from "react-redux";

import { selectOrder } from "../actions";

class OrderDetail extends React.Component {
  componentDidMount() {
    const order_id = 1;
    this.props.selectOrder(order_id);
  }
  /**
   *
   */
  renderList = () => {
    console.log(this.props.selectedOrder);

    return (
      <tbody>
        {/* {this.props.selectOrder.order_items.map(orderItem => {
          return (
            <tr>
              <td>{orderItem.name}</td>
              <td>{orderItem.price}</td>
              <td>{orderItem.quantity}</td>
              <td>{orderItem.total}</td>
              <td>{this.renderOrderItemOptions(orderItem.options)}</td>
            </tr>
          );
        })} */}
      </tbody>
    );
  };
  /**
   *
   */
  renderOrderItemOptions = list => {
    if (list.length === 0) {
      return "无规格信息";
    } else {
      return "to do";
    }
  };
  render() {
    return (
      <div className="component-order-detail">
        <h1>Order detail</h1>
        <table>
          <thead>
            <tr>
              <td>名称</td>
              <td>单价</td>
              <td>数量</td>
              <td>小计</td>
              <td>规格</td>
            </tr>
          </thead>
          {this.renderList()}
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedOrder }) => {
  return { selectedOrder };
};

export default connect(
  mapStateToProps,
  { selectOrder }
)(OrderDetail);

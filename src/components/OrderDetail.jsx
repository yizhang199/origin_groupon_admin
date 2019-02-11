import React from "react";
import { connect } from "react-redux";

import { makeDate } from "../helpers";

import "../css/OrderDetail.css";
class OrderDetail extends React.Component {
  /**
   *
   */
  renderList = () => {
    return (
      <tbody>
        {this.props.selectedOrder.order_items.map((orderItem, index) => {
          return (
            <tr key={`orderDetailOrderItem${index}`}>
              <td>{orderItem.name}</td>
              <td>{orderItem.price}</td>
              <td>{orderItem.quantity}</td>
              <td>{orderItem.total}</td>
              <td>{this.renderOrderItemOptions(orderItem.options)}</td>
            </tr>
          );
        })}
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
      return list.map((optionValue, index) => {
        return (
          <p key={`optionsValue${index}`}>
            {optionValue.option_name} : {optionValue.option_value_name} -{" "}
            {optionValue.price}
          </p>
        );
      });
    }
  };
  /**
   * conditionally render component if selectedOrder is not empty render full list and head, else render a text info only
   *
   */
  renderComponent = () => {
    if (!this.props.selectedOrder.store_name) {
      return (
        <div className="component-order-detail">
          {"Select an order to see details"}
        </div>
      );
    } else {
      return (
        <div className="component-order-detail">
          <div className="component-order-detail__header__field">
            <span>下单日期</span>
            <span>{makeDate(this.props.selectedOrder.create_date)}</span>
          </div>
          <div className="component-order-detail__header__field">
            <span>取货日期</span>
            <span>{makeDate(this.props.selectedOrder.picked_date)}</span>
          </div>
          <div className="component-order-detail__header__field">
            <span>取货地点</span>
            <span>{this.props.selectedOrder.store_name}</span>
          </div>
          <div className="component-order-detail__header__field">
            <span>付款方式</span>
            <span>{this.props.selectedOrder.payment_method}</span>
          </div>
          <div className="component-order-detail__header__field">
            <span>订单状态</span>
            <span style={{ textTransform: `uppercase` }}>
              {this.props.selectedOrder.status}
            </span>
          </div>

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
  };
  render() {
    return <React.Fragment>{this.renderComponent()}</React.Fragment>;
  }
}

const mapStateToProps = ({ selectedOrder }) => {
  return { selectedOrder };
};

export default connect(mapStateToProps)(OrderDetail);

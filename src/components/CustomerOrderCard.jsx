import React from "react";

import "../css/CustomerOrderCard.css";
class CustomerOrderCard extends React.Component {
  componentDidMount() {}
  getContent = value => {
    if (value === "") {
      return "用户尚未选择或填写";
    } else {
      return value;
    }
  };
  getStyle = () => {
    switch (this.props.order.order_status_id) {
      case 1:
        return {
          orderCard_tab: {
            backgroundColor: `#32be3f`,
            borderColor: `#1c7d25`
          },
          orderCard_userName: { textShadow: `0px 0px 3px #32be3f` },
          title: { borderColor: `#32be3f` }
        };
      case 2:
        return {
          orderCard_tab: {
            backgroundColor: `#ffba2d`,
            borderColor: `#946b19`
          },
          orderCard_userName: { textShadow: `0px 0px 3px #ffba2d` },
          title: { borderColor: `#ffba2d` }
        };
      case 3:
        return {
          orderCard_tab: {
            backgroundColor: `#a5a5a5`,
            borderColor: `#5f5e5e`
          },
          orderCard_userName: { textShadow: `0px 0px 3px #a5a5a5` },
          title: { borderColor: `#a5a5a5` }
        };
      default:
        return {};
    }
  };
  /**
   * render JSX for order items in a string not list
   * @param {void}
   * @returns {JSX}
   */
  renderOrderItems = () => {
    if (this.props.order.order_items) {
      return (
        <div className="component-customer-order-card__order-items">
          {this.props.order.order_items.map((item, index) => {
            return (
              <span key={`CustomerOrderItem${index}`}>
                {`${item.name} x ${item.quantity}, `}
              </span>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="component-customer-order-card__order-items">
          {"用户尚未选择任何产品"}
        </div>
      );
    }
  };
  render() {
    const myStyle = this.getStyle();
    const user = this.props.order.user ? this.props.order.user : {};
    return (
      <div className="component-customer-order-card">
        <div
          className="component-customer-order-card__tab"
          style={myStyle.orderCard_tab}
        >
          {this.props.order.status_name}
        </div>
        <div
          className="component-customer-order-card__user-name"
          style={myStyle.orderCard_userName}
        >
          {this.getContent(user.username)}
        </div>
        <div className="component-customer-order-card__details">
          <div className="component-customer-order-card__pickup-info">
            <div className="component-customer-order-card__store-name">
              <span
                className="component-customer-order-card__store-name__title"
                style={myStyle.title}
              >
                取货店面
              </span>
              <span className="component-customer-order-card__store-name__value">
                {this.getContent(this.props.order.store_name)}
              </span>
            </div>
            <div className="component-customer-order-card__picked-date">
              <span
                className="component-customer-order-card__picked-date__title"
                style={myStyle.title}
              >
                取货日期
              </span>
              <span className="component-customer-order-card__picked-date__value">
                {this.getContent(this.props.order.fax)}
              </span>
            </div>
          </div>
          <div className="component-customer-order-card__payment-info">
            <div className="component-customer-order-card__payment-method">
              <span
                className="component-customer-order-card__payment-method__title"
                style={myStyle.title}
              >
                付款方式
              </span>
              <span className="component-customer-order-card__payment-method__value">
                {this.getContent(this.props.order.payment_method)}
              </span>
            </div>
            <div className="component-customer-order-card__total">
              <span
                className="component-customer-order-card__total__title"
                style={myStyle.title}
              >
                总计
              </span>
              <span className="component-customer-order-card__total__value">
                ${this.getContent(this.props.order.total)}
              </span>
            </div>
          </div>
        </div>
        {this.renderOrderItems()}
      </div>
    );
  }
}

export default CustomerOrderCard;

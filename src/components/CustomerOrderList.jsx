import React from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";

import { getOrders, onCustomerOrderListPageChange } from "../actions";
import CustomerOrderCard from "./CustomerOrderCard";
import OrderDetail from "./OrderDetail";

import "../css/CustomerOrderList.css";
class CustomerOrderList extends React.Component {
  componentDidMount() {
    this.props.getOrders();
  }
  handlePageChange = pageNumber => {
    this.props.onCustomerOrderListPageChange(pageNumber);
  };
  render() {
    if (!this.props.paginationParams) {
      return <div className="component-customer-order-list">loading...</div>;
    }
    return (
      <React.Fragment>
        <div className="component-customer-order-list">
          <div className="component-customer-order-list__pagination__container">
            <Pagination
              activePage={this.props.paginationParams.current_page}
              itemsCountPerPage={this.props.paginationParams.per_page}
              totalItemsCount={this.props.paginationParams.total}
              pageRangeDisplayed={5}
              prevPageText={null}
              nextPageText={null}
              lastPageText={<i className="material-icons">fast_forward</i>}
              firstPageText={<i className="material-icons">fast_rewind</i>}
              onChange={this.handlePageChange}
              itemClass="page-item"
              linkClass="link-item"
              linkClassFirst="first-page-button"
              linkClassLast="last-page-button"
              activeLinkClass="link-item-active"
            />
          </div>
          {this.props.orders.map((order, index) => {
            return (
              <CustomerOrderCard key={`customerOrder${index}`} order={order} />
            );
          })}
        </div>

        <OrderDetail />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ orders, paginationParams }) => {
  return { orders, paginationParams };
};

export default connect(
  mapStateToProps,
  { getOrders, onCustomerOrderListPageChange }
)(CustomerOrderList);

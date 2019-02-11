import React from "react";
import { connect } from "react-redux";

import { fetchReportsSummary } from "../actions";
import { makeDate } from "../helpers";

class ChartManageMainWindow extends React.Component {
  componentDidMount() {
    this.props.fetchReportsSummary();
  }

  renderSalesByStore = () => {
    const data = this.props.reportSummary.sales_by_store;
    if (!data) {
      return null;
    }
    return (
      <table>
        <tbody>
          {data.map(element => {
            return (
              <tr key={`store${element.store_id}`}>
                <td>{element.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  renderSalesByPayment = () => {
    const data = this.props.reportSummary.sales_by_payment;
    if (!data) {
      return null;
    }
    return (
      <table>
        <tbody>
          {data.map(element => {
            return (
              <tr key={`payment${element.payment_method}`}>
                <td>{element.payment_method}</td>
                <td>{element.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  renderSalesByCustomer = () => {
    const data = this.props.reportSummary.sales_by_custmer;
    if (!data) {
      return null;
    }
    return (
      <table>
        <tbody>
          {data.map(element => {
            return (
              <tr key={`customer${element.customer_id}`}>
                <td>{element.customer_id}</td>
                <td>{element.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  renderSalesByProduct = () => {
    const data = this.props.reportSummary.sales_by_product;
    if (!data) {
      return null;
    }
    return (
      <table>
        <tbody>
          {data.map(element => {
            return (
              <tr key={`store${element.product}`}>
                <td>{element.product}</td>
                <td>{element.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  renderSalesByDate = () => {
    const data = this.props.reportSummary.sales_by_date;
    if (!data) {
      return null;
    }
    return (
      <table>
        <tbody>
          {data.map(element => {
            return (
              <tr key={`store${element.date}`}>
                <td>{makeDate(element.date)}</td>
                <td>{element.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  render() {
    return (
      <div className="component-chart-manage-main-window">
        <div className="component-chart-manage-main-window__dashboard">
          {this.props.reportSummary.sales}
          {this.renderSalesByStore()}
          {this.renderSalesByPayment()}
          {this.renderSalesByCustomer()}
          {this.renderSalesByProduct()}
          {this.renderSalesByDate()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ reportSummary }) => {
  return { reportSummary };
};
export default connect(
  mapStateToProps,
  { fetchReportsSummary }
)(ChartManageMainWindow);

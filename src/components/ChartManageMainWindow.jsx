import React from "react";
import { connect } from "react-redux";
import { Bar, Line, Pie } from "react-chartjs-2";

import { fetchReportsSummary } from "../actions";
import { makeDate } from "../helpers";

import "../css/ChartManageMainWindow.css";

class ChartManageMainWindow extends React.Component {
  componentDidMount() {
    this.props.fetchReportsSummary();
  }

  renderSalesByStore = () => {
    const orignalData = this.props.reportSummary.sales_by_store;
    if (!orignalData) {
      return null;
    }

    let labels = [];
    let dataArray = [];
    orignalData.map(ele => {
      labels = [...labels, ele.store_name];
      dataArray = [...dataArray, ele.total];
    });

    const data = {
      labels,
      datasets: [
        {
          data: dataArray,
          backgroundColor: ["#ffba2d", "#ff3939", "#9CD919"]
        }
      ]
    };

    const options = {
      title: {
        display: true,
        text: "店面销量报表",
        fontSize: 20
      },
      legend: {
        position: "right",
        labels: {
          fontColor: "#a5a5a5"
        }
      }
    };

    return <Pie width={450} height={225} data={data} options={options} />;
  };

  renderSalesByPayment = () => {
    if (!this.props.reportSummary.sales_by_payment) {
      return null;
    }
    let datasetsArray = [];

    let labels = [];
    this.props.reportSummary.sales_by_payment.map(ele => {
      const label = ele.payment_method;
      let dataArray = [];
      ele.data.map(element => {
        labels = [...labels, makeDate(element.date)];
        dataArray = [...dataArray, element.total];
      });

      datasetsArray = [
        ...datasetsArray,
        { label, data: dataArray, fill: false }
      ];
    });

    const data = { labels, datasets: datasetsArray };

    return <Line data={data} width={600} height={300} />;
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
    const orignalData = this.props.reportSummary.sales_by_product;
    if (!orignalData) {
      return null;
    }

    let labels = [];
    const label = "销量";
    let dataArray = [];
    orignalData.map(ele => {
      labels = [...labels, ele.product_name];
      dataArray = [...dataArray, ele.total];
    });

    const data = {
      labels,
      datasets: [
        {
          label,
          data: dataArray,
          backgroundColor: "#ffba2d",
          hoverBorderWidth: 2,
          hoverBorderColor: "#a5a5a5"
        }
      ],
      options: {
        title: {
          display: true,
          text: "产品销量报表",
          fontSize: 20
        }
      }
    };

    return <Bar height={300} width={300} data={data} />;
  };

  renderSalesByDate = () => {
    const data = this.props.reportSummary.sales_by_date;
    if (!data) {
      return null;
    }
    return (
      <table>
        <thead>
          <tr>
            <td>日期</td>
            <td>销售额</td>
          </tr>
        </thead>
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
          <div className="component-chart-manage-main-window__dashboard__sales">
            总销售额：{this.props.reportSummary.sales}
          </div>

          <div className="component-chart-manage-main-window__dashboard__sales-by-payment">
            {this.renderSalesByPayment()}
          </div>
          <div className="component-chart-manage-main-window__dashboard__sales-by-customer">
            {this.renderSalesByCustomer()}
          </div>
          <div className="component-chart-manage-main-window__dashboard__sales-by-product">
            {this.renderSalesByProduct()}
          </div>
          <div className="component-chart-manage-main-window__dashboard__sales-by-date">
            {this.renderSalesByDate()}
          </div>
          <div className="component-chart-manage-main-window__dashboard__sales-by-store">
            {this.renderSalesByStore()}
          </div>
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

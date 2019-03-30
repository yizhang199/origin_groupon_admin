import React from "react";
import { connect } from "react-redux";
import { Bar, Line, Pie } from "react-chartjs-2";

import { fetchReportsSummary } from "../../../_actions";
import { makeDate, history, getStyle } from "../../../_helpers";

class Summary extends React.Component {
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
    const colors = ["#ffba2d", "#f55747", "#00C800"];
    let labels = [];
    this.props.reportSummary.sales_by_payment.map((ele, index) => {
      const label = ele.payment_method;
      let dataArray = [];
      ele.data.map(element => {
        labels = [...labels, makeDate(element.date)];
        dataArray = [...dataArray, element.total];
      });

      datasetsArray = [
        ...datasetsArray,
        {
          label,
          data: dataArray,
          fill: false,
          borderColor: colors[index]
        }
      ];
    });

    const data = { labels, datasets: datasetsArray };

    return <Line data={data} width={600} height={300} />;
  };
  renderSalesByCustomer = () => {
    const data = this.props.reportSummary.sales_by_customer;
    if (!data) {
      return null;
    }
    let index = 0;
    return (
      <table>
        <thead>
          <tr>
            <th className="text">
              <span>用户</span>
            </th>
            <th className="number">
              <span>消费总额</span>
            </th>
            <th className="number">
              <span>订单总数</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(element => {
            index++;
            return (
              <tr
                key={`customer${element.customer_id}`}
                style={getStyle(index)}
              >
                <td className="text">{element.username}</td>
                <td className="number">{element.total}</td>
                <td className="number">{element.quantity}</td>
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
    let index = 0;
    return (
      <table>
        <thead>
          <tr>
            <th className="text">
              <span>日期</span>
            </th>
            <th className="number">
              <span>销售额</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(element => {
            index++;
            return (
              <tr key={`store${element.date}`} style={getStyle(index)}>
                <td className="text">{makeDate(element.date)}</td>
                <td className="number">{element.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  renderSalesByCategory = () => {
    const orignalData = this.props.reportSummary.sales_by_category;
    if (!orignalData) {
      return null;
    }

    let labels = [];
    let dataArray = [];
    orignalData.map(ele => {
      labels = [...labels, ele.category_name];
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
        text: "产品分类销售报告",
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
  render() {
    return (
      <div className="component-summary">
        <div className="component-summary__dashboard">
          <div className="component-summary__dashboard__sales">
            总销售额：{this.props.reportSummary.sales}
          </div>

          <div className="component-summary__dashboard__sales-by-payment">
            {/* <i className="material-icons">remove_red_eye</i> */}
            {this.renderSalesByPayment()}
          </div>
          <div className="component-summary__dashboard__sales-by-customer">
            <i
              onClick={() => {
                history.push(`${process.env.PUBLIC_URL}/charts/customer`);
              }}
              className="material-icons"
            >
              remove_red_eye
            </i>

            {this.renderSalesByCustomer()}
          </div>
          <div className="component-summary__dashboard__sales-by-product">
            <i
              onClick={() => {
                history.push(`${process.env.PUBLIC_URL}/charts/product`);
              }}
              className="material-icons"
            >
              remove_red_eye
            </i>

            {this.renderSalesByProduct()}
          </div>
          <div className="component-summary__dashboard__sales-by-date">
            <i
              onClick={() => {
                history.push(`${process.env.PUBLIC_URL}/charts/date`);
              }}
              className="material-icons"
            >
              remove_red_eye
            </i>

            {this.renderSalesByDate()}
          </div>
          <div className="component-summary__dashboard__sales-by-category">
            <i
              onClick={() => {
                history.push(`${process.env.PUBLIC_URL}/charts/category`);
              }}
              className="material-icons"
            >
              remove_red_eye
            </i>
            {this.renderSalesByCategory()}
          </div>
          <div className="component-summary__dashboard__sales-by-store">
            <i
              onClick={() => {
                history.push(`${process.env.PUBLIC_URL}/charts/store`);
              }}
              className="material-icons"
            >
              remove_red_eye
            </i>

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
)(Summary);

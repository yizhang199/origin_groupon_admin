import React from "react";
import { connect } from "react-redux";

import { fetchReportDetails, setReportCategory } from "../../../actions";

import CategoryTable from "./tables/CategoryTable";
import ProductTable from "./tables/ProductTable";
import CustomerTable from "./tables/CustomerTable";
import PaymentTable from "./tables/PaymentTable";
import DateTable from "./tables/DateTable";
import StoreTable from "./tables/StoreTable";

class DetailView extends React.Component {
  componentDidMount() {
    const report_category = this.props.match.params.report_category;
    this.props.setReportCategory(report_category);
    if (this.props.reportDetails.length === 0) {
      this.props.fetchReportDetails(report_category);
    }
  }
  renderTableComponent() {
    const report_category = this.props.match.params.report_category;
    switch (report_category) {
      case "category":
        return <CategoryTable />;
      case "store":
        return <StoreTable />;
      case "product":
        return <ProductTable />;
      case "payment":
        return <PaymentTable />;
      case "customer":
        return <CustomerTable />;
      case "date":
        return <DateTable />;
      default:
        break;
    }
  }
  render() {
    if (this.props.reportDetails.length === 0) {
      return <div className="component-detail-view">loading...</div>;
    }
    return (
      <div className="component-detail-view">{this.renderTableComponent()}</div>
    );
  }
}

const mapStateToProps = ({ reportDetails }) => {
  return { reportDetails };
};

export default connect(
  mapStateToProps,
  { fetchReportDetails, setReportCategory }
)(DetailView);

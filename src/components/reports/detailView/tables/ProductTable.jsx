import React from "react";
import { connect } from "react-redux";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product_name: 0, quantity: 0, total: 0 };
  }
  sortByCategoryName = () => {
    const sortOrder = this.getSortOrder("product_name");
    this.props.sortReportDetails(
      "product_name",
      sortOrder,
      this.props.reportDetails
    );
  };
  sortByTotal = () => {
    const sortOrder = this.getSortOrder("total");
    this.props.sortReportDetails("total", sortOrder, this.props.reportDetails);
  };
  sortByQuantity = () => {
    const sortOrder = this.getSortOrder("quantity");
    this.props.sortReportDetails(
      "quantity",
      sortOrder,
      this.props.reportDetails
    );
  };
  getSortOrder = value => {
    let sortOrder = 0;
    if (this.state[value] === 1) {
      this.setState({ [value]: -1 });
      sortOrder = -1;
    } else {
      this.setState({ [value]: 1 });
      sortOrder = 1;
    }
    return sortOrder;
  };
  getIcon = value => {
    switch (this.state[value]) {
      case 0:
        return "remove";
      case 1:
        return "arrow_upward";
      case -1:
        return "arrow_downward";
      default:
        return null;
    }
  };
  renderThead = () => {
    return (
      <thead>
        <tr>
          <th onClick={this.sortByCategoryName} className="text">
            <span>分类名称</span>
          </th>
          <th onClick={this.sortByTotal} className="number">
            <span>销售额</span>
          </th>
          <th onClick={this.sortByQuantity} className="number">
            <span>销售数量</span>
          </th>
        </tr>
      </thead>
    );
  };
  renderTbody = () => {
    return (
      <tbody>
        {this.props.reportDetails.map((element, index) => {
          const { category_name, total, quantity } = element;
          return (
            <tr key={`orderByCategoryRow${index}`} style={getStyle()}>
              <td className="text">{category_name}</td>
              <td className="number">{total}</td>
              <td className="number">{quantity}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };
}

const mapStateToProps = ({ reportDetails }) => {
  return { reportDetails };
};

export default connect(mapStateToProps)(Product);

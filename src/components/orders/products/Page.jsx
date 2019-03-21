import React from "react";
import { connect } from "react-redux";

import { getProducts } from "../../../actions";
import TableView from "./TableView";
import BarView from "./BarView";

import "./sass/Page.css";
class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tableView: true };
  }
  componentDidMount() {
    this.props.getProducts();
  }
  renderIconText = () => {
    if (this.state.tableView) {
      return "view_list";
    }
    return "table_chart";
  };
  render() {
    return (
      <div className="component-productorders">
        {/* <div
          className="control-button-group"
          onClick={() => {
            this.setState({ tableView: !this.state.tableView });
          }}
        >
          <i className="material-icons">{this.renderIconText()}</i>
        </div> */}
        {this.state.tableView ? <TableView /> : <BarView />}
      </div>
    );
  }
}

export default connect(
  null,
  { getProducts }
)(Page);

import React from "react";
import { connect } from "react-redux";

import { fetchSalesGroups, setPeriod } from "../../_actions";
class SalesGroupSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = { salesGroupId: "text_label" };
  }

  componentDidMount() {
    this.props.fetchSalesGroups();
  }

  handleOnChange = e => {
    this.setState({ salesGroupId: e.target.value });
    this.props.setPeriod(e.target.value);
  };
  renderOptions = () => {
    if (this.props.salesGroupsList.length === 0) {
      return null;
    }
    return (
      <>
        <option value="text_label" disabled={true}>
          --请选择要查看的团--
        </option>
        {this.props.salesGroupsList.map(element => {
          return (
            <option
              key={`salesGroupSeletorOptions${element.sales_group_id}`}
              data-start_date={element.start_date}
              data-end_date={element.end_date}
              value={element.sales_group_id}
            >
              {element.name}
            </option>
          );
        })}
      </>
    );
  };

  render() {
    return (
      <div className="component-sales-group-selector">
        <select onChange={this.handleOnChange} value={this.state.salesGroupId}>
          {this.renderOptions()}
        </select>
      </div>
    );
  }
}

const mapStateToProps = ({ salesGroupsList, salesGroup }) => {
  return { salesGroupsList, salesGroup };
};

export default connect(
  mapStateToProps,
  { fetchSalesGroups, setPeriod }
)(SalesGroupSelector);

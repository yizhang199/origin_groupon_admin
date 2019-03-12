import React from "react";

class SaleGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", startDate: "", endDate: "" };
  }
  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="sale-group">
        <h2>建团</h2>
        <div className="form-field">
          <label htmlFor="group_name">
            <span>团名称：</span>
            <input
              type="text"
              name="group_name"
              value={this.state.name}
              onChange={this.handleTextChange}
              placeholder={`请填写本次打折团的名称`}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="group_name">
            <span>起始日期：</span>
            <input
              type="date"
              name="startDate"
              value={this.state.startDate}
              onChange={this.handleTextChange}
              placeholder={`请填写本次打折团的名称`}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="group_name">
            <span>截止日期：</span>
            <input
              type="date"
              name="endDate"
              value={this.state.endDate}
              onChange={this.handleTextChange}
              placeholder={`请填写本次打折团的名称`}
            />
          </label>
        </div>
        <button>确定保存</button>
      </div>
    );
  }
}

export default SaleGroup;

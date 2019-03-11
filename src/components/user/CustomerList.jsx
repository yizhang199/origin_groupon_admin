import React from "react";
import { connect } from "react-redux";
import { getStyle } from "../../helpers";

import { fetchCustomers, sortCustomerDetails } from "../../actions";

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 0,
      telephone: 0,
      email: 0,
      user_group_id: 0,
      status: 0
    };
  }
  componentDidMount() {
    this.props.fetchCustomers();
  }

  sortDetails = value => {
    const sortOrder = this.getSortOrder(value);
    this.props.sortCustomerDetails(value, sortOrder, this.props.userList);
  };

  getSortOrder = value => {
    let sortOrder = 0;
    if (this.state[value] === 1) {
      this.setState({
        username: 0,
        telephone: 0,
        email: 0,
        user_group_id: 0,
        status: 0
      });
      this.setState({ [value]: -1 });
      sortOrder = -1;
    } else {
      this.setState({
        username: 0,
        telephone: 0,
        email: 0,
        user_group_id: 0,
        status: 0
      });
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
          <th
            onClick={() => {
              this.sortDetails("username");
            }}
            className="text"
          >
            <span>
              用户名<i className="material-icons">{this.getIcon("username")}</i>
            </span>
          </th>
          <th
            onClick={() => {
              this.sortDetails("telephone");
            }}
            className="text"
          >
            <span>
              电话<i className="material-icons">{this.getIcon("telephone")}</i>
            </span>
          </th>
          <th
            onClick={() => {
              this.sortDetails("email");
            }}
            className="text"
          >
            <span>
              电子邮箱<i className="material-icons">{this.getIcon("email")}</i>
            </span>
          </th>
          <th
            onClick={() => {
              this.sortDetails("user_group_id");
            }}
            className="text"
          >
            <span>
              是否显示团购报价
              <i className="material-icons">{this.getIcon("user_group_id")}</i>
            </span>
          </th>
          <th
            onClick={() => {
              this.sortDetails("status");
            }}
            className="text"
          >
            <span>
              用户状态<i className="material-icons">{this.getIcon("status")}</i>
            </span>
          </th>
        </tr>
      </thead>
    );
  };
  renderTbody = () => {
    let index = 0;
    return this.props.userList.map(user => {
      index++;
      return (
        <tr className={`userRow${user.user_id}`} style={getStyle(index)}>
          <td className="text">{user.username}</td>
          <td className="text" />
          <td className="text">{user.email}</td>
          <td className="text">
            {parseInt(user.user_group_id) === 1 ? "是" : "否"}
          </td>
          <td className="text">
            {parseInt(user.status) === 0 ? "active" : "inactive"}
          </td>
        </tr>
      );
    });
  };

  render() {
    if (this.props.userList.length === 0) {
      return <div className="component-table">loading...</div>;
    }
    return (
      <div className="component-table">
        <table className="user-list">
          {this.renderThead()}
          {this.renderTbody()}
        </table>
      </div>
    );
  }
}
const mapStateToProps = ({ userList }) => {
  return { userList };
};
export default connect(
  mapStateToProps,
  { fetchCustomers, sortCustomerDetails }
)(CustomerList);

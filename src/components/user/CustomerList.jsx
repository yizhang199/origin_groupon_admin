import React from "react";
import { connect } from "react-redux";
import { getStyle } from "../../helpers";

import UpdateCustomer from "./UpdateCustomer";
import CreateCustomer from "./CreateCustomer";

import {
  fetchCustomers,
  sortCustomerDetails,
  fetchCustomer
} from "../../actions";

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 0,
      username: 0,
      phone: 0,
      email: 0,
      user_group_id: 0,
      status: 0,
      showEditForm: false,
      showCreateForm: false
    };
  }
  componentDidMount() {
    this.props.fetchCustomers();
  }

  updateCustomer = () => {};
  renderEditForm = () => {
    if (!this.state.showEditForm) {
      return null;
    }
    return (
      <UpdateCustomer
        close={() => {
          this.setState({ showEditForm: false });
        }}
        customer_id={this.state.user_id}
      />
    );
  };

  sortDetails = value => {
    const sortOrder = this.getSortOrder(value);
    this.props.sortCustomerDetails(value, sortOrder, this.props.userList);
  };

  getSortOrder = value => {
    let sortOrder = 0;
    if (this.state[value] === 1) {
      this.setState({
        username: 0,
        phone: 0,
        email: 0,
        user_group_id: 0,
        status: 0
      });
      this.setState({ [value]: -1 });
      sortOrder = -1;
    } else {
      this.setState({
        username: 0,
        phone: 0,
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
  selectUser = user_id => {
    this.props.fetchCustomer(user_id);
    this.setState({ showEditForm: true });
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
              this.sortDetails("phone");
            }}
            className="text"
          >
            <span>
              电话<i className="material-icons">{this.getIcon("phone")}</i>
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
          <th className="text">
            <span>编辑</span>
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
        <tr
          key={`customerListRow${index}`}
          className={`userRow${user.user_id}`}
          style={getStyle(index)}
        >
          <td className="text">{user.username}</td>
          <td className="text">{user.phone}</td>
          <td className="text">{user.email}</td>
          <td className="text">
            {parseInt(user.user_group_id) === 1 ? "是" : "否"}
          </td>
          <td className="text">
            {parseInt(user.status) === 0 ? "active" : "inactive"}
          </td>
          <td>
            <i
              className="material-icons"
              onClick={() => {
                this.selectUser(user.user_id);
              }}
            >
              edit
            </i>
          </td>
        </tr>
      );
    });
  };
  renderCreateForm = () => {
    if (!this.state.showCreateForm) {
      return null;
    }
    return (
      <CreateCustomer
        close={() => {
          this.setState({ showEditForm: false, showCreateForm: false });
        }}
      />
    );
  };
  renderAddButton = () => {
    return (
      <div
        onClick={() => {
          this.setState({ showEditForm: false, showCreateForm: true });
        }}
        className="add-button"
      >
        <i className="material-icons">add</i>
      </div>
    );
  };
  render() {
    if (this.props.userList.length === 0) {
      return <div className="component-table">loading...</div>;
    }
    return (
      <div className="component-table">
        {this.renderEditForm()}
        {this.renderCreateForm()}
        <table className="user-list">
          {this.renderThead()}
          <tbody>{this.renderTbody()}</tbody>
        </table>
        {this.renderAddButton()}
      </div>
    );
  }
}
const mapStateToProps = ({ userList }) => {
  return { userList };
};
export default connect(
  mapStateToProps,
  { fetchCustomers, sortCustomerDetails, fetchCustomer }
)(CustomerList);

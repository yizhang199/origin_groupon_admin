import React from "react";
import { connect } from "react-redux";
import { getStyle } from "../../helpers";

import { fetchStaffs, sortStaffDetails } from "../../actions";
import CreateStaff from "./CreateStaff";
import UpdateStaff from "./UpdateStaff";
import StaffRow from "./StaffRow";
class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 0,
      phone: 0,
      email: 0,
      accessOrders: 0,
      accessProducts: 0,
      accessSalesGroups: 0,
      accessReports: 0,
      accessAccounts: 0,
      status: 0,
      showUpdateComponent: false,
      showCreateComponent: false
    };
  }
  componentDidMount() {
    this.props.fetchStaffs();
  }

  sortDetails = value => {
    const sortOrder = this.getSortOrder(value);
    this.props.sortStaffDetails(value, sortOrder, this.props.userList);
  };

  getSortOrder = value => {
    let sortOrder = 0;
    if (this.state[value] === 1) {
      this.setState({
        username: 0,
        telephone: 0,
        email: 0,
        accessOrders: 0,
        accessProducts: 0,
        accessSalesGroups: 0,
        accessReports: 0,
        accessAccounts: 0,
        status: 0
      });
      this.setState({ [value]: -1 });
      sortOrder = -1;
    } else {
      this.setState({
        username: 0,
        telephone: 0,
        email: 0,
        accessOrders: 0,
        accessProducts: 0,
        accessSalesGroups: 0,
        accessReports: 0,
        accessAccounts: 0,
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
              用户名
              <i className="material-icons">{this.getIcon("username")}</i>
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
              电子邮箱
              <i className="material-icons">{this.getIcon("email")}</i>
            </span>
          </th>
          <th
            onClick={() => {
              this.sortDetails("accessOrders");
            }}
            className="text"
          >
            <span>
              订单管理
              <i className="material-icons">{this.getIcon("accessOrders")}</i>
            </span>
          </th>
          <th
            onClick={() => {
              this.sortDetails("accessProducts");
            }}
            className="text"
          >
            <span>
              产品管理
              <i className="material-icons">{this.getIcon("accessProducts")}</i>
            </span>
          </th>
          <th
            onClick={() => {
              this.sortDetails("accessSalesGroups");
            }}
            className="text"
          >
            <span>
              团购管理
              <i className="material-icons">
                {this.getIcon("accessSalesGroups")}
              </i>
            </span>
          </th>
          <th
            onClick={() => {
              this.sortDetails("accessReports");
            }}
            className="text"
          >
            <span>
              报表管理
              <i className="material-icons">{this.getIcon("accessReports")}</i>
            </span>
          </th>
          <th
            onClick={() => {
              this.sortDetails("accessAccounts");
            }}
            className="text"
          >
            <span>
              人员管理
              <i className="material-icons">{this.getIcon("accessAccounts")}</i>
            </span>
          </th>
          <th
            onClick={() => {
              this.sortDetails("status");
            }}
            className="text"
          >
            <span>
              用户状态
              <i className="material-icons">{this.getIcon("status")}</i>
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
        <StaffRow
          user={user}
          key={`userRow${user.user_id}`}
          style={getStyle(index)}
          open={() => {
            this.setState({ showUpdateComponent: true });
          }}
        />
      );
    });
  };

  renderUpdate = () => {
    if (!this.state.showUpdateComponent) {
      return null;
    }
    return (
      <UpdateStaff
        close={() => {
          this.setState({ showUpdateComponent: false });
        }}
      />
    );
  };

  renderCreate = () => {
    if (!this.state.showCreateComponent) {
      return null;
    }
    return (
      <CreateStaff
        close={() => {
          this.setState({ showCreateComponent: false });
        }}
      />
    );
  };

  renderAddButton = () => {
    return (
      <div
        onClick={() => {
          this.setState({
            showUpdateComponent: false,
            showCreateComponent: true
          });
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
      <div className="component-table user">
        {this.renderUpdate()}
        {this.renderCreate()}
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
  { fetchStaffs, sortStaffDetails }
)(StaffList);

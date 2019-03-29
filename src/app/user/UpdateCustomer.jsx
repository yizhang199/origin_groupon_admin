import React from "react";
import { connect } from "react-redux";
import { fetchCustomer, updateCustomer } from "../../actions";
import CustomerForm from "./CustomerForm";
class UpdateCustomer extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = () => {
    this.props.updateCustomer();
    this.props.close();
  };
  componentDidMount() {
    // this.props.fetchCustomer(this.props.customer_id);
  }

  render() {
    const { username, phone, email, status } = this.props.selectedCustomer;
    return (
      <div className="update-customer" onClick={this.props.close}>
        <CustomerForm
          initialValues={{
            username,
            phone,
            email,
            status
          }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ selectedCustomer }) => {
  return { selectedCustomer };
};

export default connect(
  mapStateToProps,
  { fetchCustomer, updateCustomer }
)(UpdateCustomer);

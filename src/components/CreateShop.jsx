import React from "react";
import { connect } from "react-redux";

import { getShop } from "../actions";
import { history } from "../history";
import ShopForm from "./ShopForm";

import "../css/CreateShop.css";

class CreateShop extends React.Component {
  componentDidMount() {
    const id = history.match.param.id;
    this.props.getShop(id);
  }

  render() {
    return (
      <div classs="component-create-shop">
        <ShopForm />
      </div>
    );
  }
}

const mapStateToProps = ({ shop }) => {
  return { shop };
};

export default connect(
  mapStateToProps,
  { getShop }
)(CreateShop);

import React from "react";
import { connect } from "react-redux";

import ShopCard from "./ShopCard";
import { getShops } from "../actions";

import "../css/ShopList.css";
class ShopList extends React.Component {
  componentDidMount() {
    this.props.getShops();
  }

  render() {
    return (
      <div className="component-shop-list">
        {this.props.shops.map((shop, index) => {
          return (
            <ShopCard
              onClick={this.selectShop}
              key={`shop${index}`}
              shop={shop}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ shops }) => {
  return { shops };
};

export default connect(
  mapStateToProps,
  { getShops }
)(ShopList);

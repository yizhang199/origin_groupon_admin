import React from "react";

import { history } from "../history";
import "../css/ShopCard.css";
class ShopCard extends React.Component {
  selectShop = () => {
    history.push(`/shops/${this.props.shop.location_id}`);
  };
  render() {
    return (
      <div onClick={this.selectShop} className="component-shop-card">
        <h1>shop card</h1>
      </div>
    );
  }
}

export default ShopCard;

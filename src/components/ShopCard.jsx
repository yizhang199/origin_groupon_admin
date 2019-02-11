import React from "react";
import { makeDate } from "../helpers";

import { history } from "../history";
import "../css/ShopCard.css";
class ShopCard extends React.Component {
  componentDidMount() {}
  selectShop = () => {
    history.push(`/shops/${this.props.shop.location_id}`);
  };
  renderOpenDates = () => {
    return this.props.shop.open.map(dateString => {
      return (
        <span key={`dateString${this.props.shop.location_id}${dateString}`}>
          {makeDate(dateString)}
        </span>
      );
    });
  };
  render() {
    return (
      <div className="component-shop-card">
        <div className="component-shop-card__information">
          <div>{this.props.shop.name}</div>
          <div>{this.props.shop.address}</div>
          <div>{this.props.shop.telephone}</div>
          <div>{this.renderOpenDates()}</div>
        </div>

        <button
          className="component-shop-card__button"
          onClick={this.selectShop}
        >
          编辑
        </button>
      </div>
    );
  }
}

export default ShopCard;

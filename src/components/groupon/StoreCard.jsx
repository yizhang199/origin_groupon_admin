import React from "react";
import { connect } from "react-redux";
import { fetchSingleShop } from "../../actions";
import { makeDate } from "../../helpers";

const StoreCard = ({ setMode, shop, fetchSingleShop }) => {
  const selectShop = () => {
    setMode("update");
    fetchSingleShop(shop.location_id);
  };
  const renderOpenDates = () => {
    return shop.open.map(dateString => {
      return (
        <span
          key={`dateString${shop.location_id}${dateString}`}
          className="component-shop-card__date"
        >
          {makeDate(dateString)}
        </span>
      );
    });
  };
  return (
    <div className="store-card">
      <div className="component-shop-card__information">
        <div>{shop.name}</div>
        <div>{shop.address}</div>
        <div>{shop.telephone}</div>
        <div>{renderOpenDates()}</div>
      </div>

      <button className="component-shop-card__button" onClick={selectShop}>
        编辑
      </button>
    </div>
  );
};

export default connect(
  null,
  { fetchSingleShop }
)(StoreCard);

import React from "react";
import { connect } from "react-redux";
import { fetchSingleShop } from "../../actions";
import { makeDate } from "../../helpers";

const StoreCard = ({ setMode, shop, fetchSingleShop }) => {
  const { name, open, address, telephone, status, location_id } = shop;
  const selectShop = () => {
    setMode("update");
    fetchSingleShop(location_id);
  };
  const renderOpenDates = () => {
    return open.map(dateString => {
      return (
        <span key={`dateString${location_id}${dateString}`} className="date">
          {makeDate(dateString)}
        </span>
      );
    });
  };
  return (
    <div className="store-card">
      <div className="information">
        <div className="text">
          {`店名：`}
          {name}
        </div>
        <div className="text">
          {`地址：`}
          {address}
        </div>
        <div className="text">
          {`电话：`}
          {telephone}
        </div>
      </div>
      <div className="date-list">{renderOpenDates()}</div>

      <div className="control-panel">
        <i className="material-icons" onClick={selectShop}>
          {parseInt(status) === 1 ? `done` : `clear`}
        </i>
        <i className="material-icons" onClick={selectShop}>
          edit
        </i>
      </div>
    </div>
  );
};

export default connect(
  null,
  { fetchSingleShop }
)(StoreCard);

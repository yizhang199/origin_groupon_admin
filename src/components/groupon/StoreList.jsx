import React from "react";
import StoreCard from "./StoreCard";
class StoreList extends React.Component {
  render() {
    return (
      <div className="store-list">
        <h2>提货地点</h2>
        <ul>
          <li>
            <StoreCard />
          </li>
          <li>
            <StoreCard />
          </li>
          <li>
            <StoreCard />
          </li>
        </ul>
      </div>
    );
  }
}

export default StoreList;

import React from "react";
import { connect } from "react-redux";

import "./style.css";

import { getStyle } from "./helper.js";

const Category = ({ reportDetails }) => {
  const renderThead = () => {
    return (
      <thead>
        <tr>
          <th className="text">
            <span>分类名称</span>
          </th>
          <th className="number">
            <span>销售额</span>
          </th>
          <th className="number">
            <span>销售数量</span>
          </th>
        </tr>
      </thead>
    );
  };
  const renderTbody = () => {
    return (
      <tbody>
        {reportDetails.map((element, index) => {
          const { category_name, total, quantity } = element;
          return (
            <tr key={`orderByCategoryRow${index}`} style={getStyle()}>
              <td className="text">{category_name}</td>
              <td className="number">{total}</td>
              <td className="number">{quantity}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };
  return (
    <div className="component-detail-view-table">
      <table>
        {renderThead()}

        {renderTbody()}
      </table>
    </div>
  );
};

const mapStateToProps = ({ reportDetails }) => {
  return { reportDetails };
};

export default connect(mapStateToProps)(Category);

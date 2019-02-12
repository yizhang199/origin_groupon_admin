import React from "react";
import { connect } from "react-redux";

import CategoryGridItem from "./CategoryGridItem";
import { fetchAvaliableCategories } from "../actions";
import "../css/CategoryGrid.css";

class CategoryGrid extends React.Component {
  componentDidMount() {
    this.props.fetchAvaliableCategories();
  }

  renderCategriesGrid = () => {
    if (!this.props.categories) {
      return null;
    }
    return this.props.categories.map(category => {
      return (
        <CategoryGridItem
          category={category}
          key={`categoryGrid${category.category_id}`}
        />
      );
    });
  };

  render() {
    return (
      <div className="component-category-grid">
        {this.renderCategriesGrid()}
      </div>
    );
  }
}
const mapStateToProps = ({ avaliableCategories }) => {
  return { categories: avaliableCategories };
};
export default connect(
  mapStateToProps,
  { fetchAvaliableCategories }
)(CategoryGrid);

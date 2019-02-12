import React from "react";
import { connect } from "react-redux";

import { fetchAvaliableCategories } from "../actions";
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
        <div key={`categoryGrid${category.category_id}`}>{category.name}</div>
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

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CategoryGridItem from "./CategoryGridItem";
import { fetchAvaliableCategories } from "../../../../_actions";

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
        <Link
          to={`${process.env.PUBLIC_URL}/categories/create`}
          className="component-category-grid__add-button"
        >
          <i className="material-icons">add</i>
        </Link>
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

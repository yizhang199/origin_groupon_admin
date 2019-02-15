import React from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "react-datepicker";

import { makeDate } from "../helpers";
import "react-datepicker/dist/react-datepicker.css";
import "../css/ShopForm.css";

class ShopForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avaliableDates: [], openDates: [] };
  }
  componentDidMount() {
    if (this.props.shop) {
      this.setState({ openDates: this.props.shop.open });
    }
  }

  renderInput = ({ input, placeholder }) => {
    return <input {...input} type="text" placeholder={placeholder} />;
  };
  handleDateChange = e => {
    const newDate = new Date(e);
    this.setState({ openDates: [...this.state.openDates, newDate] });
  };
  renderOpenDates = () => {
    if (!this.state.openDates) {
      return null;
    }
    return this.state.openDates.map((openDate, index) => {
      return (
        <span
          key={`openDate${index}`}
          className="component-shop-form__tag-container"
        >
          <span className="component-shop-form__open-date-tags">
            {makeDate(openDate)}
          </span>
          <span
            className="component-shop-form__tag-dismiss"
            onClick={() =>
              this.setState({
                openDates: this.state.openDates.filter(ele => ele !== openDate)
              })
            }
          >
            <i className="material-icons">clear</i>
          </span>
        </span>
      );
    });
  };

  onSubmit = formValues => {
    this.props.onSubmit({ ...formValues, open: this.state.openDates });
  };
  render() {
    return (
      <div className="component-shop-form">
        <form
          className="component-shop-form__form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="name"
            className="component-shop-form__input"
            component={this.renderInput}
            placeholder="请输入商店名称"
          />
          <Field
            name="address"
            className="component-shop-form__input"
            component={this.renderInput}
            placeholder="请输入商店地址"
          />
          <Field
            name="telephone"
            className="component-shop-form__input"
            component={this.renderInput}
            placeholder="请输入联系电话"
          />
          <div className="component-shop-form__button-container">
            <button className="component-shop-form__button-submit">
              {this.props.button_label}
            </button>
          </div>
        </form>
        <label className="component-shop-form__date-picker__label">
          <DatePicker onChange={this.handleDateChange} />
          <i className="material-icons">date_range</i>
        </label>
        {this.renderOpenDates()}
      </div>
    );
  }
}

export default reduxForm({
  form: "shopForm",
  enableReinitialize: true
})(ShopForm);

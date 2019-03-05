import React from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "react-datepicker";

import { makeDate } from "../helpers";
import "react-datepicker/dist/react-datepicker.css";
import "../css/ShopForm.css";
import "../css/Calendar.css";

class ShopForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderInput = ({ input, placeholder }) => {
    return <input {...input} type="text" placeholder={placeholder} />;
  };
  handleDateChange = e => {
    const newDate = new Date(e);

    this.props.handleDateChange(newDate);
    this.setState({ openDates: this.props.shop.open });
  };

  renderOpenDates = () => {
    if (!this.props.shop) {
      return null;
    }
    if (this.props.shop.open.length <= 0) {
      return null;
    }
    return this.props.shop.open.map((openDate, index) => {
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
            onClick={() => {
              this.props.handleDateChange(new Date(openDate));
            }}
          >
            <i className="material-icons">clear</i>
          </span>
        </span>
      );
    });
  };

  getCalendarDayClass = () => {
    return "calendar__day";
  };

  onSubmit = formValues => {
    this.props.onSubmit({ ...formValues, open: this.state.openDates });
  };
  render() {
    if (!this.props.shop) {
      return <div className="component-shop-form">loading...</div>;
    }
    const highlightDates = this.props.shop.open.map(element => {
      return new Date(element);
    });

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
          <DatePicker
            dayClassName={this.getCalendarDayClass}
            onChange={this.handleDateChange}
            highlightDates={highlightDates}
            shouldCloseOnSelect={false}
            withPortal
          />
          <span className="component-shop-form__date-picker__title">
            请选择可以取货的日期
          </span>
          <i className="material-icons">date_range</i>
        </label>
        <div className="component-shop-form__open-dates__list">
          {this.renderOpenDates()}
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: "shopForm",
  enableReinitialize: true
})(ShopForm);

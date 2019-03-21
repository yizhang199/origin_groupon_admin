import React from "react";
import { Field, reduxForm } from "redux-form";
// import DatePicker from "react-datepicker";
import SetTimeForm from "./SetTimeForm";

import { makeDate } from "../../helpers";
import "react-datepicker/dist/react-datepicker.css";

class ShopForm extends React.Component {
  state = { showTimeForm: false };
  renderInput = ({ label, input, placeholder }) => {
    return (
      <div className="form-field">
        <label>
          <span>{label}</span>
          <input {...input} type="text" placeholder={placeholder} />
        </label>
      </div>
    );
  };
  handleDateChange = formValues => {
    const newDate = formValues;

    // if (
    //   newDate.getHours() !== this.state.startDate.getHours() ||
    //   newDate.getMinutes() !== this.state.startDate.getMinutes() ||
    //   newDate.getSeconds() !== this.state.startDate.getSeconds()
    // ) {
    this.props.handleDateChange(newDate);
    this.setState({ showTimeForm: false });
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
        <span key={`openDate${index}`} className="tag-container">
          <span className="open-date-tags">{makeDate(openDate.date)}</span>
          <span
            className="tag-dismiss"
            onClick={() => {
              this.props.handleDateChange(new Date(openDate.date));
            }}
          >
            <i className="material-icons">clear</i>
          </span>
        </span>
      );
    });
  };
  renderOpenDateTime = () => {
    const { open_date, open_time, close_time } = this.props.shop.open;
    if (!open_date) {
      return (
        <span className="tag-container">
          <span className="open-date-tags">没有设置日期和时间</span>
          <span
            className="tag-dismiss"
            onClick={() => {
              this.setState({ showTimeForm: true });
            }}
          >
            <i className="material-icons">edit</i>
          </span>
        </span>
      );
    }
    return (
      <span className="tag-container">
        <span className="open-date-tags">
          {makeDate(open_date)}: {open_time} -- {close_time}
        </span>
        <span
          className="tag-dismiss"
          onClick={() => {
            this.props.handleDateChange({});
          }}
        >
          <i className="material-icons">clear</i>
        </span>
      </span>
    );
  };
  getCalendarDayClass = () => {
    return "calendar__day";
  };

  onSubmit = () => {
    this.props.onSubmit();
  };
  render() {
    // if (!this.props.shop) {
    //   return <div className="component-shop-form">loading...</div>;
    // }
    // const highlightDates = this.props.shop
    //   ? this.props.shop.open.map(element => {
    //       return new Date(element);
    //     })
    //   : [];

    return (
      <div className="shop-form">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="name"
            label={`店面名`}
            component={this.renderInput}
            placeholder="请输入商店名称"
          />
          <Field
            name="address"
            label={`地址`}
            component={this.renderInput}
            placeholder="请输入商店地址"
          />
          <Field
            name="telephone"
            label={`联系电话`}
            component={this.renderInput}
            placeholder="请输入联系电话"
          />

          <button>{this.props.button_label}</button>
        </form>
        <label
          onClick={() => {
            this.setState({ showTimeForm: true });
          }}
          className="component-shop-form__date-picker__label"
        >
          {/* <DatePicker
            dayClassName={this.getCalendarDayClass}
            selected={this.state.startDate}
            onChange={this.handleDateChange}
            highlightDates={highlightDates}
            shouldCloseOnSelect={false}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            withPortal
          /> */}

          <span className="component-shop-form__date-picker__title">
            请选择可以取货的日期
          </span>
          <i className="material-icons">date_range</i>
        </label>
        {this.state.showTimeForm ? (
          <SetTimeForm
            onSubmit={this.handleDateChange}
            initialValues={this.props.shop.open}
            close={() => {
              this.setState({ showTimeForm: false });
            }}
          />
        ) : null}
        <div className="open-dates__list">{this.renderOpenDateTime()}</div>
      </div>
    );
  }
}

export default reduxForm({
  form: "shopForm",
  enableReinitialize: true
})(ShopForm);

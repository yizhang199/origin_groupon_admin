import React from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../css/ShopForm.css";

class ShopForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avaliableDates: [], openDates: [] };
  }
  renderInput = ({ input, placeholder }) => {
    return <input {...input} type="text" placeholder={placeholder} />;
  };
  handleDateChange = e => {
    const newDate = new Date(e);
    this.setState({ openDates: [...this.state.openDates, newDate] });
  };
  renderOpenDates = () => {
    return this.state.openDates.map((openDate, index) => {
      return (
        <span
          key={`openDate${index}`}
          className="component-shop-form__tag-container"
        >
          <span className="component-shop-form__open-date-tags">
            {this.getLocalDate(openDate)}
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
  getLocalDate = openDate => {
    const _year = openDate.getFullYear();

    const numberOfMonth = openDate.getMonth() + 1;
    const _month = numberOfMonth > 9 ? numberOfMonth : `0${numberOfMonth}`;

    const numberOfDate = openDate.getDate();
    const _date = numberOfDate > 9 ? numberOfDate : `0${numberOfDate}`;

    return `${_year}-${_month}-${_date}`;
  };
  render() {
    return (
      <div className="component-shop-form">
        <form className="component-shop-form__form">
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

export default reduxForm({ form: "shop-form" })(ShopForm);

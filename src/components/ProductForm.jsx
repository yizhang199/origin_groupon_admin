import React from "react";

import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import "../css/EditForm.css";
import { fetchOptions } from "../actions";
import ProductFormCategorySelector from "./ProductFormCategorySelector";
class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productOptions: [],
      isShowAddOptionForm: false,
      isShowAddCategoryForm: false
    };
  }
  componentDidMount() {
    this.props.fetchOptions();
  }
  /**
   * render input JSX from redux form field
   * @param {Object} {input,placeholder,meta}
   * @returns {JSX}
   */
  renderInput = ({ input, placeholder, meta }) => {
    return (
      <div className="form-field">
        <input
          type="text"
          {...input}
          className="form-input"
          placeholder={placeholder}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  /**
   * render form validation errors
   *
   */
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="form-error-message">{error}</div>;
    }
  };
  onSubmit = formValues => {};

  handleSelectChange = e => {
    if (e.target.value === "new") {
      this.setState({ isShowAddOptionForm: true });
      return;
    }

    const i = parseInt(e.target.dataset.stateProductOptionIndex);
    const option_id = parseInt(e.target.value);

    const newArray = this.state.productOptions.map((option, index) => {
      if (index === i) {
        let newOption;
        this.props.options.map(ele => {
          if (ele.option_id === option_id) {
            newOption = ele;
            newOption.value = ele.option_id;
          }
        });
        return newOption;
      }
      return option;
    });
    this.setState({
      productOptions: newArray
    });
  };

  renderSelectInputOptions = () => {
    return this.props.options.map(ele => {
      return (
        <option value={ele.option_id} key={`eleOption${ele.option_id}`}>
          {ele.name}
        </option>
      );
    });
  };
  handleProductOptionValueChange = e => {
    console.log("dataset: ", e.target.dataset);

    const option_id = parseInt(e.target.dataset.optionId);
    console.log("option_id", option_id);

    this.setState({
      productOptions: this.state.productOptions.map(productOption => {
        if (productOption.option_id === option_id) {
          productOption.option_value = e.target.value;
        }
        return productOption;
      })
    });
  };
  renderOptionValues = (option, position) => {
    if (option.values) {
      return (
        <select
          value={this.state.productOptions[position].values[0].value}
          onChange={this.handleProductOptionValueChange}
          data-option-id={option.option_id}
        >
          {option.values.map((value, index) => {
            return (
              <option key={`values${index}`} value={value.option_value_id}>
                {value.name}
              </option>
            );
          })}
        </select>
      );
    }
  };
  renderOptionsJSX = () => {
    console.log("state", this.state.productOptions);

    return this.state.productOptions.map((productOption, index) => {
      if (productOption) {
        return (
          <div key={`productOption${index}`}>
            <select
              value={productOption.value}
              data-state-product-option-index={index}
              data-option-id={productOption.option_id}
              onChange={this.handleSelectChange}
            >
              {this.renderSelectInputOptions()}
              <option value="new">add ...</option>
            </select>
            {this.renderOptionValues(productOption, index)}
          </div>
        );
      }
    });
  };
  handleCreateNewProductOption = e => {};
  addNewProductOption = () => {
    this.setState({
      productOptions: [
        ...this.state.productOptions,
        { option_id: 0, value: "" }
      ]
    });
  };
  render() {
    return (
      <div className="component-edit-form">
        <div className="component-edit-form__header">
          <ProductFormCategorySelector />
        </div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="edit-form"
        >
          <div className="component-edit-form__subtitle">
            商品名称请分别填写中英文
          </div>
          <Field
            name="chinese_name"
            component={this.renderInput}
            placeholder="中文名"
          />
          <Field
            name="english_name"
            component={this.renderInput}
            placeholder="英文名"
          />
          <div className="component-edit-form__subtitle">
            商品单价保留小数点后2位.
            <span style={{ color: "red" }}>
              当配置规格后该商品价格只起展示作用
            </span>
          </div>
          <div className="component-edit-form__button-group">
            <label className="component-edit-form__button-group__wrapper">
              <Field
                name="price"
                component={this.renderInput}
                placeholder="单价,例如 12.80"
                className="component-edit-form__button-group__input"
              />
              <span className="component-edit-form__button-group__label">
                澳元
              </span>
            </label>
          </div>
          <div className="component-edit-form__subtitle">
            商品排序.
            <span style={{ color: "red" }}>必须为整数</span>
          </div>
          <div className="component-edit-form__button-group">
            <label className="component-edit-form__button-group__wrapper">
              <Field
                name="sort_id"
                component={this.renderInput}
                className="component-edit-form__button-group__input"
                placeholder="商品显示优先级,如1,2..."
              />
              <span className="component-edit-form__button-group__extra-label">
                <i className="material-icons">add</i>
              </span>
              <span className="component-edit-form__button-group__label">
                <i className="material-icons">remove</i>
              </span>
            </label>
          </div>
          <div className="component-edit-form__subtitle">
            商品库存.
            <span style={{ color: "red" }}>必须为整数</span>
          </div>
          <div className="component-edit-form__button-group">
            <label className="component-edit-form__button-group__wrapper">
              <Field
                name="quantity"
                component={this.renderInput}
                className="component-edit-form__button-group__input"
                placeholder="商品库存数量"
              />
            </label>
          </div>
          <div className="component-edit-form__subtitle">
            团购最大值.
            <span style={{ color: "red" }}>必须为整数</span>
          </div>
          <div className="component-edit-form__button-group">
            <Field
              name="stock_level_id"
              component={this.renderInput}
              placeholder="设置MaxNumber"
            />
          </div>
          <div className="component-edit-form__subtitle">
            添加产品规格.
            <span style={{ color: "red" }}>可不填.</span>
            <div onClick={this.addNewProductOption}>add option</div>
          </div>
          <div className="component-edit-form__button-group">
            {this.renderOptionsJSX()}
          </div>
          <div className="component-edit-form__button-wrapper">
            <button className="component-edit-form__submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.chinese_name) {
    errors.chinese_name = "您需要提供一个有效的中文名";
  }
  if (!formValues.english_name) {
    errors.english_name = "你需要提供一个有效的英文名";
  }
  return errors;
};

const mapStateToProps = ({ options }) => {
  return { options };
};

const formWrapper = reduxForm({ form: "productForm", validate })(EditForm);
export default connect(
  mapStateToProps,
  { fetchOptions }
)(formWrapper);

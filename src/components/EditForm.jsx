import React from "react";
import { Field, reduxForm } from "redux-form";

class EditForm extends React.Component {
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

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="form-error-message">{error}</div>;
    }
  };
  onSubmit = formValues => {};
  render() {
    return (
      <div className="component-edit-form">
        <div className="component-edit-form__header">
          <div className="component-edit-form__bar">
            <span>商品分类</span>
            <span className="component-edit-form__selector">
              <span>全部</span>
              <i className="material-icons">keyboard_arrow_right</i>
            </span>
          </div>
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

          {/* Todo::How to add options to a new product (user friendly) */}

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
                placeholder="单价"
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
              <input
                type="text"
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
              name="quantity"
              component={this.renderInput}
              label="设置MaxNumber"
            />
          </div>
          <div className="component-edit-form__subtitle">
            添加产品规格.
            <span style={{ color: "red" }}>可不填.</span>
          </div>
          <div className="component-edit-form__button-group">
            <select name="option_1" id="">
              <option value="1">辣度</option>
              <option value="2">甜度</option>
              <option value="3">配料</option>
              <option value="4">分量</option>
            </select>
            <br />
            <select name="option_1" id="">
              <option value="1">辣度</option>
              <option value="2">甜度</option>
              <option value="3">配料</option>
              <option value="4">分量</option>
            </select>
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

export default reduxForm({ form: "eidtProduct", validate })(EditForm);

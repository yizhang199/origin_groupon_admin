import React from "react";
import { Field, reduxForm } from "redux-form";

import "../css/CategoryForm.css";
class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      fileName: ""
    };
  }
  onSubmit = () => {
    this.props.onSubmit(this.state.image);
  };
  renderInput = ({ input, placeholder }) => {
    return (
      <input
        {...input}
        placeholder={placeholder}
        className="component-category-form__input"
      />
    );
  };
  renderFileInput = ({ input }) => {
    return (
      <input
        type="file"
        {...input}
        className="component-category-form__input"
      />
    );
  };

  onChange = e => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;

    this.props.setSelectCategoryImage(URL.createObjectURL(files[0]));
    this.setState({
      fileName: files[0].name
    });
    this.createImage(files[0]);
  };
  createImage = file => {
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({
        image: e.target.result
      });
    };
    reader.readAsDataURL(file);
  };

  renderImage = () => {
    if (this.props.image === "") {
      return null;
    }
    return (
      <div className="component-category-form__upload-image__img-container">
        <img
          src={this.props.image}
          className="component-category-form__upload-image__img"
          alt=""
        />
      </div>
    );
  };

  // How To:: Upload image / files in React.js
  getFileName = () => {
    if (this.state.image === "") {
      return <span>请选择图片</span>;
    }
    return <span>{this.state.fileName}</span>;
  };

  render() {
    return (
      <div className="component-category-form">
        <form
          className="component-category-form__form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="component-category-form__text-input__container">
            <Field
              name="chinese_name"
              component={this.renderInput}
              placeholder="请输入中文名"
            />
            <Field
              name="english_name"
              component={this.renderInput}
              placeholder="请输入英文名"
            />
          </div>
          <div className="component-category-form__upload-image_container">
            <label className="component-category-form__upload-image_label">
              <input
                type="file"
                onChange={this.onChange}
                className="component-category-form__upload-image_input"
              />
              <i className="material-icons">attachment</i>
              {this.getFileName()}
            </label>
            {this.renderImage()}
            <button className="component-category-form__button">
              确认保存
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

const reduxFormWrapper = reduxForm({
  form: "categoryForm",
  validate,
  enableReinitialize: true
})(CategoryForm);

export default reduxFormWrapper;

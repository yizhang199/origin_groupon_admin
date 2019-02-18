import React from "react";
import { Field, reduxForm } from "redux-form";

import "../css/CategoryForm.css";
class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      file: ""
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
    this.setState({ file: URL.createObjectURL(e.target.files[0]) });
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

  render() {
    return (
      <div className="component-category-form">
        <form
          className="component-category-form__form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
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
          <input type="file" onChange={this.onChange} />
          <button className="component-category-form__button">Submit</button>
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

const reduxFormWrapper = reduxForm({ form: "categoryForm", validate })(
  CategoryForm
);

export default reduxFormWrapper;

import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../_context";

import ProductFormCategorySelector from "./ProductFormCategorySelector";

// import AddOptionToNewProductForm from "./AddOptionToNewProductForm";
const ProductForm = () => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     productOptions: [],
  //     isShowAddOptionForm: false,
  //     isShowAddCategoryForm: false,
  //     image: "",
  //     fileName: "",
  //     isGroupon: false
  //   };
  // }

  //   initialValues = {{
  //     chinese_name: product.descriptions[1].name,
  //       english_name: product.descriptions[0].name,
  //         price: product.product.price,
  //           sort_order: product.product.sort_order,
  //             stock_status_id: product.product.stock_status_id,
  //               quantity: product.product.quantity
  //   }
  // }
  const context = useContext(ProductContext);

  const { product, descriptions } = context.selectedProduct;

  const { price, sort_order, stock_status_id, quantity } = product
    ? product
    : {};

  const [en_desc, cn_desc] = descriptions ? descriptions : [];

  const [formValues, setFormValues] = useState({
    price: "",
    sort_order: "",
    stock_status_id: "",
    quantity: "",
    english_name: {},
    chinese_name: {}
  });

  useEffect(() => {
    setFormValues({
      price,
      sort_order,
      stock_status_id,
      quantity,
      english_name: en_desc.name,
      chinese_name: cn_desc.name
    });
  }, [context]);

  const onChange = e => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;

    this.props.setSelectProductImage(URL.createObjectURL(files[0]));
    this.setState({
      fileName: files[0].name
    });
    this.createImage(files[0]);
  };
  const createImage = file => {
    let reader = new FileReader();
    reader.onload = e => {
      this.setState({
        image: e.target.result
      });
    };
    reader.readAsDataURL(file);
  };

  const renderImage = () => {
    if (this.props.image === "") {
      return null;
    }

    return (
      <div className="component-edit-form__upload-image__img-container">
        <img
          src={`${this.props.image}`}
          className="component-edit-form__upload-image__img"
          alt=""
        />
      </div>
    );
  };

  // How To:: Upload image / files in React.js
  const getFileName = () => {
    if (this.state.image === "") {
      return <span>请选择图片</span>;
    }
    return <span>{this.state.fileName}</span>;
  };
  // componentDidMount() {
  //   this.props.fetchOptions();
  //   if (this.props.product) {
  //     this.setState({ isGroupon: this.props.product.isDiscount });
  //   }
  // }
  /**
   * render input JSX from redux form field
   * @param {Object} {input,placeholder,meta}
   * @returns {JSX}
   */
  const renderInput = ({ placeholder, name, className }) => {
    return (
      <div className="form-field">
        <input
          type="text"
          className={className}
          placeholder={placeholder}
          value={formValues[name]}
          onChange={e => {
            setFormValues({ ...formValues, [name]: e.target.value });
          }}
        />
      </div>
    );
  };

  const onSubmit = () => {
    // onSubmit(this.state.image, this.state.isGroupon);
  };

  const renderGrouponControl = () => {
    if (!this.state.isGroupon) {
      return null;
    }
    return (
      <div className="component-eidt-form__groupon-control">
        <div>
          <div className="component-edit-form__subtitle">
            团购价格.
            <span style={{ color: "red" }}>商品团购价保留小数点后2位.</span>
          </div>
          <div className="component-edit-form__button-group">
            <label className="component-edit-form__button-group__wrapper">
              {renderInput({
                name: "discountPrice",
                className: "component-edit-form__button-group__input",
                placeholder: "产品团购价格,例如: 10.00"
              })}
            </label>
          </div>
        </div>
        <div>
          <div className="component-edit-form__subtitle">
            团购最大值.
            <span style={{ color: "red" }}>必须为整数</span>
          </div>
          <div className="component-edit-form__button-group">
            <label className="component-edit-form__button-group__wrapper">
              {renderInput({
                name: "stock_status_id",
                placeholder: "团购上限,例如:20",
                className: "form-input"
              })}
            </label>
          </div>
        </div>
      </div>
    );
  };
  const renderGrouponSwitch = () => {
    if (!this.state.isGroupon) {
      return (
        <div
          onClick={() => {
            this.setState({ isGroupon: !this.state.isGroupon });
          }}
          className="groupon-switch__on"
        >
          开启团购
        </div>
      );
    }
    return (
      <div
        onClick={() => {
          this.setState({ isGroupon: !this.state.isGroupon });
        }}
        className="groupon-switch__off"
      >
        关闭团购
      </div>
    );
  };

  return (
    <div className="component-edit-form">
      <div className="component-edit-form__header">
        <ProductFormCategorySelector />
      </div>
      <form onSubmit={onSubmit} className="edit-form">
        <div className="component-edit-form__subtitle">
          商品名称请分别填写中英文
        </div>
        {renderInput({
          name: `chinese_name`,
          placeholder: "中文名",
          className: "form-input"
        })}
        {renderInput({
          name: `english_name`,
          placeholder: "英文名",
          className: "form-input"
        })}

        <div className="component-edit-form__big-container">
          <div className="component-edit-form__left">
            <div className="component-edit-form__form-field-group">
              <div className="component-edit-form__subtitle">
                商品单价保留小数点后2位.
              </div>
              <div className="component-edit-form__button-group">
                <label className="component-edit-form__button-group__wrapper">
                  {renderInput({
                    name: `price`,
                    placeholder: "单价,例如 12.80",
                    className: "component-edit-form__button-group__input"
                  })}
                </label>
              </div>
            </div>
            <div className="component-edit-form__form-field-group">
              <div className="component-edit-form__subtitle">
                商品排序.
                <span style={{ color: "red" }}>必须为整数</span>
              </div>
              <div className="component-edit-form__button-group">
                <label className="component-edit-form__button-group__wrapper">
                  {renderInput({
                    name: "sort_order",
                    className: "component-edit-form__button-group__input",
                    placeholder: "数字越大产品显示越靠前"
                  })}
                </label>
              </div>
            </div>
          </div>

          <div className="component-edit-form__right">
            <div className="component-edit-form__upload-image_container">
              <label className="component-edit-form__upload-image_label">
                <input
                  type="file"
                  onChange={onChange}
                  className="component-edit-form__upload-image_input"
                />
                <i className="material-icons">attachment</i>
                {/* {getFileName()} */}
              </label>

              {/* {renderImage()} */}
            </div>
          </div>
        </div>
        {/* {renderGrouponSwitch()} */}
        {/* {renderGrouponControl()} */}
        <div className="component-edit-form__button-wrapper">
          <button className="component-edit-form__submit-button">
            确认保存
          </button>
        </div>
      </form>
    </div>
  );
};

const validate = formValues => {
  const errors = {};
  if (!formValues.chinese_name) {
    errors.chinese_name = "您需要提供一个有效的中文名";
  }
  if (!formValues.english_name) {
    errors.english_name = "你需要提供一个有效的英文名";
  }
  if (!formValues.price) {
    errors.price = "你需要提供一个有效的价格";
  }
  if (isNaN(formValues.price)) {
    errors.price = "价格必须为数字";
  }
  if (!formValues.quantity) {
    errors.quantity = "请提供一个库存数量值";
  } else if (
    Number(formValues.quantity) === NaN ||
    Number(formValues.quantity) < 0 ||
    !Number.isInteger(Number(formValues.quantity))
  ) {
    errors.quantity = "库存数量必须为正整数";
  }
  if (!formValues.stock_status_id) {
    errors.stock_status_id = "请提供一个库存数量值";
  } else if (
    Number(formValues.stock_status_id) === NaN ||
    Number(formValues.stock_status_id) < 0 ||
    !Number.isInteger(Number(formValues.stock_status_id))
  ) {
    errors.stock_status_id = "库存数量必须为正整数";
  }
  return errors;
};

export default ProductForm;

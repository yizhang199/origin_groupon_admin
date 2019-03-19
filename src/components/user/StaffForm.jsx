import React from "react";
import { Field, reduxForm } from "redux-form";

const StaffForm = ({ onSubmit, handleSubmit }) => {
  const renderInput = ({ input, type, label, placeholder }) => {
    if (type === "checkbox") {
      return (
        <div className="form-field">
          <label>
            <span>{label}</span>
            <input {...input} type={type} placeholder={placeholder} />
          </label>
        </div>
      );
    }
    return (
      <div className="form-field">
        <label>
          <span>{label}</span>
          <input {...input} type={type} placeholder={placeholder} />
        </label>
      </div>
    );
  };

  return (
    <form
      onClick={e => {
        e.stopPropagation();
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field
        name="username"
        component={renderInput}
        type="text"
        label={`用户名`}
        placeholder={`请输入用户名`}
      />

      <Field
        name="phone"
        type="text"
        label={`电话`}
        component={renderInput}
        placeholder="请输入用户电话"
      />

      <Field
        name="email"
        type="text"
        label={`电子邮箱`}
        component={renderInput}
        placeholder="请输入用户电子邮箱"
      />
      <Field
        name="password"
        type="password"
        label="新密码"
        component={renderInput}
        placeholder="请输入新密码"
      />
      <Field
        name="status"
        type="select"
        label={`用户状态`}
        component={renderInput}
        placeholder=""
      />
      <Field
        name="accessOrders"
        type="checkbox"
        label={`订单管理`}
        component={renderInput}
        placeholder=""
      />
      <Field
        name="accessProducts"
        type="checkbox"
        label={`产品管理`}
        component={renderInput}
        placeholder=""
      />
      <Field
        name="accessSalesGroups"
        type="checkbox"
        label={`团购管理`}
        component={renderInput}
        placeholder=""
      />
      <Field
        name="accessReports"
        type="checkbox"
        label={`报表管理`}
        component={renderInput}
        placeholder=""
      />
      <Field
        name="accessAccounts"
        type="checkbox"
        label={`人员管理`}
        component={renderInput}
        placeholder=""
      />
      <button>确认保存</button>
    </form>
  );
};

export default reduxForm({ form: "staffForm", enableReinitialize: true })(
  StaffForm
);

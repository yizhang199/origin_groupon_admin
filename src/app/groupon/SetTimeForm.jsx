import React from "react";
import { Field, reduxForm } from "redux-form";
const SetTimeForm = ({ onSubmit, handleSubmit, close }) => {
  const renderInput = ({ input, label, type }) => {
    return (
      <div className="form-field">
        <label>
          <span>{label}</span>
          <input {...input} type={type} />
        </label>
      </div>
    );
  };

  return (
    <form className="time-form" onSubmit={handleSubmit(onSubmit)}>
      <i className={`material-icons`} onClick={close}>
        clear
      </i>
      <Field
        name={`open_date`}
        label={`取货期日`}
        type={`date`}
        component={renderInput}
      />
      <Field
        name={`open_time`}
        label={`起始时间`}
        type={`time`}
        component={renderInput}
      />
      <Field
        name={`close_time`}
        label={`截止时间`}
        type={`time`}
        component={renderInput}
      />
      <button>确定保存</button>
    </form>
  );
};

export default reduxForm({ form: "dtForm", enableReinitialize: true })(
  SetTimeForm
);

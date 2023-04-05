import React from "react";
import "./FormInput.component.scss";
const FormInput = ({ ...otherProps }) => {
  return (
    <div className="formInput">
      <input className="formInput__input" {...otherProps} autoComplete="off" />
    </div>
  );
};

export default FormInput;

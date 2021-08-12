import React from "react";
import { FormInputWrapper } from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <FormInputWrapper>
      <input onChange={handleChange} {...otherProps} />
      <label className={otherProps.value?.length && "shrink"}>{label}</label>
    </FormInputWrapper>
  );
};

export default FormInput;

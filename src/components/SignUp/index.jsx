import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../redux/users/users.actions";
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import { SignUpWrapper } from "./SignUp.styles";

const SignUp = () => {
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.password !== values.confirmPassword) {
      alert("Password and confirm password do not match.");
      return;
    }

    dispatch(signUpStart(values));
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <SignUpWrapper>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={values.displayName}
          required
          handleChange={handleChange}
          label="Display Name"
        />
        <FormInput
          type="email"
          name="email"
          value={values.email}
          required
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={values.password}
          required
          handleChange={handleChange}
          label="Password"
        />
        <FormInput
          type="Password"
          name="confirmPassword"
          value={values.confirmPassword}
          required
          handleChange={handleChange}
          label="Confirm Password"
        />

        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;

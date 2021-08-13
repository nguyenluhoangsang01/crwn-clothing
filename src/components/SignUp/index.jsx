import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.password !== values.confirmPassword) {
      alert("Password and confirm password do not match.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      await createUserProfileDocument(user, values.displayName);

      setValues({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
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

import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import { SignInWrapper } from "./SignIn.styles";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ email: "", password: "" });
  };
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <SignInWrapper>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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
        <div>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </SignInWrapper>
  );
};

export default SignIn;

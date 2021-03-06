import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/users/users.actions";
import CustomButton from "../CustomButton";
import FormInput from "../FormInput";
import { SignInWrapper } from "./SignIn.styles";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(emailSignInStart(credentials));

    setCredentials({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    setCredentials({
      ...credentials,
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
          value={credentials.email}
          required
          handleChange={handleChange}
          label="Email"
        />

        <FormInput
          type="password"
          name="password"
          value={credentials.password}
          required
          handleChange={handleChange}
          label="Password"
        />

        <div>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </SignInWrapper>
  );
};

export default SignIn;

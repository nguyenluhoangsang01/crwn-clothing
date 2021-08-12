import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import { SignInAndSignUpPageWrapper } from "./SignInAndSignUpPage.styles";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpPageWrapper>
      <SignIn />
      <SignUp />
    </SignInAndSignUpPageWrapper>
  );
};

export default SignInAndSignUpPage;

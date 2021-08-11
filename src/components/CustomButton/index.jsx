import React from "react";
import { StyledButton } from "./CustomButton.styles";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <StyledButton
      className={`${isGoogleSignIn && "google-sign-in"}`}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;

import React from "react";
import { StyledButton } from "./CustomButton.styles";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <StyledButton
      className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      }`}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;

import React from "react";
import { SpinnerCircled, SpinnerWrapper } from "./Spinner.styles";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerWrapper>
        <SpinnerCircled />
      </SpinnerWrapper>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;

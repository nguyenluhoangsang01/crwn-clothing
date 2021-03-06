import styled from "styled-components";

export const FormInputWrapper = styled.div`
  position: relative;
  margin: 30px 0;

  input {
    background: none;
    background-color: #fff;
    color: grey;
    font-size: 18px;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 10px 0 25px;

    &:focus {
      outline: none;
    }

    &:focus ~ label {
      top: -14px;
      font-size: 12px;
      color: black;
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  label {
    color: grey;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      top: -14px;
      font-size: 12px;
      color: black;
    }
  }
`;

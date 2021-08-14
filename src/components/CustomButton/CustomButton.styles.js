import styled from "styled-components";

export const StyledButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease-in;
  display: flex;
  justify-content: center;

  &.google-sign-in {
    background-color: #4285f4;
    color: #fff;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }

  &.inverted {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;

    &:hover {
      background-color: #000;
      color: #fff;
      border: none;
    }
  }

  @media screen and (max-width: 375px) {
    width: 50%;
  }
`;

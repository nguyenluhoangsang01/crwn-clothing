import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  position: relative;

  .logo {
    display: flex;
    align-items: center;
  }

  span,
  a {
    height: 100%;
    padding: 25px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span,
  a {
    padding: 10px 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  padding: 0;
  width: 30px;
  height: 3px;
  border-radius: 30px;
  background-color: grey;
  position: relative;
  cursor: pointer;

  &:before {
    content: "";
    top: -10px;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: inherit;
    border-radius: inherit;
  }

  &:after {
    content: "";
    bottom: -10px;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: inherit;
    border-radius: inherit;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

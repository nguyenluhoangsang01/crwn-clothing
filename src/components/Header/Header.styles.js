import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  span,
  a {
    height: 100%;
    padding: 25px;
  }

  div {
    width: 50%;
    height: 100%;
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
  }
`;

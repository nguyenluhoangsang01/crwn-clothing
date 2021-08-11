import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  a {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  div {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      padding: 10px 15px;
      display: flex;
      align-items: center;
    }
  }
`;

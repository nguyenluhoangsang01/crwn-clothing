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

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span,
  a {
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

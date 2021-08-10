import styled from "styled-components";

export const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MenuItem = styled.div`
  min-width: 30%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  height: 240px;
  margin: 0 7.5px 15px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  & > div {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

    & > h1 {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }

    & > span {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`;

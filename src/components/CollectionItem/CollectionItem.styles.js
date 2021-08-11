import styled from "styled-components";

export const CollectionItemWrapper = styled.div`
  width: 22%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 350px;

  .bgc {
    width: 100%;
    height: 100%;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: cover;
    background-position: cover;
    margin-bottom: 5px;
    border-radius: 2.5px;
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  span:first-child {
    width: 90%;
    margin-bottom: 15px;
  }

  span:last-child {
    width: 10%;
  }
`;

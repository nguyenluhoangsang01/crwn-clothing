import styled from "styled-components";

export const CollectionItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 350px;
  position: relative;

  .bgc {
    width: 100%;
    height: 100%;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    border-radius: 2.5px;
    transition: all 0.15s ease-in;
  }

  .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    .bgc {
      opacity: 0.8;
    }

    .custom-button {
      display: flex;
      opacity: 0.85;
    }
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

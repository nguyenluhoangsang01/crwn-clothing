import styled from "styled-components";

export const MenuItemWrapper = styled.div`
  min-width: 30%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  height: 240px;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 380px;
    display: block;
    width: 100%;
    margin-bottom: 30px;
  }

  &:hover {
    cursor: pointer;

    div:first-child {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    div:last-child {
      opacity: 0.9;
      transition: opacity 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }

  &.large {
    height: 380px;
  }

  div:last-child {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: #fff;
    opacity: 0.7;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 480px) {
      width: 70%;
    }
  }
`;

export const Bgc = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin: 0;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

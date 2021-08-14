import styled from "styled-components";

export const CartItemWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    padding: 0 !important;
    padding-left: 16px !important;
    font-size: 16px;
    line-height: 1.6;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;

import styled from "styled-components";

export const CartDropDownWrapper = styled.div`
  position: absolute;
  width: 240px;
  height: ${({ itemCount }) => (itemCount !== 0 ? "340px" : "90px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #000;
  background-color: #fff;
  top: 80px;
  right: 0;
  z-index: 5;
`;

export const CartItemWrapper = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

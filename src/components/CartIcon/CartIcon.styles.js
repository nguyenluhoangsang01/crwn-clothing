import styled from "styled-components";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

export const CartIconWrapper = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  span {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: -3px;
  }
`;

export const StyledShoppingBag = styled(ShoppingBag)`
  width: 24px;
  height: 24px;
`;

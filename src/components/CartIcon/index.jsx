import React from "react";

import { CartIconWrapper, StyledShoppingBag } from "./CartIcon.styles";

const CartIcon = ({ onClickCartIcon }) => {
  return (
    <CartIconWrapper onClick={onClickCartIcon}>
      <StyledShoppingBag />
      <span>0</span>
    </CartIconWrapper>
  );
};

export default CartIcon;

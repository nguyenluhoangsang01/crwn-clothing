import React, { useContext } from "react";
import { CartContext } from "../../providers/carts/provider";
import { CartIconWrapper, StyledShoppingBag } from "./CartIcon.styles";

const CartIcon = () => {
  const { toggleHidden, cartItemCount } = useContext(CartContext);

  return (
    <CartIconWrapper onClick={toggleHidden}>
      <StyledShoppingBag />
      <span>{cartItemCount}</span>
    </CartIconWrapper>
  );
};

export default CartIcon;

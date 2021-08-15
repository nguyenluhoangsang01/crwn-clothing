import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemQuantity } from "../../redux/cart/cart.selectors";
import { CartIconWrapper, StyledShoppingBag } from "./CartIcon.styles";

const CartIcon = ({ onClickCartIcon }) => {
  const cartItemQuantity = useSelector((state) =>
    selectCartItemQuantity(state)
  );

  return (
    <CartIconWrapper onClick={onClickCartIcon}>
      <StyledShoppingBag />
      <span>{cartItemQuantity}</span>
    </CartIconWrapper>
  );
};

export default CartIcon;

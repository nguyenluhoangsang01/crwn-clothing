import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Context } from "../../context/cart";
import { selectCartItemQuantity } from "../../redux/cart/cart.selectors";
import { CartIconWrapper, StyledShoppingBag } from "./CartIcon.styles";

const CartIcon = () => {
  const cartItemQuantity = useSelector(selectCartItemQuantity);

  const [hidden, setHidden] = useContext(Context);

  return (
    <CartIconWrapper onClick={() => setHidden(!hidden)}>
      <StyledShoppingBag />
      <span>{cartItemQuantity}</span>
    </CartIconWrapper>
  );
};

export default CartIcon;

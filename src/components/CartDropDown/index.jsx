import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItem,
  selectCartItemQuantity,
} from "../../redux/cart/cart.selectors";
import CartItem from "../CartItem";
import CustomButton from "../CustomButton";
import { CartDropDownWrapper, CartItemWrapper } from "./Cart.styles";

const CartDropDown = () => {
  const cartItems = useSelector((state) => selectCartItem(state));
  const cartItemQuantity = useSelector((state) =>
    selectCartItemQuantity(state)
  );

  return (
    <CartDropDownWrapper itemCount={cartItemQuantity}>
      {cartItemQuantity !== 0 && (
        <CartItemWrapper>
          {cartItems.map((cartItem, index) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </CartItemWrapper>
      )}

      <CustomButton>go to checkout</CustomButton>
    </CartDropDownWrapper>
  );
};

export default CartDropDown;

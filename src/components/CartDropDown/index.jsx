import React from "react";
import CustomButton from "../CustomButton";
import { CartDropDownWrapper, CartItem } from "./Cart.styles";

const CartDropDown = () => {
  return (
    <CartDropDownWrapper>
      <CartItem />
      <CustomButton>go to checkout</CustomButton>
    </CartDropDownWrapper>
  );
};

export default CartDropDown;

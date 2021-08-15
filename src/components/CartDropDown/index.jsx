import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectCartItemQuantity,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import CartItem from "../CartItem";
import CustomButton from "../CustomButton";
import { CartDropDownWrapper, CartItemWrapper } from "./Cart.styles";

const CartDropDown = ({ onClickCustom }) => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const cartItemQuantity = useSelector((state) =>
    selectCartItemQuantity(state)
  );
  const history = useHistory();

  return (
    <CartDropDownWrapper itemCount={cartItemQuantity}>
      {cartItemQuantity !== 0 && (
        <CartItemWrapper>
          {cartItems.map((cartItem, index) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </CartItemWrapper>
      )}

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          onClickCustom();
        }}
      >
        go to checkout
      </CustomButton>
    </CartDropDownWrapper>
  );
};

export default CartDropDown;

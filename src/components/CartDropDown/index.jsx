import React from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import CustomButton from "../CustomButton";
import { CartDropDownWrapper, CartItemWrapper } from "./Cart.styles";

const CartDropDown = ({ cartItems }) => {
  return (
    <CartDropDownWrapper>
      <CartItemWrapper>
        {cartItems.map((cartItem, index) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </CartItemWrapper>

      <CustomButton>go to checkout</CustomButton>
    </CartDropDownWrapper>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropDown);

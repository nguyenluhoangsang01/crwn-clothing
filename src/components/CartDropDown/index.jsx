import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../providers/carts/provider";
import { selectCurrentUser } from "../../redux/users/users.selectors";
import CartItem from "../CartItem";
import CustomButton from "../CustomButton";
import { CartDropDownWrapper, CartItemWrapper } from "./Cart.styles";

const CartDropDown = () => {
  const currentUser = useSelector(selectCurrentUser);
  const history = useHistory();

  const { toggleHidden, cartItems, cartItemCount } = useContext(CartContext);

  return (
    <CartDropDownWrapper itemCount={cartItemCount}>
      {cartItemCount !== 0 && (
        <CartItemWrapper>
          {cartItems.map((cartItem, index) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </CartItemWrapper>
      )}

      <CustomButton
        onClick={() => {
          history.push(currentUser ? "/checkout" : "/sign-in");
          toggleHidden();
        }}
      >
        go to checkout
      </CustomButton>
    </CartDropDownWrapper>
  );
};

export default CartDropDown;

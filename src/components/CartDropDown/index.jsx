import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Context } from "../../context/cart";
import {
  selectCartItemQuantity,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/users/users.selectors";
import CartItem from "../CartItem";
import CustomButton from "../CustomButton";
import { CartDropDownWrapper, CartItemWrapper } from "./Cart.styles";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemQuantity = useSelector(selectCartItemQuantity);
  const currentUser = useSelector(selectCurrentUser);
  const history = useHistory();

  const [hidden, setHidden] = useContext(Context);

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
          history.push(currentUser ? "/checkout" : "/sign-in");
          setHidden(!hidden);
        }}
      >
        go to checkout
      </CustomButton>
    </CartDropDownWrapper>
  );
};

export default CartDropDown;

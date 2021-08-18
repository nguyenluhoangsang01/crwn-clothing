import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem";
import StripeButton from "../../components/StripeButton";
import {
  selectCartItems,
  selectCartItemTotalPrice,
} from "../../redux/cart/cart.selectors";
import {
  CheckoutPageHeader,
  CheckoutPageHeaderBlock,
  CheckoutPageTotalPrice,
  CheckoutPageWrapper,
  TextWarning,
} from "./CheckoutPage.styles";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartItemTotalPrice);

  return (
    <CheckoutPageWrapper>
      <CheckoutPageHeader>
        <CheckoutPageHeaderBlock>Product</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Description</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Quantity</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Price</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Remove</CheckoutPageHeaderBlock>
      </CheckoutPageHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <CheckoutPageTotalPrice>total: ${totalPrice}</CheckoutPageTotalPrice>

      <TextWarning>
        *Please use the following test credit card for payments*
        <br />
        <br />
        Card number: 4242 4242 4242 4242 - Exp: Any future date - CVC: Any 3
        digits
      </TextWarning>

      <StripeButton price={totalPrice} />
    </CheckoutPageWrapper>
  );
};

export default CheckoutPage;

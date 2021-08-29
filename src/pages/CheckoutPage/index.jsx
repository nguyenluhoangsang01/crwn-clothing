import React, { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem";
import StripeButton from "../../components/StripeButton";
import { CartContext } from "../../providers/carts/provider";
import {
  CheckoutPageHeader,
  CheckoutPageHeaderBlock,
  CheckoutPageTotalPrice,
  CheckoutPageWrapper,
  TextWarning,
} from "./CheckoutPage.styles";

const CheckoutPage = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <CheckoutPageWrapper>
      <CheckoutPageHeader>
        <CheckoutPageHeaderBlock>Product</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Description</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Quantity</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Price</CheckoutPageHeaderBlock>
        <CheckoutPageHeaderBlock>Remove</CheckoutPageHeaderBlock>
      </CheckoutPageHeader>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
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

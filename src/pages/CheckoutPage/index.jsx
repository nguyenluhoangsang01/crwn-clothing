import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem";
import {
  selectCartItems,
  selectCartItemTotalPrice,
} from "../../redux/cart/cart.selectors";
import {
  CheckoutPageHeader,
  CheckoutPageHeaderBlock,
  CheckoutPageTotalPrice,
  CheckoutPageWrapper,
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
    </CheckoutPageWrapper>
  );
};

export default CheckoutPage;

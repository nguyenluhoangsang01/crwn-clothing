import React from "react";
import { CartItemWrapper, ItemDetails } from "./CartItem.styles";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <CartItemWrapper>
      <img src={imageUrl} alt={`${name}-item`} />

      <ItemDetails>
        <span title={name}>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemWrapper>
  );
};

export default CartItem;

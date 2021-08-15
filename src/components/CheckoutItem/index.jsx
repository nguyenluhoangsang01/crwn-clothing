import React from "react";
import { CheckoutItemImage, CheckoutItemWrapper } from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => {
  return (
    <CheckoutItemWrapper>
      <CheckoutItemImage>
        <img src={imageUrl} alt={`${name}-item`} />
      </CheckoutItemImage>

      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price * quantity}</span>

      <div className="remove-button"> &#10007;</div>
    </CheckoutItemWrapper>
  );
};

export default CheckoutItem;

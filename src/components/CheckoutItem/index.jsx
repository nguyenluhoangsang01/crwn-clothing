import React, { useContext } from "react";
import { CartContext } from "../../providers/carts/provider";
import { CheckoutItemImage, CheckoutItemWrapper } from "./CheckoutItem.styles";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

  return (
    <CheckoutItemWrapper>
      <CheckoutItemImage>
        <img src={imageUrl} alt={`${name}-item`} />
      </CheckoutItemImage>

      <span className="name" title={name}>
        {name}
      </span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>

      <span className="price">${price * quantity}</span>

      <div className="remove-button" onClick={() => clearItemFromCart(item)}>
        &#10007;
      </div>
    </CheckoutItemWrapper>
  );
};

export default CheckoutItem;

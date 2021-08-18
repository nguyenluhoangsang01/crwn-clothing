import React from "react";
import { useDispatch } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";
import { CheckoutItemImage, CheckoutItemWrapper } from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  const dispatch = useDispatch();

  const addItemDispatch = (cartItem) => {
    dispatch(addItem(cartItem));
  };
  const removeItemDispatch = (cartItem) => {
    dispatch(removeItem(cartItem));
  };
  const clearItemDispatch = (cartItem) => {
    dispatch(clearItem(cartItem));
  };

  return (
    <CheckoutItemWrapper>
      <CheckoutItemImage>
        <img src={imageUrl} alt={`${name}-item`} />
      </CheckoutItemImage>

      <span className="name" title={name}>
        {name}
      </span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItemDispatch(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemDispatch(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">${price * quantity}</span>

      <div
        className="remove-button"
        onClick={() => clearItemDispatch(cartItem)}
      >
        &#10007;
      </div>
    </CheckoutItemWrapper>
  );
};

export default CheckoutItem;

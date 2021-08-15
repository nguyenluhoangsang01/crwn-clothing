import React from "react";
import { connect } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";
import { CheckoutItemImage, CheckoutItemWrapper } from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  return (
    <CheckoutItemWrapper>
      <CheckoutItemImage>
        <img src={imageUrl} alt={`${name}-item`} />
      </CheckoutItemImage>

      <span className="name" title={name}>
        {name}
      </span>

      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">${price * quantity}</span>

      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10007;
      </div>
    </CheckoutItemWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

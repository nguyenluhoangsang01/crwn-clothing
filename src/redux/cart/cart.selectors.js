import { createSelector } from "reselect";

export const selectCartItem = (state) => state.cart.cartItems;

export const selectCartItemQuantity = createSelector(
  selectCartItem,
  (cartItem) =>
    cartItem.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

import { createSelector } from "reselect";

export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemQuantity = createSelector(
  selectCartItems,
  (cartItem) =>
    cartItem.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartItemTotalPrice = createSelector(
  selectCartItems,

  (cartItem) =>
    cartItem.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);

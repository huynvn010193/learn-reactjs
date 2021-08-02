import { createSelector } from '@reduxjs/toolkit';

const cartItemSelector = (state) => state.cart.cartItem;

// Count number of product in cart
export const cartItemsCountSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((count, item) => count + item.quantity, 0)
);

// Cacular total of card
export const cartTotalSelector = createSelector(cartItemSelector, (cartItems) =>
  cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0)
);

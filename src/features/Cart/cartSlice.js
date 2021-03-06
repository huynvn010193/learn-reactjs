import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItem: [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },

    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const index = state.cartItem.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        // increase quantity
        state.cartItem[index].quantity += newItem.quantity;
      } else {
        // add to cart
        state.cartItem.push(newItem);
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      // check if product is available in cart
      const index = state.cartItem.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      const idNeedRemove = action.payload;
      state.cartItem = state.cartItem.filter((x) => x.id !== idNeedRemove);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;
export default reducer;

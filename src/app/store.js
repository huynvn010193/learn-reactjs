import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import cartReducer from '../features/Cart/cartSlice';
import categoryReducer from '../features/Product/services/categorySlice';

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

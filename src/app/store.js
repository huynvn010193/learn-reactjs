import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import categoryReducer from '../features/Product/services/categorySlice';

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  category: categoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

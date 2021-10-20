import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../containers/basket/basketSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
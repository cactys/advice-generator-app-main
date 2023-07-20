import { configureStore } from '@reduxjs/toolkit';
import adviceSlice from './slices/adviceSlice';

export const store = configureStore({
  reducer: {
    advices: adviceSlice,
  },
});



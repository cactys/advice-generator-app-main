import { configureStore } from '@reduxjs/toolkit';
import adviceSlice from './slices/adviceSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    advices: adviceSlice,
    theme: themeSlice,
  },
});

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setSelectTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { setSelectTheme } = themeSlice.actions;
export default themeSlice.reducer;

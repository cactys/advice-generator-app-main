import { createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { fetchAdvices } from '../asyncThunk/fetchAdvices';

const initialState = {
  advices: [],
  status: '',
  error: null,
};

const adviceSlice = createSlice({
  name: 'advices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvices.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAdvices.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.advices = action.payload.slip;
      })
      .addMatcher(isRejectedWithValue(fetchAdvices), (state, action) => {
        state.status = 'rejected';
        state.error = action.payload.message;
      });
  },
});

export default adviceSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';

const fetchAdvices = createAsyncThunk(
  'advices/fetchAdvices',
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(BASE_URL);

      if (!res.ok) throw new Error('Server Error!');

      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchAdvices };

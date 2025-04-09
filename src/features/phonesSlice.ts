/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Phone } from '../types/phonesType';

export const fetchPhones = createAsyncThunk('phones/fetchPhones', async () => {
  const response = await fetch('/api/phones.json');

  if (!response.ok) {
    throw new Error('Failed to fetch phones');
  }

  return response.json();
});

interface PhonesState {
  phones: Phone[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PhonesState = {
  phones: [],
  status: 'idle',
  error: null,
};

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPhones.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPhones.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.phones = action.payload;
      })
      .addCase(fetchPhones.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default phonesSlice.reducer;

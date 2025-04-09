/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Tablets } from '../types/tabletsType';

export const fetchTablets = createAsyncThunk(
  'tablets/fetchTablets',
  async () => {
    const response = await fetch('/api/tablets.json');

    if (!response.ok) {
      throw new Error('Failed to fetch tablets');
    }

    return response.json();
  },
);

export interface TabletsState {
  tablets: Tablets[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TabletsState = {
  tablets: [],
  status: 'idle',
  error: null,
};

const tabletsSlice = createSlice({
  name: 'tablets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTablets.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTablets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tablets = action.payload;
      })
      .addCase(fetchTablets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default tabletsSlice.reducer;

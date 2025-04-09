/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Accessory } from '../types/accessoriesTypes';

// eslint-disable-next-line no-param-reassign
export const fetchAccessories = createAsyncThunk(
  'accessories/fetchAccessories',
  async () => {
    const response = await fetch('/api/accessories.json');

    if (!response.ok) {
      throw new Error('Failed to fetch accessories');
    }

    return response.json();
  },
);

export interface AccessoriesState {
  accessories: Accessory[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AccessoriesState = {
  accessories: [],
  status: 'idle',
  error: null,
};

const accessoriesSlice = createSlice({
  name: 'accessories',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAccessories.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAccessories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accessories = action.payload;
      })
      .addCase(fetchAccessories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default accessoriesSlice.reducer;

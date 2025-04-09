/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../types/phonesType';

export interface FavouriteState {
  favourite: Phone[];
}

const loadFavouritesFromStorage = (): Phone[] => {
  if (typeof window !== 'undefined') {
    const saved = sessionStorage.getItem('favourite');

    return saved ? JSON.parse(saved) : [];
  }

  return [];
};

const initialState: FavouriteState = {
  favourite: loadFavouritesFromStorage(),
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<Phone>) => {
      const existing = state.favourite.find(el => el.id === action.payload.id);

      if (!existing) {
        state.favourite.push(action.payload);
      } else {
        state.favourite = state.favourite.filter(
          el => el.id !== action.payload.id,
        );
      }

      sessionStorage.setItem('favourite', JSON.stringify(state.favourite));
    },
  },
});

export const { addToFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;

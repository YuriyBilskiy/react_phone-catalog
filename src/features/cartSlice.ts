/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../types/phonesType';

export interface ProductState {
  cart: Phone[];
  quantity: number;
}

const loadCartFromStorage = (): Phone[] => {
  if (typeof window !== 'undefined') {
    const saved = sessionStorage.getItem('cart');

    return saved ? JSON.parse(saved) : [];
  }

  return [];
};

const initialState: ProductState = {
  cart: loadCartFromStorage(),
  quantity: 0,
};

export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Phone>) => {
      const existingItem = state.cart.find(
        item => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.cart.find(item => item.id === action.payload);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.cart.find(item => item.id === action.payload);

      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.cart = state.cart.filter(item => item.id !== action.payload);
        }
      }
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decreaseQuantity,
  incrementQuantity,
} = productSlice.actions;

export default productSlice.reducer;

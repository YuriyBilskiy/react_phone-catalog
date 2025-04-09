import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/cartSlice';
import phonesSlice from '../features/phonesSlice';
import favouriteSlice from '../features/favouriteSlice';
import tabletsSlice from '../features/tabletsSlice';
import accessoriesSlice from '../features/accessoriesSlice';

export const store = configureStore({
  reducer: {
    cart: productSlice,
    phone: phonesSlice,
    favourite: favouriteSlice,
    tablets: tabletsSlice,
    accessories: accessoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

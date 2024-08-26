import wishlistSlice from './features/wishlist';
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './features/filterSlice';
import AuthSlice from './Slices/AuthSlice';

export const store = configureStore({
  reducer: {
    filter:filterSlice,
    wishlist:wishlistSlice,
    user:AuthSlice,
    AuthId:AuthSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
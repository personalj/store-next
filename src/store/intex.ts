import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/cart/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

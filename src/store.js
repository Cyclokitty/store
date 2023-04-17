import { configureStore } from '@reduxjs/toolkit';
import tagReducer from './ReduxSlices/tag/tagSlice';
import cartReducer from './ReduxSlices/cart/cartSlice';

export const store = configureStore({
    reducer: {
        tags: tagReducer,
        cart: cartReducer,
    },
});
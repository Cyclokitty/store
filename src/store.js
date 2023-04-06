import { configureStore } from '@reduxjs/toolkit';
import tagReducer from './ReduxSlices/tag/tagSlice';

export const store = configureStore({
    reducer: {
        tags: tagReducer,
    },
});
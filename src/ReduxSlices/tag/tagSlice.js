import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const tagsUrl = 'https://madexcitingopentracker.cyclokitty.repl.co/api/tags';

const initialState = {
    tags: [],
    isLoading: true,
};

export const getTags = createAsyncThunk('tags/getTags', async(name, thunkApi) => {
    try {
        const res = await axios(tagsUrl);
        console.log(name);
        console.log(thunkApi);
        return res.data;
    } catch(err) {
        console.log(err);
    }
});

const tagSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getTags.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTags.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.tags = action.payload;
            })
            .addCase(getTags.rejected, (state) => {
                state.isLoading = false;
            })
    }
});

export default tagSlice.reducer;
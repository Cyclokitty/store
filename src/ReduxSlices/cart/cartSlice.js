import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
     clearCart: (state) => {
        state.cartItems = [];
     },
     removeItem: (state, action) => {
        console.log(action);
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId);   
     },
     increase: (state, { payload }) => {
        state.cartItems.push(payload);
        console.log(payload)
        state.amount = state.amount + 1;
     },
     decrease: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => 
            item.id === payload.id);
        cartItem.amount = cartItem.amount - 1;
     },
     calculateTotals: (state) => {
        let amount = 0;
        let total = 0;
        // state.cartItems.forEach((item) => {
        //     amount += item.amount;
        //     total += item.amount * item.price;
        // });
        state.cartItems.forEach((item) => {
            total += item.itemPrice;
        });
        
        state.total = total.toFixed(2);
     },
     showCart: (state) => {
        console.log(state.cartItems);
     }
    }
});

console.log(cartSlice.initialState);

export const {
    clearCart,
    removeItem,
    increase,
    decrease,
    calculateTotals,
    showCart,
} = cartSlice.actions;

export default cartSlice.reducer;


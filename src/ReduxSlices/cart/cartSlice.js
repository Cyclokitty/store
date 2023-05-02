import { createSlice, current } from '@reduxjs/toolkit';

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
        console.log('order submitted')
     },
     addItem: (state, { payload }) => {
        console.log(payload)
        const itemId = payload.itemId;
        let findDup = state.cartItems.find((item) => item.itemId === itemId);
        if (findDup === undefined) {
            state.cartItems.push(payload);
            state.amount = state.amount + 1;
        } else {
            let itemAmount = findDup.itemAmount + 1;
            findDup = {...findDup, itemAmount};
            state.cartItems = state.cartItems.filter((item) => itemId !== item.itemId);
            state.cartItems.push(findDup);
            state.amount = state.amount + 1;   
        }
    }, 
    removeItem: (state, { payload }) => {        
        const itemId = payload;
        let findDup = state.cartItems.find((item) => item.itemId === itemId);
        console.log(current(findDup))
        if (findDup && findDup.itemAmount >= 1) {
            findDup.itemAmount = findDup.itemAmount - 1;
            console.log(findDup.itemAmount)
            state.amount = state.amount - 1;
        }   
                          
        if (findDup.itemAmount === 0) {
            state.cartItems = state.cartItems.filter((item) => itemId !== item.itemId);
            state.amount = state.amount - 1; 
        }       
     }, 
     increase: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
        const cartItem = state.cartItems.find((item) => item.id === payload.id);
        cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
        let amount = 0;
        let total = 0;
        state.cartItems.forEach((item) => {
            amount += item.itemAmount;
            total += item.itemAmount * item.itemPrice;
        });
        state.amount = amount;
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
    addItem,
    removeItem,
    increase,
    decrease,
    calculateTotals,
    showCart,
} = cartSlice.actions;

export default cartSlice.reducer;


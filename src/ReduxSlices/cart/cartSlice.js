import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import axios from 'axios';
import { tagsUrl1, tagsUrl2, tagsUrl3, tagsUrl4, orderUrl, orderUrl2 } from '../../constants';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    order: {},
    time: 0,
    customer: {},
};

export const sendOrder = createAsyncThunk('cart/sendOrder', async(order, customer) => {
    try {
        if (Object.keys(order.order).length === 0) {
            console.log('no');
            throw new Error('The cart is empty')
        } 
        
        return await axios.post(orderUrl2, {
            method: 'POST',
            data: {
                order: order
            },
        })
    
        .then((res) => {
            return res.data;
        });
    }
    catch(err) {
        console.log(err);
    }
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
     clearCart: (state) => {
        state.cartItems = [];
        state.amount = 0;
        state.total = 0;
        state.order = {};
        state.customer = {};
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
     }, 
     createOrder: (state, { payload }) => {
        let setup = Date.now();
        state.order = {
            order: payload.cartItems, 
            total: payload.total, 
            amount: payload.amount,
            time: setup
        }
        console.log(state.order)
     },
     createCustomer: (state, { payload }) => {
        state.customer = {
            name: payload.name, 
            email: payload.email, 
            streetAddress: payload.streetAddress, 
            cityAddress: payload.cityAddress, 
            postalCode: payload.postalCode, 
            province: payload.province, 
            country: payload.country, 
            phone: payload.phone, 
            cardType: payload.cardType, 
            card: payload.card, 
            cardExpiry: payload.cardExpiry
        }
        console.log(state.customer)
    }
    },
    
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
    createOrder,
    createCustomer
} = cartSlice.actions;

export default cartSlice.reducer;


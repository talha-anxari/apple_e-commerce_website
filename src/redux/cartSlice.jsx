// import { createSlice } from '@reduxjs/toolkit';

// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const itemInCart = state.find((item) => item.id === action.payload.id);
//       if (itemInCart) {
//         // If item is already in cart, increment its quantity
//         itemInCart.quantity++;
//       } else {
//         // Else, add the item to cart
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     deleteFromCart(state, action) {
//       return state.filter((item) => item.id !== action.payload.id);
//     },
//     incrementQuantity(state, action) {
//       const item = state.find((item) => item.id === action.payload);
//       if (item) {
//         item.quantity++;
//       }
//     },
//     decrementQuantity(state, action) {
//       const item = state.find((item) => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity--;
//       }
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id != action.payload.id);
        },
        incrementQuantity: (state, action) => {
            state = state.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item;
            });
        },
        decrementQuantity: (state, action) => {
            state = state.map(item => {
                if (item.quantity !== 1) {
                    if (item.id === action.payload) {
                        item.quantity--;
                    }
                }
                return item;

            })
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer
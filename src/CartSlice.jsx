import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            // Check if item already exists
            const existingItem = state.items.find((item) => item.name === name);
            if (existingItem) {
                // If it exists, increase quantity
                existingItem.quantity++;
            } else {
                // Otherwise, add as new item with quantity 1
                state.items.push({ name, image, cost, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const { name } = action.payload;
            // Filter out the item by name
            state.items = state.items.filter((item) => item.name !== name);
        },
        updateQuantity: (state, action) => {
            const { name, amount } = action.payload;
            const existingItem = state.items.find((item) => item.name === name);
            if (existingItem) {
                existingItem.quantity = amount; // directly set new quantity
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

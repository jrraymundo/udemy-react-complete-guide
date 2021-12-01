import { createSlice } from '@reduxjs/toolkit'

const cartInitialState = {
    items: [],
    totalQuantity: 0,
    changed: false
}

/**
 * Reminder: 
 * We are allowed to do mutative code (e.g. re-assignments and methods like .push())
 * because redux-toolkit handles the actual updating of the redux states in the background 
 * without directly mutating states with the help of immer library
 * 
 * DO NOT directly mutate states if using plain react-redux
 * Reducers should be pure functions,
 * so you should be returning new state objects for that
 */

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
            /**
             * We don't set changed to true here because this is used in first load of app.js
             * and we don't want sendCartData to trigger on the first load
             */
        },
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++
            state.changed = true

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            state.changed = true

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
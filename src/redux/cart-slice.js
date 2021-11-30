import { createSlice } from '@reduxjs/toolkit'
import { uiActions } from './ui-slice'

const cartInitialState = {
    items: [],
    totalQuantity: 0,
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
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++

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

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})

/**
 * This function is a THUNK
 * 
 * It's basically a function that delays an action until later.
 * 
 * In more detail, its an action creator function that does NOT return the action itself 
 * but another function which eventually returns the action.
 * 
 * We are able to use dispatch as an argument in the returned callback 
 * because redux toolkit is responsible for making that possible. 
 * We can then write the side effect or async code that will run in the thunk, 
 * and we can even dispatch more actions.
 * 
 * This THUNK can then be imported in react components to be called in useEffect() as a side effect.
 * When redux sees that a function was dispatched in your react components, 
 * then it will treat it as a THUNK automatically.
 */
export const sendCartData = cart => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })
        )
            
        /**
         * The API call needs to be created in a separate function and be called within sendCartData
         * because of how the native fetch api works
         * 
         * If using axios, this may not be necessary
         */
        const sendRequest = async () => {
            const response = await fetch(
                'https://udemy-react-redux-2bf6e-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                }
            )
    
            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }
        }

        try {
            await sendRequest()
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!'
                })
            )
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                })
            )
        }
    }
}

export const cartActions = cartSlice.actions

export default cartSlice.reducer
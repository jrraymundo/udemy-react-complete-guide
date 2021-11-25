import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter'
import authSlice from './auth'

/**
 * Redux toolkit has a configureStore function that should take a config object
 * with a reducer property.
 * 
 * The reducer property is where you pass your slice. 
 * When you have multiple slices, you can pass an object
 * and assign multiple slices via properties
 */
const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authSlice
    }
})

export default store
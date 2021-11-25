import { createSlice } from '@reduxjs/toolkit'

const counterInitialState = { 
    counter: 0,
    showCounter: true
}

/** 
 * The createSlice function from redux toolkit 
 * is an alternative and simpler way of handling the store and reducers
 * 
 * This function accepts an object as its argument
 * and the object properties should have slice name, initialState, and reducers
 * 
 * The states and reducers in a "slice" should conventionally be related to each other.
 * You would usually have multiple slices that will be combined when the store is created.
 * 
 * The reducers property is where you assign reducer methods
 * Methods created automatically receives 2 arguments which are state and action
 * 
 * Without redux toolkit, we are required to return a new state object in our reducers
 * But here we can actually 'mutate' the state directly, 
 * but that's because the state from redux toolkit has some abstraction
 * or background process working. They use a library called immer
 * which prevents us from actually mutating the actual state
 * */
const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

/**
 * To dispatch actions from our reducers created in a slice,
 * we access them via counterSlice.actions
 * e.g. counterSlice.actions.increment()
 * 
 * So from here we can export counterSlice.actions
 * to be able to dispatch actions in our react components
 * e.g. dispatch(counterActions.increment())
 * 
 * Redux toolkit basically eliminated the process of creating switch statements
 * and actions etc. when dispatching actions to the reducer
 */
export const counterActions = counterSlice.actions

export default counterSlice.reducer
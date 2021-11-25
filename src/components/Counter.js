import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

import { counterActions } from '../store/counter';

const Counter = () => {
  /** 
   * When using function components,
   * the useSelector() hook allows us to get a specific state from the redux store
   * It also automatically handles the subscription of your component to the store,
   * as well as unsubscribing to the store when the component unmounts
   */
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  
  /**
   * This hook allows us to literally dispatch actions to our reducer so it can mutate the store. 
   * No parameters required for this hook, it just returns a function 
   * that can be used to dispatch specific actions for a component
   */
  const dispatch = useDispatch()

  /**
   * When dispatching actions with redux toolkit,
   * just pass the actions object and call the specific method exported from the store
   * 
   * When a value needs to be passed, it will be received as action.payload
   * in the slice reducer. Its no longer an 'up to you' property name
   */
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div className={classes.value}>{counter}</div>
      )}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter

/**
 * connect() from react-redux can also be used
 * to be able to get state and dispatch in a functional component
 * but it's just easier to use the hooks
 * 
 * See CounterClass.js for the Class based component version
 */
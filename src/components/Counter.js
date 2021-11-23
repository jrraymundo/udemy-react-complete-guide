import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  /** 
   * When using function components,
   * the useSelector() hook allows us to get a specific state from the redux store
   * It also automatically handles the subscription of your component to the store,
   * as well as unsubscribing to the store when the component unmounts
   */
  const counter = useSelector(state => state.counter)
  
  /**
   * This hook allows us to literally dispatch actions to our reducer so it can mutate the store. 
   * No parameters required for this hook, it just returns a function 
   * that can be used to dispatch specific actions for a component
   */
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const toggleCounterHandler = () => {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
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
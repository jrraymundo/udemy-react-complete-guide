import { useSelector } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  /** 
   * When using function components,
   * the useSelector() hook allows us to get a specific state from the redux store
   * It also automatically handles the subscription of your component to the store,
   * as well as unsubscribing to the store when the component unmounts
   */
  const counter = useSelector(state => state.counter)

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

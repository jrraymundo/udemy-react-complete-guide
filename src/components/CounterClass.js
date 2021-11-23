import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Counter.module.css'

class Counter extends Component {

  incrementHandler = () => {
    this.props.increment()
  }
  
  decrementHandler = () => {
    this.props.decrement()
  }

  toggleCounterHandler = () => {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler}>Increment</button>
          <button onClick={this.decrementHandler}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    )
  }
}

/**
 * Class based components can subscribe to the redux store by using connect()
 * It requires passing 2 callbacks that are conventiaonally called 
 * mapStateToProps and mapDispatchToProps. 
 * 
 * Both callbacks will allow passing of states and dispatch actions to the class component
 */

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

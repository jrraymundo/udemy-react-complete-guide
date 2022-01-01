import React, { useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { useEffect } from 'react/cjs/react.development';

const emailReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { 
        value: action.val, 
        isValid: action.val.includes('@') 
      }
    case 'INPUT_BLUR':
      return { 
        value: state.value, 
        isValid: state.value.includes('@')
      }
    default:
      return { 
        value: '', 
        isValid: false 
      }
  }
}

const Login = (props) => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false
  })

  /**
   * Debouncing logic using useEffect and the cleanup function
   * 
   * When a user finishes typing then the timeout function will eventually run 
   * and do the validation of the user input.
   * 
   * But while the user is still typing then the timer is cleared/reset all the time
   * which stops the validation from happening unless the user is done typing
   * 
   * Note that this is possible because, the returned cleanup function runs
   * everytime that the useEffect is triggered by its dependencies (except on the first load)
   */
  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('Checking form validity!')
      setFormIsValid(
        emailState.isValid && enteredPassword.trim().length > 6
      )
    }, 500)

    return () => {
      console.log('Clean up!!!')
      clearTimeout(timerId)
    }
  }, [emailState, enteredPassword])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(
      emailState.isValid && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

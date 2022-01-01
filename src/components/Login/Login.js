import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

/**
 * The reducers can be declared outside of the React component 
 * because it does not need to access anything related to React
 */

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

const passwordReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return { 
        value: action.val, 
        isValid: action.val.trim().length > 6 
      }
    case 'INPUT_BLUR':
      return { 
        value: state.value, 
        isValid: state.value.trim().length > 6
      }
    default:
      return { 
        value: '', 
        isValid: false 
      }
  }
}

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  })

  // Destructuring with alias assignment
  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

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
        emailIsValid && passwordIsValid
      )
    }, 500)

    return () => {
      console.log('Clean up!!!')
      clearTimeout(timerId)
    }
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    /**
     * This way of updating state based on other states is actually not recommended
     * even if you're using a useReducer.
     * 
     * It still does not ensure that you're updating with the most updated state.
     * Doing this in useEffect though is a good idea because the dependency array
     * ensures that useEffect will always use the updated states 
     * 
     * setFormIsValid(
     *    emailState.isValid && passwordState.isValid
     * );
     */
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value })

    setFormIsValid(
      passwordState.isValid && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          id='email' 
          label='E-Mail' 
          type='email' 
          isValid={emailIsValid} 
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input 
          id='password' 
          label='Password' 
          type='password' 
          isValid={passwordIsValid} 
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
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

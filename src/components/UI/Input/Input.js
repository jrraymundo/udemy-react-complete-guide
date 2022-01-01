import React, { useRef, useImperativeHandle } from 'react'

import classes from './Input.module.css'

/**
 * React.forwardRef is used when our function component receives a ref from a parent 
 * that should be forwarded/used within this child component. It takes the component function as its argument
 * that has props as the 1st argument, and ref as the 2nd argument which is the ref passed from the parent
 * 
 * In this Input component we use useRef() as inputRef and pass it to the input element as we normally would do
 * But since we are using forwardRef and we want to be able to control the ref from the parent component,
 * we use useImperativehandle() hook.
 * 
 * useImperativeHandle will allow us to manipulate the ref from the parent component.
 * The 1st arg is the ref received from the parent component thru forwardRef,
 * and the 2nd arg is the callback function that should return an object.
 * Whatever method/function is included in the object can be called by the parent component
 * In this case we return a method called focus that calls activate() function which when called by the parent component,
 * will trigger focus for the input element.
 */

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef()

    const activate = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    })

    return (
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
    )
})

export default Input

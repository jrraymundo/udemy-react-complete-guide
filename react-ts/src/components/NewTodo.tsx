import { useRef, useContext } from "react"

import { TodosContext } from "../store/todos-context"
import classes from './NewTodo.module.css'

/**
 * EVENTS
 * When writing type definitions for events, use React's pre-defined types.
 * It takes care of the type definitions for built-in properties/methods of events 
 * 
 * Example:
 *  onSubmit = React.FormEvent
 *  onClick = React.MouseEvent
 *  etc.
 */

/**
 * REFS
 * When writing type definitions for refs you need to specify which HTML element it will be assigned to
 * by using Generics, and the HTML element should be based on the what interface it is from
 * which can be checked on mdn web docs if ever.
 */

/**
 * FUNCTION PROPS
 * When passing functions as props, their type definitions comes in the form of writing an arrow function
 * then specifying what arguments it uses, and what it returns
 * 
 * Note: No function props passed here now since its been replaced by context
 */

const NewTodo: React.FC = () => {
    const todosContext = useContext(TodosContext)
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        /**
         * If you look closer at the line below, it's using a punctuation mark "!"
         * TypeScript knows that refs can be undefined at some point, and in order to tell
         * it that we are sure that the ref will never be undefined at this point we add "!"
         * 
         * However, if we are unsure or know that it can indeed be undefined then we use "?"
         */
        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            // throw an error
            return
        }

        todosContext.addTodo(enteredText)
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo
import { useRef } from "react"

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
 * 
 * Initial value for refs are required.
 * 
 * If you look closer at the line below, it's using a punctuation mark "!"
 * TypeScript knows that refs can be undefined at some point, and in order to tell
 * it that we are sure that the ref will never be undefined at this point we add "!"
 * 
 * const enteredText = todoTextInputRef.current!.value
 * 
 * However, if we are unsure or know that it can be undefined then we use "?"
 */

/**
 * FUNCTION PROPS
 * When passing functions as props, their type definitions comes in the form of writing an arrow function
 * then specifying what arguments it uses, and what it returns
 */

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            // throw an error
            return
        }

        props.onAddTodo(enteredText)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo

/**
 * When writing type definitions for events, use React's pre-defined types.
 * It takes care of the type definitions for built-in properties/methods of events 
 * 
 * Example:
 *  onSubmit = React.FormEvent
 *  onClick = React.MouseEvent
 *  etc.
 */

const NewTodo = () => {
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(event)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' id='text' />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo
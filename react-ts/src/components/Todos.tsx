import TodoItem from "./TodoItem"
import Todo from "../models/todo" // The Todo model is used as a type for props.items
import classes from './Todos.module.css'

/**
 * React.FC is a Generic type provided by React for function components.
 * By using this built-in Generic, React handles
 * all the type definitions for the base props like props.children
 * 
 * We create the type definitions for the props that we pass using React.FC<{}> 
 */

const Todos: React.FC<{ items?: Todo[]; onRemoveTodo: (todoId: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items?.map(item => (
                <TodoItem 
                    key={item.id} 
                    text={item.text} 
                    onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    )
}

export default Todos
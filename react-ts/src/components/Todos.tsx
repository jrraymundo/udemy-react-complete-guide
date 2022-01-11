import { useContext } from "react"

import TodoItem from "./TodoItem"
import { TodosContext } from "../store/todos-context"
import classes from './Todos.module.css'

/**
 * React.FC is a Generic type provided by React for function components.
 * By using this built-in Generic, React handles
 * all the type definitions for the base props like props.children
 * 
 * We create the type definitions for the props that we pass using React.FC<{}> 
 */

const Todos: React.FC = () => {
    const todosContext = useContext(TodosContext)
    return (
        <ul className={classes.todos}>
            {todosContext.items?.map(item => (
                <TodoItem 
                    key={item.id} 
                    text={item.text} 
                    onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    )
}

export default Todos
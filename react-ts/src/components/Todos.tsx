import TodoItem from "./TodoItem"
import Todo from "../models/todo" // The Todo model is used as a type for props.items

/**
 * React.FC is a Generic type provided by React for function components.
 * By using this built-in Generic, React handles
 * all the type definitions for the base props like props.children
 * 
 * We create the type definitions for the props that we pass using React.FC<{}> 
 */

const Todos: React.FC<{ items?: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items?.map(item => (
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>
    )
}

export default Todos
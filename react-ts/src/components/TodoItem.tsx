import classes from './TodoItem.module.css'

/**
 * React.MouseEvent is actually optional here since we don't really need it
 */

const TodoItem: React.FC<{ text: string; onRemoveTodo: (event: React.MouseEvent) => void }> = (props) => {
    return (
        <li 
            className={classes.item}
            onClick={props.onRemoveTodo}
        >
            {props.text}
        </li>
    )
}

export default TodoItem
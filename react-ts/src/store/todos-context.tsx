import React, { useState } from 'react'
import Todo from '../models/todo'

// Reusable type definition for context object
type TodosContextObj = {
    items: Todo[];
    addTodo: (todoText: string) => void;
    removeTodo: (id: string) => void;
}

// Default values for context object
export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
})

// Context Provider that contains the todo logic
const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string): void => {
        const newTodo = new Todo(todoText)
        setTodos(prevTodos => [...prevTodos, newTodo])
    }

    const removeTodoHandler = (todoId: string): void => {
        setTodos(prevTodos => prevTodos.filter(item => item.id !== todoId))
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider
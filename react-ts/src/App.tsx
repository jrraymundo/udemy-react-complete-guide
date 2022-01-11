import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string): void => {
    const newTodo = new Todo(todoText)
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const removeTodoHandler = (todoId: string): void => {
    setTodos(prevTodos => prevTodos.filter(item => item.id !== todoId))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;

import React from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import FilterTodos from './components/FilterTodos';

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm />
      <FilterTodos />
      <TodoList />
    </div>
  );
}

export default App;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../features/todoSlice';
import Todo from './Todo';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = id => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2>Todos</h2>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={handleToggleTodo}
          deleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

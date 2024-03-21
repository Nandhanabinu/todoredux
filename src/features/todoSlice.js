import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    setVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    },
  },
});

export const addTodo = todoSlice.actions.addTodo;
export const toggleTodo = todoSlice.actions.toggleTodo;
export const deleteTodo = todoSlice.actions.deleteTodo;
export const setVisibilityFilter = todoSlice.actions.setVisibilityFilter;

export default todoSlice.reducer;



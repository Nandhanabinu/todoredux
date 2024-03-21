import React from 'react';
import { useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../features/todoSlice';

const FilterTodos = () => {
  const dispatch = useDispatch();

  const handleFilter = filter => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <div>
      <button onClick={() => handleFilter('SHOW_ALL')}>All</button>
      <button onClick={() => handleFilter('SHOW_COMPLETED')}>Completed</button>
      <button onClick={() => handleFilter('SHOW_INCOMPLETE')}>Incomplete</button>
    </div>
  );
};

export default FilterTodos;

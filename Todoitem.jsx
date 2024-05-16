import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  const [filter, setFilter] = useState('all');

  // Function to filter todos based on completion status
  const filteredTodos = () => {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    }
  };

  // Function to change filter
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('active')}>Active</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
      </div>
      <ul>
        {filteredTodos().map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      {todos.length === 0 && <p>No todos yet. Add some todos!</p>}
    </div>
  );
};

export default TodoList;

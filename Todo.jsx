import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  // Function to count the number of completed todos
  const countCompletedTodos = () => {
    return todos.filter(todo => todo.completed).length;
  };

  // Function to calculate the percentage of completed todos
  const calculateCompletionPercentage = () => {
    if (todos.length === 0) {
      return 0;
    }
    const completedCount = countCompletedTodos();
    return Math.round((completedCount / todos.length) * 100);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      {todos.length === 0 && <p>No todos yet. Add some todos!</p>}
      {todos.length > 0 && (
        <div>
          <p>
            {countCompletedTodos()} out of {todos.length} completed
          </p>
          <p>Completion: {calculateCompletionPercentage()}%</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;

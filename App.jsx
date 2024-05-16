import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage on initial render
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Toggle todo completion status
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Count completed todos
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
      <div className="footer">
        <p>{completedCount} completed</p>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
};

export default App;

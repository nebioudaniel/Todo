// App.js
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

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;

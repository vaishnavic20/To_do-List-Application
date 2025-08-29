import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleAddTodo = (newTodo) => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Todo App</h1>
      </header>
      <main className="app-main">
        <AddTodo onAdd={handleAddTodo} />
        <TodoList key={refresh} />
      </main>
    </div>
  );
}

export default App;
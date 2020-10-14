import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

// const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App(props) {

  return (
      <div className="container">
        
        <header>
          <h1 className="text-center mb-4">Todos</h1>
        </header>

        <hr />

        <div className="m-4">
          <TodoForm />
        </div>

        <hr />

        <TodoList />

      </div>
  )
}

export default App;

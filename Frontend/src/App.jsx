import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:3000/api/todo')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      <div>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;

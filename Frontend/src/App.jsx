import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/allTodos")
      .then((response) => {
        // If response.data is an array, set todos directly
        // If response.data is an object, convert it to an array
        // console.log(Array.isArray(response.data)
        
        setTodos(
          // Array.isArray(response.data) ? response.data : [response.data]
          [response.data]
        );
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount
  // console.log(todos);
  return (
    <>
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
      </div>
    </>
  );
}

export default App;

import React, { useState, useRef } from "react";
import ToDoList from "./ToDoList";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name, complete: false}]
    })
    console.log('name')
    todoNameRef.current.value = null
  }

  return (
    <>
      <ToDoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;

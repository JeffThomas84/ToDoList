import React, { useState, useRef, useEffect } from 'react';
import ToDoList from "./ToDoList";
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos)
}, [])  

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])

function toggleTodo(id) {
  const newTodos = [...todos];
  const todo = newTodos.find(todo => todo.id === id);
  todo.complete = !todo.complete;

  newTodos.sort((a, b) => {
    return b.complete ? -1 : 1
  });
  
  setTodos(newTodos)
}

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name, complete: false}]
    })
    console.log('name')
    todoNameRef.current.value = null
  }

  function handleKeypress(e) {
    if (e.which === 13) {
      handleAddTodo();
    }
  }
function handleClearTodos() {
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

  return (
    <PageStyle>
      <Title>Jeffrey's Grocery List!</Title>
      <RightSytle>{todos.filter(todo => !todo.complete).length} left to buy</RightSytle>
      <button onClick={handleClearTodos} >Clear Completed</button>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <ActionArea>
        <p>Add Food</p>
        <input onKeyPress={handleKeypress} ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Submit</button>
      </ActionArea>
    </PageStyle>
  )
}

export default App;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  color: blue;
  font-weight: bold;
  text-decoration: underline;
  padding: 25px 0px;
 
`;

const PageStyle = styled.div`
  box-shadow: rgba(0,0,0,0.8) 5px 5px 15px; 
  max-width: 500px;
  background: #e6e7e3;
`;

const ActionArea = styled.div`
  padding: 30px 0px 30px 30px;
  }
`;

const RightSytle = styled.div`
  text-align: right;
  padding: 0px 50px;
`;
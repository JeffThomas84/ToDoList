import React from 'react'
import Todo from './Todo'

export default function ToDoList({ todos, toggleTodo }) {
 
    return (
        <div>
            {todos.length === 0 && <p style={{textAlign:'center'}}>You have nothing to buy. Add food below.</p>}
            {todos.length > 0 && todos.map(todo => {
                return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
            })}
        </div>
    )
}

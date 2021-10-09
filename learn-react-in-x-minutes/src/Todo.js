import React from 'react'

export default function Todo({ todo }) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.compete} />
            {Todo.name}
            </label>
        </div>
    )
}

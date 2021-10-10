import React from 'react';
import styled from 'styled-components';

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
    return (
        <TodoStyle>
            <label>
                <input type="checkbox" defaultChecked={todo.complete} onChange={handleTodoClick} />
                <TextWrap>{todo.name}</TextWrap>
            </label>
        </TodoStyle>
    )
}

const TodoStyle = styled.div`
  font-size: default;
  border-bottom: 1px solid blue;
  padding: 5px;

  input[type=checkbox]{
      margin: 3px 10px;
      display: inline-block;
      width: 20px;
      vertical-align: top;
  }
`;

const TextWrap = styled.div`
    display: inline-block;
    width: calc(100% - 40px);
`;
import React from 'react';

const Todo = ({ todo, deleteTodo, markDone, idx }) => (
  <li style={{ textDecoration: todo.done && 'line-through' }}>
    <span onClick={() => markDone(idx)}>{todo.value}</span>
    <button onClick={() => deleteTodo(idx)}>X</button>
  </li>
);

export default Todo;

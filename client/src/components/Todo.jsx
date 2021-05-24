import React from 'react';

const Todo = ({ children }) => (
  <li style={{ textDecoration: 'none' }}>
    <span onClick={() => {}}>{children}</span>
    <button onClick={() => {}}>X</button>
  </li>
);

export default Todo;

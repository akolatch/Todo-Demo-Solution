import React from 'react';
import Todo from './Todo';

function TodoList({ todos, markDone, remove }) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <Todo
          i={i}
          todo={todo}
          key={`${todo.value}${i}`}
          done={markDone}
          remove={remove}
        />
      ))}
    </ul>
  );
}

export default TodoList;

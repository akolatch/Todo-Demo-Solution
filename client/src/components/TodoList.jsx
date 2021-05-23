import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, markDone }) => (
  <ul>
    {todos.map((todo, i) => (
      <Todo
        key={`${todo.value}${i}`}
        idx={i}
        todo={todo}
        deleteTodo={deleteTodo}
        markDone={markDone}
      />
    ))}
  </ul>
);

export default TodoList;

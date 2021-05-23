import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, markDone }) => (
  <ul>
    {todos.map((todo, i) => {
      console.log(todo);
      return (
        <Todo
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          markDone={markDone}
        />
      );
    })}
  </ul>
);

export default TodoList;

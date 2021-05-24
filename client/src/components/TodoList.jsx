import React from 'react';
import Todo from './Todo';

function TodoList({ todos, markDone, remove }) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <Todo
          i={i}
          todo={todo}
          /**
           * when mapping of items in a list React request that we give
           * each return component a unique key. It best practice to NOT use the index
           * however in this case it is the only unique vale we have access to
           * if we don't add a key react will give a warning in the console but
           * it is not a breaking error
           */
          key={i}
          done={markDone}
          remove={remove}
        />
      ))}
    </ul>
  );
}

export default TodoList;

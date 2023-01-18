import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiTickOutline } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      
      <div key={todo.id} style={{ userSelect: "none" }}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiTickOutline
          onClick={() => completeTodo(todo.id)}
          className='checked-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;

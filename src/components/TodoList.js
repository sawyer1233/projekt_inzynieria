import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {

    const[todos,settodo] = useState([]);
    const dodajtodo = todo =>{
        if (!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const nowetodo = [todo, ...todos]

        settodo(nowetodo)
        console.log(...todos);
    }

  return (
    <div>
      <h1>ESSSunia</h1>
      <TodoForm  onSubmit={dodajtodo} />
    </div>
  );
}

export default TodoList

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const weekday = ["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"];
  let day = weekday[current.getDay()];
  let number = todos.length;
  let numberComplete = 0;
  todos.forEach(todo => {
      if(todo.isComplete){
        numberComplete++;
      }
  });
  let result = Math.round(numberComplete/number*100);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };


  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Plany na dzisiaj:</h1>
      <h2>{day}, {date}</h2>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
      <h2>Wykonałeś {result} % obowiązków na dziś.</h2>  
    </>
  );
}

export default TodoList;

import React from 'react'
import { useContext } from 'react'
import { TodosContext } from '../contexts/TodosContextProvider'

function ToDoList() {

  let {todos,addNewTodo} =useContext(TodosContext);
  
  return (
    <div>
      <h1>ToDoList</h1>
      {
      todos.map((task,index)=><h3 key={index}className='text-primary'>
    {task}</h3>)
    }
    </div>
  )
}

export default ToDoList 
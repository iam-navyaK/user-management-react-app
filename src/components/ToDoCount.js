import React from 'react'
import { TodosContext } from '../contexts/TodosContextProvider';
import { useContext } from 'react';
import ApiContextProvider from '../contexts/ApiContextProvider';
import Test1 from '../contexts/Test1';

function ToDoCount() {
  let {todos,addNewTodo} =useContext(TodosContext);
  
  return (
    <div>
      <p className='text-danger dispaly-3'>{todos.length}</p>

      {/*api context is provided to test1*/}
      <ApiContextProvider>
        <Test1/>
        </ApiContextProvider>
      
      </div>
  )
}

export default ToDoCount 
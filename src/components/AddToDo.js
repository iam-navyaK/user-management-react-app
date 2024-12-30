import React from 'react'
import {useForm} from 'react-hook-form'
import { useContext } from 'react'
import { TodosContext } from '../contexts/TodosContextProvider'

function AddToDo() {
//get state from context
let {todos,addNewTodo} =useContext(TodosContext);


  let {register,handleSubmit,formState:{errors}}=useForm()
  let formSubmit=(todoObj)=>{
    console.log(todoObj)
    addNewTodo(todoObj.newtodo)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
      <div>
      <label>
        enter new task  
      </label>
      <input type="text" className='form-control'{...register("newtodo")}/>
      </div>
      <button type='submit' className='btn btn-success'>ADD</button>
      </form>
    </div>
  )
}
 
export default AddToDo
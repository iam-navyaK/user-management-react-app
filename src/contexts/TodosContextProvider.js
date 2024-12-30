import {createContext, useState} from 'react';

//create context
export const TodosContext= createContext();
//create context provider
function TodosContextProvider({children}){
  //state 
  let [todos,setTodos]=useState([])
   
   let addNewTodo=(todo)=>{
    setTodos([...todos,todo])
  }
  
  return(
<TodosContext.Provider value={{todos,addNewTodo}}>
{children}

</TodosContext.Provider>
  )
}
  export default TodosContextProvider;  
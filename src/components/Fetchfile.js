import { useEffect,useState } from "react";

function Fetchfile(){
    let [todos,setTodos]=useState([])
    useEffect(()=>{
      //make HTTP request
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res=>res.json())
      .then(todosData=>setTodos(todosData))
      .catch(err=>console.log("error is",err))
    },[]);

    return (
        <div className="container">
       <h2>Fetch data</h2>
       {/*table*/}
       <table>
        <thead>
            <tr>
                <th>userid</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
            </tr>
        </thead>
        <tbody>
            {todos.map((todoObj)=>(
                <tr key={todoObj.id}>
                    <td>{todoObj.userId}</td>
                    <td>{todoObj.id}</td>
                    <td>{todoObj.title}</td>
                    <td>{todoObj.completed?"yes":"no"}</td>
                </tr>
               
            ))}
        </tbody>
       </table>
        </div>
    )
}
export default Fetchfile;